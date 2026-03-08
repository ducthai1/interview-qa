import type { QuestionTranslationMap } from '../types'

export const jsTsPracticalVi: QuestionTranslationMap = {

  'jtp-001': {
    question: 'Người dùng báo cáo rằng SPA của bạn chạy chậm dần theo thời gian. Ảnh chụp heap trong Chrome DevTools cho thấy bộ nhớ tăng lên sau mỗi lần điều hướng trang. Tìm và sửa lỗi rò rỉ bộ nhớ trong useEffect React này.',
    explanation: 'Ba lỗi rò rỉ: (1) WebSocket không bao giờ bị đóng — mỗi khi channelId thay đổi sẽ mở một kết nối mới mà không đóng kết nối cũ. (2) Trình lắng nghe sự kiện resize của window tích lũy vì handleResize được tạo lại mỗi lần render và không bao giờ bị gỡ bỏ. (3) setInterval không bao giờ bị xóa. Cách sửa là trả về một hàm dọn dẹp để đóng WebSocket, gỡ bỏ trình lắng nghe sự kiện (sử dụng tham chiếu ổn định), và xóa interval. Hàm dọn dẹp này chạy khi component bị unmount và trước mỗi lần chạy lại khi channelId thay đổi.',
  },

  'jtp-002': {
    question: 'Triển khai hàm deepClone xử lý đúng các kiểu Date, RegExp, Map, Set, ArrayBuffer và tham chiếu vòng tròn. KHÔNG dùng structuredClone.',
    explanation: 'WeakMap theo dõi các đối tượng đã được xử lý để xử lý tham chiếu vòng tròn — nếu gặp lại cùng một đối tượng, ta trả về bản sao đã tạo. Mỗi kiểu tích hợp cần xử lý đặc biệt: Date được sao chép qua getTime(), RegExp qua source/flags, Map/Set bằng cách duyệt và sao chép đệ quy các phần tử. Reflect.ownKeys bắt cả khóa string và Symbol, và Object.getOwnPropertyDescriptor bảo toàn các thuộc tính non-enumerable và getter/setter. Đây về cơ bản là những gì structuredClone thực hiện nội bộ, không bao gồm hỗ trợ transferable.',
  },

  'jtp-003': {
    question: 'Bạn có 5 lời gọi API độc lập đang chạy tuần tự với await. Người dùng phàn nàn dashboard mất 5 giây để tải. Tái cấu trúc để thực hiện song song với xử lý lỗi phù hợp sao cho một lỗi không làm hỏng toàn bộ trang.',
    explanation: 'Promise.allSettled chạy cả 5 lần fetch song song và chờ tất cả hoàn thành bất kể thành công hay thất bại. Khác với Promise.all ngắt ngay khi có lỗi đầu tiên, allSettled luôn trả về mảng các đối tượng { status, value/reason }. Điều này có nghĩa là một API analytics bị lỗi không ngăn dữ liệu người dùng được tải. Tổng thời gian giảm từ tổng của tất cả các lần gọi (~5 giây) xuống còn thời gian của lần gọi chậm nhất (~1 giây). Đối với dữ liệu quan trọng (user), bạn vẫn có thể muốn ném lỗi nếu nó thất bại.',
  },

  'jtp-004': {
    question: 'Xây dựng một hàng đợi tác vụ chạy tối đa N tác vụ bất đồng bộ đồng thời (giống p-limit). API: `const limit = createLimit(3); const result = await limit(() => fetch(url));`',
    explanation: 'Hàng đợi lưu trữ các tác vụ đã bao bọc kèm handler resolve/reject của chúng. Khi một tác vụ được gửi qua limit(fn), nó được đẩy vào hàng đợi và next() được gọi. next() kiểm tra xem chúng ta có dưới giới hạn concurrency và có tác vụ đang chờ không. Nếu có, nó lấy một tác vụ ra khỏi hàng đợi, tăng active, chạy hàm bất đồng bộ, và khi hoàn thành (qua .finally) giảm active và gọi next() lại để xử lý hàng đợi. Mẫu này được sử dụng bởi p-limit, bottleneck và các thư viện tương tự. Chi tiết quan trọng: fn() phải trả về một promise — tác vụ không được bắt đầu cho đến khi bị lấy ra khỏi hàng đợi.',
  },

  'jtp-005': {
    question: 'Triển khai wrapper localStorage với TTL (thời gian sống), tuần tự hóa JSON và xử lý hạn ngạch. API: `storage.set("key", data, { ttl: 60000 }); const val = storage.get("key");`',
    explanation: 'Wrapper lưu trữ đối tượng bao bọc { value, expiry } để có thể kiểm tra TTL khi đọc. Khi get(), nếu mục đã hết hạn thì nó sẽ bị xóa một cách lười biếng và trả về null. Khi set(), nếu localStorage ném QuotaExceededError, ta trước tiên xóa tất cả các mục đã hết hạn và thử lại. Khối try-catch JSON.parse xử lý các mục bị hỏng hoặc không phải JSON một cách nhẹ nhàng. Mẫu này phổ biến trong các ứng dụng thực tế để tránh lỗi im lặng với giới hạn localStorage (~5-10MB tùy thuộc vào trình duyệt).',
  },

  'jtp-006': {
    question: 'Đoạn mã này hoạt động trong Chrome nhưng bị lỗi trên Safari với "TypeError: t.replaceAll is not a function" và phân tích ngày trả về NaN. Tìm và sửa cả hai vấn đề tương thích.',
    explanation: 'Safari đã tụt hậu so với Chrome trong hỗ trợ tính năng JS. (1) String.prototype.replaceAll được thêm trong Safari 13.1 nhưng không có trong các WebView iOS cũ hơn. split/join được hỗ trợ toàn cầu. (2) Safari nổi tiếng về tính khắt khe khi phân tích Date — "2025-03-15T10:30:00" không có múi giờ được hiểu là giờ địa phương trong Chrome nhưng có thể trả về NaN trong Safari. Luôn thêm "Z" cho UTC hoặc sử dụng offset tường minh. (3) Các toán tử gán logic (??=, ||=, &&=) yêu cầu Safari 14+. (4) Regex lookbehind assertion chỉ được hỗ trợ trong Safari 16.4+. Sử dụng capture group thay thế là tương thích ngược. Luôn kiểm tra caniuse.com cho mức độ hỗ trợ trình duyệt đích.',
  },

  'jtp-007': {
    question: 'Triển khai hàm debounce với leading edge, trailing edge, cancel và flush. `const debouncedSearch = debounce(search, 300, { leading: false, trailing: true });`',
    explanation: 'Leading edge kích hoạt ngay lần đầu tiên gọi, sau đó ức chế các lần gọi tiếp theo trong khoảng thời gian delay. Trailing edge kích hoạt sau khi delay hết với các tham số mới nhất. cancel() xóa bộ đếm thời gian đang chờ và đặt lại trạng thái. flush() thực thi ngay lập tức lần gọi đang chờ. Cờ canLeadingInvoke ngăn lần gọi leading kích hoạt lại cho đến khi khoảng thời gian delay được đặt lại. Đây là cùng API với lodash.debounce và rất cần thiết cho ô tìm kiếm (trailing) và nhấp nút (leading).',
  },

  'jtp-008': {
    question: 'Hàm đệ quy này hoạt động với đầu vào nhỏ nhưng ném "Maximum call stack size exceeded" với mảng lớn (hơn 100k phần tử). Sửa mà không thay đổi kết quả logic.',
    explanation: 'Phiên bản đệ quy tạo một khung stack mới cho mỗi phần tử trong mảng — 100k phần tử có nghĩa là 100k khung stack, vượt quá giới hạn call stack của trình duyệt (~10k-25k tùy engine). Giải pháp lặp sử dụng stack tường minh (mảng) trên heap, không có giới hạn kích thước thực tế. Ta pop từ cuối (O(1)) và đẩy các mảng con trở lại stack. Vì pop xử lý các mục theo thứ tự ngược, ta đảo ngược kết quả ở cuối. Ngoài ra có thể dùng shift() và tránh đảo ngược, nhưng shift là O(n). Một cách khác là mẫu trampoline, nhưng việc viết lại lặp sạch hơn và nhanh hơn.',
  },

  'jtp-009': {
    question: 'Triển khai hàm memoize xử lý nhiều tham số, tham số dạng object (theo giá trị sâu) và có kích thước cache tối đa có thể cấu hình với LRU eviction.',
    explanation: 'Thách thức chính là tạo một khóa cache ổn định từ các tham số tùy ý. Với kiểu nguyên thủy, bản thân giá trị được dùng. Với object, JSON.stringify tạo ra chuỗi xác định (với lưu ý rằng thứ tự khóa quan trọng — resolver tùy chỉnh cho phép người dùng kiểm soát điều này). Eviction LRU tận dụng thứ tự chèn của Map: ta xóa và đặt lại khi cache hit để di chuyển mục vào cuối, và evict từ đầu (cũ nhất/ít được dùng gần đây nhất) khi vượt quá maxSize. Hàm resolver tùy chọn cho phép tạo khóa tùy chỉnh cho cache đặc thù theo miền. Các thuộc tính cache và clear() được phơi ra cho phép vô hiệu hóa thủ công.',
  },

  'jtp-010': {
    question: 'Đoạn mã legacy này là callback hell từ một dịch vụ Node.js. Xử lý lỗi bị hỏng — các lỗi từ readFile biến mất im lặng và callback cuối đôi khi kích hoạt hai lần. Tái cấu trúc sang async/await với xử lý lỗi đúng.',
    explanation: 'Mã gốc có ba lỗi nghiêm trọng: (1) Thiếu "return" sau callback(err) có nghĩa là thực thi tiếp tục sau lỗi, dẫn đến crash hoặc double callback. (2) Nếu readFile thất bại, callback lỗi kích hoạt nhưng mã tiếp tục chạy api.fetchPermissions với config không xác định. (3) JSON.parse không được bọc trong try-catch, nên JSON không hợp lệ sẽ crash mà không có callback lỗi đúng. Phiên bản async/await giải quyết tất cả những vấn đề này: lỗi tự động lan truyền, thực thi dừng ở throw đầu tiên, và luồng tuần tự rõ ràng. Các lần đọc config và permissions là độc lập nên ta song song hóa với Promise.all. Ghi cache không quan trọng nên ta bắt riêng.',
  },

  'jtp-011': {
    question: 'Đoạn mã sau xuất ra gì và tại sao?',
    explanation: 'Dòng 1: reduce với mảng rỗng ban đầu tích lũy các giá trị nhân đôi — tương đương với arr.map(v => v * 2). Dòng 2: result là một mảng mới (mảng [] ban đầu được truyền vào reduce), nên so sánh bằng tham chiếu nghiêm ngặt với arr là false. Dòng 3: Object.entries trả về [["a",1],["b",2],["c",3]], được destructure trong map để định dạng từng cặp key-value, sau đó join bằng dấu phẩy. Điều này kiểm tra hiểu biết về reduce như một công cụ lặp đa năng, so sánh tham chiếu, và pipeline Object.entries/destructuring/map/join.',
  },

  'jtp-012': {
    question: 'Output là gì? Giải thích hành vi event loop.',
    explanation: 'Mã đồng bộ chạy trước: "1" rồi "5". Microtask (Promise.then và queueMicrotask) chạy trước macrotask (setTimeout), và theo thứ tự chúng được đưa vào hàng đợi: "3" rồi "4". Cuối cùng, callback setTimeout chạy: "2". Event loop xử lý tất cả microtask sau mỗi macrotask hoàn thành, trước khi chuyển sang macrotask tiếp theo. Dù setTimeout có delay 0ms, nó vẫn được đặt vào hàng đợi macrotask, có mức ưu tiên thấp hơn hàng đợi microtask.',
  },

  'jtp-013': {
    question: 'Triển khai hàm retry với exponential backoff, số lần thử tối đa, và jitter. API: `const data = await retry(() => fetch(url), { retries: 3, baseDelay: 1000 });`',
    explanation: 'Exponential backoff tăng độ trễ giữa các lần thử lại (1s, 2s, 4s, ...) để tránh quá tải một dịch vụ đang gặp sự cố. Jitter thêm ngẫu nhiên để nhiều client thử lại đồng thời không đồng loạt đẩy vào server cùng lúc (vấn đề thundering herd). maxDelay giới hạn thời gian chờ. Hàm ném lại lỗi cuối cùng sau khi tất cả các lần thử đều hết. Mẫu này là tiêu chuẩn trong các HTTP client sản xuất (AWS SDK, axios-retry, v.v.). Bộ đếm attempt được đánh số từ 0: attempt 0 là lần gọi ban đầu, attempts 1-N là các lần thử lại.',
  },

  'jtp-014': {
    question: 'Đoạn mã ủy quyền sự kiện này nên xử lý các click trên các mục danh sách được thêm động, nhưng nhấp vào `<span>` bên trong `<li>` không kích hoạt handler. Sửa lỗi.',
    explanation: 'Khi nhấp vào `<span>` bên trong `<li>`, e.target là `<span>`, không phải `<li>`. Mã gốc dùng so sánh tagName nghiêm ngặt, thất bại với các phần tử lồng nhau. Element.closest() duyệt lên cây DOM từ phần tử được nhấp để tìm tổ tiên gần nhất khớp với selector. Nếu nhấp vào span, closest("li") tìm li cha. Nếu nhấp trực tiếp vào li, closest("li") trả về chính li đó. Đây là mẫu chuẩn cho event delegation với các phần tử lồng nhau.',
  },

  'jtp-015': {
    question: 'Bạn đang debug một vấn đề production nơi `JSON.parse(JSON.stringify(data))` im lặng loại bỏ một số trường. Kiểu dữ liệu nào sẽ bị MẤT trong vòng lặp JSON?',
    options: [
      'String, Number, Boolean, null',
      'undefined, Function, Symbol, BigInt, Date (chuyển thành chuỗi), Map, Set',
      'Chỉ undefined và Symbol',
      'Mảng và object lồng nhau',
    ],
    explanation: 'JSON.stringify im lặng loại bỏ các thuộc tính có giá trị là undefined, Function hoặc Symbol. BigInt ném TypeError. Đối tượng Date được tuần tự hóa thành chuỗi ISO nhưng JSON.parse không chuyển chúng lại — chúng vẫn là chuỗi. Map và Set tuần tự hóa thành object rỗng {} vì chúng không có thuộc tính own enumerable theo nghĩa JSON. NaN và Infinity trở thành null. Đó là lý do tại sao structuredClone hoặc deepClone tùy chỉnh được ưu tiên khi nhân bản các object phức tạp. Luôn kiểm tra các kiểu dữ liệu trước khi dùng JSON round-tripping như chiến lược clone.',
  },

  'jtp-016': {
    question: 'Người dùng báo cáo bộ lọc tìm kiếm không hoạt động đúng — nó nên không phân biệt hoa thường và khớp chuỗi con, nhưng một số mục bị thiếu trong kết quả. Tìm lỗi.',
    explanation: 'String.prototype.includes() phân biệt hoa thường. "JavaScript Basics".includes("java") trả về false vì "J" !== "j". Cách sửa là chuyển cả tên mục và câu truy vấn về chữ thường trước khi so sánh. Một cách khác là dùng regex không phân biệt hoa thường: new RegExp(query, "i"), nhưng cách đó yêu cầu escape các ký tự regex đặc biệt trong câu truy vấn. Cách toLowerCase đơn giản và an toàn hơn. Để hỗ trợ đa ngôn ngữ, hãy dùng toLocaleLowerCase() hoặc Intl.Collator để so sánh theo locale.',
  },

  'jtp-017': {
    question: 'Triển khai một pub/sub event emitter với: sự kiện có kiểu, listener one-time, subscription wildcard, và phát hiện rò rỉ bộ nhớ (cảnh báo nếu hơn 10 listener trên một sự kiện). Không dùng thư viện ngoài.',
    explanation: 'Đây là thiết kế API của Node.js EventEmitter. Các quyết định chính: (1) on() trả về hàm unsubscribe để dọn dẹp tiện lợi (mẫu React). (2) Listener once được đánh dấu và xóa sau lần gọi đầu tiên — ta thu thập chúng trước để tránh biến đổi mảng trong khi duyệt. (3) Listener wildcard "*" nhận tên sự kiện làm tham số đầu tiên để chúng có thể định tuyến/ghi log tất cả sự kiện. (4) Cảnh báo rò rỉ bộ nhớ tại hơn 10 listener khớp với hành vi Node.js — thường do thêm listener trong vòng lặp hoặc re-render mà không dọn dẹp. Private class fields (#) ngăn can thiệp từ bên ngoài vào trạng thái listener.',
  },

  'jtp-018': {
    question: 'Đoạn mã này xuất ra gì? Giải thích hành vi closure và vòng lặp.',
    explanation: 'Ba mẫu minh họa closure và phạm vi. (1) var+setTimeout: var có phạm vi hàm, nên cả ba callback chia sẻ cùng biến i, giá trị là 3 sau khi vòng lặp kết thúc. (2) let+setTimeout: let có phạm vi khối, tạo ràng buộc j mới mỗi lần lặp, nên mỗi callback bắt giá trị riêng. (3) IIFE: hàm được gọi ngay lập tức bắt k theo giá trị ở mỗi lần lặp, tạo ra 0, 1, 2. Các IIFE thực thi hàm trả về đồng bộ qua forEach, nên chúng in trước các callback setTimeout. Đây là câu hỏi phỏng vấn kinh điển kiểm tra phạm vi var vs. let và hàng đợi microtask/macrotask.',
  },

  'jtp-019': {
    question: 'Bạn cần sao chép một mảng object sao cho việc sửa đổi bản sao không ảnh hưởng đến bản gốc. Cách nào hoạt động đúng cho mảng object một cấp?',
    options: [
      'const copy = original — cả hai trỏ đến cùng một mảng',
      'const copy = [...original] — tạo mảng mới nhưng các object bên trong vẫn là tham chiếu được chia sẻ',
      'const copy = original.map(obj => ({ ...obj })) — tạo mảng mới với bản sao nông của mỗi object',
      'Cả B và C đều tạo bản sao sâu hoàn toàn độc lập',
    ],
    explanation: 'Phương án A chỉ là gán tham chiếu — không có bản sao nào cả. Phương án B (spread) tạo mảng mới, nhưng các object bên trong là cùng tham chiếu. Sửa đổi copy[0].name cũng sẽ thay đổi original[0].name. Phương án C dùng map + object spread để tạo mảng mới VÀ bản sao nông mới của mỗi object — sửa đổi copy[0].name sẽ KHÔNG ảnh hưởng đến original[0].name. Tuy nhiên, nếu các object có object lồng nhau, các cấp sâu hơn vẫn được chia sẻ. Để clone sâu thực sự, hãy dùng structuredClone() hoặc hàm clone đệ quy.',
  },

  'jtp-020': {
    question: 'Triển khai hệ thống reactive dựa trên Proxy (đơn giản hóa Vue 3 reactivity). track() và trigger() nên tự động phát hiện các phụ thuộc và chạy lại effects khi dữ liệu thay đổi.',
    explanation: 'Đây là lõi của Vue 3 reactivity. Khi watchEffect(fn) chạy, nó đặt activeEffect và thực thi fn. Trong quá trình thực thi, bất kỳ truy cập thuộc tính nào trên proxy reactive sẽ kích hoạt trap get, gọi track() để ghi nhận rằng effect này phụ thuộc vào thuộc tính đó. Khi thuộc tính sau đó được đặt, trigger() chạy lại tất cả các effect phụ thuộc vào khóa đó. Cấu trúc WeakMap(target -> Map(key -> Set(effects))) cho phép garbage collection khi target không còn được tham chiếu. Các object lồng nhau được bao bọc lười biếng trong reactive() khi truy cập. Việc theo dõi phụ thuộc này là tự động — không cần khai báo phụ thuộc như React hooks.',
  },

  'jtp-021': {
    question: 'Backend của bạn trả về API response với các hình dạng khác nhau tùy thuộc vào thành công/thất bại, và mã frontend dùng "any" ở khắp nơi gây ra crash runtime. Thiết kế một API layer an toàn về kiểu với định kiểu response đúng, thu hẹp lỗi, và một fetch wrapper.',
    explanation: 'Union phân biệt ApiResponse<T> buộc các caller phải kiểm tra success trước khi truy cập data hoặc error — TypeScript thu hẹp kiểu dựa trên kiểm tra đó. Interface ApiEndpoints tạo một nguồn sự thật duy nhất cho tất cả các route và kiểu của chúng. Wrapper apiFetch bắt cả lỗi HTTP và lỗi mạng, chuẩn hóa chúng thành cùng hình dạng lỗi. Điều này loại bỏ crash runtime từ các hình dạng response bất ngờ vì: (1) Bạn không thể truy cập .data mà không kiểm tra success, (2) Các mã lỗi là chuỗi có kiểu không phải giá trị tùy ý, (3) Lỗi mạng được bắt và chuẩn hóa. Các cải tiến sản xuất sẽ bao gồm request interceptor, làm mới token, và validation response với zod.',
  },

  'jtp-022': {
    question: 'Đoạn mã TypeScript này biên dịch không lỗi nhưng crash ở runtime. Tìm lỗ hổng an toàn kiểu và sửa nó.',
    explanation: 'Nguyên nhân gốc rễ là response.json() trả về Promise<any>, hoàn toàn bỏ qua kiểm tra kiểu TypeScript. Ép kiểu response sang UserFromAPI không cung cấp bảo vệ runtime nào — các kiểu TypeScript bị xóa khi biên dịch. Cách sửa giới thiệu validation runtime dùng Zod (hoặc các thay thế như io-ts, valibot, superstruct). Zod.parse() ném lỗi nếu dữ liệu thực tế không khớp schema, bắt lỗi tại ranh giới API thay vì sâu trong logic render. z.infer suy ra kiểu TypeScript từ schema, giữ cho kiểu và validator đồng bộ. Mẫu này được gọi là "parsing, not validation" — bạn chuyển dữ liệu không xác định thành hình dạng đã biết.',
  },

  'jtp-023': {
    question: 'Triển khai một schema validation form an toàn kiểu đơn giản hóa (giống Zod). Hỗ trợ string, number, object, optional, và cung cấp suy luận kiểu từ schema.',
    explanation: 'Đây là mẫu cốt lõi đằng sau Zod: mỗi class schema có phương thức parse() để validate và trả về dữ liệu có kiểu. Utility type Infer duyệt đệ quy schema để trích xuất kiểu TypeScript. SObject duyệt shape và parse từng khóa. SOptional bao bọc một schema khác và cho phép undefined. Builder API (s.string(), s.object()) cung cấp DSL gọn gàng. Các tính năng TypeScript chính được sử dụng: conditional types cho Infer, từ khóa infer để trích xuất tham số generic, ReturnType để suy ra kiểu output của parse. Zod thực tế thêm chaining (.min(), .max()), thông báo lỗi tùy chỉnh và hỗ trợ transform.',
  },

  'jtp-024': {
    question: 'Tạo utility type DeepPartial<T> làm cho tất cả các thuộc tính lồng nhau trở nên tùy chọn, bao gồm cả mảng object, Map và Set.',
    explanation: 'DeepPartial áp dụng đệ quy Partial cho tất cả các cấp lồng nhau. Chuỗi conditional type xử lý các trường hợp đặc biệt theo thứ tự: Map và Set bảo toàn kiểu container của chúng trong khi làm kiểu value sâu hơn thành partial. Mảng trở thành mảng các phần tử partial sâu hơn. Các object đơn giản có mỗi thuộc tính được đánh dấu tùy chọn (?) với giá trị được xử lý đệ quy. Các kiểu nguyên thủy (string, number, v.v.) xuyên suốt đến nhánh cuối : T mà không thay đổi. Thứ tự quan trọng — mảng phải được kiểm tra trước các object generic vì mảng cũng là object. Điều này thường được dùng cho merge config, thao tác patch/update, và trạng thái form nơi chỉ các trường đã thay đổi được cung cấp.',
  },

  'jtp-025': {
    question: 'Tạo kiểu cho component Table generic an toàn về kiểu. Các định nghĩa cột phải tham chiếu đến các khóa từ kiểu dữ liệu, và hàm render phải nhận đúng kiểu value cho cột đó.',
    explanation: 'Điểm mấu chốt là dùng conditional type phân phối: ColumnDef<T, K> phân phối theo union của các khóa để mỗi định nghĩa cột được định kiểu độc lập. Khi key là "price", hàm render nhận number là tham số value. Helper curried defineColumns tách T (được cung cấp tường minh) khỏi K (được suy ra từ cách sử dụng). Không có mẫu này, TypeScript sẽ mở rộng value render thành T[keyof T] (một union của tất cả kiểu value), mất đi việc thu hẹp kiểu theo cột. Mẫu này được dùng bởi TanStack Table, AG Grid và các thư viện data table tương tự.',
  },

  'jtp-026': {
    question: 'Triển khai xử lý lỗi toàn diện dùng discriminated union cho API response. Mã phải thất bại khi biên dịch nếu một kiểu lỗi mới được thêm vào nhưng không được xử lý.',
    explanation: 'Discriminated union dùng trường literal chung (type) để TypeScript thu hẹp kiểu trong mỗi nhánh switch. Hàm assertNever chỉ chấp nhận kiểu never — nếu tất cả các trường hợp được xử lý, result thu hẹp thành never trong nhánh default. Nếu một kiểu lỗi mới được thêm vào ApiResult (ví dụ: { type: "timeout" }), nhánh default nhận kiểu đó thay vì never, gây ra lỗi biên dịch. Điều này buộc các nhà phát triển xử lý các trường hợp mới tại mỗi điểm gọi. Mỗi nhánh có đầy đủ type safety — result.fields chỉ có thể truy cập trong nhánh validation_error, result.retryAfter chỉ trong rate_limited, v.v.',
  },

  'jtp-027': {
    question: 'Chuyển đổi module JavaScript này sang TypeScript mà không dùng "any". Mã xử lý dữ liệu CSV và thách thức là định kiểu cấu trúc cột động.',
    explanation: 'Quyết định chính là định kiểu CSVRow là Record<string, string> thay vì any. Vì các cột CSV là động (được xác định tại thời gian parse, không phải thời gian biên dịch), ta không thể biết tên thuộc tính chính xác. Record<string, string> có nghĩa là "bất kỳ khóa string nào ánh xạ đến giá trị string" phù hợp với ngữ nghĩa CSV — tất cả các giá trị bắt đầu là string. Đây KHÔNG giống như "any": truy cập row.nonExistent trả về string|undefined (với noUncheckedIndexedAccess), value luôn là string (không phải number hay boolean), và bạn không thể gọi các phương thức không tồn tại trên string. Để định kiểu chặt chẽ hơn, có thể dùng generic: parseCSV<T extends string>(csv, columns: T[]): Record<T, string>[] để khóa tên cột tại điểm gọi.',
  },

  'jtp-028': {
    question: 'Bạn có một hàm chấp nhận string hoặc number và trả về cùng kiểu. Signature nào cung cấp type safety tốt nhất?',
    options: [
      'function process(input: string | number): string | number',
      'function process<T extends string | number>(input: T): T',
      'function process(input: string): string; function process(input: number): number;',
      'Cả B và C đều bảo toàn kiểu đầu vào, nhưng C (overloads) cung cấp thông báo lỗi tốt hơn',
    ],
    explanation: 'Phương án A quá lỏng — process("hello") trả về string | number, yêu cầu type guard để dùng kết quả. Phương án B (generic) bảo toàn kiểu literal: process("hello") trả về "hello", process(42) trả về 42. Điều này thực sự quá hẹp trong nhiều trường hợp — bạn thường muốn string, không phải literal. Phương án C (overloads) ánh xạ string -> string và number -> number một cách chính xác, với thông báo lỗi rõ ràng nếu bạn truyền boolean. Phương án D đúng: cả B và C đều bảo toàn mối quan hệ kiểu đầu vào/đầu ra, nhưng overloads tạo ra chẩn đoán rõ ràng hơn và không thu hẹp quá mức thành kiểu literal. Trong thực tế, overloads được ưu tiên khi mapping đơn giản và có thể liệt kê.',
  },

  'jtp-029': {
    question: 'Tạo một event bus an toàn về kiểu nơi tên sự kiện được ánh xạ đến kiểu payload của chúng. Emit một sự kiện với payload sai nên là lỗi biên dịch.',
    explanation: 'Interface EventMap đóng vai trò là nguồn sự thật duy nhất cho tất cả sự kiện và payload của chúng. Class generic TypedEventBus<Events> dùng keyof Events để ràng buộc tên sự kiện và Events[E] để tra cứu kiểu payload cho mỗi sự kiện. Kiểu tuple có điều kiện trong emit đảm bảo các sự kiện với payload undefined không nhận tham số, trong khi các sự kiện có payload yêu cầu nó. Kiểu handler trong on() điều chỉnh tương tự: các sự kiện void-payload nhận () => void, các sự kiện khác nhận (payload: T) => void. Mẫu này bắt tên sự kiện và kiểu payload không khớp tại thời gian biên dịch thay vì runtime.',
  },

  'jtp-030': {
    question: 'Component TypeScript React này có lỗi kiểu. Sửa tất cả mà không dùng "any" hoặc @ts-ignore.',
    explanation: 'Bốn vấn đề TypeScript-React phổ biến: (1) useState([]) suy ra never[] vì TypeScript không thể xác định kiểu phần tử mảng từ mảng rỗng. Cách sửa: cung cấp generic useState<Todo[]>([]). (2) useState() không có tham số suy ra undefined. Cách sửa: useState<string>("") với giá trị ban đầu. (3) Tham số hàm trong strict mode yêu cầu annotation kiểu — id: number khớp với kiểu Todo.id. (4) Bonus: dùng dạng callback của setTodos (prev => ...) tránh vấn đề closure cũ và là best practice React. Đây là các lỗi TypeScript phổ biến nhất trong codebase React.',
  },

  'jtp-031': {
    question: 'Tạo mẫu builder an toàn về kiểu để xây dựng các truy vấn giống SQL. Builder nên ngăn gọi .select() sau .where(), đảm bảo .from() được gọi trước .where(), và suy ra kiểu kết quả từ các cột đã chọn.',
    explanation: 'Builder dùng trạng thái kiểu phantom (QueryState) để theo dõi các phương thức đã được gọi. Mỗi phương thức có tham số "this" giới hạn khi nào nó có thể được gọi và trả về kiểu mới với trạng thái được cập nhật. from() yêu cầu hasFrom: false và trả về hasFrom: true. select() yêu cầu hasFrom: true, hasSelect: false. where() yêu cầu hasSelect: true. Điều này tạo ra một máy trạng thái tại thời gian biên dịch. Tham số generic Selected tích lũy các cột nào được chọn, và execute() trả về Pick<DB[Table], Selected>[] để kiểu kết quả khớp chính xác với các cột đã chọn. Mẫu này được dùng bởi Kysely, Drizzle, và Prisma cho các truy vấn database an toàn về kiểu.',
  },

  'jtp-032': {
    question: 'Compiler TypeScript sẽ báo cáo lỗi kiểu nào cho đoạn mã này? Liệt kê từng lỗi với số dòng của nó.',
    explanation: 'Dòng 5 ổn: toUpperCase() trả về string, và Status (union literal string) có thể gán cho string. Dòng 7: TypeScript phát hiện "deleted" không có trong union Status và đánh dấu so sánh luôn là false. Dòng 13: arr[0] là number (kiểu phần tử mảng), không thể gán cho string. Dòng 14: Kiểm tra thuộc tính dư thừa bắt "age" không có trong kiểu đích. Dòng 16 thực sự ổn: một hàm nhận ít tham số hơn có thể được gán cho kiểu mong đợi nhiều hơn — (x: number) => void có thể gán cho (x: number, y: number) => void vì y thêm vào chỉ đơn giản bị bỏ qua (tương thích callback).',
  },

  'jtp-033': {
    question: 'Triển khai pipeline middleware an toàn về kiểu (giống Express/Koa) nơi mỗi middleware có thể mở rộng kiểu context và middleware hạ nguồn thấy kiểu đã mở rộng.',
    explanation: 'Class Pipeline tích lũy kiểu context thông qua tham số generic. Mỗi lần gọi use() nhận một Middleware ánh xạ kiểu context hiện tại sang kiểu mở rộng, và trả về Pipeline<Extended>. Điều này có nghĩa là middleware tiếp theo trong chuỗi thấy context đã mở rộng. Mẫu chính là tích lũy kiểu: Pipeline<BaseContext> → Pipeline<AuthContext> → Pipeline<LoggedContext>. Mỗi middleware chỉ có thể truy cập các thuộc tính từ kiểu đầu vào của nó, và phải cung cấp các thuộc tính mở rộng trước khi gọi next(). Điều này tương tự như cách middleware tRPC tích lũy context, và cách middleware Express mở rộng req với các thuộc tính bổ sung (nhưng không có type safety trong Express).',
  },

  'jtp-034': {
    question: 'Bạn có một hàm trả về các kiểu khác nhau dựa trên tham số options. Mẫu TypeScript nào định kiểu đúng cho điều này?',
    options: [
      'Trả về "any" và để caller ép kiểu',
      'Dùng function overloads ánh xạ từng giá trị option đến kiểu trả về của nó',
      'Trả về kiểu union và để caller thu hẹp bằng type guard',
      'Dùng generic với kiểu trả về có điều kiện dựa trên tham số options',
    ],
    explanation: 'Mặc dù các phương án C và D có thể hoạt động, function overloads (B) cung cấp API rõ ràng nhất để ánh xạ các giá trị option rời rạc đến các kiểu trả về cụ thể. Ví dụ: function parse(input: string, format: "json"): object; function parse(input: string, format: "text"): string; — mỗi signature overload khai báo rõ ràng hợp đồng. Phương án A (any) không bao giờ được chấp nhận. Phương án C (union return) buộc các type guard không cần thiết tại mỗi điểm gọi. Phương án D (conditional type) hoạt động nhưng tạo ra thông báo lỗi khó đọc hơn. Overloads là lựa chọn thực tiễn cho một tập nhỏ, đã biết các option.',
  },

  'jtp-035': {
    question: 'Triển khai máy trạng thái an toàn về kiểu cho vòng đời đơn hàng: draft → submitted → processing → shipped → delivered, với các chuyển đổi được phép được thực thi tại thời gian biên dịch.',
    explanation: 'Máy trạng thái được mã hóa hoàn toàn trong hệ thống kiểu. TransitionMap định nghĩa trạng thái nào có thể theo sau trạng thái nào — đó là danh sách kề tại thời gian biên dịch. Hàm transition dùng TransitionMap[From] để ràng buộc tham số "to": từ "draft" chỉ có thể đến "submitted". Kiểu trả về là Order<To> nên các chuyển đổi tiếp theo cũng bị ràng buộc. Mỗi trạng thái có hình dạng dữ liệu riêng qua OrderStates, ngăn truy cập "trackingNumber" ở trạng thái draft, chẳng hạn. Mảng history cung cấp audit trail. Mẫu này được dùng trong các thư viện kiểu XState và các hệ thống tài chính nơi các chuyển đổi trạng thái không hợp lệ phải là không thể.',
  },

  'jtp-036': {
    question: 'Triển khai hàm nhóm mảng object theo một khóa, hỗ trợ đường dẫn khóa lồng nhau (ví dụ: "address.city"). Trả về Map để duyệt theo thứ tự.',
    explanation: 'Đường dẫn khóa lồng nhau được giải quyết bằng cách tách theo "." và reduce qua chuỗi object. Dùng Map thay vì object đơn giản bảo toàn thứ tự chèn và tránh các vấn đề prototype pollution. Optional chaining (?.) trong reduce xử lý các trường hợp khóa trung gian không tồn tại mà không ném lỗi. Toán tử nullish coalescing (??) cung cấp khóa dự phòng cho các giá trị undefined. Điều này tương tự lodash.groupBy nhưng hỗ trợ đường dẫn lồng nhau. Object.groupBy() native (ES2024) không hỗ trợ đường dẫn lồng nhau, làm cho utility này vẫn hữu ích.',
  },

  'jtp-037': {
    question: 'Triển khai hàm diff hai object lồng nhau sâu và trả về danh sách các thay đổi (added, removed, modified) với đường dẫn của chúng. Dùng cho audit log.',
    explanation: 'Hàm duyệt đệ quy cả hai object, thu thập tất cả các khóa duy nhất ở mỗi cấp. Cho mỗi khóa: nếu chỉ có trong newObj thì là "added"; nếu chỉ có trong oldObj thì là "removed"; nếu cả hai là plain object thì đệ quy sâu hơn; ngược lại so sánh với Object.is (xử lý đúng NaN, -0, v.v.) và báo cáo "modified" nếu khác nhau. Mảng được so sánh theo giá trị (không đệ quy) vì theo dõi phần tử mảng yêu cầu thuật toán khác. Chuỗi path được xây dựng bằng cách ghép các khóa với dấu chấm, tạo ra các đường dẫn dễ đọc như "address.city". Mẫu này được dùng trong audit logging, kiểm tra form dirty, và phát hiện xung đột cộng tác thời gian thực.',
  },

  'jtp-038': {
    question: 'Triển khai hàm throttle giới hạn thực thi tối đa một lần mỗi interval, với các tùy chọn cho leading và trailing invocation.',
    explanation: 'Throttle đảm bảo một hàm chạy tối đa một lần mỗi interval, khác với debounce chờ cho đến khi im lặng. Leading invocation kích hoạt ngay lập tức ở lần gọi đầu tiên, sau đó ức chế trong interval. Trailing invocation lên lịch một lần gọi cuối cùng sau interval nếu có các lần gọi bị ức chế. Tính toán thời gian elapsed xác định có kích hoạt ngay hay lên lịch. cancel() xóa tất cả bộ đếm thời gian đang chờ và trạng thái. Các trường hợp sử dụng phổ biến: scroll handler (leading để phản hồi ngay), resize handler (trailing để kích thước cuối cùng), và rate limiting API. Sự khác biệt so với debounce: throttle đảm bảo thực thi đều đặn trong các sự kiện liên tục, debounce chỉ kích hoạt sau khi sự kiện dừng.',
  },

  'jtp-039': {
    question: 'Triển khai hàm pipe() kết hợp các hàm từ trái sang phải. Mỗi hàm nhận output của hàm trước. Bao gồm kiểu TypeScript cho tối đa 5 hàm với suy luận kiểu.',
    explanation: 'pipe() là kết hợp hàm theo thứ tự từ trái sang phải (trái với compose() là từ phải sang trái). Cách triển khai đơn giản — reduce qua các hàm, truyền mỗi kết quả vào hàm tiếp theo. Sự phức tạp nằm ở các overload TypeScript: mỗi overload khai báo chuỗi chính xác của kiểu đầu vào/đầu ra, để TypeScript có thể suy ra rằng pipe(string→number, number→boolean) trả về (string) => boolean. Không có overload, TypeScript không thể suy ra chuỗi. Mẫu này được dùng trong RxJS (toán tử pipe), fp-ts, và Ramda. Giới hạn 5 overload là sự đánh đổi thực tế — có thể thêm nhiều hơn nhưng hiếm khi cần.',
  },

  'jtp-040': {
    question: 'Triển khai thuật toán diff DOM ảo đơn giản. Cho hai cây DOM ảo (plain object), tạo ra danh sách tối thiểu các patch (create, remove, replace, update-props, reorder-children) để chuyển đổi cây cũ thành cây mới.',
    explanation: 'Đây là phiên bản đơn giản hóa của VDOM diffing được dùng bởi React, Preact và Vue. Thuật toán duyệt song song cả hai cây: (1) Nếu kiểu khác nhau, thay thế toàn bộ cây con (React làm tương tự — các kiểu khác nhau có nghĩa là các component khác nhau). (2) Nếu kiểu khớp, diff props để tìm các thuộc tính added/removed/changed. (3) Đệ quy diff children theo chỉ mục. Mảng path theo dõi vị trí trong cây cho patch applicator. VDOM diff thực tế thêm key-based reconciliation để sắp xếp lại danh sách (React keys), các cập nhật batch, và fiber-based diffing có thể ngắt quãng. Cách tiếp cận một lần O(n) này khớp với thuật toán heuristic của React hy sinh tính tối ưu lý thuyết (O(n^3) tree edit distance) để đổi lấy hiệu suất thực tế.',
  },
}
