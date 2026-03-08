import type { QuestionTranslationMap } from '../types'

export const testingVi: QuestionTranslationMap = {
  'te-001': {
    question:
      'Trong React Testing Library, phương thức truy vấn nào được ưu tiên sử dụng để tìm một nút bấm mà người dùng có thể nhìn thấy?',
    options: [
      'container.querySelector("button")',
      'getByTestId("submit-btn")',
      'getByRole("button", { name: /submit/i })',
      'getByClassName("btn-submit")',
    ],
    explanation:
      'Triết lý của RTL là truy vấn DOM theo cách người dùng tương tác với nó. getByRole() với tên truy cập (accessible name) khớp với những gì trình đọc màn hình thông báo và những gì người dùng nhìn thấy. Nó cũng giúp xác thực tính truy cập. getByTestId() chỉ nên dùng như phương án cuối cùng, còn querySelector bỏ qua hoàn toàn phương pháp ưu tiên truy cập của RTL.',
  },
  'te-002': {
    question:
      'Trong Vitest, vi.fn() tạo một hàm mock có khả năng theo dõi số lần được gọi và các đối số truyền vào.',
    explanation:
      'vi.fn() tạo một hàm spy/mock. Sau khi gọi, bạn có thể kiểm tra bằng expect(fn).toHaveBeenCalledTimes(1), expect(fn).toHaveBeenCalledWith("arg"), hoặc xem fn.mock.calls. Bạn cũng có thể thiết lập giá trị trả về bằng vi.fn().mockReturnValue(42) hoặc .mockResolvedValue() cho hàm bất đồng bộ.',
  },
  'te-003': {
    question: 'Mẫu Arrange-Act-Assert (AAA) trong kiểm thử là gì?',
    options: [
      'Một mẫu cấu hình cho test runner',
      'Một cấu trúc kiểm thử: Arrange (thiết lập dữ liệu/trạng thái test), Act (thực thi đoạn mã cần kiểm thử), Assert (xác minh kết quả) — giúp test dễ đọc và tập trung',
      'Một mẫu triển khai CI/CD',
      'Một mẫu kiểm thử bất đồng bộ để xử lý Promise',
    ],
    explanation:
      'AAA là mẫu cấu trúc test được sử dụng rộng rãi nhất: Arrange thiết lập điều kiện tiên quyết (dữ liệu mock, render component, cấu hình mock); Act thực hiện hành động cần kiểm thử (nhấn nút, gọi hàm); Assert xác minh kết quả (kiểm tra DOM, lời gọi hàm, trạng thái). Nó tương ứng trực tiếp với Given-When-Then trong BDD.',
  },
  'te-004': {
    question:
      'Gói @testing-library/user-event cung cấp những gì so với fireEvent?',
    options: [
      'Nó nhanh hơn fireEvent cho tất cả các tương tác',
      'Nó mô phỏng các tương tác thực của người dùng trên trình duyệt (bao gồm sự kiện con trỏ, sự kiện bàn phím theo đúng thứ tự, quản lý focus) thay vì chỉ gửi đi từng sự kiện tổng hợp đơn lẻ — cho hành vi test thực tế hơn',
      'Nó hoạt động với React Native còn fireEvent thì không',
      'Nó cung cấp các assertion bất đồng bộ; fireEvent chỉ đồng bộ',
    ],
    explanation:
      'userEvent mô phỏng hành vi thực của người dùng: userEvent.type() kích hoạt các sự kiện keydown, keypress, input, keyup theo trình tự và cập nhật giá trị dần dần. userEvent.click() kích hoạt pointerdown, mousedown, pointerup, mouseup, click theo thứ tự. fireEvent chỉ gửi một sự kiện duy nhất, bỏ sót chuỗi tương tác đầy đủ mà mã thực tế có thể phụ thuộc vào.',
  },
  'te-005': {
    question: 'Test Vitest này kiểm tra điều gì và nó có pass không?',
    answer:
      'Test pass. fetchData là một mock trả về Promise resolve thành { id: 1, name: "Alice" }. Cả hai assertion đều xác minh đúng đối số truyền vào và giá trị resolve.',
    explanation:
      'vi.fn().mockResolvedValue() tạo một mock trả về Promise resolve thành giá trị cho trước. await giải quyết Promise đó. toHaveBeenCalledWith kiểm tra đối số được truyền vào. toEqual thực hiện so sánh bằng sâu (deep equality). Test này kiểm tra hợp đồng của mock, hữu ích như khối xây dựng khi kiểm thử mã phụ thuộc vào hàm này.',
  },
  'te-006': {
    question:
      'MSW (Mock Service Worker) chặn những gì và khác gì so với mock fetch trực tiếp?',
    options: [
      'MSW chặn file CSS; mock fetch chặn module JS',
      'MSW chặn các yêu cầu HTTP thực tại tầng mạng (sử dụng Service Worker trong trình duyệt, chặn http/https trong Node), mang lại hành vi mạng thực tế mà không cần thay đổi mã ứng dụng hay mock fetch toàn cục',
      'MSW chỉ hoạt động trong môi trường trình duyệt; mock fetch hoạt động trong Node',
      'MSW chậm hơn mock fetch do overhead của Service Worker',
    ],
    explanation:
      'MSW chặn yêu cầu ở tầng mạng. Trong trình duyệt, một Service Worker bắt các yêu cầu đi ra. Trong Node (cho Vitest/Jest), nó patch http/https. Mã ứng dụng của bạn dùng fetch/axios thật — bạn không cần thay đổi nó. Điều này thực tế hơn vi.mock("axios") và phát hiện được các trường hợp mà mock sai tầng sẽ bỏ sót hành vi thực.',
  },
  'te-007': {
    question:
      'Trong RTL, sự khác biệt giữa các biến thể truy vấn getBy*, queryBy* và findBy* là gì?',
    options: [
      'Chúng chỉ khác nhau về tốc độ truy vấn',
      'getBy* ném lỗi nếu không tìm thấy phần tử; queryBy* trả về null nếu không tìm thấy (dùng để kiểm tra sự vắng mặt); findBy* là bất đồng bộ và chờ phần tử xuất hiện (dùng với async/await cho nội dung động)',
      'findBy* chỉ hoạt động với component bất đồng bộ',
      'queryBy* luôn trả về mảng; getBy* trả về một phần tử duy nhất',
    ],
    explanation:
      'Ba biến thể xử lý các thời điểm khác nhau: getBy* — đồng bộ, ném lỗi ngay nếu không tìm thấy (phổ biến nhất cho phần tử đã render). queryBy* — đồng bộ, trả về null (dùng với expect(el).not.toBeInTheDocument()). findBy* — bất đồng bộ, trả về Promise, thử lại đến khi hết thời gian chờ (dùng cho phần tử xuất hiện sau khi fetch dữ liệu, cập nhật state bất đồng bộ).',
  },
  'te-008': {
    question: 'Test RTL này có pass không? Cần thay đổi gì?',
    answer:
      'Test sẽ fail vì getByText chạy đồng bộ trước khi dữ liệu bất đồng bộ được tải. Nên sử dụng findByText("Alice") với await.',
    explanation:
      'getByText ném lỗi ngay lập tức nếu "Alice" không có trong DOM tại thời điểm render. Vì việc fetch dữ liệu là bất đồng bộ, "Alice" sẽ xuất hiện sau đó. Cách sửa: await screen.findByText("Alice") sẽ liên tục kiểm tra DOM cho đến khi văn bản xuất hiện (thời gian chờ mặc định 1000ms). Ngoài ra, component nên được bọc trong các mock provider phù hợp (MSW, vi.mock, v.v.).',
  },
  'te-009': {
    question:
      'Trong Playwright, cách nào được khuyến nghị để chọn phần tử sao cho test bền vững trước các thay đổi UI?',
    options: [
      'CSS selector như .btn-primary',
      'XPath selector',
      'Thuộc tính data-testid hoặc locator hướng người dùng như getByRole(), getByText(), getByLabel() — tránh các selector triển khai dễ vỡ',
      'Chỉ mục phần tử như .items:nth-child(3)',
    ],
    explanation:
      'Playwright khuyến nghị: page.getByRole("button", {name: "Submit"}), page.getByLabel("Email"), page.getByTestId("cart-total"). Những cách này phản ánh trải nghiệm người dùng và sống sót qua các lần tái cấu trúc. CSS class selector hỏng khi bạn đổi tên class. XPath dễ vỡ khi cấu trúc DOM thay đổi. API locator của Playwright tự động chờ phần tử và tự động thử lại.',
  },
  'te-010': {
    question:
      'Cả Vitest và Jest đều chạy các file test song song theo mặc định, nhưng Vitest sử dụng worker thread trong khi Jest sử dụng worker process (child_process).',
    explanation:
      'Cả hai test runner đều chạy song song giữa các file theo mặc định. Jest sử dụng các tiến trình Node.js worker riêng biệt (qua jest-worker), trong khi Vitest sử dụng worker thread nhẹ hơn (qua Tinypool). Vitest thường nhanh hơn nhờ overhead thread thấp, bộ nhớ chia sẻ, hỗ trợ ESM gốc, và tái sử dụng pipeline transform của Vite. Dùng --pool=forks trong Vitest nếu cần cách ly theo tiến trình.',
  },
  'te-011': {
    question:
      'Khi nào nên sử dụng snapshot testing và những nhược điểm chính của nó là gì?',
    options: [
      'Luôn sử dụng snapshot cho tất cả các test component',
      'Dùng snapshot để phát hiện hồi quy UI có chủ đích trên các component ổn định (design system, icon). Nhược điểm: developer "cập nhật" snapshot fail một cách phản xạ mà không kiểm tra, snapshot lớn trở nên khó đọc, và chúng kiểm tra chi tiết triển khai thay vì hành vi',
      'Không bao giờ dùng snapshot trong kiểm thử hiện đại',
      'Snapshot chỉ hữu ích cho hình dạng phản hồi API',
    ],
    explanation:
      'Snapshot có phạm vi ứng dụng hẹp: các đầu ra tuần tự hóa được, ổn định như icon SVG, template email tĩnh, hoặc hình dạng API. Tránh dùng cho component động có dữ liệu/ngày thay đổi. Lỗi phổ biến nhất là mù snapshot — khi test fail, developer chạy --updateSnapshot mà không đọc diff. Ưu tiên assertion rõ ràng cho hành vi component; chỉ dùng snapshot khi toàn bộ cấu trúc quan trọng.',
  },
  'te-012': {
    question: 'File setup Vitest này thực hiện điều gì?',
    answer:
      'Nó thiết lập môi trường test toàn cục: import các matcher jest-dom (toBeInTheDocument v.v.), khởi động server MSW trước tất cả test với yêu cầu chưa xử lý sẽ ném lỗi, reset các handler override theo từng test sau mỗi test, và tắt server sau khi tất cả test hoàn thành.',
    explanation:
      'Đây là mẫu thiết lập MSW + RTL tiêu chuẩn. server.listen() bắt đầu chặn mạng. onUnhandledRequest: "error" bắt các endpoint vô tình chưa được mock (ngăn test pass im lặng với dữ liệu trống). server.resetHandlers() xóa các handler override theo test được thêm qua server.use(). Điều này đảm bảo cách ly giữa các test.',
  },
  'te-013': {
    question:
      'Testing Trophy (khác với Testing Pyramid) là gì và nó khuyến nghị gì cho kiểm thử frontend?',
    options: [
      'Một giải thưởng trao cho các đội có 100% code coverage',
      'Mô hình của Kent C. Dodds nhấn mạnh integration test hơn unit test để có ROI tốt nhất: một ít E2E test, nhiều integration test (component với tương tác thực), một số unit test, và phân tích tĩnh — vì integration test phát hiện được nhiều lỗi hơn trên mỗi đơn vị nỗ lực',
      'Một giải thưởng React Testing Library cho test tuân thủ truy cập',
      'Một badge CI/CD cho pipeline test tự động',
    ],
    explanation:
      'Testing Trophy đảo ngược trọng tâm của kim tự tháp truyền thống. Đối với frontend: phân tích tĩnh (TypeScript, ESLint) bắt lỗi rõ ràng miễn phí; unit test cho hàm thuần; integration test (test RTL kiểm tra cây component với luồng dữ liệu thực, MSW handler) mang lại giá trị cao nhất; E2E (Playwright) cho các luồng quan trọng. Integration test là tầng "rộng nhất" vì chúng kiểm tra workflow người dùng mà không có overhead trình duyệt đầy đủ dễ vỡ.',
  },
  'te-014': {
    question:
      'Test này pass ở máy cá nhân nhưng fail trên CI. Vấn đề có thể là gì?',
    answer:
      'Khác biệt múi giờ: new Date("2025-06-15") được phân tích là nửa đêm UTC. Trên máy phía tây UTC (ví dụ US Pacific UTC-7), toLocaleDateString() hiển thị "June 14, 2025" thay vì "June 15". Server CI ở UTC sẽ pass, nhưng máy dev ở múi giờ phía tây sẽ fail (hoặc ngược lại).',
    explanation:
      'Theo đặc tả, chuỗi chỉ có ngày (YYYY-MM-DD) được phân tích là UTC. Nên new Date("2025-06-15") = 15 tháng 6 lúc 00:00:00 UTC. Trên máy UTC-7, đó là 14 tháng 6 lúc 17:00 giờ địa phương, nên toLocaleDateString() hiển thị June 14. Cách sửa: dùng new Date("2025-06-15T00:00:00") để phân tích theo giờ địa phương, hoặc mock ngày với vi.setSystemTime(), hoặc đặt TZ=UTC trong cấu hình CI.',
  },
  'te-015': {
    question:
      'Trong Playwright, làm thế nào để xử lý xác thực mà không cần đăng nhập trước mỗi test?',
    options: [
      'Thêm các bước đăng nhập vào đầu mỗi file test',
      'Sử dụng storageState của Playwright để lưu trạng thái trình duyệt đã xác thực (cookie, localStorage) sau một lần đăng nhập duy nhất, sau đó tải nó làm browser context cho các file test cần xác thực',
      'Dùng test.describe.only() để bỏ qua test xác thực',
      'Mock các header xác thực trong playwright.config.ts',
    ],
    explanation:
      'Script globalSetup của Playwright đăng nhập một lần và lưu trạng thái trình duyệt qua context.storageState(). Các file test cần xác thực chỉ định: use: { storageState: "auth.json" } trong cấu hình project. Playwright tải trạng thái này vào browser context, bỏ qua bước đăng nhập. Cách này nhanh hơn nhiều so với đăng nhập mỗi test và test hoạt động với cookie xác thực thật.',
  },
  'te-016': {
    question:
      'Sự khác biệt giữa code coverage và chất lượng test là gì, và tại sao 100% coverage có thể gây hiểu lầm?',
    options: [
      '100% coverage nghĩa là tất cả lỗi đều được bắt',
      '100% coverage nghĩa là mọi dòng đều được thực thi trong quá trình test, nhưng nó không nói gì về việc các assertion có ý nghĩa hay không. Một test gọi tất cả hàm mà không có câu lệnh expect() nào vẫn đạt 100% coverage trong khi không kiểm tra gì cả.',
      'Coverage chỉ quan trọng với mã backend, không phải frontend',
      '100% coverage yêu cầu kết hợp cả integration và unit test',
    ],
    explanation:
      'Coverage đo lường việc thực thi (dòng, nhánh, hàm, câu lệnh được chạy qua), không phải chất lượng assertion. Mutation testing (Stryker) bộc lộ khoảng cách này: nó tạo các biến đổi mã (đảo điều kiện, thay đổi toán tử) và kiểm tra xem test có phát hiện được không. Một codebase có thể có 100% line coverage với các test không bao giờ fail khi lỗi được đưa vào. Hãy nhắm đến ngưỡng coverage có ý nghĩa (80-90%) với assertion chất lượng thay vì đuổi theo 100%.',
  },
  'te-017': {
    question:
      'Làm thế nào để test một custom React hook riêng biệt mà không cần component bọc ngoài?',
    options: [
      'Tạo một component tạm sử dụng hook trong mỗi test',
      'Dùng tiện ích renderHook() của @testing-library/react, cung cấp môi trường React tối thiểu để gọi hook và kiểm tra giá trị trả về cùng các effect',
      'Custom hook không thể test mà không có component đầy đủ',
      'Dùng vi.mock() để mock triển khai nội bộ của hook',
    ],
    explanation:
      'renderHook(() => useMyHook(args)) từ @testing-library/react render một wrapper component tối thiểu, gọi hook, và trả về { result, rerender, unmount }. Bạn truy cập giá trị trả về của hook qua result.current. Để cập nhật state: await act(() => result.current.someAction()). Cách này sạch hơn việc tạo wrapper component cho mỗi test hook.',
  },
  'te-018': {
    question:
      'Mục đích của vi.spyOn() trong Vitest khác gì so với vi.fn()?',
    options: [
      'vi.spyOn() nhanh hơn vi.fn()',
      'vi.spyOn() bọc một method hiện có của object bằng mock trong khi giữ nguyên triển khai gốc theo mặc định, theo dõi các lời gọi. vi.fn() tạo một hàm mock độc lập từ đầu.',
      'vi.spyOn() chỉ hoạt động với hàm bất đồng bộ',
      'Chúng có chức năng giống hệt nhau',
    ],
    explanation:
      'vi.spyOn(object, "method") thay thế method bằng một spy ghi lại các lời gọi nhưng vẫn gọi đến triển khai gốc theo mặc định. Dùng khi bạn muốn xác minh method đã được gọi (hoặc với đối số cụ thể) mà không thay đổi hành vi. Thêm .mockReturnValue() hoặc .mockImplementation() để ghi đè. vi.fn() dùng để tạo mock mới không có triển khai gốc. Luôn khôi phục spy trong afterEach bằng vi.restoreAllMocks().',
  },
  'te-019': {
    question:
      'Trong Playwright E2E test, page.locator().waitFor() thay thế page.waitForSelector() cung cấp những gì?',
    options: [
      'Nó chỉ là phiên bản đổi tên với hành vi giống hệt',
      'API locator của Playwright tự động chờ phần tử và thử lại assertion, loại bỏ hầu hết các lệnh gọi waitFor() tường minh. Locator hoạt động lazy và chỉ đánh giá khi một hành động được thực hiện.',
      'waitForSelector() là bất đồng bộ; locator().waitFor() là đồng bộ',
      'locator() chỉ hoạt động với CSS selector; waitForSelector hoạt động với XPath',
    ],
    explanation:
      'Locator của Playwright có auto-waiting tích hợp. page.locator(".btn").click() tự động chờ phần tử hiển thị, enabled, và ổn định trước khi click. Điều này loại bỏ race condition. page.waitForSelector() là API cũ, dài dòng hơn. Dùng locator với expect(locator).toBeVisible() cho assertion — Playwright tự động thử lại assertion.',
  },
  'te-020': {
    question:
      'Contract testing là gì và khi nào nên sử dụng trong bối cảnh frontend?',
    options: [
      'Kiểm tra rằng các hợp đồng API (TypeScript interface) được typed đúng',
      'Một phương pháp kiểm thử trong đó consumer (frontend) định nghĩa hình dạng phản hồi API mong đợi, và provider (backend) xác minh chúng đáp ứng yêu cầu — sử dụng các công cụ như Pact. Ngăn các thay đổi API phá vỡ đến production.',
      'Kiểm tra rằng các hợp đồng CSS (design token) nhất quán',
      'Contract testing chỉ dành cho microservice, không áp dụng cho frontend',
    ],
    explanation:
      'Contract testing với Pact: frontend viết consumer test định nghĩa những gì nó mong đợi từ API. Pact tạo "pact file" (hợp đồng). Backend chạy provider verification dựa trên hợp đồng này trong CI. Nếu backend thay đổi phá vỡ hợp đồng, CI fail trước khi thay đổi phá vỡ được triển khai. Tốt hơn E2E cho việc phát hiện lệch API vì nhanh hơn và cách ly hơn.',
  },
  'te-021': {
    question:
      'Trong MSW v2, bạn định nghĩa request handler bằng http.get() và http.post() thay vì rest.get() và rest.post() của v1.',
    explanation:
      'MSW v2 (2024) giới thiệu API mới: handler được định nghĩa bằng http.get("/api/users", resolver) và http.post("/api/users", resolver). rest.get() và rest.post() của v1 đã được thay thế. Hàm resolver nhận ({ request, params, cookies }) thay vì (req, res, ctx). Response được trả về dạng: return HttpResponse.json(data) thay vì res(ctx.json(data)).',
  },
  'te-022': {
    question:
      'Hàm cleanup() từ @testing-library/react làm gì và khi nào nó được gọi?',
    options: [
      'Nó xóa lịch sử gọi của tất cả hàm mock',
      'Nó unmount cây React được render trong test và dọn dẹp DOM. Nó được tự động gọi sau mỗi test khi sử dụng Vitest/Jest, ngăn ô nhiễm test từ các component đã mount.',
      'Nó reset cơ sở dữ liệu test về trạng thái ban đầu',
      'Nó phải được gọi thủ công trong afterEach(); nó không bao giờ chạy tự động',
    ],
    explanation:
      'RTL tự động gọi cleanup() sau mỗi test qua afterEach khi sử dụng test runner được hỗ trợ (Vitest, Jest). Điều này unmount component, xóa chúng khỏi DOM, và ngăn rò rỉ bộ nhớ. Không có cleanup, component từ test trước có thể gây nhiễu test sau. Bạn chỉ cần cleanup thủ công nếu sử dụng test runner khác.',
  },
  'te-023': {
    question:
      'Bạn nên cấu trúc chiến lược kiểm thử cho thư viện component design system như thế nào?',
    options: [
      'Chỉ visual regression test qua so sánh screenshot',
      'Chỉ unit test với vi.fn() mock cho tất cả tương tác',
      'Đa tầng: Vitest unit test cho logic/tiện ích, RTL integration test cho hành vi component và truy cập (axe-core), Storybook interaction test cho các trạng thái trực quan, và tùy chọn Chromatic/Percy cho visual regression trên các biến thể chính',
      'Chỉ E2E test vì chúng kiểm tra kịch bản thực tế nhất',
    ],
    explanation:
      'Design system cần nhiều tầng test: (1) Unit: hàm tiện ích thuần, chuyển đổi token. (2) RTL integration: render component, props, event, đúng ARIA, điều hướng bàn phím — dùng jest-axe/axe-core. (3) Hàm play() của Storybook: kịch bản tương tác cho mỗi story. (4) Visual regression: phát hiện thay đổi trực quan không mong muốn trong CI. Điều này bắt lỗi chức năng, vi phạm a11y, và hồi quy trực quan.',
  },
  'te-024': {
    question: 'Test Vitest với fake timer này kiểm tra điều gì?',
    answer:
      'Test xác minh rằng gọi debounced() ba lần liên tiếp nhanh không gọi fn ngay lập tức, và sau khi tua thời gian giả tiến 300ms, fn được gọi đúng một lần (chỉ lần gọi cuối cùng được kích hoạt).',
    explanation:
      'vi.useFakeTimers() thay thế setTimeout/setInterval bằng triển khai giả có thể kiểm soát. vi.advanceTimersByTime(300) tua nhanh thời gian ảo 300ms mà không cần chờ thực. Điều này kiểm tra hành vi debounce một cách xác định mà không cần delay thực. Test xác minh đúng hợp đồng debounce: nhiều lần gọi nhanh gộp thành một lần thực thi sau khoảng thời gian chờ.',
  },
  'te-025': {
    question:
      'Phương pháp được khuyến nghị để kiểm thử React Server Components (RSC) là gì, khi chúng chạy trên server và không thể sử dụng API chỉ có trên trình duyệt?',
    options: [
      'RSC không thể test — bỏ qua chúng và chỉ test Client Component',
      'Dùng renderToString() của React và mock HTTP request chuẩn',
      'Test RSC qua tích hợp: dùng tiện ích test thử nghiệm của Next.js hoặc Playwright E2E để kiểm tra output render thực. Để unit test logic RSC, tách các hàm fetch dữ liệu thuần và test chúng riêng biệt.',
      'Chuyển tất cả RSC thành Client Component trước khi test',
    ],
    explanation:
      'Kiểm thử RSC vẫn đang phát triển. Phương pháp được khuyến nghị: (1) Tách và unit test các hàm fetch dữ liệu bất đồng bộ mà RSC gọi. (2) Dùng Playwright E2E để xác minh output render đầy đủ trong server Next.js thật. (3) @next/experimental-test-utils của Next.js cung cấp renderServer() cho kiểm thử RSC trong các phiên bản mới. Test output HTML trong E2E bắt được hành vi thực mà người dùng nhìn thấy.',
  },
  'te-026': {
    question:
      'Vitest in-source testing là gì và khi nào nó hữu ích?',
    options: [
      'Chạy test trong Docker container',
      'Viết mã test trực tiếp trong file source bằng import.meta.vitest, để test nằm cạnh triển khai. Hữu ích cho hàm tiện ích và logic nội bộ được hưởng lợi từ sự đặt cạnh nhau.',
      'Chạy Vitest trong môi trường trình duyệt',
      'Một chế độ Vitest bỏ qua file test bên ngoài và chỉ chạy assertion inline',
    ],
    explanation:
      'Vitest hỗ trợ in-source test qua tùy chọn defineConfig { test: { includeSource: ["src/**/*.ts"] } }. Trong file source, bọc test bằng if (import.meta.vitest) { const { it, expect } = import.meta.vitest; ... }. Trong build production, import.meta.vitest là undefined nên dead-code elimination loại bỏ test. Tốt nhất cho hàm tiện ích nhỏ nơi sự gần gũi với triển khai giúp dễ hiểu hơn.',
  },
  'te-027': {
    question: 'Tiện ích within() của RTL làm gì?',
    options: [
      'Giới hạn phạm vi tất cả truy vấn tiếp theo vào một cây con DOM cụ thể, cho phép bạn tìm phần tử trong một container cụ thể thay vì toàn bộ document',
      'Kiểm tra xem một phần tử có phải là con cháu của phần tử khác',
      'Tạo một render context mới cách ly khỏi document toàn cục',
      'Nó là bí danh của screen.getByRole()',
    ],
    explanation:
      'within(element) trả về tập hàm truy vấn được ràng buộc trong phạm vi phần tử đó. Ví dụ: const row = screen.getByRole("row", { name: /alice/i }); within(row).getByRole("button", { name: /delete/i }). Điều này thiết yếu khi cùng nội dung nút xuất hiện trong nhiều hàng/phần — bạn truy vấn trong ngữ cảnh cụ thể thay vì toàn trang, giúp test chính xác và dễ đọc hơn.',
  },
  'te-028': {
    question:
      'screen.debug() xuất ra gì và khi nào nên sử dụng?',
    options: [
      'Ghi log tất cả assertion fail ra console',
      'In cây DOM hiện tại (hoặc cây con của phần tử cụ thể) ra console ở định dạng dễ đọc — hữu ích để hiểu thực tế những gì được render khi truy vấn fail',
      'Mở Chrome DevTools debugger trong test runner',
      'Ghi log tất cả truy vấn RTL đã thực thi',
    ],
    explanation:
      'screen.debug() gọi console.log với chuỗi HTML được format đẹp của DOM đã render. Bạn có thể truyền phần tử: screen.debug(screen.getByRole("list")) để giới hạn output. Dùng khi truy vấn ném "Unable to find..." — nhìn markup thực sự được render thường cho thấy ngay liệu component có render không, có văn bản khác không, hoặc thiếu ARIA role mong đợi. Xóa lệnh debug() trước khi commit.',
  },
  'te-029': {
    question: 'Test này kiểm tra điều gì và nó sẽ pass hay fail?',
    answer:
      'Test kiểm tra rằng sau khi nhấn Sign In, nút trở thành disabled (cho thấy trạng thái loading). Nó sẽ pass nếu LoginForm disable nút sau khi submit. waitFor liên tục kiểm tra cho đến khi assertion pass hoặc hết thời gian chờ.',
    explanation:
      'waitFor(() => expect(...)) thử lại callback assertion liên tục cho đến khi pass hoặc hết thời gian chờ (mặc định 1000ms). Điều này xử lý khoảng cách bất đồng bộ giữa việc click submit và React re-render với trạng thái disabled. userEvent.setup() tạo một instance với trạng thái con trỏ/bàn phím chia sẻ — được ưu tiên hơn userEvent.click() tĩnh cho chuỗi tương tác.',
  },
  'te-030': {
    question: 'Test renderHook này xác minh điều gì?',
    answer:
      'Nó xác minh rằng useCounter khởi tạo với count bằng 0, và gọi increment() tăng count lên 1. act() bọc các cập nhật state để flush batching của React trước khi assertion.',
    explanation:
      'renderHook() từ @testing-library/react render một host component tối thiểu gọi hook. result.current giữ giá trị trả về mới nhất của hook. act() đảm bảo tất cả cập nhật state được kích hoạt bởi increment() được flush trước assertion tiếp theo. Không có act(), assertion có thể chạy trước khi React xử lý cập nhật state. Điều này test hợp đồng của hook độc lập với bất kỳ UI component nào.',
  },
  'te-031': {
    question:
      'Trong MSW v2, làm thế nào để định nghĩa handler trả về JSON response bằng API mới?',
    options: [
      'rest.get("/api/user", (req, res, ctx) => res(ctx.json({ id: 1 })))',
      'http.get("/api/user", () => HttpResponse.json({ id: 1 }))',
      'server.mock("GET /api/user", { id: 1 })',
      'fetch.mock("/api/user", HttpResponse.json({ id: 1 }))',
    ],
    explanation:
      'MSW v2 (phát hành cuối 2023) thay thế namespace rest.* bằng http.* và mẫu res(ctx.*) bằng việc trả về Response chuẩn hoặc HttpResponse. Handler nhận resolver ({ request, params, cookies }) và trả về HttpResponse.json(data) cho JSON, HttpResponse.text(str) cho text, hoặc Response gốc. Điều này phù hợp với đặc tả Fetch API và hoạt động giống nhau trong môi trường trình duyệt và Node.',
  },
  'te-032': {
    question:
      'Playwright fixture là gì và chúng cải thiện tổ chức test như thế nào?',
    options: [
      'Fixture là file JSON tĩnh được tải trước mỗi test',
      'Playwright fixture mở rộng đối tượng test cơ sở với logic setup/teardown tùy chỉnh và giá trị chia sẻ (trang đã xác thực, kết nối DB, helper tùy chỉnh). Chúng kết hợp sạch sẽ, chạy lazy (chỉ khi test sử dụng), và cung cấp cleanup tự động.',
      'Fixture là factory dữ liệu mock để tạo dữ liệu đầu vào test',
      'Fixture là tương đương beforeEach/afterEach của Jest trong Playwright',
    ],
    explanation:
      'Playwright fixture: const test = base.extend({ loggedInPage: async ({ page }, use) => { await page.goto("/login"); await page.fill(...); await use(page); } }). Mỗi test chấp nhận loggedInPage nhận được trang đã xác thực sẵn. Fixture có thể kết hợp: adminPage có thể mở rộng loggedInPage. Chúng chỉ chạy khi được sử dụng (lazy), có cleanup tự động (code sau await use()), và giúp file test sạch hơn bằng cách tách setup thành các phần có tên tái sử dụng.',
  },
  'te-033': {
    question:
      'Visual regression testing với Playwright là gì và những hạn chế thực tế của nó là gì?',
    options: [
      'Kiểm tra rằng CSS animation hoàn thành không lỗi',
      'Chụp screenshot trong quá trình chạy test và so sánh pixel-by-pixel với ảnh baseline. Phát hiện thay đổi trực quan không mong muốn. Hạn chế: dễ vỡ do khác biệt render giữa OS/GPU, render font, anti-aliasing, và nội dung động như ngày/quảng cáo cần masking.',
      'Kiểm tra rằng thiết kế trực quan khớp chính xác với Figma',
      'Chạy Lighthouse audit cho các chỉ số hiệu năng trực quan',
    ],
    explanation:
      'expect(page).toHaveScreenshot() hoặc expect(locator).toHaveScreenshot() của Playwright chụp và so sánh screenshot. Cập nhật baseline bằng --update-snapshots. Vấn đề thực tế: screenshot khác nhau giữa Windows/Mac/Linux do render font; dùng môi trường CI nhất quán (Docker). Mask vùng động: toHaveScreenshot({ mask: [page.locator(".timestamp")] }). Cân nhắc threshold: { maxDiffPixelRatio: 0.01 } cho dung sai anti-aliasing nhỏ.',
  },
  'te-034': {
    question:
      'Sự khác biệt giữa unit test, integration test, và end-to-end (E2E) test là gì?',
    options: [
      'Chúng chỉ khác nhau về tốc độ thực thi; tất cả đều kiểm tra cùng thứ',
      'Unit test xác minh hàm/component cách ly với dependency được mock. Integration test xác minh nhiều đơn vị hoạt động cùng nhau (ví dụ component + hook thật + MSW handler). E2E test chạy trong trình duyệt thật với toàn bộ stack — kiểm tra hành trình người dùng từ UI đến backend.',
      'Unit test dùng Vitest; integration test dùng Jest; E2E test dùng Cypress',
      'E2E test quan trọng nhất; unit và integration test là tùy chọn',
    ],
    explanation:
      'Các loại test khác nhau về phạm vi, tốc độ, và độ tin cậy: Unit (millisecond, cách ly, xác định chính xác lỗi nhưng có thể bỏ sót lỗi tích hợp), Integration (giây, tương tác component thật với mạng mock, ROI tốt nhất theo Testing Trophy của Kent C. Dodds), E2E (phút, toàn stack, độ tin cậy cao nhất nhưng chậm nhất và dễ vỡ nhất). Bộ test lành mạnh sử dụng cả ba tầng theo tỷ lệ phù hợp.',
  },
  'te-035': {
    question:
      'Sự khác biệt giữa mock, stub, spy, và fake trong thuật ngữ test double là gì?',
    options: [
      'Chúng đều là từ đồng nghĩa cho cùng một khái niệm',
      'Stub: trả về dữ liệu cố định, không xác minh lời gọi. Mock: được lập trình sẵn với kỳ vọng (xác minh tương tác). Spy: bọc triển khai thật, ghi lại lời gọi. Fake: triển khai hoạt động với đơn giản hóa (DB trong bộ nhớ). Hầu hết công cụ làm mờ ranh giới; vi.fn() chủ yếu là mock/spy.',
      'Mock dành cho hàm bất đồng bộ; stub chỉ cho hàm đồng bộ',
      'Fake yêu cầu kết nối mạng thật; stub thì không',
    ],
    explanation:
      'Phân loại của Gerard Meszaros: Dummy (giữ chỗ, không sử dụng). Stub (cung cấp câu trả lời soạn sẵn, không xác minh). Spy (ghi lại lời gọi, có thể xác minh sau). Mock (kỳ vọng được lập trình sẵn, xác minh trong quá trình chạy). Fake (triển khai hoạt động, ví dụ SQLite trong bộ nhớ cho test). Trên thực tế: vi.fn().mockReturnValue() = stub khi dùng cho dữ liệu, mock khi bạn assert lời gọi. vi.spyOn() = spy. MSW = fake server.',
  },
  'te-036': {
    question:
      'Bốn chỉ số code coverage chính là gì và mỗi chỉ số đo lường điều gì?',
    options: [
      'Coverage nhanh, chậm, pass, fail',
      'Statement (mỗi câu lệnh được thực thi?), Branch (mỗi nhánh if/else được đi qua?), Function (mỗi hàm được gọi?), Line (mỗi dòng được thực thi?). Branch coverage có ý nghĩa nhất — nó bộc lộ các đường điều kiện chưa được test.',
      'Unit coverage, integration coverage, E2E coverage, và mutation coverage',
      'CSS coverage, JS coverage, HTML coverage, và network coverage',
    ],
    explanation:
      'Các chỉ số coverage từ ít đến nhiều ý nghĩa: Line (đơn giản nhất, chỉ đếm dòng đã thực thi), Statement (chi tiết hơn: nhiều câu lệnh trên mỗi dòng), Function (tất cả hàm đã được gọi?), Branch (tất cả đường mã — if/else, ternary, switch, optional chaining — đã được thực thi?). 100% branch coverage khó đạt nhất nhưng có giá trị nhất. Cấu hình ngưỡng trong vitest.config: coverage: { thresholds: { branches: 80 } }.',
  },
  'te-037': {
    question:
      'Test cho component form này xác minh điều gì và điều gì sẽ làm nó fail?',
    answer:
      'Nó xác minh rằng submit form trống hiển thị thông báo lỗi validation với role="alert" chứa "email is required", và callback onSubmit KHÔNG được gọi khi validation fail.',
    explanation:
      'Mẫu test form tốt: (1) truy vấn theo role truy cập "alert" (vùng ARIA live cho lỗi), (2) kiểm tra nội dung text bằng regex (không phân biệt hoa thường), (3) xác minh submit handler KHÔNG được gọi — đảm bảo validation phía client ngăn submission không hợp lệ. Test này sẽ fail nếu: phần tử lỗi thiếu role="alert", text không khớp, hoặc onSubmit vẫn kích hoạt dù input không hợp lệ.',
  },
  'te-038': {
    question:
      'Làm thế nào để test một React component sử dụng Context mà không cần bọc mỗi test trong toàn bộ cây Provider?',
    options: [
      'Bạn phải luôn bọc bằng Provider thật; không có cách nào khác',
      'Tạo hàm render tùy chỉnh bọc với các Provider cần thiết, hoặc dùng tùy chọn wrapper: render(<Component />, { wrapper: ThemeProvider }). Điều này cung cấp context mà không lặp lại boilerplate Provider trong mỗi test.',
      'Mock module context bằng vi.mock() để tránh Provider',
      'Dùng screen.getContext() để inject giá trị context trực tiếp',
    ],
    explanation:
      'render của RTL chấp nhận tùy chọn { wrapper }: render(<MyComponent />, { wrapper: ({ children }) => <ThemeProvider theme="dark">{children}</ThemeProvider> }). Tốt hơn: tạo helper renderWithProviders() tùy chỉnh bọc với tất cả Provider cấp ứng dụng (theme, auth, router, query client). Tài liệu RTL khuyến nghị mẫu này. Để unit test Context consumer, bạn cũng có thể cung cấp Provider mock tối thiểu với giá trị test.',
  },
  'te-039': {
    question: 'Làm thế nào để test một React error boundary component?',
    options: [
      'Error boundary không thể unit test — chỉ test E2E được',
      'Render một component ném lỗi bên trong error boundary, tắt output console.error dự kiến bằng vi.spyOn(console, "error").mockImplementation(() => {}), và assert rằng fallback UI được hiển thị.',
      'Dùng khối try/catch trong test RTL để bắt lỗi được ném',
      'Mock lifecycle componentDidCatch của React bằng vi.mock("react")',
    ],
    explanation:
      'Kiểm thử error boundary: render <ErrorBoundary><ThrowingComponent /></ErrorBoundary> trong đó ThrowingComponent ném lỗi khi render. RTL sẽ log lỗi ra console.error (log nội bộ của React) — tắt bằng vi.spyOn. Assert fallback: expect(screen.getByText(/something went wrong/i)).toBeInTheDocument(). Cũng test cơ chế reset nếu boundary có nút "Thử lại". Lưu ý: React 16+ gọi componentDidCatch hai lần trong dev strict mode.',
  },
  'te-040': {
    question:
      'Cấu hình workspace của Vitest là gì và nó hỗ trợ kiểm thử các môi trường khác nhau trong monorepo như thế nào?',
    options: [
      'Cấu hình workspace chỉ kiểm soát file test nào được bao gồm',
      'vitest.workspace.ts định nghĩa nhiều project với các môi trường khác nhau (jsdom, node, happy-dom), mỗi project có pattern include, file setup, và cấu hình riêng. Một monorepo có thể chạy test môi trường trình duyệt (React component) và test môi trường Node (API handler) trong một lần chạy vitest.',
      'Cấu hình workspace chỉ dành cho TypeScript path alias',
      'Nó giống turbo.json nhưng cho điều phối test',
    ],
    explanation:
      'vitest.workspace.ts: export default [ { extends: "./vite.config.ts", test: { name: "client", environment: "jsdom", include: ["src/**/*.test.tsx"] } }, { test: { name: "server", environment: "node", include: ["server/**/*.test.ts"] } } ]. Mỗi project chạy với môi trường và setup riêng. UI vitest hiển thị kết quả theo project. Cách này hiệu quả hơn chạy nhiều instance vitest riêng vì chúng chia sẻ cùng process với môi trường cách ly.',
  },
  'te-041': {
    question:
      'Chế độ browser của Vitest chạy test trong trình duyệt thật (qua Playwright hoặc WebdriverIO) thay vì mô phỏng jsdom mặc định.',
    explanation:
      'Chế độ browser của Vitest (thử nghiệm, Vitest 1.x+) thực thi test trong môi trường trình duyệt thật sử dụng Playwright, WebdriverIO, hoặc Webdriver. Điều này loại bỏ hạn chế của jsdom (không có layout thật, không canvas, không WebGL, API trình duyệt xấp xỉ). Cấu hình bằng test: { browser: { enabled: true, provider: "playwright", name: "chromium" } }. Hữu ích cho test component phụ thuộc vào đo lường DOM thật hoặc API chỉ có trên trình duyệt.',
  },
  'te-042': {
    question:
      'Ưu và nhược điểm của snapshot testing với Vitest là gì?',
    options: [
      'Snapshot luôn là phương pháp tốt nhất cho component testing',
      'Ưu điểm: viết nhanh, phát hiện thay đổi cấu trúc không mong muốn, tuyệt vời cho output ổn định (serializer, icon, hình dạng API). Nhược điểm: snapshot lớn khó đọc, developer cập nhật chúng mù quáng khi fail, chúng test chi tiết triển khai thay vì hành vi, và tích tụ thành gánh nặng theo thời gian.',
      'Snapshot chỉ hoạt động với class component, không phải hook',
      'Snapshot đã bị deprecated trong Vitest 2.0',
    ],
    explanation:
      'Đánh đổi của snapshot: khi snapshot test fail, nó CÓ THỂ là hồi quy hoặc thay đổi có chủ đích — developer phải diff thủ công để biết. Điều này phá vỡ tín hiệu fail nhanh của test tốt. Trường hợp sử dụng tốt nhất: (1) Hàm serialization thuần, (2) Hình dạng object phức tạp từ parser/transformer, (3) Output icon SVG, (4) Markup component ổn định không bao giờ thay đổi có chủ đích. Tránh dùng cho component có props, state, tương tác người dùng, hoặc dữ liệu động.',
  },
  'te-043': {
    question:
      'Trong Playwright, bạn sử dụng test.describe và tổ chức test suite như thế nào?',
    options: [
      'test.describe chỉ để nhóm; nó không ảnh hưởng đến việc thực thi',
      'test.describe nhóm các test liên quan, cho phép hook beforeEach/afterEach chia sẻ trong phạm vi nhóm, hỗ trợ lồng nhau, và cho phép test.describe.parallel() để thực thi đồng thời trong nhóm. test.describe.serial() ép thực thi tuần tự cho test chia sẻ state.',
      'test.describe thay thế test.beforeAll cho setup chia sẻ',
      'Playwright không có API describe — dùng file riêng biệt thay thế',
    ],
    explanation:
      'test.describe của Playwright tổ chức test theo logic: test.describe("checkout flow", () => { test.beforeEach(async ({ page }) => { await page.goto("/cart") }); test("adds item", ...); test("removes item", ...); }). Hook bên trong describe có phạm vi — chúng chỉ chạy cho test trong nhóm đó. test.describe.parallel() ghi đè thực thi tuần tự mặc định cấp file cho test độc lập. Lồng khối describe tạo phân cấp rõ ràng trong báo cáo.',
  },
  'te-044': {
    question:
      'Những chiến lược kiểm thử nào áp dụng cụ thể cho React Server Components (RSC)?',
    options: [
      'RSC được test giống hệt Client Component bằng RTL',
      'Chiến lược test RSC: (1) unit test hàm fetch dữ liệu bất đồng bộ riêng biệt, (2) dùng tiện ích test thử nghiệm của Next.js cho RSC rendering, (3) Playwright E2E để xác minh output HTML render trong server Next.js thật, (4) test output RSC dưới dạng assertion HTML tĩnh.',
      'RSC phải được chuyển thành Client Component để test',
      'RSC được tự động test bởi kiểm tra kiểu TypeScript',
    ],
    explanation:
      'Thách thức RSC: chúng là component bất đồng bộ (async function Page()), chỉ chạy phía server, và truy cập tài nguyên server (DB, filesystem). RTL dựa trên jsdom không thể thực thi RSC thật. Phương pháp hiện tại: (1) Tách hàm dữ liệu thuần và unit test chúng. (2) @next/experimental-test-utils cung cấp renderServer() trong development. (3) Playwright E2E điều hướng đến route và assert text đã render. Hệ sinh thái vẫn đang phát triển tính đến 2025.',
  },
  'te-045': {
    question:
      'Test Playwright này không ổn định — đôi khi pass đôi khi fail. Vấn đề là gì?',
    answer:
      'page.waitForTimeout(1000) là delay cố định vừa dễ vỡ (fail trên CI chậm) vừa lãng phí (chờ thừa trên máy nhanh). Thay bằng expect(page.locator(".notification")).toBeVisible() vốn có auto-waiting và thử lại tích hợp.',
    explanation:
      'Timeout cố định là nguyên nhân chính của test Playwright không ổn định. Thông báo có thể xuất hiện trong 200ms hoặc 2000ms tùy tải server. Assertion expect của Playwright tự động chờ (timeout mặc định 5s): await expect(page.locator(".notification")).toBeVisible() kiểm tra liên tục cho đến khi phần tử hiển thị hoặc hết timeout. Không bao giờ dùng waitForTimeout cho việc phần tử xuất hiện — chỉ dùng cho tạm dừng có chủ đích khi không có sự kiện nào để chờ.',
  },
}
