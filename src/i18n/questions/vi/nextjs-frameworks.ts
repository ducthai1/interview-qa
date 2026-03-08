import type { QuestionTranslationMap } from '../types'

export const nextjsFrameworksVi: QuestionTranslationMap = {
  'nf-001': {
    question:
      'Trong Next.js App Router, file nào tạo một layout UI dùng chung bao bọc tất cả các trang trong một route segment?',
    options: ['_app.tsx', 'layout.tsx', 'template.tsx', 'wrapper.tsx'],
    explanation:
      'layout.tsx định nghĩa một khung UI bao bọc tất cả các trang trong một thư mục và được giữ lại khi điều hướng (state được bảo toàn). template.tsx tương tự nhưng tạo instance mới mỗi lần điều hướng, làm mất state. _app.tsx là tương đương trong Pages Router.',
  },
  'nf-002': {
    question:
      'Trong Next.js App Router, tất cả các component bên trong thư mục app/ mặc định là Server Components.',
    explanation:
      'Next.js App Router mặc định tất cả component là React Server Components (RSC). Để sử dụng client-side rendering với hooks, browser API, hoặc event listener, bạn phải thêm "use client" ở đầu file.',
  },
  'nf-003': {
    question:
      'File nào trong Next.js xử lý lỗi trong một route segment và các segment con của nó, hiển thị UI dự phòng?',
    options: ['not-found.tsx', 'error.tsx', 'fallback.tsx', 'catch.tsx'],
    explanation:
      'error.tsx là một component Error Boundary bắt các lỗi runtime trong một segment. Nó phải là Client Component ("use client") vì Error Boundary cần lifecycle methods. not-found.tsx xử lý riêng trạng thái 404.',
  },
  'nf-004': {
    question:
      'Trong hệ thống file-based routing của Next.js App Router, bạn tạo dynamic route segment cho bài blog theo ID như thế nào?',
    options: [
      'app/blog/:id/page.tsx',
      'app/blog/[id]/page.tsx',
      'app/blog/{id}/page.tsx',
      'app/blog/$id/page.tsx',
    ],
    explanation:
      'Next.js sử dụng dấu ngoặc vuông cho dynamic segment. [id] tạo một dynamic segment trong đó giá trị được truyền qua params.id trong page component. Với catch-all route dùng [...slug], với optional catch-all dùng [[...slug]].',
  },
  'nf-005': {
    question:
      'Sự khác biệt giữa SSG (Static Site Generation) và ISR (Incremental Static Regeneration) trong Next.js là gì?',
    options: [
      'SSG tạo trang tại thời điểm build; ISR cho phép trang được tái tạo sau khi deploy theo lịch trình dựa trên thời gian hoặc theo yêu cầu',
      'SSG dành cho trang động; ISR dành cho trang tĩnh',
      'SSG sử dụng getServerSideProps; ISR sử dụng getStaticProps',
      'ISR chỉ khả dụng trong Pages Router, không có trong App Router',
    ],
    explanation:
      'SSG build trang tại thời điểm build (next build). ISR thêm cơ chế revalidation: trong App Router thông qua tùy chọn fetch cache hoặc route segment config, trang được tái tạo ngầm sau khoảng thời gian revalidate. On-demand ISR (revalidatePath/revalidateTag) cho phép bạn kích hoạt tái tạo qua API.',
  },
  'nf-006': {
    question:
      'Trang Next.js App Router này sử dụng chiến lược rendering nào?',
    answer:
      'ISR (Incremental Static Regeneration) — trang được tạo tĩnh và revalidate mỗi 60 giây.',
    explanation:
      'Thiết lập revalidate = 60 ở cấp route segment và sử dụng next: { revalidate: 60 } trên fetch kích hoạt ISR. Trang được tạo tĩnh tại thời điểm build và được cache. Sau 60 giây, request tiếp theo kích hoạt tái tạo ngầm. Cấu hình revalidate của segment và tùy chọn fetch phải nhất quán.',
  },
  'nf-007': {
    question:
      'Server Actions trong Next.js là gì và chúng được gọi như thế nào?',
    options: [
      'Các API route phía server được truy cập qua fetch()',
      'Các hàm async được đánh dấu "use server" chạy trên server và có thể được gọi trực tiếp từ Client hoặc Server Components, cho phép gửi form và thực hiện mutation mà không cần API route riêng',
      'Các hàm middleware của Next.js chạy trên Edge',
      'Server-sent events dùng cho cập nhật thời gian thực',
    ],
    explanation:
      'Server Actions là các hàm async với directive "use server". Chúng có thể được gọi từ <form action={serverAction}>, gọi trực tiếp trong Client Components (import từ file "use server"), hoặc kích hoạt bằng code. Chúng tự động xử lý bảo vệ CSRF và chỉ chạy trên server.',
  },
  'nf-008': {
    question:
      'Next.js Middleware cho phép bạn làm gì và nó chạy ở đâu?',
    options: [
      'Chạy code Node.js trước khi render; chạy trong Node.js runtime',
      'Chặn và chỉnh sửa request/response trước khi chúng đến trang; chạy trên Edge runtime ở cấp CDN trước khi request đến server',
      'Thêm CSS style toàn cục cho tất cả các trang',
      'Định nghĩa connection pooling cho database của API routes',
    ],
    explanation:
      'Middleware (middleware.ts ở thư mục gốc dự án) chạy trên Edge Runtime, giúp nó cực kỳ nhanh và phân tán toàn cầu. Nó có thể rewrite URL, redirect, thêm header, xác thực, và A/B test. Vì chạy trên Edge nên không có Node.js API — chỉ sử dụng Web API.',
  },
  'nf-009': {
    question:
      'Trong Next.js App Router, file loading.tsx tự động bọc trang trong một React Suspense boundary.',
    explanation:
      'loading.tsx tạo trạng thái loading tức thì hiển thị trong khi nội dung trang được stream. Next.js tự động bọc nó trong <Suspense>, nên bạn không cần thêm Suspense thủ công quanh page.tsx. Layout vẫn tương tác được trong khi trang đang tải.',
  },
  'nf-010': {
    question:
      'Bạn định nghĩa metadata (title, description, og:image) trong trang Next.js App Router như thế nào?',
    options: [
      'Sử dụng component <Head> từ next/head',
      'Export một object metadata hoặc hàm generateMetadata từ file page/layout',
      'Thêm thẻ meta trực tiếp trong JSX trả về',
      'Sử dụng cấu hình headers trong next.config.js',
    ],
    explanation:
      'App Router sử dụng Metadata API: export const metadata = { title: \'...\', description: \'...\' } cho metadata tĩnh, hoặc export async function generateMetadata({ params }) cho metadata động (ví dụ: dùng params của trang để fetch tiêu đề bài viết). Component <Head> chỉ dành cho Pages Router.',
  },
  'nf-011': {
    question:
      'Parallel Routes trong Next.js App Router là gì và chúng giải quyết vấn đề gì?',
    options: [
      'Nhiều API route chạy song song để tăng hiệu suất',
      'Các named slot (quy ước @folder) cho phép render nhiều trang đồng thời trong cùng một layout — hỗ trợ dashboard, modal, và giao diện chia đôi, mỗi slot có trạng thái loading/error độc lập',
      'Fetch dữ liệu song song trong getServerSideProps',
      'Chạy nhiều hàm middleware đồng thời',
    ],
    explanation:
      'Parallel Routes sử dụng quy ước @slotName trong thư mục app. Một layout nhận nhiều slot dưới dạng props: function Layout({ children, analytics, team }). Mỗi slot độc lập với loading.tsx, error.tsx, và trạng thái điều hướng riêng. Phù hợp cho dashboard hoặc auth modal phủ lên trang hiện tại.',
  },
  'nf-012': {
    question:
      'Intercepting Routes trong Next.js là gì và khi nào bạn nên sử dụng?',
    options: [
      'Route chặn điều hướng để xác thực',
      'Route chặn một điều hướng để render trang khác trong ngữ cảnh hiện tại (ví dụ: hiển thị ảnh trong modal trong khi giữ trang gallery ở nền, với URL /photos/[id] có thể chia sẻ)',
      'Middleware chặn các API call',
      'Route bắt lỗi 404',
    ],
    explanation:
      'Intercepting Routes (quy ước (..), (.), ((..))) cho phép bạn chặn một route trong layout hiện tại. Trường hợp sử dụng kinh điển: nhấp vào ảnh hiển thị trong modal (intercepted route) nhưng truy cập trực tiếp /photos/[id] hiển thị toàn trang. Kết hợp với Parallel Routes để tạo pattern modal với chia sẻ URL.',
  },
  'nf-013': {
    question:
      'Server Action trong Next.js này có vấn đề bảo mật. Hãy xác định nó.',
    answer:
      'Không có kiểm tra phân quyền — bất kỳ người dùng nào (đã hoặc chưa xác thực) đều có thể xóa bất kỳ bài viết nào bằng cách gọi action này với bất kỳ postId nào.',
    explanation:
      'Server Actions là các endpoint công khai. Luôn xác thực: (1) người dùng đã xác thực (kiểm tra session), (2) họ sở hữu tài nguyên hoặc có quyền. Thêm: const session = await getSession(); if (!session || session.userId !== post.authorId) throw new Error("Unauthorized"). Không bao giờ tin tưởng ID do client cung cấp mà không xác minh quyền sở hữu.',
  },
  'nf-014': {
    question:
      'Sự khác biệt kiến trúc chính giữa Next.js App Router và Remix trong cách xử lý data loading là gì?',
    options: [
      'Next.js sử dụng REST; Remix sử dụng GraphQL',
      'Next.js đặt data fetching bên trong async Server Components (fetch trong component tree); Remix sử dụng loader/action ở cấp route chạy trước khi render, cho phép tải dữ liệu song song ở cấp route',
      'Remix hỗ trợ SSR; Next.js chỉ hỗ trợ SSG',
      'Next.js có ORM database tích hợp; Remix thì không',
    ],
    explanation:
      'Next.js App Router: dữ liệu được fetch bên trong async server component, có thể xảy ra Request Waterfall nếu không dùng parallel fetch. Remix: mỗi route export một loader() chạy phía server; Remix chạy tất cả loader cho các route khớp song song trước khi render, sau đó truyền dữ liệu qua useLoaderData(). Cả hai đều hỗ trợ streaming nhưng với mô hình tư duy khác nhau.',
  },
  'nf-015': {
    question:
      'Hành vi rendering của trang Next.js này là gì và cấu hình "force-dynamic" làm gì?',
    answer:
      'force-dynamic biến trang này thành trang SSR hoàn toàn động, chạy trên mỗi request, không bao giờ cache kết quả, và không sử dụng static generation.',
    explanation:
      'dynamic = "force-dynamic" tương đương với getServerSideProps trong Pages Router. Nó vô hiệu hóa mọi caching cho route. Cần thiết cho các trang đọc dữ liệu tại thời điểm request (cookies, headers, session, search params). Nếu không có nó, Next.js sẽ cố gắng tạo trang tĩnh khi có thể.',
  },
  'nf-016': {
    question:
      'Bạn nên sử dụng component nào của Next.js để điều hướng phía client giữa các trang?',
    options: [
      '<a href="/about">',
      '<Link href="/about">',
      '<Navigate to="/about">',
      '<router-link to="/about">',
    ],
    explanation:
      'Next.js <Link> từ "next/link" cho phép điều hướng phía client với prefetching. Nó ngăn tải lại toàn bộ trang, prefetch các trang liên kết trong viewport, và bảo toàn React state. Thẻ <a> thông thường gây tải lại toàn bộ trang.',
  },
  'nf-017': {
    question:
      'Trong Next.js App Router, bạn có thể sử dụng cookies() và headers() từ "next/headers" trong Server Components mà không cần bất kỳ props nào.',
    explanation:
      'next/headers cung cấp hàm cookies() và headers() đọc dữ liệu request đến trong Server Components và Server Actions. Chúng là async trong Next.js 15 (await cookies()). Sử dụng chúng trong component khiến nó được render động vì chúng phụ thuộc vào từng request.',
  },
  'nf-018': {
    question:
      'Next.js Partial Prerendering (PPR) là gì và tại sao nó có ý nghĩa về mặt kiến trúc?',
    options: [
      'Chỉ render một phần trang trên thiết bị di động',
      'Mô hình rendering kết hợp nội dung tĩnh và động trong một request duy nhất: shell tĩnh được phục vụ ngay lập tức từ CDN, trong khi các phần động được stream đồng thời — loại bỏ sự lựa chọn giữa SSG và SSR',
      'Chia trang thành nhiều trang nhỏ hơn để tăng hiệu suất',
      'Render trang tĩnh xen kẽ theo mô hình luân phiên',
    ],
    explanation:
      'PPR (thử nghiệm trong Next.js 14+, phát triển thêm trong 15) sử dụng Suspense boundary của React để xác định nội dung động. Shell tĩnh bên ngoài (navigation, layout) được prerender lên CDN. Nội dung động (dữ liệu theo người dùng) được stream từ server trong cùng HTTP response. Điều này mang lại tốc độ CDN cho lần tải đầu tiên kết hợp nội dung động theo từng request.',
  },
  'nf-019': {
    question:
      'Next.js xử lý ranh giới "server/client" của React Server Component như thế nào và quy tắc truyền dữ liệu qua ranh giới đó là gì?',
    options: [
      'Bạn có thể truyền bất kỳ giá trị JavaScript nào làm props từ Server sang Client Components',
      'Chỉ các giá trị serializable (string, number, array, plain object, Date) mới có thể truyền qua ranh giới server/client làm props; function, class instance, và các object không serializable thì không',
      'Server Components chỉ có thể truyền string nguyên thủy sang Client Components',
      'Props được tự động serialize qua JSON.stringify cho mọi kiểu dữ liệu',
    ],
    explanation:
      'Giao thức RSC serialize props để truyền từ server sang client qua mạng. Các kiểu serializable hoạt động: primitives, object tương thích JSON, React element (được xử lý đặc biệt). Các kiểu không serializable sẽ lỗi: function thông thường (dùng Server Actions thay thế), class instance, Map/Set, closure. Đây là lý do bạn đôi khi thấy lỗi "Failed to serialize".',
  },
  'nf-020': {
    question:
      'Trong Next.js App Router, directive "use cache" (thử nghiệm) là gì và nó khác với fetch cache như thế nào?',
    options: [
      '"use cache" giống như thêm next: { revalidate } vào fetch',
      '"use cache" là directive mới (Next.js 15 canary) cho phép caching ở cấp function/component, không chỉ fetch call — bạn có thể cache bất kỳ async computation nào với revalidation tag có thể cấu hình',
      '"use cache" vô hiệu hóa mọi caching cho một function',
      '"use cache" là wrapper cho browser Cache API',
    ],
    explanation:
      '"use cache" (tiền thân là unstable_cache) cho phép đánh dấu bất kỳ hàm async nào là cacheable. Khác với fetch cache chỉ hoạt động cho HTTP request, "use cache" hoạt động cho database query, kết quả tính toán, hoặc bất kỳ thao tác async nào. Kết hợp với cacheTag() và cacheLife() để kiểm soát chi tiết. Là một phần của mô hình caching mở rộng trong Next.js 15.',
  },
  'nf-021': {
    question:
      'Hàm generateStaticParams trong Next.js App Router làm gì?',
    options: [
      'Tạo kiểu TypeScript cho route params',
      'Tạo trước các trang tĩnh cho dynamic route tại thời điểm build bằng cách trả về tất cả giá trị param có thể',
      'Xác thực tham số URL tại runtime',
      'Tạo URL search params cho API route',
    ],
    explanation:
      'generateStaticParams thay thế getStaticPaths từ Pages Router. Nó trả về một mảng các object param mà Next.js sử dụng để tạo tĩnh tất cả các trang có thể cho dynamic route tại thời điểm build. Ví dụ: với [id], trả về [{id: "1"}, {id: "2"}] sẽ tạo /products/1 và /products/2 tại thời điểm build.',
  },
  'nf-022': {
    question:
      'Mô hình nested routing của Remix khác với nested layout của Next.js App Router như thế nào?',
    options: [
      'Chúng giống hệt nhau — cả hai dùng cùng quy ước file-based',
      'Nested route của Remix tự động scope CSS; Next.js thì không',
      'Nested route của Remix kết hợp layout + data loading + action trong một route module duy nhất với tự động outlet composition; Next.js tách riêng layout.tsx (UI) khỏi page.tsx (nội dung) với data fetching độc lập trong mỗi component',
      'Next.js hỗ trợ lồng sâu hơn Remix',
    ],
    explanation:
      'Trong Remix, một route file định nghĩa layout, loader, action, và error boundary cùng nhau — route là đơn vị composition. Next.js tách biệt các mối quan tâm: layout.tsx cho UI cố định, page.tsx cho nội dung, mỗi cái fetch dữ liệu độc lập dưới dạng RSC. Mô hình của Remix khuyến khích kết hợp chặt hơn giữa dữ liệu và UI ở cấp route.',
  },
  'nf-023': {
    question:
      'Component Image của Next.js (next/image) tự động phục vụ định dạng WebP/AVIF và thay đổi kích thước ảnh cho các viewport khác nhau.',
    explanation:
      'next/image tối ưu hóa ảnh theo yêu cầu: chuyển đổi sang WebP/AVIF dựa trên hỗ trợ trình duyệt, thay đổi kích thước theo kích thước được yêu cầu, lazy load mặc định, và ngăn Cumulative Layout Shift (CLS) qua props width/height bắt buộc hoặc prop fill. Điều này cải thiện đáng kể LCP và hiệu suất tổng thể.',
  },
  'nf-024': {
    question:
      'Đầu ra/hành vi của middleware Next.js này là gì?',
    answer:
      'Các request chưa xác thực đến /dashboard/* bị redirect sang /login. Các request đã xác thực tiếp tục bình thường. Matcher giới hạn middleware chỉ chạy trên các route /dashboard.',
    explanation:
      'Cấu hình matcher đảm bảo middleware chỉ chạy trên /dashboard và các sub-path của nó, không phải mọi route (hiệu suất). Middleware kiểm tra cookie auth-token và redirect sang /login nếu thiếu. NextResponse.next() cho phép request đã xác thực đi qua. Đây là pattern auth guard tiêu chuẩn trong Next.js.',
  },
  'nf-025': {
    question:
      'File nào trong Next.js App Router xử lý request đến URL path không khớp với bất kỳ route nào hiện có?',
    options: ['404.tsx', 'error.tsx', 'not-found.tsx', 'catch-all.tsx'],
    explanation:
      'not-found.tsx render khi notFound() được gọi từ server component hoặc khi route không khớp. Bạn có thể có app/not-found.tsx ở gốc cho 404 toàn cục và các file not-found.tsx lồng nhau cho từng segment cụ thể. Hàm notFound() có thể được gọi bất kỳ đâu trong server code để kích hoạt nó.',
  },
  'nf-026': {
    question:
      'Các tính năng mới chính trong Next.js 15 so với Next.js 14 là gì?',
    options: [
      'Next.js 15 đã loại bỏ App Router để thay bằng Pages Router 2.0 mới',
      'Next.js 15 đi kèm Turbopack ổn định cho dev server, hỗ trợ React 19, async request API (cookies/headers trả về Promise), và thay đổi mặc định caching thành không cache cho fetch và Route Handlers',
      'Next.js 15 thay thế Server Components bằng kiến trúc Server Islands mới',
      'Next.js 15 bỏ hỗ trợ TypeScript để chuyển sang kiểu JSDoc',
    ],
    explanation:
      'Điểm nổi bật của Next.js 15: Turbopack ổn định cho next dev (HMR nhanh hơn). Hỗ trợ React 19 (hooks mới, Actions cải tiến). Thay đổi breaking: cookies(), headers(), params, và searchParams giờ là async — phải await. Caching mặc định thay đổi: fetch() và Route Handlers không còn được cache mặc định (dễ đoán hơn). API after() mới cho công việc sau response.',
  },
  'nf-027': {
    question:
      'Bạn tạo Route Handler trong Next.js App Router phản hồi request GET như thế nào?',
    options: [
      'Tạo pages/api/route.ts và export default handler',
      'Tạo app/api/[path]/route.ts và export hàm async có tên GET(request)',
      'Tạo app/api/[path]/handler.ts và export default GET',
      'Tạo app/api/[path]/page.ts và thêm export getServerSideProps',
    ],
    explanation:
      'Route Handlers nằm trong thư mục app dưới dạng file route.ts. Export các hàm HTTP method có tên: export async function GET(request: NextRequest) { return NextResponse.json({ data }) }. Các export được hỗ trợ: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. Nhiều method có thể cùng tồn tại trong một file route.ts. Chúng thay thế pages/api/* từ Pages Router.',
  },
  'nf-028': {
    question:
      'Route Handler Next.js này làm gì và hành vi caching của nó trong Next.js 15 là gì?',
    answer:
      'Trả về thời gian server hiện tại dưới dạng JSON. Trong Next.js 15, đây là dynamic mặc định (không cache) — mỗi request trả về thời gian mới. Trong Next.js 14, GET Route Handlers được cache tĩnh trừ khi opt out.',
    explanation:
      'Next.js 15 thay đổi caching mặc định cho Route Handlers: giờ chúng là dynamic (không cache) mặc định. Trong Next.js 14, GET Route Handler không có cookies/headers/dynamic function được cache tĩnh tại thời điểm build. Thay đổi breaking này trong v15 giúp hành vi trực quan hơn — endpoint như /api/time trả về dữ liệu mới mỗi request mà không cần export const dynamic = "force-dynamic".',
  },
  'nf-029': {
    question:
      'Bốn tầng caching riêng biệt trong Next.js App Router là gì và mỗi tầng cache cái gì?',
    options: [
      'Chỉ có một cache thống nhất trong Next.js',
      'Request Memoization (loại trùng lặp trong từng request), Data Cache (cache fetch bền vững qua các request), Full Route Cache (HTML+RSC payload đã render tại thời điểm build/revalidate), Router Cache (cache segment đã prefetch phía client)',
      'Browser cache, CDN cache, server cache, và database cache',
      'Static cache, dynamic cache, ISR cache, và edge cache',
    ],
    explanation:
      'Next.js có bốn cache: (1) Request Memoization: loại trùng các lệnh fetch() giống nhau trong cùng render tree mỗi request. (2) Data Cache: cache phía server bền vững cho response fetch(), tồn tại qua các request/deployment, được revalidate qua revalidateTag/revalidatePath. (3) Full Route Cache: HTML đã render và RSC payload được cache trên server tại thời điểm build/revalidate. (4) Router Cache: cache trong bộ nhớ phía client của các route segment đã truy cập/prefetch cho điều hướng quay lại tức thì.',
  },
  'nf-030': {
    question:
      'Sự khác biệt giữa revalidatePath và revalidateTag trong cơ chế on-demand revalidation của Next.js là gì?',
    options: [
      'revalidatePath dành cho Pages Router; revalidateTag dành cho App Router',
      'revalidatePath vô hiệu hóa tất cả dữ liệu cache cho một URL path cụ thể; revalidateTag vô hiệu hóa tất cả lệnh fetch() được gắn tag cache cụ thể — chi tiết hơn và có thể tái sử dụng trên nhiều path',
      'revalidateTag nhanh hơn revalidatePath cho trang tĩnh',
      'Chúng giống hệt nhau — dùng cái nào cũng được',
    ],
    explanation:
      'revalidatePath("/products") xóa tất cả entry Data Cache cho URL đó. revalidateTag("products") vô hiệu hóa tất cả lệnh fetch() sử dụng tùy chọn next: { tags: ["products"] } trên bất kỳ route nào. Tag mạnh hơn: một lệnh revalidateTag("products") duy nhất có thể vô hiệu hóa dữ liệu dùng chung giữa /products, /products/[id], và widget sản phẩm trên /home đồng thời.',
  },
  'nf-031': {
    question:
      'Module next/font loại bỏ layout shift từ font tùy chỉnh bằng cách tự động inline CSS variable kích thước font và sử dụng font-display: swap.',
    explanation:
      'Phát biểu này sai vì next/font KHÔNG hoạt động bằng cách "inline CSS variable kích thước font." Nó tạo class CSS scoped với khai báo font-family, tự host font (bao gồm Google Fonts), và thêm preload link. Giá trị mặc định của font-display là `swap` (không phải tùy chọn). Phần "CSS variable kích thước font" trong câu hỏi là khẳng định sai — next/font sử dụng CSS variable cho tên font-family, không phải kích thước font.',
  },
  'nf-032': {
    question:
      'Prop bắt buộc nào của next/image giúp ngăn Cumulative Layout Shift (CLS)?',
    options: [
      'priority',
      'loading="eager"',
      'width và height (hoặc prop fill với parent đã định vị)',
      'placeholder="blur"',
    ],
    explanation:
      'next/image yêu cầu hoặc props width + height rõ ràng, hoặc prop fill (yêu cầu position: relative/absolute/fixed trên parent). Điều này cho phép trình duyệt dành chỗ trước khi ảnh tải, ngăn CLS. Nếu không có chúng, trình duyệt không biết kích thước ảnh và không thể phân bổ không gian layout — gây nhảy nội dung khi ảnh tải.',
  },
  'nf-033': {
    question:
      'Mối quan hệ giữa Partial Prerendering của Next.js với Suspense của React là gì và làm thế nào để opt-in component vào render động trong PPR?',
    options: [
      'PPR không liên quan đến Suspense — nó sử dụng cơ chế streaming riêng',
      'PPR sử dụng Suspense boundary để xác định phân chia động/tĩnh: shell tĩnh render đến boundary, sau đó mỗi Suspense boundary chứa nội dung động (dùng cookies, headers, hoặc uncached fetch) được điền động. Bọc nội dung động trong <Suspense> là cách bạn opt-in vào dynamic hole của PPR.',
      'Bạn opt-in PPR qua export const ppr = true trong file page',
      'PPR render tất cả Suspense boundary tĩnh và stream nội dung ngoài Suspense động',
    ],
    explanation:
      'PPR sử dụng React Suspense làm marker ranh giới. Mọi thứ ngoài Suspense boundary được prerender tĩnh lên CDN. Mỗi <Suspense fallback={...}> bọc nội dung động (component đọc cookies/headers hoặc dùng uncached fetch) trở thành "lỗ" được stream động. Fallback được bao gồm trong HTML tĩnh. Bật với experimental: { ppr: true } trong next.config, và PPR: true tại route segment.',
  },
  'nf-034': {
    question:
      'Bạn triển khai middleware xác thực trong Next.js như thế nào để redirect người dùng chưa xác thực và giữ lại URL đích?',
    options: [
      'Dùng getServerSideProps trong mọi trang được bảo vệ để kiểm tra xác thực',
      'Trong middleware.ts, đọc auth token, redirect sang /login?redirect=[current-path] nếu thiếu, sau đó trong trang login đọc redirect param và điều hướng sau khi xác thực thành công — tất cả chạy trên Edge trước khi trang render',
      'Bọc tất cả trang được bảo vệ trong component AuthGuard phía client sử dụng useEffect để redirect',
      'Dùng Next.js rewrites trong next.config.js để trỏ route được bảo vệ đến endpoint login',
    ],
    explanation:
      'Pattern xác thực middleware: const url = request.nextUrl; if (!token) { url.pathname = "/login"; url.searchParams.set("redirect", request.nextUrl.pathname); return NextResponse.redirect(url) }. Điều này giữ lại URL đích. Sau khi login, server action/handler đọc searchParams.get("redirect") và gọi redirect(). Middleware chạy trên Edge trước khi bất kỳ trang nào render — không có flash nội dung được bảo vệ.',
  },
  'nf-035': {
    question:
      'Trong Next.js App Router, parallel route được định nghĩa với quy ước @folder bắt buộc phải có file default.tsx để xử lý trạng thái slot không khớp.',
    explanation:
      'Khi sử dụng parallel route (@analytics, @team), Next.js cần default.tsx trong mỗi slot để xử lý trường hợp slot không có trang khớp cho URL hiện tại. Nếu không có default.tsx, điều hướng đến URL khớp với slot chính nhưng không khớp parallel slot sẽ gây lỗi 404. default.tsx đóng vai trò fallback rendering cho các parallel route slot không khớp trong quá trình điều hướng.',
  },
  'nf-036': {
    question:
      'Pattern nào được intercepting route Next.js này triển khai và hành vi UX là gì?',
    answer:
      'Nhấp vào ảnh từ /feed mở nó trong modal (intercepting route) trong khi /feed vẫn hiển thị ở nền. Truy cập trực tiếp /photos/[id] hoặc refresh hiển thị chế độ xem ảnh toàn trang. URL cập nhật thành /photos/[id] trong cả hai trường hợp.',
    explanation:
      'Intercepting route với (.) chặn route cùng cấp. Kết hợp với @modal parallel route slot, điều này triển khai pattern kiểu Instagram: soft navigation từ trong feed chặn và hiển thị ảnh trong overlay (modal), nhưng hard navigation hoặc refresh truy cập trực tiếp /photos/[id] cho chế độ xem toàn trang. URL luôn là /photos/[id] — có thể chia sẻ và crawl được.',
  },
  'nf-037': {
    question:
      'Trong Remix, sự khác biệt giữa loader và action là gì, và chúng được gọi như thế nào?',
    options: [
      'loader dành cho request GET (fetch dữ liệu), action dành cho POST/PUT/DELETE (mutation). loader chạy trước khi render và cung cấp dữ liệu qua useLoaderData(); action xử lý form submission và được kích hoạt bởi <Form method="post"> hoặc fetcher.submit()',
      'loader chạy trên client; action chạy trên server',
      'action là tương đương của getServerSideProps trong Remix',
      'loader được cache; action luôn bỏ qua cache',
    ],
    explanation:
      'Export route module của Remix: export async function loader({ request, params }) — chạy khi GET, trả về dữ liệu sử dụng bởi useLoaderData(). export async function action({ request, params }) — chạy khi form submission không phải GET, xử lý mutation, trả về redirect hoặc dữ liệu sử dụng bởi useActionData(). Cả hai chỉ chạy phía server. Remix chạy tất cả loader cho các route khớp song song khi điều hướng.',
  },
  'nf-038': {
    question:
      'Turbopack cung cấp gì trong Next.js 15 và nó khác với webpack như thế nào?',
    options: [
      'Turbopack chỉ là bundler CSS; webpack xử lý JavaScript',
      'Turbopack là bundler tăng dần viết bằng Rust thay thế webpack cho dev server (next dev --turbo). Nó sử dụng caching cấp function để chỉ tính toán lại subgraph module đã thay đổi — mang lại HMR và cold start nhanh hơn đáng kể trên codebase lớn so với bundling bằng JavaScript của webpack',
      'Turbopack là bundler production; webpack giữ lại cho development',
      'Turbopack yêu cầu di chuyển hoàn toàn khỏi cấu hình webpack bao gồm next.config.js',
    ],
    explanation:
      'Turbopack (ổn định trong Next.js 15 cho dev) được viết bằng Rust và sử dụng tính toán tăng dần chi tiết: chỉ các module trong subgraph phụ thuộc của file thay đổi được tính toán lại. Trên ứng dụng lớn với hàng nghìn module, HMR có thể nhanh hơn webpack 10 lần. Next.js 15 ổn định hóa --turbopack cho next dev. Build production vẫn dùng webpack mặc định (Turbopack production đang phát triển). Plugin webpack hiện tại trong next.config.js có thể không tương thích.',
  },
  'nf-039': {
    question:
      'Middleware Next.js này có vấn đề gây vòng lặp redirect vô hạn. Hãy tìm nó.',
    answer:
      'Matcher bao gồm cả /login — người dùng chưa xác thực bị redirect sang /login, trang này cũng chạy middleware, redirect lại sang /login, tạo vòng lặp vô hạn.',
    explanation:
      'Matcher bắt tất cả route trừ các resource nội bộ Next.js, nhưng /login không được loại trừ. Khi người dùng chưa xác thực truy cập /login, middleware redirect họ sang /login, lại kích hoạt middleware — vòng lặp vô hạn. Sửa: thêm /login vào pattern loại trừ: matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"] hoặc kiểm tra pathname đã là /login trước khi redirect.',
  },
  'nf-040': {
    question:
      'Lợi thế kiến trúc chính của nested route trong Remix so với routing đơn cấp truyền thống là gì?',
    options: [
      'Nested route tải nhanh hơn vì chúng sử dụng HTTP/2 multiplexing',
      'Nested route của Remix cho phép co-located data loading, error boundary, và pending state tại mỗi cấp layout — loader của route cha chạy song song với loader con, và mỗi cấp xử lý lỗi và trạng thái loading của riêng mình mà không cần prop drilling',
      'Nested route trong Remix tự động code-split theo cấp route',
      'Nested route của Remix sử dụng GraphQL fragment cho hierarchical data fetching',
    ],
    explanation:
      'Nested routing là đổi mới cốt lõi của Remix: mỗi route khớp trong phân cấp URL chạy loader song song (không waterfall). Mỗi route có ErrorBoundary và pending state riêng, nên route con lỗi không làm hỏng layout cha. Điều này ánh xạ tự nhiên vào phân cấp UI: shell dashboard giữ nguyên trong khi panel bên trong lỗi hoặc tải độc lập — điều mà các framework khác cần quản lý state phức tạp.',
  },
  'nf-041': {
    question:
      'Trong Next.js App Router với React 19, form Actions mới của React tích hợp với Server Actions như thế nào?',
    options: [
      'Form Actions của React 19 chỉ hoạt động với state phía client — không thể gọi server function',
      'React 19 cho phép truyền Server Action trực tiếp làm prop action của form: <form action={serverAction}>. Trình duyệt gửi form nguyên bản (hoạt động không cần JS), và React nâng cao với progressive enhancement, useFormStatus() cho pending state, và useActionState() cho kết quả action',
      'Actions của React 19 yêu cầu bọc trong startTransition() để tích hợp server',
      'Form Actions trong React 19 thay thế useEffect cho data fetching trong mọi trường hợp',
    ],
    explanation:
      'React 19 + Next.js Server Actions: <form action={myServerAction}> hoạt động không cần JavaScript (native form submission) và được React nâng cao khi JS tải. Hook mới: useFormStatus() trả về { pending, data, method } cho bất kỳ component nào bên trong form (không cần prop drilling cho pending state). useActionState(action, initialState) quản lý state server action — thay thế pattern useState + server action. Điều này cho phép progressive enhancement thực sự.',
  },
  'nf-042': {
    question:
      'Routing i18n (quốc tế hóa) trong middleware Next.js là gì và bạn phát hiện locale của người dùng như thế nào?',
    options: [
      'Dùng thuộc tính i18n trong next.config.js để định nghĩa locale và Next.js tự động route đến /[locale]/page',
      'Trong middleware.ts, đọc header Accept-Language hoặc locale cookie, sau đó rewrite/redirect đến path có prefix locale (ví dụ: /en/about hoặc /fr/about) — cho bạn toàn quyền kiểm soát chiến lược phát hiện locale và routing',
      'Cài next-i18next và bọc trang trong HOC serverSideTranslations',
      'Phát hiện locale chỉ hoạt động trong Client Components sử dụng browser navigator.language API',
    ],
    explanation:
      'i18n App Router Next.js hiện đại: cấu hình i18n của App Router đã bị loại bỏ; cách tiếp cận được khuyến nghị là routing dựa trên middleware. Middleware đọc header Accept-Language (sử dụng negotiator hoặc @formatjs/intl-localematcher), kiểm tra locale cookie, sau đó rewrite đến /[locale]/path. Dynamic segment [locale] được tạo trong app/[lang]/layout.tsx. Các thư viện như next-intl và Paraglide.js xây dựng trên pattern này.',
  },
  'nf-043': {
    question:
      'Next.js Router Cache là gì và đâu là hiểu lầm phổ biến về nó?',
    options: [
      'Router Cache nằm phía server và lưu trữ HTML cho tất cả trang đã truy cập vĩnh viễn',
      'Router Cache là cache trong bộ nhớ phía client lưu trữ RSC payload đã prefetch và đã truy cập cho phiên trình duyệt. Hiểu lầm phổ biến: nó KHÔNG giống Data Cache, và KHÔNG thể bị vô hiệu hóa bởi revalidatePath/revalidateTag — chỉ router.refresh() hoặc điều hướng mới xóa nó',
      'Router Cache lưu trữ API response cho sử dụng offline',
      'Router Cache có thể cấu hình qua next.config.js và tồn tại qua các phiên trình duyệt',
    ],
    explanation:
      'Router Cache nằm trong trình duyệt (không phải server), lưu trữ RSC payload cho các route đã điều hướng và prefetch, và có phạm vi trong phiên trình duyệt (bị xóa khi refresh). Nó thường bị nhầm lẫn với Data Cache phía server. Phân biệt quan trọng: gọi revalidatePath() trên server KHÔNG xóa ngay Router Cache phía client. Bạn cần router.refresh() để buộc client fetch lại từ server. Trong Next.js 15, thời gian Router Cache cho trang động đã thay đổi thành 0 (không cache mặc định).',
  },
  'nf-044': {
    question:
      'Trong Next.js App Router, file loading.tsx của route segment hiển thị fallback trong cả lần tải đầu tiên VÀ các lần điều hướng client-side tiếp theo đến route đó.',
    explanation:
      'loading.tsx tạo Suspense boundary tự động quanh page. Nó hiển thị trong: (1) server render ban đầu khi trang đang stream, và (2) điều hướng client-side khi React suspend trong khi tải dữ liệu/component của trang mới. Điều này có nghĩa điều hướng đến route có data fetch chậm sẽ hiển thị skeleton loading.tsx mà không cần cài đặt thêm.',
  },
  'nf-045': {
    question:
      'Remix xử lý race condition trong các form submission đồng thời tốt hơn SPA truyền thống như thế nào?',
    options: [
      'Remix sử dụng hệ thống queue để tuần tự hóa tất cả form submission',
      'Xử lý form native của Remix (useFetcher, Form) tự động hủy request đang bay khi có submission mới, và revalidate tất cả loader sau khi bất kỳ action nào hoàn thành — đảm bảo UI luôn phản ánh trạng thái server mới nhất mà không cần quản lý abort controller thủ công',
      'Remix ngăn nhiều form submission bằng cách tự động vô hiệu hóa nút submit',
      'Remix sử dụng WebSocket để đồng bộ state form giữa các tab',
    ],
    explanation:
      'SPA truyền thống quản lý loading/error state thủ công với useEffect, thường bỏ sót edge case. useFetcher của Remix xử lý: tự động hủy request cũ, revalidate tất cả route loader sau bất kỳ action nào (giữ mọi dữ liệu đồng bộ), và optimistic UI qua fetcher.state. Framework lo phần mô hình đồng thời — developer khai báo cái gì cần làm, không phải cách quản lý async state.',
  },
}
