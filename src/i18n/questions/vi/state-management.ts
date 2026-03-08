import type { QuestionTranslationMap } from '../types'

export const stateManagementVi: QuestionTranslationMap = {
  'sm-001': {
    question:
      'Trong Redux Toolkit, hàm nào được dùng để tạo một slice chứa cả reducer và action cùng nhau?',
    explanation:
      'createSlice() tự động tạo action creator và action type từ các hàm reducer, kết hợp những gì trước đây cần dùng riêng createAction và createReducer.',
    options: [
      'createReducer()',
      'createSlice()',
      'createAction()',
      'createStore()',
    ],
  },
  'sm-002': {
    question:
      'Zustand store có thể được sử dụng bên ngoài React component mà không cần thiết lập đặc biệt.',
    explanation:
      'Zustand store cung cấp trực tiếp phương thức getState() và subscribe(), cho phép sử dụng bên ngoài React. Bạn có thể gọi store.getState() hoặc store.subscribe() trong các module JS/TS thuần.',
  },
  'sm-003': {
    question:
      'Thời gian cache mặc định (staleTime) của TanStack Query là bao lâu?',
    explanation:
      'TanStack Query mặc định staleTime là 0, nghĩa là dữ liệu được coi là cũ ngay sau khi fetch. Điều này gây ra refetch khi focus cửa sổ và khi mount component theo mặc định. Bạn phải đặt staleTime rõ ràng để kiểm soát hành vi cache.',
    options: ['0 mili giây', '30 giây', '5 phút', '10 phút'],
  },
  'sm-004': {
    question:
      'Zustand store này trả về giá trị gì khi count bằng 0 và increment được gọi?',
    explanation:
      'Gọi increment() kích hoạt cập nhật state thông qua set(). Vì set sử dụng dạng hàm (state) => ..., nó đọc đúng state hiện tại. getState() sau khi cập nhật trả về { count: 1 }.',
    answer: '1',
  },
  'sm-005': {
    question:
      'Trong Redux Toolkit, createAsyncThunk trả về một object với ba loại action. Bộ nào đúng?',
    explanation:
      'createAsyncThunk tạo ra ba loại action theo vòng đời: pending (trước khi promise resolve), fulfilled (khi thành công), và rejected (khi thất bại). Chúng có thể truy cập qua thunk.pending, thunk.fulfilled, thunk.rejected.',
    options: [
      'pending, loading, fulfilled',
      'pending, fulfilled, rejected',
      'start, success, failure',
      'request, response, error',
    ],
  },
  'sm-006': {
    question: 'Đoạn code RTK slice này in ra gì khi chạy?',
    explanation:
      'RTK tự động tạo chuỗi action type theo định dạng "sliceName/reducerName". Vì tên slice là "counter" và reducer là "doubled", type sẽ là "counter/doubled".',
    answer: 'counter/doubled',
  },
  'sm-007': {
    question:
      'Trong Jotai, sự khác biệt giữa atom() và atomWithStorage() là gì?',
    explanation:
      'atomWithStorage (từ jotai/utils) tự động đồng bộ state của atom với storage backend (mặc định là localStorage). atom() thông thường chỉ giữ state trong bộ nhớ và reset khi tải lại trang.',
    options: [
      'atomWithStorage là bất đồng bộ, atom là đồng bộ',
      'atomWithStorage tự động lưu state vào localStorage/sessionStorage',
      'atom() hỗ trợ derived state, atomWithStorage thì không',
      'atomWithStorage yêu cầu Provider, atom thì không',
    ],
  },
  'sm-008': {
    question:
      'Hook nào của TanStack Query nên được dùng để thực hiện thao tác POST/PUT/DELETE?',
    explanation:
      'useMutation được thiết kế cho các thao tác có side-effect (POST, PUT, DELETE). Không giống useQuery chạy tự động, useMutation cung cấp hàm mutate() để gọi chủ động. Nó cũng cung cấp các callback onSuccess, onError, onSettled.',
    options: [
      'useQuery với enabled: false',
      'useMutation',
      'useInfiniteQuery',
      'useFetch',
    ],
  },
  'sm-009': {
    question:
      'Định nghĩa endpoint RTK Query này có một lỗi. Hãy xác định và giải thích.',
    explanation:
      'builder.query() dành cho thao tác đọc (GET). builder.mutation() dành cho thao tác ghi (POST, PUT, PATCH, DELETE). Dùng builder.query() cho PUT sẽ tạo hook sai (useUpdateUserQuery thay vì useUpdateUserMutation) và thiếu các tính năng dành riêng cho mutation như invalidatesTags.',
    answer:
      'updateUser nên dùng builder.mutation(), không phải builder.query()',
  },
  'sm-010': {
    question:
      'Trong TanStack Query, đặt staleTime: Infinity nghĩa là dữ liệu sẽ không bao giờ được tự động refetch.',
    explanation:
      'staleTime: Infinity đánh dấu dữ liệu luôn fresh, ngăn việc refetch tự động khi focus cửa sổ, remount component, hoặc kết nối lại mạng. Dữ liệu vẫn có thể được refetch thủ công qua queryClient.invalidateQueries().',
  },
  'sm-011': {
    question:
      'Mẫu signals trong quản lý state frontend là gì và framework hiện đại nào đã phổ biến hóa nó?',
    explanation:
      'Signals là các primitive phản ứng chi tiết (vùng chứa giá trị) tự động theo dõi dependency. Khi một signal thay đổi, chỉ các phép tính/DOM phụ thuộc vào nó được cập nhật - không cần so sánh virtual DOM. Mặc dù khái niệm này có từ Knockout.js (2010), SolidJS đã phổ biến hóa mẫu signals hiện đại. Preact, Angular 16+, và Vue 3 (refs tương tự signal) cũng áp dụng các khái niệm tương tự.',
    options: [
      'Mẫu pub/sub cho sự kiện; Angular',
      'Các primitive phản ứng chi tiết chỉ cập nhật những phép tính phụ thuộc mà không render lại toàn bộ cây component; SolidJS',
      'Mẫu luồng dữ liệu một chiều; Flux',
      'Mẫu cập nhật state bất biến; Redux',
    ],
  },
  'sm-012': {
    question:
      'Trong XState v5, cách đúng để định nghĩa state machine với guarded transition là gì?',
    explanation:
      'XState v5 đổi tên "cond" thành "guard" trong phiên bản viết lại v5. Transition giờ dùng guard: "guardName" hoặc guard: ({ context, event }) => boolean. Cú pháp cond: cũ từ v4 không còn được dùng trong v5.',
    options: [
      'Dùng thuộc tính cond: trên transition',
      'Dùng thuộc tính guard: trên transition',
      'Dùng thuộc tính when: trên transition',
      'Dùng thuộc tính if: trên transition',
    ],
  },
  'sm-013': {
    question: 'Đoạn code Jotai derived atom này cho kết quả gì?',
    explanation:
      'totalAtom là derived atom (chỉ đọc) được tính bằng price * (1 + tax) = 100 * (1 + 0.2) = 100 * 1.2 = 120. Derived atom trong Jotai nhận hàm get để đọc các atom khác và tính lại mỗi khi dependency thay đổi.',
    answer: '120',
  },
  'sm-014': {
    question:
      'Khi dùng RTK Query, cơ chế providesTags và invalidatesTags thực hiện điều gì?',
    explanation:
      'providesTags trên query khai báo cache tag mà nó sở hữu. invalidatesTags trên mutation khai báo tag nào bị vô hiệu hóa khi thành công. RTK Query sau đó tự động refetch tất cả query có providesTags trùng với các tag bị vô hiệu hóa, giữ UI đồng bộ mà không cần cập nhật cache thủ công.',
    options: [
      'Thêm thẻ meta HTML cho SEO khi query chạy',
      'Cho phép tự động vô hiệu hóa cache: khi mutation vô hiệu hóa một tag, tất cả query cung cấp tag đó sẽ được tự động refetch',
      'Thêm tag kiểu TypeScript cho các hook được tạo ra',
      'Đánh dấu query là deprecated để loại bỏ trong tương lai',
    ],
  },
  'sm-015': {
    question:
      'Mẫu Zustand slice này có lỗi phổ biến gây stale closure. Hãy tìm lỗi.',
    explanation:
      'Sau lệnh set() đầu tiên, lệnh set() thứ hai nên dùng mảng items đã cập nhật. Cách sửa là gộp lại: set((state) => ({ items: [...state.items, item], count: state.items.length + 1 })). Gọi set() hai lần có nguy cơ race condition và count đọc items.length cũ từ lần set đầu.',
    answer:
      'Cập nhật count nên dùng set() với callback để đọc state mới nhất, hoặc gộp cả hai cập nhật vào một lệnh set().',
  },
  'sm-016': {
    question:
      'Mục đích của middleware subscribeWithSelector trong Zustand là gì?',
    explanation:
      'subscribeWithSelector cho phép dùng mẫu store.subscribe(selector, callback), trong đó callback chỉ được kích hoạt khi phần state được chọn thay đổi, tránh re-render không cần thiết. Nếu không có nó, subscribe() sẽ kích hoạt mỗi khi bất kỳ state nào thay đổi.',
    options: [
      'Để subscribe vào Redux DevTools',
      'Để cho phép subscribe vào các phần cụ thể của state và chỉ kích hoạt callback khi những phần đó thay đổi',
      'Để thêm hỗ trợ Immer cho cập nhật bất biến',
      'Để lưu state vào bộ nhớ ngoài',
    ],
  },
  'sm-017': {
    question:
      'Trong ứng dụng quy mô lớn, sự khác biệt kiến trúc chính giữa Zustand và Jotai ảnh hưởng đến việc chọn thư viện nào?',
    explanation:
      'Zustand theo mô hình kiểu flux với một store cho mỗi domain. Jotai theo mô hình atomic lấy cảm hứng từ Recoil, trong đó state được chia thành các atom nhỏ kết hợp với nhau. Zustand phù hợp cho logic domain phức tạp với nhiều phụ thuộc lẫn nhau. Jotai phù hợp cho các state atom độc lập, riêng biệt (ví dụ: chọn từng hàng trong bảng).',
    options: [
      'Zustand dùng từ trên xuống (một store, selector trích xuất phần); Jotai dùng từ dưới lên (state nguyên tử, kết hợp các phần nhỏ). Chọn Zustand cho store theo domain, Jotai cho state UI động/độc lập cao.',
      'Zustand hỗ trợ TypeScript, Jotai thì không',
      'Jotai yêu cầu Context Provider, Zustand hoàn toàn không cần React',
      'Zustand tốt hơn cho state bất đồng bộ, Jotai chỉ xử lý state đồng bộ',
    ],
  },
  'sm-018': {
    question:
      'Khái niệm nào trong XState cho phép mô hình hóa các state song song, nơi nhiều vùng của machine hoạt động đồng thời?',
    explanation:
      'Parallel state (type: "parallel") cho phép machine ở nhiều state cùng lúc - như trình soạn thảo văn bản đồng thời ở trạng thái "bold" và "italic". Mỗi vùng song song duy trì state riêng biệt, cho phép mô hình hóa hành vi đồng thời phức tạp.',
    options: [
      'Nested state',
      'History state',
      'Parallel state (type: "parallel")',
      'Final state',
    ],
  },
  'sm-019': {
    question:
      'Khi nào bạn nên chọn mẫu optimistic update của TanStack Query thay vì invalidation thông thường?',
    explanation:
      'Optimistic update cập nhật cache ngay với kết quả mong đợi trước khi server xác nhận, làm UI cảm giác tức thì. Nếu mutation thất bại, bạn rollback bằng context trả về từ onMutate. Mẫu này lý tưởng cho tương tác mạng xã hội (like/unlike), chỉnh sửa inline, và sắp xếp lại thứ tự khi độ trễ dễ nhận thấy.',
    options: [
      'Khi bạn cần cập nhật real-time qua WebSocket',
      'Khi bạn muốn UI phản ánh ngay kết quả mutation trước khi server phản hồi, rollback khi lỗi để tăng hiệu suất cảm nhận',
      'Khi API call mất ít hơn 100ms',
      'Khi bạn cần gộp nhiều mutation lại với nhau',
    ],
  },
  'sm-020': {
    question:
      'Actor model trong XState là gì và nó khác state machine đơn giản như thế nào?',
    explanation:
      'Trong actor model của XState, mỗi actor là đơn vị tính toán độc lập (machine, promise, observable, hoặc callback) giao tiếp qua tin nhắn bất đồng bộ. Actor có thể sinh ra actor con và gửi event cho nhau, cho phép điều phối phức tạp như luồng thanh toán phối hợp các actor thanh toán, kho hàng, và thông báo một cách độc lập.',
    options: [
      'Actor là UI component; state machine là business logic',
      'Actor là các state machine độc lập giao tiếp qua truyền tin nhắn (gửi/nhận event), cho phép kết hợp modular các workflow bất đồng bộ phức tạp',
      'Actor xử lý side effect; state machine chỉ xử lý UI state',
      'Actor đã bị loại bỏ trong XState v5 và thay bằng hook',
    ],
  },
  'sm-021': {
    question:
      'Điều gì xảy ra khi TanStack Query mutation này chạy thành công?',
    explanation:
      'invalidateQueries đánh dấu các query khớp là stale và kích hoạt refetch nền cho bất kỳ query nào đang được theo dõi (có subscriber đang hoạt động). Điều này giữ danh sách todo đồng bộ với server sau khi thêm mục mới.',
    answer:
      'Request POST được thực hiện, sau đó tất cả query có queryKey bắt đầu bằng ["todos"] được đánh dấu stale và refetch nếu đang hoạt động.',
  },
  'sm-022': {
    question:
      'Trong Redux Toolkit, Immer được dùng ngầm trong reducer. Điều này cho phép làm gì?',
    explanation:
      'RTK dùng Immer trong createSlice và createReducer, cho phép bạn viết state.value = newValue trực tiếp trong reducer. Immer theo dõi các thay đổi và tạo ra object state bất biến mới, giúp code dễ đọc kiểu mutation mà không thực sự thay đổi state.',
    options: [
      'Hỗ trợ reducer bất đồng bộ',
      'Viết cú pháp "mutation" trong reducer nhưng giữ state bất biến',
      'Tự động tạo action creator',
      'Suy luận kiểu TypeScript cho state',
    ],
  },
  'sm-023': {
    question:
      'Tính năng nào của TanStack Query cho phép giữ dữ liệu trước đó hiển thị trong khi dữ liệu mới đang tải cho query có phân trang?',
    explanation:
      'Trong TanStack Query v4, keepPreviousData: true ngăn UI quay lại trạng thái loading khi query key thay đổi (ví dụ: số trang). Trong v5 tính năng này được đổi tên thành placeholderData: keepPreviousData (import từ thư viện). Thiết yếu cho trải nghiệm phân trang mượt mà.',
    options: [
      'keepPreviousData (v4) / placeholderData: keepPreviousData (v5)',
      'staleTime: Infinity',
      'refetchOnMount: false',
      'suspense: true',
    ],
  },
  'sm-024': {
    question:
      'Hook useAtom của Jotai trả về cả giá trị hiện tại và hàm setter, tương tự useState của React.',
    explanation:
      'useAtom(myAtom) trả về [value, setValue] giống như useState. Với derived atom chỉ đọc, useAtomValue() chỉ trả về giá trị. Với atom chỉ ghi, useSetAtom() chỉ trả về setter. Thiết kế API này cố ý giống useState để dễ làm quen.',
  },
  'sm-025': {
    question:
      'Mẫu khuyến nghị để kết hợp server state (TanStack Query) với client state (Zustand) trong ứng dụng lớn là gì?',
    explanation:
      'Mẫu phân tách trách nhiệm: TanStack Query quản lý toàn bộ server state bất đồng bộ (fetching, caching, đồng bộ). Zustand quản lý UI state tạm thời (modal đang mở, hàng được chọn, giá trị bộ lọc, bước wizard). Điều này tránh cache trùng lặp, tránh lỗi dữ liệu cũ, và giữ mỗi công cụ làm đúng thế mạnh.',
    options: [
      'Lưu mọi thứ trong Zustand và dùng queryClient chỉ làm cache',
      'Giữ server state hoàn toàn trong TanStack Query cache; dùng Zustand cho UI/client state (bộ lọc, modal, lựa chọn); không bao giờ nhân bản dữ liệu server trong Zustand',
      'Dùng Redux Toolkit cho cả server và client state qua RTK Query',
      'Lưu dữ liệu server trong React context và client state trong Zustand',
    ],
  },
  'sm-026': {
    question:
      'Middleware persist của Zustand làm gì và mặc định lưu state ở đâu?',
    explanation:
      'Middleware persist từ zustand/middleware bao bọc store và tự động serialize state vào localStorage (mặc định) bằng JSON.stringify/parse. Bạn có thể đổi storage engine sang sessionStorage, IndexedDB, hoặc adapter tùy chỉnh qua tùy chọn storage. Lưu một phần state có thể thực hiện qua tùy chọn partialize.',
    options: [
      'Đồng bộ state với cơ sở dữ liệu từ xa',
      'Serialize và lưu state của store vào localStorage mặc định, phục hồi khi tải trang',
      'Lưu state giữa các lần render React bằng useRef',
      'Chỉ lưu state vào sessionStorage',
    ],
  },
  'sm-027': {
    question:
      'Giá trị nào được in ra khi store Zustand dùng middleware devtools này được kiểm tra?',
    explanation:
      'Middleware devtools kết nối store với Redux DevTools Extension để debug. Tham số thứ ba của set() ("addBear") trở thành tên action hiển thị trong DevTools. Tùy chọn name ("BearStore") đặt nhãn cho store. Logic state không thay đổi - bears tăng lên 1.',
    answer: '1',
  },
  'sm-028': {
    question:
      'Middleware immer của Zustand đơn giản hóa cập nhật state lồng nhau như thế nào?',
    explanation:
      'Middleware immer từ zustand/middleware bao bọc mỗi lệnh set() trong produce() của Immer. Thay vì cập nhật dùng nhiều spread như set(s => ({ ...s, user: { ...s.user, name: "Alice" } })), bạn viết set(s => { s.user.name = "Alice" }). Immer chặn mutation và tạo ra state bất biến mới.',
    options: [
      'Nó tự động deep-clone state trước mỗi lần cập nhật',
      'Nó bao bọc lệnh set() bằng produce của Immer, cho phép mutation trực tiếp draft state và chuyển đổi thành cập nhật bất biến ngầm',
      'Nó thêm chức năng undo/redo cho store',
      'Nó thay thế selector bằng cách tự động memo hóa tất cả các phần state',
    ],
  },
  'sm-029': {
    question:
      'Mẫu slices của Zustand là gì và tại sao nó được dùng trong ứng dụng lớn?',
    explanation:
      'Mẫu slices định nghĩa mỗi domain là một slice factory: const createBearSlice = (set) => ({ bears: 0, addBear: () => set(s => ({ bears: s.bears + 1 })) }). Sau đó kết hợp: create((...a) => ({ ...createBearSlice(...a), ...createFishSlice(...a) })). Điều này giữ store lớn modular mà không cần tách thành nhiều store riêng biệt.',
    options: [
      'Nó chia store thành nhiều file được tải lazy',
      'Nó kết hợp nhiều định nghĩa store từng phần (slice) thành một store duy nhất bằng mẫu factory function, giữ state và action liên quan cùng chỗ trong khi dùng chung một store instance',
      'Nó giống createSlice của Redux Toolkit nhưng cho Zustand',
      'Nó cho phép hydrate store phía server bằng cách tách client và server state',
    ],
  },
  'sm-030': {
    question:
      'Trong Jotai, async atom là gì và nó tích hợp với React Suspense như thế nào?',
    explanation:
      'Trong Jotai, nếu hàm read của atom trả về Promise, useAtomValue() tự động suspend component. Ví dụ: const dataAtom = atom(async (get) => { const res = await fetch("/api/data"); return res.json() }). Bọc component trong <Suspense fallback={...}> và Jotai xử lý phối hợp bất đồng bộ. Không cần quản lý trạng thái loading thủ công.',
    options: [
      'Atom dùng setTimeout để cập nhật trì hoãn',
      'Atom có hàm read trả về Promise; khi dùng trong component, nó suspend component cho đến khi promise resolve, tích hợp tự nhiên với React Suspense',
      'Atom cần useEffect để kích hoạt fetch dữ liệu',
      'Atom lưu trong Web Worker để tính toán không chặn',
    ],
  },
  'sm-031': {
    question:
      'Sự khác biệt giữa staleTime và gcTime (trước đây là cacheTime) trong TanStack Query là gì?',
    explanation:
      'staleTime: dữ liệu "fresh" trong khoảng thời gian này - không refetch nền. Sau staleTime, dữ liệu "stale" và đủ điều kiện refetch. gcTime (trước là cacheTime trong v4): sau khi query không hoạt động (không có subscriber), cache entry được giữ trong gcTime trước khi bị xóa. gcTime mặc định là 5 phút. Query có thể stale nhưng vẫn trong cache.',
    options: [
      'Chúng là cùng một tùy chọn được đổi tên giữa các phiên bản',
      'staleTime kiểm soát thời gian dữ liệu được coi là fresh (không refetch); gcTime kiểm soát thời gian dữ liệu query không hoạt động ở trong bộ nhớ trước khi bị thu gom rác',
      'staleTime cho mutation; gcTime cho query',
      'gcTime kiểm soát timeout mạng; staleTime kiểm soát thời gian trạng thái loading UI',
    ],
  },
  'sm-032': {
    question:
      'Infinite query TanStack Query này có lỗi ngăn phân trang. Hãy tìm lỗi.',
    explanation:
      'useInfiniteQuery yêu cầu getNextPageParam: (lastPage, allPages) => nextCursor | undefined. Nó nhận trang cuối được fetch và tất cả các trang, phải trả về giá trị pageParam tiếp theo (hoặc undefined để báo hết trang). Không có nó, fetchNextPage() không biết truyền gì làm pageParam. Ví dụ sửa: getNextPageParam: (last) => last.nextPage ?? undefined.',
    answer:
      'Thiếu getNextPageParam - TanStack Query không thể xác định con trỏ trang tiếp theo nếu không có nó.',
  },
  'sm-033': {
    question:
      'Prefetching với prefetchQuery của TanStack Query khác gì so với fetch query thông thường?',
    explanation:
      'queryClient.prefetchQuery({ queryKey, queryFn }) fetch và cache dữ liệu mà không cần component subscribe. Các mẫu phổ biến: prefetch khi hover route (Link onMouseEnter), prefetch trong server component trước khi stream đến client (mẫu dehydrate/HydrationBoundary của Next.js), hoặc prefetch trang tiếp theo khi đang render trang hiện tại. Khi component mount, dữ liệu đã trong cache - render tức thì.',
    options: [
      'prefetchQuery chỉ chạy trên server; useQuery chạy trên client',
      'prefetchQuery điền cache chủ động (trước khi component mount) để component render với dữ liệu ngay thay vì hiển thị trạng thái loading - hữu ích cho hover-prefetch và hydration phía server',
      'prefetchQuery bỏ qua cache và luôn fetch dữ liệu mới',
      'prefetchQuery chỉ dành cho infinite query',
    ],
  },
  'sm-034': {
    question:
      'Đoạn code RTK Query này tạo ra gì và những hook nào khả dụng?',
    explanation:
      'RTK Query tự động tạo hook từ định nghĩa endpoint. Query endpoint có hook use[Name]Query với state cache/loading/error. Mutation endpoint có hook use[Name]Mutation trả về [mutate, result]. Hệ thống tag liên kết chúng: createPost vô hiệu hóa tag "Post", khiến useGetPostsQuery tự động refetch giữ danh sách luôn mới.',
    answer:
      'Hai hook: useGetPostsQuery() để fetch bài viết (tự động refetch khi tag Post bị vô hiệu hóa), và useCreatePostMutation() để tạo bài viết (vô hiệu hóa tag Post khi thành công, kích hoạt refetch getPosts).',
  },
  'sm-035': {
    question:
      'Valtio là gì và nó khác Zustand như thế nào trong cách tiếp cận state?',
    explanation:
      'Valtio bọc state trong Proxy: const state = proxy({ count: 0 }). Bạn thay đổi trực tiếp: state.count++. Component dùng useSnapshot(state) để lấy snapshot chỉ đọc, chỉ kích hoạt re-render khi property được truy cập thay đổi. Điều này mang lại reactivity chi tiết tương tự MobX nhưng với API đơn giản hơn. Zustand yêu cầu set() cho mọi cập nhật.',
    options: [
      'Valtio là wrapper của Redux; Zustand là độc lập',
      'Valtio dùng JavaScript Proxy để state có thể thay đổi trực tiếp và tự động theo dõi đọc cho reactivity chi tiết; Zustand dùng lệnh set() và subscription qua selector',
      'Valtio yêu cầu Provider; Zustand thì không',
      'Chúng giống hệt nhau - Valtio chỉ là tên cũ của Zustand',
    ],
  },
  'sm-036': {
    question:
      'Legend State là gì và điều gì làm nó khác biệt so với các thư viện state React khác?',
    explanation:
      'Legend State (của Jay Meistrich) dùng observable: const state$ = observable({ count: 0 }). Component được bọc bằng observer() tự động theo dõi property nào chúng đọc và chỉ re-render khi những property đó thay đổi. Nó có tích hợp sẵn persistence, sync adapter (Supabase, Firebase), và hiệu suất benchmark cực cao nhờ theo dõi chi tiết mà không cần overhead so sánh virtual DOM.',
    options: [
      'Đây là thư viện quản lý state chỉ dành cho React Native',
      'Legend State dùng observable chi tiết theo dõi ở mức property, cho phép component chỉ re-render khi property được truy cập thay đổi - với observable() và observer() cung cấp cập nhật reactive không overhead mà không cần selector hay subscription',
      'Đây là triển khai signals chỉ hoạt động với SolidJS component',
      'Legend State yêu cầu plugin Babel để chuyển đổi code reactive',
    ],
  },
  'sm-037': {
    question:
      'Trong XState, sự khác biệt giữa entry/exit action và transition action là gì?',
    explanation:
      'Entry action được kích hoạt mỗi khi vào một state (từ bất kỳ transition nào) - lý tưởng cho khởi tạo timer, sự kiện analytics, hoặc cập nhật UI gắn với "đang ở trong" state. Exit action kích hoạt khi rời đi. Transition action chỉ kích hoạt khi transition cụ thể đó xảy ra - lý tưởng cho ghi log sự kiện cụ thể gây ra thay đổi. Dùng entry/exit tránh bỏ sót action khi state có thể được vào từ nhiều transition.',
    options: [
      'Entry/exit action chạy trên server; transition action chạy trên client',
      'Entry action chạy khi vào state, exit action khi rời đi - bất kể transition nào gây ra; transition action chỉ chạy trên transition cụ thể. Entry/exit tốt hơn cho cleanup/setup đảm bảo; transition action cho side effect theo sự kiện cụ thể.',
      'Transition action là bất đồng bộ; entry/exit action chỉ đồng bộ',
      'Chúng có hành vi giống hệt nhau; đặt tên khác chỉ để tài liệu',
    ],
  },
  'sm-038': {
    question:
      'Quản lý URL state với nuqs là gì và khi nào nên lưu state trong URL?',
    explanation:
      'nuqs (trước là next-usequerystate) cung cấp hook useQueryState() và useQueryStates() cho quản lý URL search param an toàn kiểu. const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1)). URL state lý tưởng cho: bộ lọc tìm kiếm (chia sẻ được), phân trang, sắp xếp, tab đã chọn, và bất kỳ state nào cần tồn tại sau refresh hoặc deep-link được. Tránh cho dữ liệu nhạy cảm hoặc tạm thời.',
    options: [
      'nuqs là thư viện rút gọn URL cho ứng dụng React',
      'nuqs là thư viện an toàn kiểu để quản lý URL search parameter làm state trong Next.js/React. Lưu trong URL khi state cần chia sẻ, bookmark, hoặc tồn tại sau khi tải lại trang - như bộ lọc, thứ tự sắp xếp, phân trang, và tab đã chọn',
      'URL state không bao giờ nên dùng cho application state vì không an toàn',
      'nuqs thay thế React Router cho navigation state',
    ],
  },
  'sm-039': {
    question:
      'Trong Next.js App Router, useSearchParams() từ "next/navigation" có thể dùng trong Server Component để đọc tham số query URL.',
    explanation:
      'useSearchParams() là hook của Client Component - không thể dùng trong Server Component. Trong Server Component, URL search param có sẵn qua prop searchParams truyền vào page.tsx: async function Page({ searchParams }) { const q = searchParams.q }. Trong Next.js 15, searchParams là Promise cần await.',
  },
  'sm-040': {
    question:
      'Query invalidation của TanStack Query làm chính xác điều gì, và sự khác biệt giữa invalidateQueries và refetchQueries là gì?',
    explanation:
      'invalidateQueries đánh dấu các query khớp là stale. Nếu query có observer đang hoạt động (component đã mount và subscribe), nó refetch ngay trong nền. Nếu không có observer hoạt động, nó chỉ đánh dấu stale để lần mount tiếp kích hoạt fetch mới. refetchQueries buộc refetch bất kể - kể cả query không hoạt động - hữu ích cho kịch bản "kéo để refresh" thủ công.',
    options: [
      'Chúng giống hệt nhau - invalidation luôn kích hoạt refetch ngay',
      'invalidateQueries đánh dấu query là stale và chỉ refetch nếu có subscriber đang hoạt động; refetchQueries buộc refetch ngay bất kể trạng thái subscriber hay stale',
      'invalidateQueries xóa cache entry; refetchQueries cập nhật tại chỗ',
      'refetchQueries bị loại bỏ trong v5 thay bằng invalidateQueries',
    ],
  },
  'sm-041': {
    question:
      'Tính năng "invoke" trong XState là gì và nó mô hình hóa thao tác bất đồng bộ như thế nào?',
    explanation:
      'invoke trong XState mô hình hóa thao tác bất đồng bộ như có trạng thái: { loading: { invoke: { src: "fetchUser", onDone: { target: "success", actions: assign({ user: (_, e) => e.data }) }, onError: { target: "error" } } } }. Machine ở trạng thái "loading" khi promise chạy - không thể ở hai trạng thái. Điều này loại bỏ mẫu hỗn loạn boolean isLoading/isError/data phổ biến trong hook.',
    options: [
      'invoke dùng để gọi hàm tiện ích đồng bộ trong reducer',
      'invoke cho phép một state sinh ra Promise, callback, observable, hoặc child machine như service - machine tự động chuyển trạng thái khi promise resolve (onDone) hoặc reject (onError), mô hình hóa sạch sẽ workflow bất đồng bộ dưới dạng state',
      'invoke là cú pháp XState v4 đã thay bằng actor trong v5',
      'invoke chạy side effect sau transition mà không chặn thay đổi state',
    ],
  },
  'sm-042': {
    question:
      'Khi nào nên chọn state machine (XState) thay vì quản lý state đơn giản hơn (Zustand/useState)?',
    explanation:
      'State machine phù hợp khi: (1) tổ hợp state gây lỗi (if isLoading && isError - cái nào thắng?), (2) transition phải rõ ràng (modal không thể "mở" khi đang "gửi"), (3) luồng bất đồng bộ phức tạp với retry/timeout. Cho cờ CRUD đơn giản, bộ đếm, hoặc toggle UI, useState/Zustand đơn giản và đủ dùng. XState thêm overhead khái niệm; dùng khi độ phức tạp domain xứng đáng.',
    options: [
      'Luôn dùng XState - nó xử lý mọi trường hợp tốt hơn',
      'Dùng state machine khi UI có logic điều kiện phức tạp với nhiều cờ boolean tương tác (isLoading && !isError && hasData), transition bị cấm rõ ràng quan trọng (không thể từ "đã thanh toán" sang "đang chờ"), hoặc workflow có nhiều bước bất đồng bộ với đường dẫn khôi phục lỗi',
      'Chỉ dùng XState cho state xác thực form',
      'State machine chỉ phù hợp cho hệ thống backend, không phải UI frontend',
    ],
  },
  'sm-043': {
    question:
      'createAsyncThunk trong Redux Toolkit là gì và nó xử lý vòng đời pending/fulfilled/rejected so với viết thunk thủ công như thế nào?',
    explanation:
      'Thunk thủ công cần: dispatch(loadingAction()), try { const data = await fetch(); dispatch(successAction(data)) } catch(e) { dispatch(errorAction(e)) }. createAsyncThunk xử lý điều này: payloadCreator nhận (arg, thunkAPI) bao gồm signal để hủy, rejectWithValue cho lỗi không phải exception, và dispatch/getState. extraReducers dùng builder.addCase(thunk.fulfilled, ...) cho xử lý state sạch sẽ.',
    options: [
      'createAsyncThunk chỉ là syntactic sugar không khác biệt chức năng so với thunk thủ công',
      'createAsyncThunk tự động tạo ba action creator (pending/fulfilled/rejected), xử lý vòng đời promise, hỗ trợ abort signal qua thunkAPI.signal, và cho phép extraReducers xử lý từng giai đoạn - loại bỏ boilerplate try/catch và dispatch thủ công',
      'createAsyncThunk chỉ hoạt động với REST API, không phải GraphQL hay WebSocket',
      'createAsyncThunk tự động retry request thất bại tối đa 3 lần',
    ],
  },
  'sm-044': {
    question:
      'Atom trong Jotai là duy nhất toàn cục theo identity - hai lần gọi atom() với cùng giá trị khởi tạo tạo ra hai atom riêng biệt, độc lập.',
    explanation:
      'Mỗi lần gọi atom() tạo object atom mới theo tham chiếu. const a1 = atom(0) và const a2 = atom(0) là hai atom hoàn toàn độc lập dù có cùng giá trị khởi tạo. Atom nên được định nghĩa ở scope module (không phải bên trong component) để tránh tạo lại mỗi lần render. Đây là mô hình atomic - identity xác định tính duy nhất, không phải giá trị.',
  },
  'sm-045': {
    question:
      'Sự đánh đổi giữa RTK Query và TanStack Query cho quản lý server state là gì?',
    explanation:
      'Ưu điểm RTK Query: tích hợp liền mạch Redux DevTools, một store cho cả server và client state, codegen từ OpenAPI. Ưu điểm TanStack Query: không phụ thuộc framework (adapter cho React, Vue, Solid, Angular), mạnh mẽ hơn (useInfiniteQuery, chế độ suspense, select transform, mẫu enabled), hệ sinh thái sôi động. Chọn RTK Query nếu Redux đã là core. Chọn TanStack Query cho dự án mới hoặc ứng dụng không dùng Redux.',
    options: [
      'TanStack Query chỉ hoạt động với React; RTK Query hoạt động với mọi framework',
      'RTK Query tích hợp chặt với Redux (dùng Redux store cho cache, DevTools, và middleware có sẵn) - tốt nhất khi đã dùng Redux. TanStack Query không phụ thuộc framework, có tính năng phong phú hơn (infinite query, optimistic update, đồng bộ nền), và được ưu tiên cho dự án mới không có Redux',
      'RTK Query hỗ trợ TypeScript tốt hơn TanStack Query',
      'Chúng giống hệt về chức năng; chỉ chọn theo sở thích team',
    ],
  },
}
