import type { QuestionTranslationMap } from '../types'

export const buildToolsVi: QuestionTranslationMap = {
  'bt-001': {
    question: 'Điều gì khiến dev server của Vite nhanh hơn đáng kể so với webpack-dev-server?',
    explanation:
      'Dev server của Vite tận dụng ES modules (ESM) gốc trong các trình duyệt hiện đại. Nó chỉ chuyển đổi một file khi trình duyệt yêu cầu (theo nhu cầu), thay vì bundle toàn bộ ứng dụng. Nó cũng phân chia công việc: pre-bundle các node_modules chậm bằng esbuild (viết bằng Go, nhanh hơn 10-100 lần so với các bundler JS) trong khi phục vụ mã ứng dụng dưới dạng ESM thô.',
    options: [
      'Vite sử dụng nhiều lõi CPU hơn để biên dịch song song',
      'Vite phục vụ các file mã nguồn dưới dạng ES modules gốc trực tiếp đến trình duyệt, chỉ chuyển đổi file theo nhu cầu khi được yêu cầu, thay vì bundle mọi thứ ngay từ đầu',
      'Vite biên dịch trước tất cả mã thành WebAssembly',
      'Vite bỏ qua hoàn toàn việc kiểm tra kiểu TypeScript',
    ],
  },
  'bt-002': {
    question:
      'Tree shaking chỉ hoạt động với ES modules (import/export) và không thể loại bỏ mã không sử dụng từ các module CommonJS (require/module.exports).',
    explanation:
      'Tree shaking dựa vào phân tích tĩnh các import/export của ES module, chúng có thể xác định tĩnh tại thời điểm biên dịch. Các export CommonJS (module.exports = {...}) là động — bundler không thể xác định tĩnh export nào được sử dụng vì các lệnh require() có thể có điều kiện hoặc được tính toán. Đây là lý do các thư viện được khuyến khích cung cấp bản build ESM bên cạnh CJS.',
  },
  'bt-003': {
    question: 'Sự khác biệt giữa ESM (ES Modules) và CJS (CommonJS) là gì?',
    explanation:
      'ESM (import/export) có thể phân tích tĩnh (cho phép tree shaking), hỗ trợ top-level await, tải bất đồng bộ và được hỗ trợ gốc trong trình duyệt và Node.js 12+. CJS (require/exports) là đồng bộ, động và là hệ thống module ban đầu của Node. Các package hiện đại cung cấp cả CJS+ESM qua trường "exports" trong package.json.',
    options: [
      'ESM dành cho frontend; CJS dành cho backend',
      'ESM sử dụng cú pháp import/export tĩnh, hỗ trợ tree shaking và là hệ thống module gốc của trình duyệt. CJS sử dụng require/module.exports, là động và là hệ thống module cũ của Node.js.',
      'CJS nhanh hơn ESM khi chạy',
      'ESM yêu cầu bundler; CJS chạy được gốc ở mọi nơi',
    ],
  },
  'bt-004': {
    question: 'Code splitting là gì trong ngữ cảnh của các JavaScript bundler?',
    explanation:
      'Code splitting tạo ra các chunk JS riêng biệt: một bundle chính và các chunk tính năng được tải lười. React.lazy() + dynamic import() tự động kích hoạt code splitting trong Vite/webpack. Kết quả: trang landing không tải JS của trang checkout. Bundler cũng tự động tách vendor (phân tách node_modules khỏi mã ứng dụng để cache tốt hơn).',
    options: [
      'Chia CSS thành nhiều stylesheet',
      'Chia một JavaScript bundle thành các chunk nhỏ hơn có thể tải theo nhu cầu, giảm thời gian tải trang ban đầu bằng cách chỉ tải mã cần thiết cho view hiện tại',
      'Tách mã TypeScript thành các file kiểu riêng biệt',
      'Phân phối mã trên nhiều máy chủ CDN',
    ],
  },
  'bt-005': {
    question:
      'HMR (Hot Module Replacement) của Vite là gì và làm thế nào nó đạt được cập nhật gần như tức thì?',
    explanation:
      'HMR của Vite khai thác đồ thị module ESM. Khi một file thay đổi, Vite: (1) vô hiệu hóa module đã thay đổi và các importer trực tiếp của nó, (2) gửi thông báo cập nhật HMR đến trình duyệt, (3) trình duyệt chỉ tải các module đã cập nhật và thực thi lại chúng. Cập nhật CSS thậm chí còn nhanh hơn — được chèn trực tiếp vào trang mà không cần reload.',
    options: [
      'HMR tải lại toàn bộ trang mỗi khi file thay đổi',
      'HMR chỉ vô hiệu hóa module đã thay đổi và các phụ thuộc của nó trong đồ thị ES module, trao đổi module mới mà không cần tải lại trang, bảo toàn trạng thái ứng dụng ở các phần không bị ảnh hưởng',
      'HMR biên dịch toàn bộ dự án trong nền khi chỉnh sửa',
      'HMR chỉ hoạt động cho thay đổi CSS; JS luôn kích hoạt tải lại toàn bộ',
    ],
  },
  'bt-006': {
    question: 'Cấu hình Vite này thực hiện điều gì?',
    answer:
      'Cấu hình tách chunk thủ công: React và ReactDOM được trích xuất vào chunk "vendor", các component Radix UI vào chunk "ui". Đây là các file JS riêng biệt có thể được cache độc lập bởi trình duyệt.',
    explanation:
      'manualChunks cho phép bạn kiểm soát ranh giới chunk. Bằng cách tách vendor (ít khi thay đổi) khỏi chunk thư viện UI và mã ứng dụng, trình duyệt có thể cache vendor.js và ui.js lâu dài. Khi bạn cập nhật mã ứng dụng, người dùng chỉ tải chunk ứng dụng đã thay đổi, không phải chunk react+react-dom 100KB mà họ đã cache.',
  },
  'bt-007': {
    question:
      'Module Federation trong webpack 5 là gì và nó giải quyết vấn đề gì?',
    explanation:
      'Module Federation cho phép App A expose các React component mà App B import tại runtime mà không cần bundle chúng cùng nhau. Mô hình shell app + micro-frontend: shell tải các remote entry từ các micro-frontend đã deploy tại runtime. Các dependency dùng chung (React, ReactDOM) được loại bỏ trùng lặp qua cấu hình shared: {}, tránh nhiều instance React.',
    options: [
      'Cách chia cấu hình webpack thành nhiều file',
      'Cơ chế cho phép nhiều ứng dụng JavaScript được build và deploy riêng biệt chia sẻ mã tại runtime, cho phép kiến trúc micro-frontend nơi các team deploy độc lập',
      'Một registry npm package cho các module riêng tư',
      'Cách liên kết CSS qua nhiều stylesheet',
    ],
  },
  'bt-008': {
    question: 'Turbopack là gì và nó so sánh thế nào với Vite?',
    explanation:
      'Turbopack (Rust) so với Vite (Go+Rollup): Cả hai đều cực kỳ nhanh. Turbopack bundle ngay cả trong dev (khác với ESM gốc của Vite) điều này tốt hơn cho ứng dụng lớn khi ESM với hàng nghìn request trở nên chậm. Turbopack tích hợp sâu với Next.js và có persistent disk caching. Vite có hệ sinh thái plugin lớn hơn và hoạt động với bất kỳ framework nào. Turbopack tương thích với webpack.',
    options: [
      'Turbopack là một CSS preprocessor được xây dựng bởi Vercel',
      'Turbopack là bundler tăng tốc viết bằng Rust được xây dựng bởi Vercel, được thiết kế là phiên bản kế nhiệm của webpack. Nó sử dụng persistent caching và song song hóa tác vụ để khởi động nguội và build tăng tốc nhanh hơn. Next.js sử dụng nó làm dev bundler. Khác với Vite (ESM không bundle trong dev), Turbopack bundle trong chế độ dev.',
      'Turbopack là giải pháp thay thế npm cho quản lý package',
      'Turbopack và Vite sử dụng kiến trúc giống hệt nhau, Turbopack chỉ có marketing tốt hơn',
    ],
  },
  'bt-009': {
    question:
      'Remote caching của Turborepo cho phép các build CI tái sử dụng artifact build từ các lần chạy trước trên cùng commit, ngay cả trên các máy khác nhau.',
    explanation:
      'Remote cache của Turborepo (Vercel hoặc tự host) tải lên output tác vụ (build artifact, kết quả test) được đánh khóa theo hash đầu vào. Nếu đầu vào không thay đổi, bất kỳ máy nào (CI worker, laptop developer) đều tải xuống và khôi phục output đã cache thay vì chạy lại. Điều này biến build CI 10 phút thành vài giây khi chỉ 1 package thay đổi.',
  },
  'bt-010': {
    question:
      'Mục đích của trường "sideEffects" trong package.json là gì và nó ảnh hưởng đến tree shaking như thế nào?',
    explanation:
      'sideEffects kiểm soát tree shaking mạnh. "Side effect" là mã chạy khi import ngoài những gì nó export (ví dụ: thay đổi biến toàn cục, đăng ký event listener). Khi sideEffects: false, bundler có thể loại bỏ hoàn toàn các module được import mà không có export nào được sử dụng. File CSS được import vì side effect thêm style phải được liệt kê trong sideEffects: ["**/*.css"] để ngăn bị xóa.',
    options: [
      'Nó khai báo các side effect runtime như lệnh console.log',
      'Nó cho bundler biết module nào có side effect (và do đó không thể tree-shake) so với module nào là thuần túy. "sideEffects: false" nghĩa là tất cả module không có side effect và các export không sử dụng có thể được xóa an toàn. "sideEffects: [\"*.css\"]" bảo vệ import CSS khỏi bị xóa.',
      'Nó liệt kê các npm package xung đột với package hiện tại',
      'Nó khai báo entry point chỉ dành cho trình duyệt so với chỉ dành cho Node',
    ],
  },
  'bt-011': {
    question:
      'Sự khác biệt giữa Nx và Turborepo cho quản lý monorepo là gì?',
    explanation:
      'Turborepo: cấu hình turbo.json đơn giản, phù hợp cho các team muốn build nhanh với thiết lập tối thiểu. Nx: đồ thị dự án (hiểu import giữa các package), affected build (chỉ rebuild những gì thay đổi dựa trên phân tích mã, không chỉ thay đổi file), code generator, task caching, quy tắc eslint ranh giới module. Nx phù hợp hơn cho tổ chức lớn, phức tạp. Cả hai đều hỗ trợ remote caching.',
    options: [
      'Nx chỉ dành cho Angular; Turborepo hoạt động với bất kỳ framework nào',
      'Turborepo tập trung vào điều phối tác vụ và caching với cấu hình tối thiểu. Nx là nền tảng monorepo đầy đủ tính năng với code generation, phân tích đồ thị dự án, phát hiện affected-command, enforcing ranh giới module và các generator/executor dành riêng cho framework — kiên định hơn nhưng mạnh mẽ hơn cho repo doanh nghiệp lớn.',
      'Nx sử dụng yarn workspaces; Turborepo sử dụng npm workspaces',
      'Chúng là các công cụ giống hệt nhau từ cùng một công ty',
    ],
  },
  'bt-012': {
    question:
      'Một bundle production lớn bất thường. Bạn sẽ thực hiện những bước nào để chẩn đoán và khắc phục?',
    answer:
      'Chạy phân tích bundle (rollup-plugin-visualizer), tìm kiếm: (1) toàn bộ thư viện được import thay vì các hàm cụ thể (import _ from "lodash" so với import debounce from "lodash/debounce"), (2) dependency lớn (moment.js, faker), (3) thiếu code splitting cho routes, (4) package trùng lặp ở các phiên bản khác nhau, (5) mã chỉ dùng cho dev trong production.',
    explanation:
      'Chẩn đoán: thêm rollup-plugin-visualizer để xem thành phần bundle. Thủ phạm phổ biến: lodash (70KB→3KB với tree-shaking), moment.js (dùng date-fns thay), thư viện icon lớn (import toàn bộ bộ thay vì icon cụ thể), thiếu dynamic import() cho routes, vô tình bao gồm file test hoặc mock trong production. Khắc phục: lazy routes, import tree-shaken, thay thế thư viện nặng.',
  },
  'bt-013': {
    question:
      'Trường "exports" trong package.json là gì và tại sao nó quan trọng cho các package hiện đại?',
    explanation:
      'Trường "exports" (package.json) kiểm soát module resolution: { "exports": { ".": { "import": "./dist/esm/index.js", "require": "./dist/cjs/index.js" }, "./utils": "./dist/esm/utils.js" } }. Nó ngăn deep import vào bên trong package (đóng gói), cung cấp mã khác nhau cho các môi trường khác nhau và cho phép bundler chọn định dạng tối ưu. "exports" trong package.json ưu tiên hơn "main".',
    options: [
      'Nó liệt kê các từ khóa npm registry cho package',
      'Nó định nghĩa bề mặt API công khai của package với conditional export cho các môi trường khác nhau (trình duyệt so với Node, ESM so với CJS, development so với production), ngăn truy cập đường dẫn nội bộ và cho phép giải pháp dual-package hazard',
      'Nó khai báo file nào được bao gồm trong npm publish',
      'Nó chỉ định peer dependency mà consumer phải cài đặt',
    ],
  },
  'bt-014': {
    question:
      'Làm thế nào để ngăn "dual package hazard" khi một thư viện cung cấp cả CJS và ESM?',
    explanation:
      'Dual package hazard: nếu một phần của ứng dụng tải pkg/esm và phần khác tải pkg/cjs (cùng package, khác instance), singleton bị hỏng (React context không tìm thấy, Zustand store không được chia sẻ). Phòng tránh: (1) ánh xạ conditional "exports" chính xác để bundler nhất quán chọn một định dạng; (2) "peerDependencies" cho shared singleton thay vì "dependencies" để consumer cung cấp một instance; (3) test với cấu hình dedupe của bundler.',
    options: [
      'Chỉ cung cấp ESM và bỏ hỗ trợ CJS',
      'Dual package hazard xảy ra khi cả phiên bản CJS và ESM của package được tải đồng thời, tạo hai instance của các module singleton (React, store). Ngăn chặn bằng cách sử dụng "exports" conditional để đảm bảo bundler chọn một định dạng, và đánh dấu các singleton dependency trong package là "external" để đảm bảo bản của consumer được sử dụng.',
      'Dùng webpack alias để luôn resolve về phiên bản CJS',
      'Chỉ cung cấp CJS cho đến khi tất cả môi trường hỗ trợ ESM gốc',
    ],
  },
  'bt-015': {
    question:
      'Chunk optimization là gì và các chiến lược chính để tối ưu chunking trong ứng dụng lớn là gì?',
    explanation:
      'Tối ưu chunking cân bằng: tải ban đầu (giảm thiểu byte lần truy cập đầu), caching (hash ổn định = cache sống lâu), song song (tải nhiều chunk nhỏ so với một chunk lớn), và overhead (quá nhiều HTTP/2 request so với quá ít). Nghệ thuật: vendor chunk (ổn định, cache lâu dài) + route chunk (lazy) + shared chunk (mã chung dedupe) + asset chunk (hình ảnh, font). Phân tích bằng rollup-plugin-visualizer.',
    options: [
      'Gộp tất cả chunk thành một file để hiệu suất cache tối đa',
      'Các chiến lược: (1) Tách theo route cho lazy loading (2) Tách vendor chunk (react, react-dom riêng biệt) (3) Trích xuất shared chunk cho mã dùng chung qua nhiều route (4) Dynamic import cho thư viện nặng (biểu đồ, editor) (5) Chỉ thị prefetch cho chunk điều hướng tiếp theo có khả năng cao',
      'Luôn sử dụng chunking mặc định của bundler mà không tùy chỉnh',
      'Tối ưu kích thước chunk chỉ quan trọng cho ứng dụng Node.js',
    ],
  },
  'bt-016': {
    question: 'Plugin Vite này làm gì?',
    answer:
      'Một plugin Vite tùy chỉnh thay thế chuỗi placeholder "__APP_VERSION__" trong index.html bằng phiên bản package hiện tại từ package.json trong quá trình build.',
    explanation:
      'Các plugin Vite triển khai các hook tương thích Rollup. transformIndexHtml() là hook đặc trưng của Vite nhận và chuyển đổi template HTML. process.env.npm_package_version được tự động thiết lập bởi npm/pnpm khi chạy script thành phiên bản package.json hiện tại. Điều này chèn phiên bản vào HTML mà không cần bước build nào.',
  },
  'bt-017': {
    question:
      'Trong monorepo sử dụng pnpm workspaces, bạn cài đặt package dùng chung cho tất cả workspace package như thế nào?',
    explanation:
      'pnpm sử dụng content-addressable store và symlink cho cấu trúc node_modules. Chạy pnpm install ở thư mục gốc sẽ cài đặt tất cả dependency của workspace. Cấu trúc node_modules nghiêm ngặt của pnpm ngăn phantom dependency (package không nằm trong package.json nhưng tình cờ được cài đặt). Dùng pnpm add typescript --workspace-root cho devDependency cấp gốc.',
    options: [
      'Chạy npm install trong mỗi thư mục package riêng biệt',
      'Chạy pnpm install từ thư mục gốc — pnpm hoist các dependency dùng chung và tạo bố cục node_modules tránh phantom dependency',
      'Thêm dependency vào mỗi package.json thủ công rồi chạy pnpm install',
      'Dùng pnpm global install cho các package dùng chung',
    ],
  },
  'bt-018': {
    question:
      'Mục đích của tùy chọn cấu hình "define" trong Vite là gì?',
    explanation:
      'define thực hiện thay thế văn bản tại thời điểm build: define: { "process.env.NODE_ENV": JSON.stringify("production") }. Bundler thay thế giá trị literal, sau đó minifier loại bỏ mã chết (if (false) { ... }). Quan trọng: giá trị chuỗi phải dùng JSON.stringify. Vite cũng hỗ trợ biến import.meta.env được định nghĩa trong file .env qua quy ước tiền tố VITE_.',
    options: [
      'Định nghĩa kiểu TypeScript cho import.meta.env',
      'Thay thế hằng số toàn cục tại thời điểm build (giống webpack DefinePlugin). Dùng cho loại bỏ mã chết: define: { __DEV__: false } cho phép bundler xóa các khối if (__DEV__) trong build production.',
      'Định nghĩa giá trị CSS custom property',
      'Thiết lập module alias cho import resolution',
    ],
  },
  'bt-019': {
    question:
      'Sử dụng dynamic import() với đường dẫn chuỗi tĩnh (ví dụ: import("./features/checkout")) tạo ra chunk riêng biệt tại thời điểm build, trong khi import() với biến động không thể được phân tích tĩnh cho việc tách chunk.',
    explanation:
      'Bundler phân tích tĩnh các lệnh import(). import("./features/checkout") → bundler tạo checkout.[hash].js chunk tại thời điểm build. import("./" + path) → bundler không thể xác định file nào cần tách; nó hoặc thất bại, bundle mọi thứ khớp pattern, hoặc dùng dynamic require mà không tách. Luôn dùng chuỗi tĩnh trong import() để code splitting có thể dự đoán.',
  },
  'bt-020': {
    question:
      'Các cân nhắc chính khi thiết lập thư viện component dùng chung trong monorepo được sử dụng bởi nhiều ứng dụng là gì?',
    explanation:
      'Thư viện component dùng chung trong monorepo: sử dụng giao thức "workspace:*" để liên kết cục bộ (không cần publish trong quá trình phát triển). Expose "exports" với các trường ESM/CJS + types. Đánh dấu React là peerDependency để tránh nhiều React instance. Sử dụng chế độ unbundled-library (Vite lib mode hoặc tsup) để ứng dụng sử dụng có thể tree-shake. Thiết lập path alias trong tsconfig cho IDE autocomplete.',
    options: [
      'Chỉ cần publish lên npm và để các app cài đặt như dependency',
      'Các quyết định chính: (1) Định dạng build: dual package ESM + CJS hoặc chỉ ESM; (2) Xử lý CSS: CSS Modules, CSS-in-JS, hoặc style injection; (3) Peer dependency so với bundled (React phải là peer); (4) File khai báo TypeScript (.d.ts); (5) Workspace protocol cho liên kết cục bộ; (6) Pre-build hay dùng path alias cho hỗ trợ IDE; (7) Chiến lược phiên bản (independent so với fixed)',
      'Bundle mọi thứ bao gồm React vào một file UMD',
      'Dùng iframe isolation cho đóng gói style hoàn toàn',
    ],
  },
  'bt-021': {
    question: 'Lệnh "vite preview" của Vite làm gì?',
    explanation:
      'vite preview phục vụ production build (dist/) cục bộ qua static HTTP server. Khác với vite (dev server với HMR và file mã nguồn), preview phục vụ output đã biên dịch và minify thực tế. Dùng nó để phát hiện vấn đề chỉ xuất hiện trong production build, như thiếu asset, sai base path, hoặc mã phụ thuộc hành vi chỉ có trong dev.',
    options: [
      'Mở bản xem trước mã nguồn trong trình duyệt',
      'Khởi động server tĩnh cục bộ phục vụ production build từ thư mục dist/, cho phép bạn test output đã build trước khi deploy',
      'Xem trước thay đổi mà không lưu vào đĩa',
      'Chạy Vite ở chế độ watch cho phát triển',
    ],
  },
  'bt-022': {
    question:
      'Cấu trúc bundle output từ cấu hình task Turborepo này là gì?',
    answer:
      'build chạy sau khi tất cả package phụ thuộc đã build trước (^build = build dependency trước). test chạy sau khi package hiện tại build xong. lint chạy độc lập không có dependency. Output build trong dist/ được cache.',
    explanation:
      '"^build" nghĩa là "chạy build trong tất cả package mà package này phụ thuộc trước" — cho phép thứ tự build chính xác trong monorepo khi pkg-b phụ thuộc vào output đã build của pkg-a. "dependsOn: [\'build\']" (không có ^) nghĩa là "chạy build của package này trước". outputs: [] trống cho test/lint nghĩa là kết quả không được cache ra đĩa (nhưng hoàn thành tác vụ được cache). Điều này đảm bảo thứ tự tô-pô chính xác.',
  },
  'bt-023': {
    question:
      'Mục đích của PostCSS là gì và nó phù hợp như thế nào trong pipeline build frontend hiện đại?',
    explanation:
      'PostCSS là nền tảng chuyển đổi CSS: CSS đầu vào → PostCSS phân tích thành AST → plugin chuyển đổi AST → CSS đầu ra. Plugin chính: autoprefixer (thêm tiền tố -webkit-, -moz- dựa trên browserslist), cssnano (minify, loại bỏ trùng lặp), postcss-preset-env (dùng CSS tương lai ngay hôm nay). Tailwind CSS chính nó được triển khai như một PostCSS plugin. Vite áp dụng PostCSS tự động nếu postcss.config.js tồn tại.',
    options: [
      'PostCSS là CSS preprocessor giống Sass hoặc Less',
      'PostCSS là công cụ chuyển đổi CSS bằng các plugin JavaScript. Nó cho phép Autoprefixer (thêm vendor prefix), cssnano (minification), hỗ trợ nesting và fallback custom property. Vite và Next.js có hỗ trợ PostCSS tích hợp sẵn qua postcss.config.js.',
      'PostCSS là giải pháp CSS-in-JS',
      'PostCSS chỉ hoạt động với webpack, không phải bundler hiện đại',
    ],
  },
  'bt-024': {
    question:
      'Trong monorepo quy mô lớn, lệnh "affected" của Nx làm gì và tại sao nó vượt trội so với chạy tất cả test mỗi commit?',
    explanation:
      'Nx tạo đồ thị tác vụ bằng cách phân tích import mã nguồn giữa các package. Khi pkg-ui thay đổi, Nx biết: test pkg-ui + test mọi app import pkg-ui. Nó KHÔNG chạy các package không bị ảnh hưởng. So với Turborepo: Turborepo dùng caching dựa trên file-hash (nếu file không thay đổi, dùng cache). Nx dùng phân tích import cho affected (thông minh hơn, hiểu ranh giới dependency ngay cả khi không chạy).',
    options: [
      'Nó chạy test trên các file đã sửa đổi trong commit git cuối cùng',
      'Nx xây dựng đồ thị dependency dự án bằng cách phân tích import. "nx affected:test" xác định package nào bị ảnh hưởng bởi thay đổi (package đã thay đổi + tất cả package import từ nó theo chuỗi) và chỉ chạy test cho những package đó. Điều này biến CI chạy đầy đủ 2 giờ thành 5 phút chạy có mục tiêu.',
      'Nó dùng machine learning để dự đoán test nào sẽ thất bại',
      'Nó chạy song song tất cả test trên các máy cloud',
    ],
  },
  'bt-025': {
    question:
      'Vite sử dụng Rollup cho production build trong khi dùng dev server riêng cho phát triển, nghĩa là môi trường dev và production sử dụng chiến lược bundling khác nhau.',
    explanation:
      'Kiến trúc tách đôi của Vite: development sử dụng ESM dev server gốc (không bundle, file được phục vụ nguyên trạng với chuyển đổi nhanh), trong khi production build dùng Rollup (trưởng thành, mạnh mẽ, tối ưu cho production bundle với tree-shaking, tối ưu chunk, linh hoạt định dạng output). Sự khác biệt này đôi khi gây lỗi "hoạt động trong dev, hỏng trong prod", thường liên quan đến khác biệt resolution CJS/ESM.',
  },
  'bt-026': {
    question:
      'Environment API của Vite 6 là gì và nó giải quyết vấn đề gì?',
    explanation:
      'Environment API của Vite 6 (2024) được thiết kế để giải quyết nhu cầu cấp framework (Next.js, Remix, Nuxt) khi các phần khác nhau của ứng dụng nhắm đến các runtime khác nhau. Trước đây, các framework phải hack xung quanh giả định môi trường đơn của Vite. Giờ đây: environments.client, environments.ssr, environments.edge mỗi cái có đồ thị module độc lập và có thể có điều kiện resolve khác nhau (ví dụ: export "browser" so với "node"). Các framework như Remix được hưởng lợi đáng kể.',
    options: [
      'API để thiết lập biến môi trường trong file .env',
      'Một abstraction first-class cho việc nhắm đến nhiều runtime environment (trình duyệt, SSR Node, edge, service worker) trong một dự án Vite duy nhất. Mỗi environment có đồ thị module, transform và dev server riêng, cho phép framework xử lý mã client và server nhất quán.',
      'API plugin để quản lý biến process.env tại thời điểm build',
      'Cách mới để cấu hình target browserslist trong Vite 6',
    ],
  },
  'bt-027': {
    question:
      'Turbopack đạt được build nhanh hơn webpack như thế nào thông qua kiến trúc incremental viết bằng Rust?',
    explanation:
      'Turbo engine của Turbopack là framework memoization tăng tốc đa dụng: kết quả mỗi hàm được cache theo đầu vào. Khi file thay đổi, chỉ các hàm có đầu vào thay đổi được thực thi lại. Kết hợp với zero-cost abstraction của Rust và song song hóa qua các lõi, đạt được cập nhật tăng tốc dưới mili-giây. Benchmark của Vercel cho thấy nhanh hơn Vite đến 10 lần và nhanh hơn webpack 700 lần cho cold start trong ứng dụng lớn.',
    options: [
      'Turbopack bỏ qua hoàn toàn phân tích mã để tăng tốc',
      'Turbopack sử dụng Rust cho tốc độ thực thi gốc, engine tính toán tăng tốc theo nhu cầu (Turbo engine) cache kết quả từng hàm, và song song hóa công việc qua các lõi CPU. Chỉ các phần bị ảnh hưởng của đồ thị module được tính toán lại khi file thay đổi.',
      'Turbopack pre-bundle tất cả node_modules giống Vite làm với esbuild',
      'Turbopack đạt tốc độ bằng cách bỏ qua hoàn toàn kiểm tra kiểu TypeScript',
    ],
  },
  'bt-028': {
    question:
      'Module Federation 2.0 là gì và nó mang lại cải tiến gì so với triển khai webpack 5 ban đầu?',
    explanation:
      'Package @module-federation/core tách runtime khỏi webpack, cho phép Vite và Rspack sử dụng Module Federation qua @module-federation/vite và @module-federation/rsbuild. Cải tiến chính: (1) Hệ thống plugin runtime để tùy chỉnh hành vi tải remote. (2) @module-federation/typescript để tạo và sử dụng khai báo kiểu remote. (3) Error boundary tốt hơn khi remote không tải được. (4) Cải thiện phát hiện remote dựa trên manifest.',
    options: [
      'Module Federation 2.0 là viết lại hoàn toàn webpack từ đầu',
      'Module Federation 2.0 (từ dự án module-federation/core) thêm: runtime framework-agnostic (hoạt động với Rspack, Vite, webpack), type safety cho remote module qua TypeScript declaration generation, hỗ trợ SSR tốt hơn, cải thiện dynamic remote loading, và hệ sinh thái plugin độc lập với webpack.',
      'Module Federation 2.0 thêm khả năng federation CSS',
      'Module Federation 2.0 chỉ có trong webpack 6',
    ],
  },
  'bt-029': {
    question:
      'Import map là gì và chúng cho phép chạy ES module trong trình duyệt mà không cần bundler như thế nào?',
    explanation:
      '<script type="importmap">{"imports": {"react": "https://esm.sh/react@18", "react-dom/client": "https://esm.sh/react-dom@18/client"}}</script> cho phép import React from "react" hoạt động trong trình duyệt mà không cần bước build. Được hỗ trợ trên tất cả trình duyệt hiện đại (Chrome 89+, Firefox 108+, Safari 16.4+). Các công cụ như esm.sh phục vụ npm package dưới dạng ESM tương thích trình duyệt. Import map hữu ích cho thiết lập dựa trên CDN, tạo prototype nhanh và test module gốc.',
    options: [
      'Import map là tính năng webpack để resolve module alias',
      'Import map là đặc tả JSON gốc trình duyệt ánh xạ module specifier (như "react") đến URL, cho phép bare specifier trong ES module import resolve mà không cần bundler. <script type="importmap"> định nghĩa ánh xạ trong HTML.',
      'Import map là giải pháp thay thế cho trường "exports" trong package.json',
      'Import map chỉ hoạt động trong môi trường Node.js, không phải trình duyệt',
    ],
  },
  'bt-030': {
    question: 'Trường "exports" trong package.json này cấu hình gì?',
    answer:
      'Import gốc ("my-lib") resolve đến ESM hoặc CJS tùy thuộc vào hệ thống module của consumer, có kiểu TypeScript. Deep import "my-lib/utils" được cho phép rõ ràng. Bất kỳ deep path nào khác (ví dụ: "my-lib/internal") bị chặn bởi exports map.',
    explanation:
      'Trường "exports" là entry point package hiện đại. Bundler và Node.js sử dụng condition matching: consumer ESM (lệnh import) nhận đường dẫn "import", consumer CJS (require()) nhận "require", TypeScript LSP nhận "types". Các đường dẫn không được liệt kê trong exports không thể truy cập — điều này enforcing bề mặt API công khai. Key "." là gốc package. Nó thay thế trường "main" và "module" cho tooling hiện đại.',
  },
  'bt-031': {
    question:
      'Browserslist là gì và nó ảnh hưởng đến output transpilation của build như thế nào?',
    explanation:
      '"browserslist": "> 0.5%, last 2 versions, not dead" nghĩa là: nhắm đến trình duyệt có >0.5% lượt sử dụng toàn cầu, cộng 2 phiên bản cuối của mỗi trình duyệt, loại trừ trình duyệt dead. @babel/preset-env của Babel dùng điều này để quyết định: arrow function có cần transpile không? Optional chaining có cần polyfill không? Tùy chọn target của esbuild chấp nhận output browserslist. Vite chấp nhận build.target ánh xạ tương đương phiên bản trình duyệt browserslist. Target hẹp hơn = ít transpilation hơn = output nhỏ hơn/nhanh hơn.',
    options: [
      'Browserslist là CDN phục vụ polyfill dựa trên phát hiện trình duyệt',
      'Browserslist là tiêu chuẩn cấu hình (trong .browserslistrc hoặc trường "browserslist" của package.json) định nghĩa trình duyệt nào ứng dụng hỗ trợ. Các công cụ như Babel, PostCSS/Autoprefixer và esbuild đọc nó để xác định tính năng JavaScript nào cần transpile và vendor prefix CSS nào cần thêm.',
      'Browserslist là webpack plugin cho code splitting theo từng trình duyệt',
      'Browserslist tự động thêm polyfill vào HTML entry point',
    ],
  },
  'bt-032': {
    question:
      'Source map là gì, có những loại nào và các cân nhắc bảo mật cho production là gì?',
    explanation:
      'Bảo mật source map: publish source map lên CDN công khai sẽ lộ toàn bộ mã nguồn. Các lựa chọn: (1) Không có source map trong production (ít khả năng debug nhất), (2) Hidden source map — tạo nhưng không tham chiếu trong header bundle, chỉ upload lên error tracking (Sentry), (3) Source map bảo vệ bằng auth chỉ phục vụ cho công cụ nội bộ. Vite: build.sourcemap: "hidden" tạo file .map mà không có comment //# sourceMappingURL. Sentry CLI upload chúng sau build.',
    options: [
      'Source map chỉ dùng cho debug CSS; JavaScript có hệ thống riêng',
      'Source map ánh xạ output đã minify/biên dịch về mã nguồn gốc để debug. Các loại: "source-map" (đầy đủ, file bên ngoài), "inline-source-map" (nhúng trong bundle dạng base64), "cheap-module-source-map" (chỉ dòng, nhanh hơn), "eval" (nhanh nhất, chỉ dev). Rủi ro bảo mật production: lộ source map tiết lộ logic nghiệp vụ độc quyền ra công chúng.',
      'Source map được tạo tự động và không thể cấu hình',
      'Source map chỉ hoạt động trong Chrome DevTools, không phải Firefox hay Safari',
    ],
  },
  'bt-033': {
    question:
      'Remote caching của Turborepo hoạt động như thế nào và các hàm ý bảo mật là gì?',
    explanation:
      'Cache key của Turborepo = hash của: nội dung file, biến env (liệt kê trong globalEnv/env theo task), cấu hình task. Máy CI xác thực qua biến env TURBO_TOKEN. Cân nhắc bảo mật: (1) Cache poisoning: máy bị xâm nhập với quyền ghi có thể chèn artifact độc hại — dùng token chỉ đọc trong hầu hết môi trường CI. (2) Rò rỉ biến env: đảm bảo secret dùng trong build được hash vào cache key để build với secret khác nhau không dùng chung cache. Tự host với @turborepo/remote-cache để kiểm soát hoàn toàn.',
    options: [
      'Remote caching lưu kết quả trong git LFS cùng với codebase',
      'Turborepo hash đầu vào task (file mã nguồn, biến env, cấu hình) để tạo cache key. Nếu remote cache hit tồn tại cho key đó, artifact được tải xuống thay vì rebuild. Host trên Vercel hoặc tự host. Bảo mật: cache key phải bao gồm tất cả đầu vào liên quan, token bị rò rỉ cho phép truy cập đọc/ghi cache.',
      'Remote caching chỉ hoạt động cho task build, không phải test hay lint',
      'Remote caching của Turborepo yêu cầu đăng ký Vercel trả phí cho mọi trường hợp',
    ],
  },
  'bt-034': {
    question:
      'Phát hiện "affected" của Nx là gì và nó khác gì so với cách tiếp cận dựa trên cache của Turborepo?',
    explanation:
      'Nx affected: nx affected --target=test dùng "git diff --name-only base...HEAD" để tìm file đã thay đổi, ánh xạ chúng đến các dự án Nx qua đồ thị dự án (xây dựng từ phân tích import), rồi tìm tất cả phụ thuộc downstream. Điều này hoạt động mà không cần cache build trước đó. Turborepo dựa vào hash đầu vào: không có cache = rebuild mọi thứ. Nx hiểu cấu trúc codebase về mặt ngữ nghĩa; Turborepo coi các project như hộp đen với đầu vào/đầu ra khai báo.',
    options: [
      'Chúng giống hệt nhau — cả hai dùng file hashing để xác định cần rebuild gì',
      'Nx phân tích tĩnh các lệnh import để xây dựng đồ thị dependency dự án, sau đó xác định project nào bị ảnh hưởng theo chuỗi bởi thay đổi git. Turborepo dùng file hashing: nếu đầu vào không thay đổi (đã cache), bỏ qua task. Nx có thể xác định project bị ảnh hưởng ngay lần chạy đầu tiên mà không cần cache.',
      'Nx dùng machine learning; Turborepo dùng git diff',
      'Phát hiện affected chỉ có trong Nx Enterprise',
    ],
  },
  'bt-035': {
    question:
      'Bun là gì và nó so sánh thế nào với Node.js và các bundler khác với tư cách là JavaScript runtime?',
    explanation:
      'Bun (1.0 phát hành tháng 9/2023) được định vị là giải pháp thay thế Node.js. Tính năng chính: bun install (nhanh hơn npm 10-100 lần), bun run (chạy script), bun build (bundler), bun test (test runner tương thích Jest). Sử dụng JavaScriptCore (engine JS của Safari) thay vì V8, có thời gian khởi động nhanh hơn. Hầu hết built-in Node.js đều tương thích. Vẫn đang hoàn thiện cho các trường hợp sử dụng production — một số API Node.js có khác biệt edge-case.',
    options: [
      'Bun là CSS preprocessor được xây dựng cho workflow frontend',
      'Bun là JavaScript runtime all-in-one nhanh (viết bằng Zig) bao gồm bundler, test runner, package manager và runtime tương thích Node.js. Nó đạt tốc độ qua engine JavaScriptCore (thay vì V8) và triển khai gốc nhiều Web API.',
      'Bun là giải pháp thay thế webpack với API plugin khác',
      'Bun chỉ chạy trong môi trường trình duyệt, không phải phía server',
    ],
  },
  'bt-036': {
    question:
      'Điểm mạnh chính và hạn chế đáng chú ý của esbuild so với Rollup là gì?',
    explanation:
      'Tốc độ của esbuild đến từ tính song song của Go và tránh overhead duyệt AST. Vite dùng esbuild cho pre-bundling dependency (nhanh!) và tách TypeScript nhưng dùng Rollup cho production build (tối ưu tốt hơn, plugin phong phú hơn). Đối với bundling ứng dụng, hạn chế esbuild: không có CSS Modules gốc (cần plugin), không xử lý hết edge case chuyển đổi CommonJS → ESM, loại bỏ mã chết hạn chế hơn so với tree shaking kỹ lưỡng của Rollup.',
    options: [
      'esbuild chỉ hữu ích cho bundling CSS, không phải JavaScript',
      'Điểm mạnh: cực kỳ nhanh (gấp 10-100 lần Rollup, viết bằng Go), hỗ trợ TypeScript/JSX tích hợp, tree shaking, code splitting. Hạn chế: API plugin không phong phú bằng Rollup, thiếu một số chuyển đổi mã nâng cao, tùy chỉnh định dạng output hạn chế, không có output UMD, ít phù hợp cho phát triển thư viện.',
      'esbuild tạo bundle lớn hơn Rollup do thiếu tối ưu',
      'esbuild yêu cầu bước biên dịch TypeScript riêng biệt',
    ],
  },
  'bt-037': {
    question: 'Rolldown là gì và nó liên quan thế nào đến tương lai của Vite?',
    explanation:
      'Rolldown (oxc-project/rolldown) nhằm giải quyết kiến trúc tách đôi của Vite (esbuild dev + Rollup prod) có thể gây khác biệt hành vi dev/prod. Bằng cách dùng một bundler dựa trên Rust cho cả hai môi trường, Vite sẽ có: (1) module resolution nhất quán, (2) cải thiện tốc độ ~10 lần cho codebase lớn, (3) duy trì tương thích plugin Rollup (hệ sinh thái khổng lồ). Tính đến 2025, Rolldown đang trong giai đoạn beta và được tích hợp vào bản build thử nghiệm của Vite.',
    options: [
      'Rolldown là CSS preprocessor mới từ đội ngũ Vite',
      'Rolldown là JavaScript bundler dựa trên Rust (tương thích API plugin của Rollup) được phát triển bởi đội ngũ Vite. Nó được thiết kế để cuối cùng thay thế cả esbuild (cho dev pre-bundling) và Rollup (cho production build) trong Vite, cung cấp hành vi nhất quán giữa dev và prod với tốc độ cấp Rust.',
      'Rolldown là fork của webpack viết lại bằng Rust',
      'Rolldown là runtime để thực thi build script viết bằng Rust',
    ],
  },
  'bt-038': {
    question:
      'CSS preprocessing (Sass, Less, PostCSS) tích hợp vào pipeline build Vite như thế nào?',
    explanation:
      'Xử lý CSS của Vite (không cần plugin): cài sass và import "./styles.scss" hoạt động ngay. Cài less → file .less hoạt động. CSS Modules: *.module.css → import styles from "./Button.module.css" → styles.btn. CSS toàn cục: import "./global.css" trong main.tsx. PostCSS: đặt postcss.config.cjs ở thư mục gốc. Vite xử lý CSS qua: CSS preprocessor → PostCSS → CSS Modules scoping → chèn vào document hoặc trích xuất ra file trong production.',
    options: [
      'Vite yêu cầu cấu hình webpack riêng cho CSS preprocessing',
      'Vite hỗ trợ tích hợp sẵn Sass, Less và Stylus — cài preprocessor (ví dụ: sass) và file .scss hoạt động tự động. PostCSS được áp dụng nếu postcss.config.js tồn tại. CSS Modules hoạt động sẵn cho file *.module.css/scss.',
      'CSS preprocessing trong Vite yêu cầu plugin riêng cho mỗi ngôn ngữ',
      'Vite chỉ hỗ trợ PostCSS; Sass và Less phải được biên dịch trước',
    ],
  },
  'bt-039': {
    question:
      'Scope hoisting trong bundler là gì và nó giảm kích thước bundle cùng cải thiện hiệu suất runtime như thế nào?',
    explanation:
      'Không có scope hoisting: mỗi module được bọc trong hàm factory (IIFE) với scope riêng, thêm overhead. Với scope hoisting (Rollup làm mặc định, webpack 4+ với optimization.concatenateModules): module chỉ dùng một lần được inline trực tiếp vào scope của consumer, loại bỏ overhead wrapper. Lợi ích: (1) mã nhỏ hơn (ít function wrapper), (2) thực thi nhanh hơn (không duyệt scope chain), (3) minification tốt hơn (biến qua các module có thể được đổi tên/loại bỏ cùng nhau).',
    options: [
      'Scope hoisting chuyển định nghĩa CSS class lên đầu file',
      'Scope hoisting (còn gọi là module concatenation trong webpack) gộp nhiều ES module vào một phạm vi hàm duy nhất thay vì bọc mỗi module trong closure function riêng biệt. Điều này giảm overhead gọi hàm, cho phép minifier đổi tên qua ranh giới module và giảm kích thước bundle.',
      'Scope hoisting là kỹ thuật hoisting khai báo biến JavaScript',
      'Scope hoisting gộp các CSS selector trùng lặp',
    ],
  },
  'bt-040': {
    question:
      'Dead code elimination (DCE) là gì và nó hoạt động phối hợp với tree shaking như thế nào?',
    explanation:
      'Loại bỏ hai giai đoạn: (1) Tree shaking: bundler xây dựng đồ thị import, chỉ đánh dấu symbol được import là "live", xóa export không dùng. (2) DCE: minifier (Terser, esbuild) đánh giá biểu thức hằng và xóa nhánh chết: define: { __DEV__: false } → if (false) { ... } → minifier loại bỏ toàn bộ khối. Kết hợp: tree shaking xóa module không dùng, DCE xóa mã chết trong module được giữ. Cả hai đều cần phân tích tĩnh ESM để hiệu quả tối đa.',
    options: [
      'DCE và tree shaking là cùng một thứ với tên khác',
      'Tree shaking xóa export không sử dụng ở cấp đồ thị module (phân tích tĩnh import/export). Dead code elimination (DCE) là pass cấp minifier xóa mã không thể truy cập sau tree shaking: nhánh của if (false), mã sau lệnh return và hằng đánh giá là false tại thời điểm build. Cả hai phối hợp cho output tối ưu.',
      'DCE chỉ hoạt động cho CSS; tree shaking hoạt động cho JavaScript',
      'DCE yêu cầu TypeScript; tree shaking hoạt động với JavaScript thuần',
    ],
  },
  'bt-041': {
    question:
      'esbuild được viết bằng Go và thường nhanh hơn 10-100 lần so với các bundler dựa trên JavaScript như webpack cho cold build.',
    explanation:
      'esbuild đạt tốc độ qua: (1) mô hình concurrency gốc của Go (goroutine cho phân tích song song), (2) tránh chuyển đổi dữ liệu không cần thiết, (3) tất cả trong một pass (parse, link, minify trong một lần duyệt AST duy nhất), (4) binary gốc biên dịch sẵn so với JavaScript thông dịch. Benchmark: esbuild bundle ứng dụng lớn trong ~0.1s so với webpack 10-30s. Vite dùng esbuild cho pre-bundling dependency và chuyển đổi TypeScript/JSX chính vì tốc độ này.',
  },
  'bt-042': {
    question:
      'Cấu hình pipeline task Turborepo này có nghĩa gì cho monorepo?',
    answer:
      'build yêu cầu tất cả package dependency build trước (^build), cache output dist/ được đánh khóa theo file src và package.json. test yêu cầu package dependency đã build (^build) nhưng không tạo output cache. typecheck chạy theo thứ tự dependency mà không có caching input/output rõ ràng.',
    explanation:
      'Turborepo v2 dùng "tasks" thay vì "pipeline". Tiền tố "^" nghĩa là "chạy task này trong tất cả package mà package này phụ thuộc trước". "inputs" định nghĩa file nào đóng góp vào cache key — chỉ thay đổi file test sẽ không vô hiệu cache build. "outputs" là những gì được lưu/khôi phục từ cache. Không có "outputs" = kết quả task không cache ra đĩa (nhưng hoàn thành task được theo dõi). Điều này cho phép build tăng tốc chính xác.',
  },
  'bt-043': {
    question:
      'Làm thế nào để cấu hình thư viện component dựa trên Vite cho việc sử dụng tối ưu bởi các ứng dụng downstream?',
    explanation:
      'Library vite.config.ts: build: { lib: { entry: "src/index.ts", formats: ["es", "cjs"] }, rollupOptions: { external: ["react", "react-dom"], output: { globals: { react: "React" } } } }. Thêm vite-plugin-dts cho khai báo kiểu. Trong package.json: "exports" với điều kiện import/require/types, "peerDependencies" cho React, "sideEffects": false (hoặc ["**/*.css"]). Điều này đảm bảo ứng dụng downstream có thể tree-shake thư viện và dùng React instance của riêng họ.',
    options: [
      'Bundle mọi thứ bao gồm React vào output',
      'Dùng Vite lib mode với: cấu hình build.lib cho entry/format (ESM+CJS), externalize peer dep (React), tạo khai báo TypeScript (vite-plugin-dts), cấu hình "exports" trong package.json cho conditional resolution, và đặt "sideEffects: false" cho tree shaking.',
      'Chỉ cung cấp file TypeScript mã nguồn mà không build',
      'Dùng Vite ở chế độ SSR cho library build',
    ],
  },
  'bt-044': {
    question:
      'Mục đích của các file `.env`, `.env.local`, `.env.production` trong dự án Vite là gì?',
    explanation:
      'Thứ tự tải file env của Vite (file sau ghi đè file trước): .env (tất cả môi trường), .env.local (tất cả môi trường, gitignored), .env.[mode] (theo mode cụ thể), .env.[mode].local (theo mode cụ thể, gitignored). VITE_API_URL=https://api.example.com có thể truy cập qua import.meta.env.VITE_API_URL. Biến không có tiền tố VITE_ KHÔNG được expose cho mã trình duyệt (chỉ khả dụng phía server trong SSR hoặc trong vite.config.ts). Dùng import.meta.env.MODE cho "development"/"production".',
    options: [
      'Chúng cấu hình port và host của Vite dev server',
      'File .env định nghĩa biến môi trường khả dụng cho ứng dụng qua import.meta.env. Chỉ biến có tiền tố VITE_ được expose cho mã client. .env.local được gitignore (cho secret). Override .env.production được áp dụng trong vite build.',
      'Các file này thay thế cấu hình vite.config.ts',
      'Chúng lưu trữ metadata cache build được Vite sử dụng nội bộ',
    ],
  },
  'bt-045': {
    question:
      'Một consumer thư viện báo lỗi "Invalid hook call" khi import package của bạn vào ứng dụng React. Nguyên nhân có thể nhất là gì?',
    answer:
      'React được liệt kê là "dependencies" thay vì "peerDependencies", gây ra hai bản sao React được bundle — một từ thư viện và một từ ứng dụng consumer. React hook bị lỗi khi tồn tại nhiều React instance.',
    explanation:
      'Cách sửa: chuyển React sang "peerDependencies": { "react": ">=17" } và thêm vào "devDependencies" cho phát triển cục bộ. Cũng externalize React trong cấu hình Vite/Rollup: external: ["react", "react-dom"]. Điều này đảm bảo sử dụng React instance duy nhất của consumer. Vấn đề tương tự xảy ra với context, forwardRef và bất kỳ singleton React nào. Luôn dùng peerDependencies cho package framework trong thư viện.',
  },
}
