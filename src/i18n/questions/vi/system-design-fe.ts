import type { QuestionTranslationMap } from '../types'

export const systemDesignFeVi: QuestionTranslationMap = {
  'sd-001': {
    question:
      'Khi thiết kế một component library, những nguyên tắc chính nào giúp phân biệt một design system có kiến trúc tốt với một tập hợp component đơn thuần?',
    options: [
      'Design system chỉ đơn giản là có nhiều component hơn một component library',
      'Design system bao gồm: design tokens (color, spacing, typography là nguồn dữ liệu duy nhất), các biến thể component với API pattern nhất quán, accessibility tích hợp sẵn, tài liệu hướng dẫn sử dụng, chiến lược versioning, và quản trị xuyên suốt các đội — không chỉ là các UI component',
      'Design system phải được xây dựng bằng Storybook và phát hành lên npm',
      'Design system chỉ cần thiết cho các công ty có hơn 10 lập trình viên frontend',
    ],
    explanation:
      'Design system có nhiều tầng: (1) Nền tảng: design tokens (CSS variables hoặc JS objects), (2) Component: UI có accessibility, có thể kết hợp được, (3) Pattern: hướng dẫn kết hợp component, (4) Tài liệu: Storybook hoặc tương tự, (5) Quản trị: quy trình đóng góp, chính sách breaking change. Nếu không có tokens, bạn có component nhưng không có hệ thống — "hệ thống" chính là bộ từ vựng chung đảm bảo tính nhất quán.',
  },
  'sd-002': {
    question:
      'Thiết kế kiến trúc cho một ứng dụng micro-frontends nơi 3 đội độc lập sở hữu các phần khác nhau của dashboard. Bạn sẽ xử lý routing, shared state và style isolation như thế nào?',
    options: [
      'Dùng iframes để cách ly hoàn toàn giữa các phần của mỗi đội',
      'Dùng Module Federation: mỗi đội deploy độc lập dưới dạng remote. Shell app điều phối routing và cung cấp shared layout. Shared state thông qua custom events hoặc shared store được load dạng singleton. CSS isolation qua Shadow DOM hoặc quy ước BEM nghiêm ngặt với prefix theo đội.',
      'Xây dựng monolith và chia nhỏ bằng React context providers',
      'Mỗi đội deploy một ứng dụng Next.js riêng với domain riêng',
    ],
    explanation:
      'Các quyết định kiến trúc micro-frontends: (1) Tích hợp: Module Federation (runtime), npm packages (compile-time), iframes (cách ly hoàn toàn). (2) Routing: shell router, mỗi MFE xử lý sub-routes. (3) Shared state: tránh shared mutable state giữa các MFE — ưu tiên custom events hoặc URL state; khi không tránh được, dùng singleton mediator. (4) Styles: Shadow DOM cho cách ly hoàn toàn, hoặc CSS Modules/BEM với namespace prefix theo đội. (5) Giao tiếp: custom events thay vì direct imports.',
  },
  'sd-003': {
    question:
      'Thiết kế một API layer cho ứng dụng React xử lý authentication, request caching, error handling và request cancellation. Bạn sẽ tạo những abstraction nào?',
    options: [
      'Chỉ dùng fetch() trực tiếp ở mọi nơi trong component',
      'Tạo: (1) HTTP client layer (axios instance với interceptors cho auth headers, error handling, token refresh), (2) TanStack Query cho data fetching/caching với query key factories, (3) MSW handlers cho testing, (4) Các hàm API có TypeScript types, (5) Tích hợp AbortController để cancellation.',
      'Dùng React Context để lưu trữ một hàm fetch toàn cục',
      'Tạo một file api.ts monolithic duy nhất chứa tất cả endpoints dưới dạng hàm',
    ],
    explanation:
      'Kiến trúc API phân tầng: HTTP Client (axios instance) → interceptors thêm auth headers, xử lý 401 → refresh token → retry. Các hàm API service (có type): getUserById(id: string): Promise<User>. TanStack Query: query key factory (userKeys.detail(id)) cho cache invalidation nhất quán. AbortController được truyền vào requests, kết nối với thay đổi enabled+queryKey của TanStack Query. Xử lý lỗi type-safe với discriminated unions.',
  },
  'sd-004': {
    question:
      'Kiến trúc monorepo là gì và những đánh đổi chính so với polyrepo là gì?',
    options: [
      'Monorepo = một repo với một app; polyrepo = nhiều repo mỗi cái chứa một app',
      'Monorepo: tất cả project trong một repository — cho phép thay đổi atomic xuyên project, chia sẻ tooling/lint config, refactor dễ dàng hơn, và liên kết package cục bộ. Đánh đổi: CI chậm nếu không có task orchestration (Turborepo/Nx), lịch sử git phức tạp, cần đầu tư tooling. Polyrepo: đội có toàn quyền tự chủ, thiết lập mỗi repo đơn giản hơn, nhưng thay đổi xuyên repo cần nhiều PR và versioned releases.',
      'Monorepo yêu cầu tất cả đội phải dùng cùng một technology stack',
      'Monorepo chỉ phù hợp cho ứng dụng dùng một framework duy nhất',
    ],
    explanation:
      'Monorepo thắng ở: atomic commits xuyên shared libraries và apps, một lint/TS config duy nhất để bảo trì, liên kết package cục bộ dễ dàng (workspace:*), không cần bước publish trong quá trình phát triển, tầm nhìn xuyên đội. Polyrepo thắng ở: chu kỳ deploy độc lập, repo nhỏ hơn cho hiệu năng IDE, tự chủ hoàn toàn cho đội. Xu hướng 2024-2025 là hướng tới monorepo với Turborepo/Nx cho hầu hết các đội xây dựng nhiều sản phẩm liên quan.',
  },
  'sd-005': {
    question:
      'Thiết kế kiến trúc state cho một form phức tạp nhiều bước (quy trình checkout) với 5 bước, validation xuyên bước, và khả năng quay lại chỉnh sửa các bước trước.',
    options: [
      'Dùng một useState object duy nhất chứa tất cả form fields',
      'Dùng state machine (XState) hoặc reducer theo bước: định nghĩa các trạng thái (billing → shipping → payment → review → confirmation), transitions giữa các bước, validation guards ngăn chặn tiến tới, và persisted context. Hoặc: React Hook Form với Zod validation mỗi bước, kết hợp URL params để theo dõi bước.',
      'Lưu mỗi bước trong các React Context provider riêng biệt',
      'Dùng localStorage để lưu form state giữa các bước',
    ],
    explanation:
      'Kiến trúc form phức tạp nhiều bước: (1) State machine lý tưởng cho các transition hợp lệ rõ ràng; XState mô hình hóa: idle → filling → validating → confirmed, với back transitions. (2) React Hook Form: useForm với shared schema, mỗi bước đăng ký fields, trigger("stepFields") validate bước hiện tại trước khi tiến. (3) URL params cho bước hiện tại (có thể chia sẻ, hỗ trợ nút back). (4) Session storage để duy trì dữ liệu khi refresh mà không submit sớm.',
  },
  'sd-006': {
    question:
      'Bạn sẽ thiết kế tính năng real-time cho một trình soạn thảo tài liệu cộng tác (như Notion) từ góc độ kiến trúc frontend như thế nào?',
    options: [
      'Poll server mỗi 100ms để kiểm tra thay đổi',
      'Dùng WebSocket (hoặc SSE cho chế độ chỉ đọc) với thuật toán CRDT hoặc OT để giải quyết xung đột. Frontend: operational transforms được áp dụng optimistically, đồng bộ với server qua WebSocket, Yjs cho triển khai CRDT. Presence (ai đang xem/chỉnh sửa) qua kênh presence riêng. Hỗ trợ offline qua IndexedDB + đồng bộ khi kết nối lại.',
      'Dùng Server-Sent Events cho tất cả giao tiếp hai chiều',
      'Lưu thay đổi trong React state và gửi hàng loạt lên server mỗi 5 giây',
    ],
    explanation:
      'Stack trình soạn thảo cộng tác: WebSocket (Socket.io hoặc native) cho đồng bộ hai chiều. CRDT (Conflict-free Replicated Data Type) qua Yjs xử lý chỉnh sửa đồng thời mà không cần server-side merge — quan trọng cho hỗ trợ offline. Awareness API cho cursor/presence. Persistence: IndexedDB cho offline, đồng bộ delta khi kết nối lại. Tích hợp React: dùng useY() hooks từ y-react. Phương án thay thế: operational transforms (OT) với server authority, khó triển khai hơn.',
  },
  'sd-007': {
    question:
      'Thiết kế kiến trúc internationalization (i18n) cho ứng dụng Next.js hỗ trợ 20 ngôn ngữ với nội dung động và quy tắc số nhiều.',
    options: [
      'Dùng conditional rendering với if/else cho mỗi ngôn ngữ',
      'Dùng next-intl hoặc react-i18next với: locale routing (/en/, /fr/), file dịch theo namespace được load theo route, ICU message format cho số nhiều/giới tính/interpolation, dịch server-side trong RSC, phát hiện locale từ Accept-Language header, hỗ trợ RTL với CSS logical properties.',
      'Lưu bản dịch trong database và fetch mỗi lần render',
      'Dịch chuỗi bằng API bên thứ ba tại thời điểm render',
    ],
    explanation:
      'i18n cho production: (1) Routing: Next.js locale routing với middleware để phát hiện. (2) File dịch: JSON theo namespace (common, checkout, profile) cho code-splitting. (3) Format: ICU message format xử lý số nhiều ({count, plural, one {# item} other {# items}}), ngày tháng, tiền tệ qua Intl API. (4) RSC: dùng next-intl getTranslations() trong server components. (5) CI: tự động validate file dịch, pseudo-localization để kiểm tra layout.',
  },
  'sd-008': {
    question:
      'Pattern "Compound Component" là gì và khi nào nên dùng nó cho thiết kế component library?',
    options: [
      'Compound components là các component sử dụng nhiều state management library',
      'Một pattern trong đó component cha quản lý shared state/context và các sub-component con truy cập ngầm định. Ví dụ: <Select><Select.Option><Select.Trigger> — người dùng kiểm soát composition mà không cần prop drilling. Lý tưởng cho: menus, accordions, tabs, modals với nhiều phần phối hợp.',
      'Compound components là các component kế thừa nhiều base classes',
      'Một pattern để tạo responsive components hoạt động ở nhiều breakpoints',
    ],
    explanation:
      'Compound components: component cha dùng Context để chia sẻ state; sub-components (static properties hoặc named exports) đọc context. Ví dụ: <Tabs> cung cấp selectedTab context; <Tabs.List>, <Tabs.Tab>, <Tabs.Panel> consume nó. Lợi ích: composition linh hoạt không cần prop drilling, API surface rõ ràng, người dùng kiểm soát thứ tự render. Được dùng bởi Radix UI, Headless UI, React Aria. Ưu tiên Radix cho các trường hợp phức tạp thay vì tự xây dựng.',
  },
  'sd-009': {
    question:
      'Kiến trúc offline-first là gì và những công nghệ nào hỗ trợ nó trên frontend?',
    options: [
      'Offline-first nghĩa là ứng dụng hoạt động không cần backend server',
      'Offline-first nghĩa là ứng dụng được thiết kế để hoạt động với dữ liệu cache theo mặc định, đồng bộ với server khi có kết nối. Công nghệ: Service Workers (chặn network/caching), IndexedDB (lưu trữ có cấu trúc offline), Background Sync API, Cache API, TanStack Query với persistence adapter.',
      'Offline-first chỉ khả thi với ứng dụng mobile native',
      'Offline-first yêu cầu một local server chạy trên máy người dùng',
    ],
    explanation:
      'Stack offline-first: (1) Service Worker: chặn fetch requests, phục vụ từ cache khi offline (Cache API), dùng chiến lược như stale-while-revalidate. (2) IndexedDB: lưu trữ dữ liệu có cấu trúc (dữ liệu người dùng, form nháp, cached API responses). (3) Background Sync: xếp hàng các hành động (form submissions) khi offline, thử lại khi có kết nối. (4) Workbox: thư viện SW cấp cao. React Query + idb-keyval: persist cache server state vào IndexedDB.',
  },
  'sd-010': {
    question:
      'Bạn sẽ thiết kế kiến trúc component library frontend cần hỗ trợ cả React và Vue từ cùng một codebase như thế nào?',
    options: [
      'Xây dựng thư viện riêng biệt và đồng bộ thủ công',
      'Dùng Web Components (Custom Elements) làm tầng framework-agnostic: xây dựng component dưới dạng custom elements bằng Lit hoặc native APIs. Các wrapper package theo framework (react-my-lib, vue-my-lib) thêm reactive bindings và TypeScript types. Điều này cho phép một triển khai component chuẩn được dùng bởi tất cả framework.',
      'Viết toàn bộ thư viện hai lần bằng cả React và Vue',
      'Dùng shared CSS library và để mỗi đội framework thêm JS logic riêng',
    ],
    explanation:
      'Chiến lược component xuyên framework: (1) Web Components (Lit): viết một lần, wrap cho mỗi framework. React wrappers xử lý đặt tên event (camelCase <-> kebab-case). (2) Phương án thay thế: headless logic bằng vanilla JS/TS (như Floating UI, TanStack Table), các package theo framework thêm rendering. (3) Figma tokens → Style Dictionary → CSS variables làm tầng design hoạt động ở mọi nơi. Đánh đổi: Web Components có hạn chế SSR; cách tiếp cận headless linh hoạt hơn.',
  },
  'sd-011': {
    question:
      'Sự khác biệt giữa pattern "Render Props" và "Component Composition" là gì và khi nào nên ưu tiên cái nào?',
    options: [
      'Chúng là các pattern giống hệt nhau với tên gọi khác nhau',
      'Render Props: component cha gọi một function prop để render children, cho phép chia sẻ logic giữa các cấu trúc UI khác nhau. Component Composition: truyền component dưới dạng children/props cho tính linh hoạt kiểu slot. Ưu tiên composition cho layout/cấu trúc; ưu tiên render props (hoặc hooks) khi chia sẻ logic phức tạp với rendering linh hoạt.',
      'Render Props đã bị deprecated để thay thế bằng hooks',
      'Component Composition chỉ hoạt động với Class Components',
    ],
    explanation:
      'Render Props (<DataFetcher render={({ data }) => <UI data={data} />}>) và custom hooks đều chia sẻ stateful logic. Hooks đã thay thế hầu hết use cases của Render Props cho việc chia sẻ logic. Khi nào vẫn dùng render props: khi shared logic cần render dynamic arbitrary children (Virtualized list row renderer, form field wrapper render validation state xung quanh bất kỳ input nào). Composition (children prop) dành cho các pattern layout/slot.',
  },
  'sd-012': {
    question:
      'Design tokens là gì và chúng nên được cấu trúc như thế nào trong một design system lớn?',
    options: [
      'Design tokens là authentication tokens cho các công cụ thiết kế như Figma',
      'Design tokens là các giá trị thiết kế được đặt tên, không phụ thuộc platform (colors, spacing, typography) đại diện cho nguồn dữ liệu duy nhất. Cấu trúc: Global tokens (giá trị thô: color-blue-500: #3b82f6) → Semantic tokens (theo vai trò: color-brand-primary: {color.blue.500}) → Component tokens (theo component: button-bg-primary: {color.brand.primary}).',
      'Design tokens chỉ là CSS custom properties',
      'Tokens chỉ dùng cho color; spacing và typography được xử lý riêng',
    ],
    explanation:
      'Kiến trúc token ba tầng (tiêu chuẩn W3C Design Token Community Group): (1) Primitive/Global: giá trị thô — spacing-4: 16px, color-blue-500: #3b82f6. (2) Semantic/Alias: theo ý nghĩa — color-background-primary: {color.neutral.0}, color-interactive-default: {color.blue.500}. (3) Component: theo component — button-background: {color.interactive.default}. Công cụ: Style Dictionary chuyển đổi tokens sang CSS vars, JS constants, định dạng iOS/Android.',
  },
  'sd-013': {
    question:
      'Bạn sẽ tiếp cận việc chuyển đổi một frontend monolith lớn sang kiến trúc micro-frontends mà không cần viết lại toàn bộ cùng lúc như thế nào?',
    options: [
      'Viết lại mọi thứ trong 6 tháng và chuyển đổi một lần',
      'Pattern Strangler Fig: xác định các lát cắt dọc (theo route/feature), xây dựng MFE mới song song với monolith, chuyển hướng các path cụ thể sang MFE mới qua nginx hoặc shell router, dần dần thay thế monolith. Feature flags kiểm soát quá trình chuyển đổi. Chạy song song cả hai cho đến khi di chuyển hoàn tất.',
      'Tách shared components trước, sau đó chia phần còn lại',
      'Đóng băng phát triển tính năng trong 1 năm trong quá trình di chuyển',
    ],
    explanation:
      'Strangler Fig cho di chuyển MFE: (1) Xác định các đường nối: ranh giới tự nhiên theo feature/route. (2) Tạo shell application điều hướng giữa monolith và các MFE mới. (3) Xây dựng một lát MFE với công nghệ mới (React 18, TypeScript, TanStack Query). (4) Điều hướng /new-feature sang MFE, /legacy sang monolith. (5) Tách từng feature một — các đội có thể ship tính năng mới trong MFE trong khi monolith vẫn được bảo trì. Dần dần "bóp nghẹt" hệ thống cũ.',
  },
  'sd-014': {
    question:
      'Những pattern nào đảm bảo CSS isolation trong kiến trúc micro-frontends?',
    options: [
      'Dùng một stylesheet toàn cục duy nhất chia sẻ cho tất cả MFE',
      'Các lựa chọn theo mức độ cách ly: (1) Shadow DOM: đóng gói CSS thực sự, ngăn global styles rò rỉ vào/ra — nhưng hạn chế style inheritance; (2) CSS Modules: scoped class names tại build time; (3) BEM nghiêm ngặt với prefix theo đội (team-a__component); (4) CSS-in-JS: scope tại runtime; (5) Style reset cho mỗi MFE để ngăn inheritance.',
      'CSS isolation là không thể trong kiến trúc micro-frontends',
      'Chỉ dùng inline styles để ngăn mọi xung đột CSS',
    ],
    explanation:
      'Đánh đổi CSS isolation: Shadow DOM = cách ly mạnh nhất nhưng mất theme inheritance và làm phức tạp global font/color tokens. CSS Modules = tốt cho tách biệt tại compile-time. BEM prefix = quy ước đơn giản, hoạt động mọi nơi nhưng phụ thuộc kỷ luật của đội. CSS-in-JS = cách ly runtime với dynamic theming. Dự án thực thường kết hợp: CSS Modules cho component styles + CSS variables cho shared design tokens xuyên qua ranh giới Shadow DOM.',
  },
  'sd-015': {
    question:
      'Pattern Headless UI là gì và những ưu điểm của nó cho tính linh hoạt của design system?',
    options: [
      'Headless UI nghĩa là component không có visual styling nào — chỉ HTML',
      'Headless UI components cung cấp behavior, accessibility và state management mà không có visual styles — người dùng tự thêm styling qua className props hoặc render functions. Ví dụ: Radix UI, Headless UI by Tailwind, React Aria, TanStack Table. Cho phép một tầng behavior có accessibility dùng với bất kỳ visual design nào.',
      'Headless UI chỉ dành cho ứng dụng server-rendered',
      'Headless UI yêu cầu Web Components và Shadow DOM',
    ],
    explanation:
      'Pattern headless tách biệt mối quan tâm: behavior/a11y (do thư viện xử lý) vs visual design (do người dùng xử lý). Lợi ích: (1) Linh hoạt visual hoàn toàn — style với Tailwind, CSS Modules, hoặc styled-components; (2) Accessibility được xử lý đúng bởi chuyên gia; (3) Design system có thể có giao diện riêng biệt cho mỗi sản phẩm trong khi chia sẻ behavior; (4) Dễ nâng cấp styling hơn mà không phá vỡ behavior. Radix UI + Tailwind là combo phổ biến nhất 2024-2025.',
  },
  'sd-016': {
    question:
      'Bạn sẽ thiết kế kiến trúc authentication frontend cho ứng dụng Next.js hỗ trợ nhiều auth providers (Google, GitHub, magic link) với session management và protected routes như thế nào?',
    options: [
      'Lưu JWT tokens trong localStorage và kiểm tra chúng ở mỗi trang',
      'Dùng Auth.js (NextAuth v5): cấu hình provider (OAuth, magic link), session lưu trong httpOnly secure cookies (không phải localStorage — bảo vệ XSS), bảo vệ route dựa trên middleware, session khả dụng trong Server Components qua auth() helper, chiến lược JWT vs database session tùy theo nhu cầu mở rộng.',
      'Tự xây dựng authentication từ đầu để kiểm soát hoàn toàn',
      'Dùng một dịch vụ authentication riêng trên subdomain với cross-origin cookies',
    ],
    explanation:
      'Kiến trúc Auth.js (NextAuth v5): (1) Cấu hình provider: OAuth (Google, GitHub) + email magic link. (2) Session: httpOnly cookies với bảo vệ CSRF — không bao giờ dùng localStorage. (3) Middleware: bảo vệ các route /dashboard/* bằng cách kiểm tra session trước khi render trang. (4) Server Components: auth() trả về session trực tiếp. (5) Client: useSession() hook cho các client components cần thông tin session. (6) Database adapter (Prisma) cho persistent sessions nếu cần.',
  },
  'sd-017': {
    question:
      'Sự khác biệt chính giữa code splitting theo chiều ngang và chiều dọc trong ứng dụng React lớn là gì?',
    options: [
      'Chiều ngang chia theo kích thước file; chiều dọc chia theo số lượng component',
      'Chia dọc (theo route): chia theo routes/features của ứng dụng — bundle trang /checkout tách biệt với /profile. Chia ngang (theo component): chia theo độ phức tạp component trong một route — lazy load thư viện charting nặng chỉ khi chart được render. Kết hợp cả hai: chia theo route cho điều hướng, chia theo component cho các feature nặng trong trang.',
      'Chiều ngang dành cho CSS; chiều dọc dành cho JavaScript',
      'Chúng là cùng một khái niệm với quy ước đặt tên khác nhau',
    ],
    explanation:
      'Chia theo route (dọc) là baseline — tự động trong Next.js App Router. Trong một trang, chia ngang nhắm vào component nặng: const Chart = lazy(() => import("recharts-chart")). Pattern này áp dụng cho: rich text editors, PDF viewers, 3D renderers, thư viện data visualization lớn. Cách tiếp cận kết hợp cho payload khởi tạo tối thiểu mỗi route trong khi lazy-loading các feature nặng theo yêu cầu.',
  },
  'sd-018': {
    question:
      'Trong design system, semantic tokens (như color-background-primary) nên tham chiếu đến primitive tokens (như color-gray-50) thay vì giá trị thô, cho phép thay đổi theme chỉ bằng cách cập nhật tầng semantic.',
    explanation:
      'Hệ thống phân cấp token là: (1) Primitive/Global tokens chứa giá trị thô: --color-gray-50: #f9fafb. (2) Semantic tokens tham chiếu primitives: --color-background-primary: var(--color-gray-50). (3) Dark mode: ghi đè semantic tokens trong [data-theme="dark"] { --color-background-primary: var(--color-gray-950) }. Component dùng semantic tokens — không component nào cần thay đổi khi bạn thêm dark mode.',
  },
  'sd-019': {
    question:
      'Bạn sẽ xử lý feature flags trong ứng dụng frontend lớn như thế nào để hỗ trợ rollout dần dần và A/B testing?',
    options: [
      'Dùng environment variables trong file .env cho tất cả feature flags',
      'Dùng dịch vụ feature flag (LaunchDarkly, GrowthBook, hoặc tự xây dựng): flags được fetch server-side (cho RSC/SSR — tránh flash) hoặc client-side (cho real-time). Phân nhóm người dùng (hash userId cho rollout theo phần trăm). Đánh giá flag type-safe với TypeScript. Đánh giá tại edge trên CDN cho kiểm tra flag không có độ trễ.',
      'Dùng if (process.env.NODE_ENV === "development") cho tất cả feature flags',
      'Hard-code giá trị feature flag và tạo deployment riêng cho mỗi tổ hợp flag',
    ],
    explanation:
      'Kiến trúc feature flag cho production: (1) Dịch vụ (không phải env vars) cho cập nhật real-time mà không cần redeploy. (2) Đánh giá tại edge: middleware đọc flags từ KV store, thêm cookie/header, server components đọc giá trị flag từ request — không cần round-trip client. (3) Type safety: TypeScript types được generate cho tất cả tên/giá trị flag. (4) Analytics: theo dõi impression + conversion mỗi variant. (5) Dọn dẹp: nhắc nhở tự động xóa flags sau khi thí nghiệm kết thúc.',
  },
  'sd-020': {
    question:
      'Kiến trúc event-driven trong ngữ cảnh frontend là gì và nó hỗ trợ giao tiếp micro-frontends phân tách như thế nào?',
    options: [
      'Event-driven nghĩa là dùng addEventListener cho tất cả tương tác người dùng',
      'Frontend event bus: micro-frontends phát và lắng nghe custom DOM events (hoặc thư viện pub/sub). MFE-A dispatch CustomEvent("user:logged-in", detail) trên window. MFE-B lắng nghe sự kiện user:logged-in. Không MFE nào có dependency import trực tiếp đến MFE khác — coupling chỉ qua event schema.',
      'Kiến trúc event-driven yêu cầu WebSockets cho tất cả giao tiếp',
      'Event sourcing giống với kiến trúc event-driven frontend',
    ],
    explanation:
      'Micro-frontend event bus: custom events trên window/document hoạt động native không cần thư viện. Định nghĩa typed event catalog (TypeScript interface cho mỗi event). MFE đăng ký listeners khi mount, gỡ khi unmount. Lợi ích: không coupling (không shared imports), debug đơn giản (panel event listener trong DevTools). Lưu ý: events là fire-and-forget (không có return value), tránh dùng cho synchronous operations, dùng cho notifications (user logged in, cart updated, navigation requested).',
  },
  'sd-021': {
    question:
      'Pattern BFF (Backend for Frontend) là gì và nó giải quyết vấn đề gì cho đội frontend?',
    options: [
      'BFF viết tắt của "Best Feature First" — một chiến lược ưu tiên phát triển',
      'BFF là một tầng backend chuyên dụng thuộc sở hữu của đội frontend, tổng hợp, chuyển đổi và tối ưu hóa API responses cho nhu cầu frontend cụ thể — tránh over-fetching, điều chỉnh payload cho mobile vs desktop, và cho đội frontend quyền kiểm soát data contracts mà không cần thay đổi backend.',
      'BFF là một pattern bảo mật để ngăn chặn vấn đề CORS',
      'BFF là một tầng caching nằm giữa frontend và database',
    ],
    explanation:
      'Pattern BFF: thay vì gọi 3 microservices và ghép dữ liệu phía client (chậm, phức tạp, lộ internal APIs), một BFF server thực hiện tất cả cuộc gọi và trả về một response được tối ưu cho UI. Đội frontend sở hữu BFF. Lợi ích: payload được điều chỉnh (BFF mobile trả ít fields hơn), ranh giới authentication duy nhất, ẩn độ phức tạp microservice khỏi frontend, cho phép server-side composition. Next.js API routes hoặc dịch vụ Node.js riêng đóng vai trò BFF.',
  },
  'sd-022': {
    question:
      'Bạn sẽ thiết kế observability (monitoring, logging, error tracking) cho ứng dụng React production như thế nào?',
    options: [
      'Thêm các câu lệnh console.log khắp codebase',
      'Stack: (1) Error tracking: Sentry với source maps cho stack traces về code gốc; React ErrorBoundary đổ vào Sentry. (2) Real User Monitoring (RUM): Core Web Vitals qua thư viện web-vitals → analytics. (3) Distributed tracing: OpenTelemetry cho tương quan trace frontend → BFF → microservices. (4) Session replay: LogRocket/PostHog để debug các vấn đề phức tạp của người dùng.',
      'Dựa vào browser DevTools cho production debugging',
      'Chỉ dùng server logs — lỗi frontend không quan trọng để theo dõi',
    ],
    explanation:
      'Các tầng observability frontend: (1) Sentry: tự động bắt lỗi JS, performance tracing, upload source map cho stack traces dễ đọc. (2) web-vitals: báo cáo LCP/INP/CLS cho analytics/RUM. (3) Custom error boundaries: bắt lỗi render React, thêm context người dùng trước khi gửi Sentry. (4) Tích hợp feature flag: thêm active flags vào Sentry context để debug. (5) Alerts: cảnh báo regression P95 INP trong CI/CD. Map lỗi vào deployments với release tracking.',
  },
  'sd-023': {
    question:
      'Vấn đề "Props Drilling" là gì và các giải pháp được khuyến nghị trong React hiện đại là gì?',
    options: [
      'Props drilling là khi component nhận quá nhiều props và trở nên chậm',
      'Props drilling là truyền dữ liệu qua nhiều component trung gian không sử dụng nó. Giải pháp: (1) React Context cho dữ liệu global/xuyên suốt (theme, auth user); (2) Component composition (nâng state lên và truyền JSX dưới dạng children để tránh các bước trung gian); (3) Zustand/Jotai cho state được truy cập bởi component lồng sâu mà không cần boilerplate Provider.',
      'Props drilling là khi bạn dùng cả controlled và uncontrolled components',
      'Props drilling có thể được giải quyết bằng cách chuyển tất cả component sang Class Components',
    ],
    explanation:
      'Giải quyết props drilling — sắp xếp theo khuyến nghị: (1) Composition trước: thay vì truyền dữ liệu xuống, truyền component sử dụng dưới dạng children — không cần props trung gian. (2) Context: cho các mối quan tâm xuyên suốt thực sự (theme, locale, auth). Tránh cho state thay đổi tần suất cao (hiệu năng). (3) Thư viện state management (Zustand atom truy cập trực tiếp) cho client state phức tạp, được chia sẻ rộng. Không bao giờ mặc định dùng Context cho tất cả shared state.',
  },
  'sd-024': {
    question:
      'Server-Side Rendering (SSR) và Static Site Generation (SSG) là gì và khi nào bạn chọn mỗi loại?',
    options: [
      'SSR dành cho trang động; SSG dành cho trang đăng nhập',
      'SSR render HTML tại mỗi request (dữ liệu real-time, nội dung theo người dùng — dashboards, feeds). SSG pre-render HTML tại build time (nội dung ít thay đổi — blogs, docs, trang marketing). ISR kết hợp cả hai: trang pre-rendered tự tái tạo trong nền.',
      'SSG yêu cầu Node.js server; SSR hoạt động không cần',
      'SSR đã deprecated thay bằng RSC; SSG đã deprecated thay bằng PPR',
    ],
    explanation:
      'Ma trận quyết định: SSG = cùng nội dung cho tất cả người dùng + ít thay đổi → blogs, docs, landing pages (hiệu năng tốt nhất, CDN-cached). SSR = nội dung khác nhau mỗi người dùng hoặc request + dữ liệu real-time → dashboards, feed, trang authenticated. ISR = SSG + refresh định kỳ → trang sản phẩm e-commerce, tin tức. PPR (Next.js 15) xóa ranh giới: static shell + streaming nội dung động.',
  },
  'sd-025': {
    question:
      'Những cân nhắc nào khi thiết kế component API vừa đủ linh hoạt cho edge cases vừa đủ định hướng cho việc sử dụng nhất quán trong đội?',
    options: [
      'Chấp nhận tất cả cấu hình có thể dưới dạng props và để người dùng tự tìm hiểu',
      'Áp dụng "escape hatches, không phải configuration explosion": thiết kế cho 80% use case với defaults hợp lý, expose className/style cho style overrides, as prop cho polymorphic elements, và ref forwarding cho imperative access. Tránh boolean flag tràn lan — dùng variant patterns (variant="primary|secondary") thay vì các boolean isPrimary/isSecondary riêng biệt.',
      'Khóa chặt component hoàn toàn không cho tùy chỉnh',
      'Generate tất cả component variants tại build time bằng code generation',
    ],
    explanation:
      'Nguyên tắc thiết kế component API: (1) Defaults hợp lý — hoạt động tốt ngay khi dùng. (2) Variant patterns (CVA) — type-safe variant combinations thay vì boolean props tràn lan. (3) Escape hatches qua composition — asChild prop (Radix) cho phép người dùng render dưới dạng element riêng. (4) ref forwarding — cần thiết cho thư viện animation và focus management. (5) TypeScript discriminated union props cho các options loại trừ lẫn nhau. (6) Không duplicate state nội bộ — nếu cần controlled/uncontrolled, hỗ trợ cả hai.',
  },
  'sd-026': {
    question:
      'Edge computing trong ngữ cảnh frontend là gì, và Cloudflare Workers cùng Vercel Edge Functions khác gì so với serverless functions truyền thống?',
    options: [
      'Edge functions chỉ là serverless functions với tên khác',
      'Edge functions chạy trong các data centers gần người dùng về mặt địa lý (không phải một region tập trung), cho phép thời gian phản hồi dưới 10ms. Chúng bị giới hạn ở tập con Web APIs (không có Node.js built-ins), chạy V8 isolates thay vì containers, cold start gần bằng không, và lý tưởng cho: auth middleware, A/B testing, geo-routing, và personalized HTML responses.',
      'Edge computing nghĩa là chạy code bên trong trình duyệt',
      'Edge functions thay thế hoàn toàn CDN',
    ],
    explanation:
      'Sự khác biệt edge runtime so với Node.js serverless: (1) Runtime: V8 isolates (không phải Node.js) — không có fs, không có native modules, APIs bị hạn chế. (2) Địa lý: 200+ PoPs toàn cầu vs một region duy nhất. (3) Cold start: ~0ms vs 100-500ms. (4) Use cases: request rewriting, xác thực auth token, đánh giá feature flag, localization, bảo vệ bot. Vercel Edge Middleware dùng Next.js middleware tại edge. Cloudflare Workers có KV, R2, D1 cho persistence tại edge. Đánh đổi: thời gian compute bị hạn chế và không có Node.js APIs.',
  },
  'sd-027': {
    question:
      'Sự khác biệt giữa Server-Sent Events (SSE), WebSockets, và WebTransport cho dữ liệu frontend real-time là gì?',
    options: [
      'Chúng đều là cùng một công nghệ với tên khác nhau',
      'SSE: một chiều server→client qua HTTP, EventSource API đơn giản, tự động kết nối lại, chỉ text. WebSocket: full-duplex hai chiều qua kết nối TCP liên tục, hỗ trợ binary và text, yêu cầu giao thức ws://. WebTransport: hai chiều hiện đại qua HTTP/3 QUIC, hỗ trợ nhiều streams, độ trễ thấp hơn WebSocket, vẫn đang thử nghiệm.',
      'WebSockets luôn tốt hơn — dùng cho mọi thứ',
      'SSE yêu cầu server đặc biệt hỗ trợ giao thức MQTT',
    ],
    explanation:
      'Chọn giao thức streaming: SSE — đơn giản nhất, hoạt động qua HTTP/2 multiplexing, lý tưởng cho notification feeds, live logs, AI streaming responses. WebSocket — cho ứng dụng real-time tương tác (chat, collaborative editing, live games) nơi client cũng gửi dữ liệu thường xuyên. WebTransport — cho use cases ultra-low-latency (gaming, live media) qua HTTP/3; chưa triển khai rộng rãi. SSE bị đánh giá thấp: dùng HTTP tiêu chuẩn, hưởng lợi từ CDN, và hoạt động với fetch() qua ReadableStream cũng như EventSource.',
  },
  'sd-028': {
    question:
      'Thiết kế kiến trúc frontend cho ứng dụng SaaS multi-tenant nơi mỗi tenant có branding tùy chỉnh, feature flags, và có thể có UI layouts khác nhau.',
    options: [
      'Tạo deployment riêng cho mỗi tenant',
      'Một codebase duy nhất với tenant context: load cấu hình tenant (branding tokens, enabled features, layout variant) từ API khi khởi tạo app dựa trên subdomain/domain. CSS custom properties cho theming, dịch vụ feature flag cho capabilities, tenant-specific route guards. Tất cả tenants chia sẻ cùng bundle; cấu hình tenant quyết định giao diện và hành vi.',
      'Dùng iframes để nhúng các tenant dashboard khác nhau',
      'Generate một React app build mới cho mỗi tenant khi đăng ký',
    ],
    explanation:
      'Frontend SaaS multi-tenant: (1) Phân giải tenant: subdomain (tenant.app.com) hoặc custom domain → tra cứu cấu hình tenant tại edge. (2) Branding: CSS custom properties được load động từ cấu hình tenant (--color-primary, --logo-url) — không cần file CSS riêng mỗi tenant. (3) Features: dịch vụ feature flag trả về capabilities được bật cho mỗi tenant; components kiểm tra useFeatureFlag(). (4) Layout: cấu hình tenant bao gồm layoutVariant ("sidebar" | "topnav") — component chuyển đổi rendering. (5) Data isolation: tất cả API requests bao gồm tenant ID qua header hoặc JWT claim. Một codebase, vô hạn tenants.',
  },
  'sd-029': {
    question:
      'Bạn sẽ thiết kế chiến lược versioning và phân phối cho một design system được sử dụng bởi hơn 10 đội sản phẩm như thế nào?',
    options: [
      'Tất cả đội luôn dùng phiên bản mới nhất — không cần versioning',
      'Semantic versioning (semver) với chính sách breaking change rõ ràng: major = thay đổi API phá vỡ, minor = components/features mới, patch = sửa lỗi. Phát hành lên npm (private hoặc public), duy trì changelog và hướng dẫn migration, dùng peer deps cho phiên bản React, cung cấp codemods cho major migrations, và hỗ trợ ít nhất phiên bản major N-1.',
      'Dùng git submodules thay vì npm packages',
      'Mỗi đội fork design system và duy trì bản sao riêng',
    ],
    explanation:
      'Chiến lược versioning design system: (1) Semver: major breaks buộc migration — cung cấp codemods tự động (jscodeshift). (2) Changelog: mỗi PR yêu cầu changeset (công cụ Changesets tự động hóa release notes). (3) Chính sách hỗ trợ: hỗ trợ major hiện tại + trước đó; security fixes được backport. (4) Phân phối: npm package với tree-shakeable ESM builds, CSS exports, TypeScript types. (5) Giao tiếp với consumer: quy trình RFC cho breaking change, deprecation warnings trong console trước khi xóa. (6) Visual regression tests (Chromatic) ngăn breaking changes visual ngoài ý muốn ngay cả trong phiên bản minor/patch.',
  },
  'sd-030': {
    question:
      'Chiến lược error boundary ở quy mô lớn trong ứng dụng React lớn là gì, và bạn nên phân tầng chúng như thế nào?',
    options: [
      'Đặt một error boundary tại root app để bắt mọi thứ',
      'Phân tầng boundaries ở nhiều mức độ chi tiết: (1) App-level: bắt crashes, hiển thị lỗi toàn trang; (2) Route-level: fallback cho mỗi trang; (3) Widget-level: cách ly các feature độc lập để một widget crash không kéo sập cả trang; (4) Async boundary: kết hợp với Suspense. Mỗi tầng báo cáo cho Sentry kèm context (route, user, component).',
      'Dùng try/catch bên trong mỗi component thay vì error boundaries',
      'Error boundaries chỉ cần cho thư viện component bên thứ ba',
    ],
    explanation:
      'Hệ thống phân cấp error boundary: App boundary (chi tiết thấp nhất) bắt mọi thứ nhưng hiển thị trang trắng. Tốt hơn: route-level boundaries hiển thị lỗi theo trang với nút "reload". Widget-level boundaries cách ly lỗi feature — widget recommendations bị hỏng không làm crash checkout. Triển khai: tạo ErrorBoundary class component tái sử dụng bọc thư viện react-error-boundary. Mỗi boundary: log vào Sentry với componentStack, thêm breadcrumbs (route, userId, featureFlags). Kết hợp với Suspense cho async: <ErrorBoundary><Suspense fallback><AsyncWidget /></Suspense></ErrorBoundary>.',
  },
  'sd-031': {
    question:
      'BroadcastChannel API là gì và nó hỗ trợ đồng bộ state giữa các tab trình duyệt như thế nào?',
    options: [
      'BroadcastChannel là API streaming TV/radio cho ứng dụng media',
      'BroadcastChannel cho phép các browser contexts cùng origin (tabs, iframes, workers) gửi tin nhắn cho nhau. Dùng để đồng bộ: logout (đóng tất cả tab khi đăng xuất), thay đổi theme, cập nhật giỏ hàng, và thông báo real-time giữa các tab mà không cần round-trip server.',
      'BroadcastChannel thay thế WebSockets cho giao tiếp server',
      'BroadcastChannel chỉ hoạt động giữa các iframes trên cùng một trang',
    ],
    explanation:
      'Cách dùng BroadcastChannel: const channel = new BroadcastChannel("auth"); channel.postMessage({ type: "logout" }); — tất cả tab khác trên cùng origin nhận được. Các pattern triển khai: (1) Auth sync: khi logout, broadcast → tất cả tab chuyển hướng đến /login. (2) Cart sync: item được thêm ở một tab → broadcast → các tab khác cập nhật số lượng giỏ hàng. (3) Settings sync: thay đổi theme lan truyền tức thì. So sánh với localStorage events (storage event) cũng broadcast thay đổi nhưng BroadcastChannel rõ ràng và có cấu trúc hơn. Hoạt động trong Web Workers.',
  },
  'sd-032': {
    question:
      'Sự khác biệt giữa progressive enhancement và graceful degradation như các chiến lược kiến trúc frontend là gì?',
    options: [
      'Chúng là tên đối lập cho cùng một chiến lược',
      'Progressive enhancement: bắt đầu với baseline hoạt động được (HTML, không JS) và xếp lớp cải tiến (CSS, JS) lên trên — chức năng cốt lõi hoạt động mà không cần JavaScript. Graceful degradation: xây dựng trải nghiệm đầy đủ trước, sau đó thêm fallbacks cho khi tính năng không khả dụng. Progressive enhancement kiên cố hơn; graceful degradation thực dụng hơn cho ứng dụng phức tạp.',
      'Progressive enhancement dành cho mobile; graceful degradation dành cho desktop',
      'Graceful degradation nghĩa là vô hiệu hóa tính năng chỉ cho thiết bị chậm',
    ],
    explanation:
      'Triết lý progressive enhancement: HTML form hoạt động không cần JS → thêm JS cho client-side validation và async submission. Hoạt động khi JS lỗi, CDN bị chặn, hoặc người dùng tắt JS. Graceful degradation: xây dựng interactive SPA, sau đó thêm <noscript> fallbacks. Trên thực tế, ứng dụng React 2025 hướng tới progressive enhancement qua: Next.js Server Actions (forms hoạt động không cần client-side JS), HTML buttons ngữ nghĩa (keyboard accessible ngay cả khi CSS lỗi), và feature detection thay vì browser sniffing. Lựa chọn này ảnh hưởng cơ bản đến resilience và accessibility.',
  },
  'sd-033': {
    question:
      'Bạn sẽ thiết kế kiến trúc CDN và chiến lược cache invalidation cho ứng dụng Next.js có cả nội dung tĩnh và động như thế nào?',
    options: [
      'Đặt tất cả responses thành Cache-Control: no-cache để luôn lấy nội dung mới',
      'Caching phân tầng: (1) Static assets (JS/CSS bundles) — tên file có content-hash, immutable cache (max-age=31536000, immutable); (2) Static pages (SSG) — TTL dài với on-demand revalidation (ISR) hoặc purge khi deploy; (3) Dynamic pages — TTL ngắn hoặc stale-while-revalidate; (4) API responses — Vary theo auth state, TTL ngắn hoặc cache tại edge với purge khi mutation.',
      'Dùng một CDN rule duy nhất: cache mọi thứ trong 1 giờ',
      'Bỏ qua CDN cho Next.js — Vercel tự động xử lý caching',
    ],
    explanation:
      'Chiến lược CDN cache theo loại nội dung: (1) JS/CSS bundles: content hash trong tên file → max-age=31536000, immutable — an toàn cache mãi mãi, deploy mới = hash mới. (2) HTML pages: stale-while-revalidate=60, hoặc ISR revalidate on-demand qua revalidatePath(). (3) API responses: Cache-Control: s-maxage=60, stale-while-revalidate=3600 cho dữ liệu public; private cho dữ liệu theo user. (4) Cache invalidation: khi data mutation, gọi CDN purge API (Cloudflare/Vercel purge theo tag). Surrogate-Cache-Control (Vercel) hoặc Cache-Tag (Cloudflare) cho phép tag-based purging chi tiết mà không cần bust toàn bộ cache.',
  },
  'sd-034': {
    question:
      'WebTransport qua HTTP/3 hiện là giải pháp thay thế được khuyến nghị cho WebSockets trong tất cả ứng dụng web real-time production.',
    explanation:
      'WebTransport hứa hẹn cho các use cases ultra-low-latency (gaming, live media) nhờ lợi ích của HTTP/3/QUIC (không bị head-of-line blocking, thiết lập kết nối 0-RTT), nhưng tính đến 2025 nó vẫn chưa được khuyến nghị phổ quát cho tất cả ứng dụng production. Lý do: (1) Hỗ trợ trình duyệt vẫn đang hoàn thiện. (2) Hạ tầng server (hỗ trợ HTTP/3) chưa phổ biến. (3) WebSockets có hệ sinh thái khổng lồ (Socket.io, thư viện ws), độ tin cậy đã được kiểm chứng thực tế, và hoạt động qua hầu hết corporate proxies. Dùng WebTransport cho các kịch bản hiệu năng cao chuyên biệt; dùng WebSockets cho cộng tác real-time và chat tiêu chuẩn.',
  },
  'sd-035': {
    question:
      'Mục đích của Service Worker trong kiến trúc Progressive Web App (PWA) là gì?',
    options: [
      'Một background thread xử lý việc render React component',
      'Một network proxy có thể lập trình chạy trong nền: chặn network requests, phục vụ cached responses khi offline, hỗ trợ background sync, push notifications, và pre-caching assets — giúp ứng dụng có thể cài đặt và hoạt động không cần kết nối mạng.',
      'Một web worker chuyên xử lý các cuộc gọi service API',
      'Một Node.js server process được đóng gói trong ứng dụng',
    ],
    explanation:
      'Khả năng của Service Worker: (1) Network proxy: chặn fetch requests → phục vụ từ cache hoặc network (chiến lược cache-first, network-first qua Workbox). (2) Pre-caching: install event cache app shell — load tức thì khi offline. (3) Background Sync: xếp hàng failed requests, thử lại khi kết nối lại. (4) Push notifications: nhận push events và hiển thị thông báo ngay cả khi app đã đóng. (5) Periodic background sync: cập nhật nội dung trong nền. Service Workers có lifecycle (install → activate → fetch) và scope giới hạn theo origin path. Workbox trừu tượng hóa các chiến lược caching cấp thấp.',
  },
  'sd-036': {
    question:
      'Đoạn code BroadcastChannel này làm gì khi người dùng đăng xuất ở một tab?',
    answer:
      'Khi logout() được gọi ở một tab, nó xóa tokens và broadcast thông điệp LOGOUT. Tất cả tab đang mở khác trên cùng origin nhận thông điệp qua BroadcastChannel listener và cũng được chuyển hướng đến /login — đạt được đăng xuất đồng bộ trên tất cả các tab.',
    explanation:
      'Đây là pattern đồng bộ auth xuyên tab tiêu chuẩn. Tab phát broadcast tự xử lý redirect sau postMessage(). Tất cả tab khác nhận onmessage, xóa local tokens, và redirect. Cleanup trong useEffect đóng channel để tránh memory leaks. Lưu ý: BroadcastChannel chỉ giao tiếp giữa các contexts cùng origin (cùng protocol + domain + port). Tên channel ("auth-sync") phải khớp ở cả hai phía. Pattern này cũng áp dụng cho token refresh — broadcast token mới đến tất cả tab để chúng không kích hoạt refresh riêng.',
  },
  'sd-037': {
    question:
      'Trong kiến trúc micro-frontends dùng Module Federation, tất cả micro-frontends phải sử dụng cùng phiên bản React để tránh lỗi runtime.',
    explanation:
      'Module Federation hỗ trợ chia sẻ dependencies dưới dạng singletons với version negotiation. Bằng cách cấu hình shared: { react: { singleton: true, requiredVersion: "^18.0.0" } }, Module Federation đảm bảo chỉ một React instance chạy, ngay cả khi các MFE khác nhau khai báo phiên bản tương thích hơi khác nhau. Nếu phiên bản không tương thích, nó fallback sang load instances riêng (có thể gây vấn đề với hooks và context). Best practice: dùng singleton: true cho peer dependencies (React, ReactDOM, React Router) và chỉ định requiredVersion. Điều này cho phép nâng cấp phiên bản React dần dần giữa các MFE mà không cần cập nhật big-bang phối hợp.',
  },
  'sd-038': {
    question:
      'Bạn sẽ triển khai hệ thống presence cộng tác real-time (hiển thị ai đang xem/chỉnh sửa) trong ứng dụng frontend như thế nào?',
    options: [
      'Poll server mỗi giây để kiểm tra người dùng đang hoạt động',
      'Dùng kênh presence chuyên dụng (WebSocket hoặc Yjs Awareness): clients gửi heartbeats kèm vị trí cursor và thông tin user; server broadcast cập nhật presence đến tất cả clients đã kết nối. Client duy trì presence map, xóa users sau khi heartbeat timeout. Render cursor/avatar của mỗi user trong UI với smooth interpolation.',
      'Dùng localStorage để lưu trữ active users và kiểm tra định kỳ',
      'Chỉ hiển thị presence khi người dùng chủ động nhấn nút "thông báo presence"',
    ],
    explanation:
      'Kiến trúc hệ thống presence: (1) Kết nối: khi load trang, client tham gia kênh presence (room ID). (2) Heartbeat: client gửi cập nhật presence (userId, name, avatar, vị trí cursor) mỗi 2-5 giây. (3) Server: broadcast trạng thái presence đến tất cả thành viên phòng. (4) Timeout: xóa user khỏi presence map nếu không có heartbeat trong 10-15 giây. (5) UI: render avatars trong toolbar, cursors trên canvas với CSS transitions mượt mà. Yjs Awareness API xử lý tất cả: awareness.setLocalState({ user, cursor }) — tự động đồng bộ đến tất cả peers. Liveblocks và PartyKit cung cấp hạ tầng presence được host sẵn.',
  },
  'sd-039': {
    question:
      'Partial Prerendering (PPR) trong Next.js 15 là gì và nó thay đổi sự đánh đổi giữa SSR và SSG như thế nào?',
    options: [
      'PPR là cách prerender chỉ một nửa component trên trang',
      'PPR render static shell tại build time (tức thì từ CDN) trong khi streaming nội dung động vào các Suspense boundaries tại request time — kết hợp hiệu năng của SSG với độ mới dữ liệu của SSR trong một trang duy nhất, không cần chọn một trong hai.',
      'PPR giống ISR với thời gian revalidation ngắn hơn',
      'PPR chỉ hoạt động với hạ tầng Vercel, không phải Next.js self-hosted',
    ],
    explanation:
      'Kiến trúc PPR: static shell (header, layout, navigation) là HTML được prerender tại build time và phục vụ từ CDN edge với zero server latency. Các phần động (dữ liệu user, nội dung cá nhân hóa, dữ liệu live) được bọc trong <Suspense> boundaries và streaming từ server khi chúng resolve. Trình duyệt nhận static shell ngay lập tức, hiển thị skeleton/loading UI cho phần động, sau đó stream dữ liệu vào. Điều này loại bỏ sự lựa chọn giữa "nhanh nhưng cũ" (SSG) và "mới nhưng chậm" (SSR). Bật theo route: export const experimental_ppr = true trong Next.js 15.',
  },
  'sd-040': {
    question:
      'Bạn sẽ thiết kế kiến trúc frontend cho trang danh sách sản phẩm e-commerce lưu lượng cao cần cân bằng giữa SEO, hiệu năng, và inventory/pricing real-time như thế nào?',
    options: [
      'Full client-side rendering với useEffect data fetching',
      'Hybrid PPR hoặc ISR: prerender product grid và nội dung tĩnh (quan trọng cho SEO) tại build time / với chu kỳ revalidation ngắn. Stream hoặc client-fetch badges inventory/price real-time riêng biệt. Edge caching cho static shell, CDN cache tags theo sản phẩm cho invalidation có mục tiêu khi stock thay đổi.',
      'Server-side render mỗi request để luôn hiển thị dữ liệu mới',
      'Dùng static site riêng cho SEO và SPA cho người dùng đã đăng nhập',
    ],
    explanation:
      'Kiến trúc trang danh sách e-commerce: (1) Product grid: ISR (revalidate: 60) — pre-rendered với tên/hình ảnh sản phẩm phục vụ từ CDN, tốt cho SEO crawlers. (2) Pricing: client-fetched hoặc streamed riêng — giá thay đổi thường xuyên, có thể khác theo nhóm user, không nên chặn page render. (3) Inventory badges ("Chỉ còn 3"): streamed RSC hoặc client SWR với TTL ngắn. (4) Cache invalidation: tag product pages theo category/productId → purge khi inventory cập nhật qua webhook. (5) A/B testing: edge middleware chia traffic trước khi HTML được render, không flickering phía client.',
  },
}
