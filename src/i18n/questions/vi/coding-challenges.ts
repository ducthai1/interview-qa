import type { QuestionTranslationMap } from '../types'

export const codingChallengesVi: QuestionTranslationMap = {
  'cc-001': {
    question:
      'Triển khai hàm `debounce(fn, delay)`. Hàm debounce phải trì hoãn việc gọi `fn` cho đến khi đã trôi qua `delay` mili giây kể từ lần gọi cuối cùng.',
    explanation:
      'Mỗi lần gọi sẽ xoá timer hiện tại và đặt timer mới. `fn` chỉ được thực thi khi không có lần gọi nào khác trong khoảng thời gian `delay`. Sử dụng `apply(this, args)` giữ nguyên context gọi và truyền đúng tất cả đối số. Timer id được gán null sau khi thực thi để cho phép garbage collection.',
  },
  'cc-002': {
    question:
      'Mở rộng hàm `debounce` để hỗ trợ tuỳ chọn `{ leading, trailing }`. Khi `leading` là true, hàm được thực thi ngay lập tức ở lần gọi đầu tiên; khi `trailing` là true (mặc định), hàm thực thi sau khoảng delay.',
    explanation:
      '`leading` thực thi ngay lập tức ở lần gọi đầu tiên trong một chuỗi gọi liên tục. `trailing` thực thi sau khi delay kết thúc. Khi cả hai đều true, hàm thực thi ở đầu và cuối chuỗi gọi. Cờ `called` theo dõi xem có lần gọi nào trong thời gian chờ để quyết định trailing có nên thực thi hay không.',
  },
  'cc-003': {
    question:
      'Đoạn code debounce dưới đây có lỗi. Hãy tìm và sửa lỗi.',
    explanation:
      '`clearTimeout(timerId)` không có tác dụng nếu `timerId` không bao giờ được cập nhật. Nếu không lưu timer id mới, mọi timeout đã lên lịch đều thực thi độc lập, hoàn toàn phá hỏng cơ chế debounce.',
  },
  'cc-004': {
    question:
      'Triển khai hàm `throttle(fn, interval)`. Hàm được bọc chỉ nên được gọi tối đa một lần trong mỗi `interval` mili giây, thực thi ngay lập tức ở lần gọi đầu tiên.',
    explanation:
      'Throttle giới hạn tần suất gọi hàm. Bằng cách ghi lại timestamp lần gọi cuối và so sánh với thời gian hiện tại, ta chỉ cho phép thực thi khi đã đủ thời gian trôi qua. Khác với debounce, throttle đảm bảo thực thi định kỳ trong suốt quá trình nhập liệu liên tục.',
  },
  'cc-005': {
    question:
      'Sự khác biệt chính giữa debounce và throttle là gì?',
    explanation:
      'Debounce chờ cho đến khi các lần gọi dừng lại rồi mới thực thi — hữu ích cho ô tìm kiếm khi bạn muốn thực thi sau khi người dùng ngừng gõ. Throttle thực thi ở tần suất cố định bất kể tần suất gọi — hữu ích cho xử lý sự kiện scroll/resize khi bạn muốn cập nhật định kỳ.',
    options: [
      'Debounce thực thi mỗi lần gọi; throttle chỉ thực thi một lần',
      'Debounce trì hoãn thực thi cho đến khi các lần gọi dừng; throttle thực thi ở tần suất cố định trong suốt các lần gọi liên tục',
      'Throttle huỷ các timer trước đó; debounce thì không',
      'Chúng giống hệt nhau về chức năng — chỉ khác tên gọi',
    ],
  },
  'cc-006': {
    question:
      'Triển khai `deepClone(value)` xử lý được object lồng nhau, array, Date, RegExp, Map và Set. Tham chiếu vòng (circular references) phải được xử lý đúng cách.',
    explanation:
      'WeakMap theo dõi các object đã clone để xử lý tham chiếu vòng và tránh vòng lặp vô hạn. Giá trị nguyên thuỷ được trả về nguyên vẹn. Các kiểu đặc biệt (Date, RegExp, Map, Set) cần logic clone riêng. `Reflect.ownKeys` bao gồm cả key là Symbol. `Object.create(Object.getPrototypeOf(value))` bảo toàn chuỗi prototype.',
  },
  'cc-007': {
    question:
      'Cách nào sau đây thực hiện shallow clone đúng cho một object?',
    explanation:
      '`Object.assign({}, obj)` và spread `{ ...obj }` đều tạo bản sao nông — các object lồng nhau vẫn chia sẻ tham chiếu. `JSON.parse(JSON.stringify(...))` là deep clone nhưng mất function, undefined, key Symbol, Date (chuyển thành string), và lỗi với tham chiếu vòng.',
    options: [
      '`JSON.parse(JSON.stringify(obj))`',
      '`Object.assign({}, obj)`',
      '`obj.clone()`',
      '`new Object(obj)`',
    ],
  },
  'cc-008': {
    question:
      'Triển khai `flattenArray(arr, depth = 1)` hoạt động giống `Array.prototype.flat`. Hàm phải làm phẳng các mảng lồng nhau đến độ sâu chỉ định.',
    explanation:
      '`reduce` duyệt từng phần tử. Nếu phần tử là mảng và depth cho phép, ta đệ quy với `depth - 1`. Ngược lại phần tử được push trực tiếp. Sử dụng `Infinity` làm depth sẽ làm phẳng tất cả các cấp.',
  },
  'cc-009': {
    question: 'Đoạn code này xuất ra kết quả gì?',
    explanation:
      '`flat()` với depth mặc định là 1 chỉ bóc một cấp lồng. `flat(Infinity)` làm phẳng hoàn toàn tất cả mảng lồng nhau bất kể độ sâu.',
  },
  'cc-010': {
    question:
      'Triển khai hàm `curry(fn)` chuyển đổi hàm nhiều đối số thành chuỗi các hàm đơn đối số. `curry(add)(1)(2)(3)` phải bằng `add(1, 2, 3)`.',
    explanation:
      'Hàm curried tích luỹ đối số cho đến khi số lượng đạt `fn.length` (arity) của hàm gốc. Lúc đó hàm gốc được thực thi. Ngược lại, nó trả về hàm mới gộp các đối số đã tích luỹ với đối số mới. Điều này hỗ trợ cả áp dụng từng phần và đầy đủ ở mọi cách nhóm.',
  },
  'cc-011': {
    question: 'Kết quả đầu ra của hàm curry này là gì?',
    explanation:
      'Cả ba lần gọi đều thực thi `multiply(2, 3, 4)` = 24 vì curry tích luỹ đối số qua các lần gọi cho đến khi đạt arity yêu cầu (3).',
  },
  'cc-012': {
    question:
      'Triển khai `memoize(fn)` lưu cache kết quả dựa trên đối số. Hỗ trợ hàm `resolver` tuỳ chỉnh để tạo cache key.',
    explanation:
      'Cache là một Map được đánh key bằng phiên bản serialized của đối số. `resolver` tuỳ chỉnh cho phép kiểm soát key cho các object phức tạp hoặc khi hiệu suất quan trọng. Gắn `.cache` và `.clear` tương tự API của lodash và cho phép kiểm tra/xoá cache.',
  },
  'cc-013': {
    question:
      'Độ phức tạp thời gian của phép tra cứu trong memoize cache được triển khai bằng Map là gì?',
    explanation:
      'Tra cứu trong `Map` (và `Object`) của JavaScript là O(1) amortized vì chúng sử dụng đánh chỉ mục dựa trên hash. Đây là lợi ích hiệu suất chính của memoization — các lần gọi lặp lại với cùng đối số trả về ngay lập tức.',
    options: ['O(n)', 'O(log n)', 'O(1) amortized', 'O(n log n)'],
  },
  'cc-014': {
    question:
      'Triển khai `promiseAll(promises)` hoạt động giống `Promise.all`. Resolve với mảng kết quả khi tất cả promise resolve, hoặc reject ngay khi bất kỳ promise nào reject.',
    explanation:
      'Ta duy trì bộ đếm các promise chưa resolve. Mỗi lần resolve lưu kết quả tại vị trí ban đầu (thứ tự được bảo toàn) và giảm bộ đếm. Khi bộ đếm về 0, ta resolve với mảng đã thu thập. Bọc mỗi phần tử bằng `Promise.resolve` xử lý được các giá trị không phải promise. Reject đầu tiên sẽ reject ngay promise bên ngoài.',
  },
  'cc-015': {
    question:
      'Triển khai `promiseRace(promises)` hoạt động giống `Promise.race`. Settle với promise đầu tiên settle (dù resolve hay reject).',
    explanation:
      'Ta gắn handler resolve/reject cho mọi promise cùng lúc. Promise nào settle trước sẽ thắng — các settlement sau đó bị bỏ qua vì Promise chỉ có thể settle một lần. Mảng rỗng sẽ để promise pending mãi (giống hành vi native).',
  },
  'cc-016': {
    question:
      'Triển khai `promiseAllSettled(promises)` hoạt động giống `Promise.allSettled`. Luôn resolve với mảng mô tả kết quả của từng promise: `{ status: "fulfilled", value }` hoặc `{ status: "rejected", reason }`.',
    explanation:
      'Khác với `Promise.all`, hàm này không bao giờ reject. Mọi promise đều được xử lý và kết quả được ghi nhận. Sử dụng `.finally` trong bộ đếm đảm bảo cả fulfillment và rejection đều giảm bộ đếm. Promise bên ngoài chỉ resolve sau khi tất cả đã settle.',
  },
  'cc-017': {
    question:
      'Triển khai class `EventEmitter` với các phương thức `on(event, listener)`, `off(event, listener)`, `emit(event, ...args)` và `once(event, listener)`.',
    explanation:
      'Các event được lưu trong Map đánh key theo tên event. `once` bọc listener trong hàm tự gỡ bỏ. Thuộc tính `_original` trên wrapper cho phép `off` gỡ listener `once` theo tham chiếu gốc. Trả về `this` cho phép nối chuỗi phương thức (method chaining).',
  },
  'cc-018': {
    question: 'Kết quả đầu ra là gì?',
    explanation:
      '`once` gắn một wrapper tự gỡ bỏ sau lần gọi đầu tiên. Vì vậy `"first"` được log ở lần emit đầu tiên, nhưng listener đã bị gỡ trước khi `"second"` được emit.',
  },
  'cc-019': {
    question:
      'Triển khai module `PubSub` (publish/subscribe) với `subscribe(topic, handler)` trả về hàm unsubscribe, và `publish(topic, data)` thông báo đến tất cả handler.',
    explanation:
      'Set cho mỗi topic ngăn đăng ký trùng lặp. `subscribe` trả về closure unsubscribe để dọn dẹp, tiện lợi hơn (không cần giữ riêng tham chiếu handler). `try/catch` bên trong `publish` đảm bảo một handler lỗi không chặn các handler khác.',
  },
  'cc-020': {
    question:
      'Triển khai class `LRUCache` với các phương thức `get(key)` và `put(key, value)`, đều O(1). Cache phải loại bỏ entry ít được sử dụng nhất gần đây khi vượt quá `capacity`.',
    explanation:
      '`Map` của JavaScript bảo toàn thứ tự chèn. Bằng cách xoá và chèn lại khi truy cập, ta giữ các item mới dùng nhất ở cuối. Entry đầu tiên trong Map luôn là ít được dùng nhất gần đây. Cả `get` và `put` đều O(1) amortized. Cách khác dùng doubly-linked list + hashmap tường minh cũng hợp lệ nhưng dài hơn.',
  },
  'cc-021': {
    question:
      'Tổ hợp cấu trúc dữ liệu nào giúp LRU Cache đạt O(1) cho cả get và put?',
    explanation:
      'HashMap cung cấp tra cứu key O(1), trong khi Doubly Linked List cho phép xoá O(1) ở bất kỳ vị trí nào và chèn O(1) ở đầu/cuối. Kết hợp lại cho phép cả truy cập O(1) và loại bỏ O(1) phần tử LRU. Trong JS, Map đã duy trì thứ tự chèn nên cho ta cùng đặc tính một cách gọn gàng hơn.',
    options: [
      'Array + Binary Search Tree',
      'HashMap + Doubly Linked List',
      'Stack + Queue',
      'Set + Array',
    ],
  },
  'cc-022': {
    question:
      'Triển khai `deepEqual(a, b)` trả về `true` nếu hai giá trị bằng nhau về cấu trúc (xử lý object, array, giá trị nguyên thuỷ, null, Date, RegExp).',
    explanation:
      'So sánh nghiêm ngặt (`===`) xử lý nhanh cho giá trị nguyên thuỷ và object cùng tham chiếu. So sánh Date dùng timestamp mili giây; RegExp dùng biểu diễn chuỗi. Array và object thường được phân biệt bằng `Array.isArray`. So sánh số lượng key và giá trị đệ quy xử lý object.',
  },
  'cc-023': {
    question:
      'Triển khai `getType(value)` trả về chuỗi kiểu dữ liệu đáng tin cậy cho mọi giá trị JavaScript, khắc phục hạn chế của `typeof` (ví dụ: `typeof null === "object"`).',
    explanation:
      '`Object.prototype.toString.call(value)` trả về chuỗi dạng `"[object Array]"`. Cắt từ vị trí 8 và bỏ ký tự cuối trích xuất tên kiểu. Phương pháp này nhận diện đúng `null`, array, Date, RegExp, Map, Set và các built-in khác mà `typeof` không phân biệt được.',
  },
  'cc-024': {
    question: 'Đoạn code này xuất ra kết quả gì?',
    explanation:
      '`typeof null` nổi tiếng trả về `"object"` (lỗi lịch sử của JS). Array là object nên `typeof []` là `"object"`. Function là object có thể gọi nhưng `typeof` có trường hợp đặc biệt trả về `"function"`. `NaN` có kiểu `"number"` dù nghĩa là "Not a Number".',
  },
  'cc-025': {
    question:
      'Triển khai `pipe(...fns)` và `compose(...fns)`. `pipe` áp dụng hàm từ trái sang phải; `compose` áp dụng từ phải sang trái. Cả hai trả về hàm mới.',
    explanation:
      '`pipe` dùng `reduce` (trái sang phải). `compose` dùng `reduceRight` (phải sang trái). Cả hai truyền đầu ra của hàm này vào đầu vào của hàm tiếp theo. Đây là pattern lập trình hàm cốt lõi để xây dựng pipeline biến đổi dữ liệu.',
  },
  'cc-026': {
    question:
      'Triển khai `fetchWithRetry(url, options, maxRetries = 3, baseDelay = 300)` tự động thử lại các request fetch thất bại với exponential backoff.',
    explanation:
      'Exponential backoff nhân đôi thời gian chờ mỗi lần thử lại (300ms, 600ms, 1200ms...). Thêm jitter ngẫu nhiên (`Math.random() * 100`) ngăn hiện tượng thundering herd khi nhiều client thử lại đồng thời. Ta cũng kiểm tra `response.ok` vì fetch chỉ reject khi có lỗi mạng, không reject với mã lỗi HTTP.',
  },
  'cc-027': {
    question:
      'Triển khai `Array.prototype.map` từ đầu dưới dạng hàm độc lập `myMap(arr, callback)`.',
    explanation:
      'Kiểm tra `i in arr` xử lý mảng thưa (sparse array) — các vị trí trống vẫn giữ nguyên là trống (callback không được gọi cho các slot rỗng, khớp với hành vi native). Callback nhận `(element, index, array)` theo spec. Mảng mới cùng độ dài được cấp phát trước để tối ưu.',
  },
  'cc-028': {
    question:
      'Triển khai `myFilter(arr, predicate)` hoạt động giống `Array.prototype.filter`.',
    explanation:
      'Duyệt mảng, gọi predicate với `(element, index, array)`. Chỉ các phần tử mà predicate trả về truthy mới được bao gồm. Guard `i in arr` bỏ qua các slot thưa, nhất quán với spec.',
  },
  'cc-029': {
    question:
      'Triển khai `myReduce(arr, callback, initialValue)` hoạt động giống `Array.prototype.reduce`. Xử lý trường hợp không cung cấp giá trị khởi tạo.',
    explanation:
      'Khi không cung cấp giá trị khởi tạo, phần tử đầu tiên làm seed cho accumulator và vòng lặp bắt đầu từ index 1. Mảng rỗng không có giá trị khởi tạo ném TypeError, khớp với hành vi native. Kiểm tra `arguments.length` (không phải `undefined`) vì `undefined` là giá trị khởi tạo hợp lệ.',
  },
  'cc-030': {
    question:
      'Triển khai `myFind(arr, predicate)` hoạt động giống `Array.prototype.find`.',
    explanation:
      '`find` trả về phần tử đầu tiên mà predicate trả về true, hoặc `undefined` nếu không có. Khác `indexOf`, nó nhận callback nên bạn có thể kiểm tra điều kiện phức tạp. Return sớm giúp dừng vòng lặp ngay.',
  },
  'cc-031': {
    question:
      'Triển khai `reverseString(str)` mà không sử dụng phương thức `reverse()` có sẵn.',
    explanation:
      'Cách thủ công duyệt từ ký tự cuối cùng. Cách dùng spread (`[...str]`) xử lý đúng các code point Unicode được biểu diễn dưới dạng surrogate pair (ví dụ emoji), trong khi `str.split("")` sẽ tách chúng thành các surrogate riêng lẻ.',
  },
  'cc-032': {
    question:
      'Triển khai `isPalindrome(str)` trả về `true` nếu chuỗi đọc xuôi ngược giống nhau (bỏ qua hoa/thường và ký tự không phải chữ-số).',
    explanation:
      'Chuẩn hoá sang chữ thường và loại bỏ ký tự không phải chữ-số giúp kiểm tra không phân biệt hoa thường và bỏ qua dấu câu. Sau đó so sánh chuỗi với bản đảo ngược. Cách hai con trỏ tránh tạo chuỗi đảo ngược nhưng tương đương.',
  },
  'cc-033': {
    question:
      'Triển khai `isAnagram(str1, str2)` trả về `true` nếu hai chuỗi là anagram (đảo chữ) của nhau.',
    explanation:
      'Sắp xếp ký tự của cả hai chuỗi và so sánh kết quả là cách đơn giản nhất O(n log n). Cách O(n) thay thế dùng frequency Map để đếm ký tự trong chuỗi thứ nhất và giảm với chuỗi thứ hai.',
  },
  'cc-034': {
    question:
      'Triển khai `toCamelCase(str)` chuyển chuỗi kebab-case hoặc snake_case sang camelCase.',
    explanation:
      'Regex `[-_](.)` khớp dấu gạch ngang hoặc gạch dưới theo sau bởi bất kỳ ký tự nào, capture ký tự đó. Hàm callback thay thế viết hoa ký tự đó. Bắt đầu bằng `.toLowerCase()` chuẩn hoá đầu vào hoa thường lẫn lộn.',
  },
  'cc-035': {
    question:
      'Triển khai `addClass(el, className)`, `removeClass(el, className)` và `toggleClass(el, className)` mà không sử dụng API `classList` (cho trình duyệt cũ).',
    explanation:
      'Regex neo trên ranh giới từ (đầu chuỗi hoặc khoảng trắng trước, khoảng trắng hoặc cuối chuỗi sau) để tránh khớp một phần — ví dụ, xoá "foo" không được ảnh hưởng đến "foobar". `trim()` dọn dẹp khoảng trắng đầu/cuối tạo ra bởi phép thay thế.',
  },
  'cc-036': {
    question:
      'Triển khai polyfill `closest(el, selector)` duyệt lên cây DOM và trả về tổ tiên đầu tiên (hoặc chính nó) khớp với CSS selector.',
    explanation:
      '`Element.prototype.closest` hiện đã được hỗ trợ rộng rãi, nhưng triển khai từ đầu minh hoạ duyệt DOM. Bắt đầu từ chính `el`, ta đi lên qua `parentElement` gọi `matches(selector)` ở mỗi bước. Trả về `null` nếu đạt đến gốc document mà không khớp.',
  },
  'cc-037': {
    question:
      'Triển khai `sleep(ms)` trả về Promise resolve sau `ms` mili giây, có thể dùng với `await`.',
    explanation:
      'Bọc `setTimeout` trong Promise làm nó có thể await được. Callback resolve được truyền trực tiếp cho `setTimeout` — khi timer kích hoạt nó gọi `resolve()` không có giá trị, làm promise fulfill. Đây là cách chuẩn để thêm delay trong code async/await.',
  },
  'cc-038': {
    question:
      'Triển khai `withTimeout(promise, ms)` reject nếu promise cho trước không settle trong vòng `ms` mili giây.',
    explanation:
      '`Promise.race` settle với promise nào settle trước. Promise timeout reject sau `ms` ms. Nếu promise thật settle trước đó, nó thắng. Pattern này rất quan trọng cho các lời gọi fetch và mọi thao tác async cần deadline.',
  },
  'cc-039': {
    question:
      'Triển khai `Function.prototype.myBind(context, ...partialArgs)` từ đầu.',
    explanation:
      '`myBind` capture hàm gốc (`this`) và các đối số preset. Nó trả về hàm mới gộp đối số preset với đối số mới và gọi hàm gốc với context đã bind qua `apply`. Lưu ý: polyfill đầy đủ cần xử lý cả toán tử `new` (kiểm tra `new.target`).',
  },
  'cc-040': {
    question:
      'Triển khai `Function.prototype.myCall(context, ...args)` từ đầu mà không sử dụng `call` hay `apply`.',
    explanation:
      'Mẹo là tạm gắn hàm như thuộc tính của object context. Khi gọi `context[sym](...args)`, `this` bên trong hàm chính là `context`. Key Symbol unique tránh xung đột với thuộc tính hiện có. Ta xoá nó sau để tránh biến đổi object.',
  },
  'cc-041': {
    question:
      'Triển khai `Function.prototype.myApply(context, argsArray)` từ đầu.',
    explanation:
      'Cùng cách tiếp cận như `myCall` nhưng nhận đối số dưới dạng mảng (mặc định là `[]`). Spread `argsArray` vào lời gọi sẽ tách các phần tử thành đối số riêng lẻ. Tham số `argsArray` giống native `apply` nhận array-like.',
  },
  'cc-042': {
    question:
      'Triển khai `myObjectAssign(target, ...sources)` hoạt động giống `Object.assign`.',
    explanation:
      '`Object.assign` sao chép các thuộc tính own enumerable từ mỗi source sang target. Ta dùng `Object.keys` (key chuỗi own enumerable). Key Symbol cũng được sao chép bởi native `Object.assign` nhưng `Object.keys` bỏ qua chúng — dùng `Reflect.ownKeys` cho polyfill đầy đủ hơn.',
  },
  'cc-043': {
    question:
      'Triển khai React hook `useDebounce(value, delay)` trả về phiên bản debounce của một giá trị.',
    explanation:
      'Mỗi khi `value` thay đổi, timer mới được đặt. Hàm cleanup (`return () => clearTimeout(timer)`) huỷ timer trước đó, nên `debouncedValue` chỉ cập nhật sau khi `value` ổn định trong `delay` ms. Đây là pattern chuẩn cho ô tìm kiếm debounce trong React.',
  },
  'cc-044': {
    question:
      'Triển khai React hook `useThrottle(value, interval)` trả về phiên bản throttle của một giá trị.',
    explanation:
      '`useRef` theo dõi thời điểm cập nhật cuối mà không gây re-render. Nếu đủ thời gian đã trôi qua ta cập nhật ngay; ngược lại ta lên lịch cập nhật cho khoảng thời gian còn lại. Hàm cleanup huỷ các timeout cũ.',
  },
  'cc-045': {
    question:
      'Triển khai React hook `useInfiniteScroll(callback, options)` sử dụng `IntersectionObserver` gọi `callback` khi phần tử sentinel đi vào viewport.',
    explanation:
      '`IntersectionObserver` kích hoạt khi phần tử được quan sát (sentinel) vào hoặc ra khỏi viewport. Một div sentinel đặt ở cuối danh sách kích hoạt `callback` khi được scroll vào tầm nhìn. Observer được dọn dẹp khi unmount hoặc khi dependencies thay đổi.',
  },
  'cc-046': {
    question:
      'Triển khai hook cơ bản `useVirtualList(items, itemHeight, containerHeight)` chỉ trả về các item hiển thị và style vị trí của chúng cho windowing/virtualization.',
    explanation:
      'Virtualization chỉ render phần hiển thị của danh sách lớn. Tổng chiều cao scroll được duy trì bằng div spacer để thanh cuộn hoạt động đúng. Các item được đặt vị trí tuyệt đối (absolute) tại offset scroll thật. Chỉ có ~containerHeight/itemHeight item trong DOM tại bất kỳ thời điểm nào bất kể kích thước danh sách.',
  },
  'cc-047': {
    question:
      'Triển khai factory `createRateLimiter(maxCalls, windowMs)` trả về hàm wrapper giới hạn số lần gọi tối đa trong một cửa sổ thời gian cuộn.',
    explanation:
      'Cách tiếp cận sliding window lưu timestamp các lần gọi gần đây. Trước mỗi lần gọi, các timestamp hết hạn (cũ hơn `windowMs`) được xoá. Nếu số lượng còn lại dưới giới hạn, lời gọi được thực hiện và timestamp được ghi nhận. Ngược lại lời gọi bị chặn. Thuật toán token bucket hoặc leaky bucket là giải pháp nâng cao hơn.',
  },
  'cc-048': {
    question:
      'Triển khai `promiseAny(promises)` resolve với promise fulfilled đầu tiên, hoặc reject với `AggregateError` nếu tất cả reject.',
    explanation:
      'Ngược lại với `Promise.all`: resolve ở thành công đầu tiên, reject chỉ khi tất cả thất bại. Các lỗi được thu thập tại vị trí ban đầu. `AggregateError` là kiểu rejection chuẩn khớp với spec của `Promise.any`.',
  },
  'cc-049': {
    question:
      'Tìm và sửa lỗi trong đoạn code `compose` này.',
    explanation:
      'Hợp hàm toán học `f ∘ g` có nghĩa là "áp dụng g trước, rồi f". Trong mảng `[f, g]`, hàm bên phải nhất thực thi trước. `reduceRight` duyệt từ phải sang trái, áp dụng đúng hàm bên phải nhất trước.',
  },
  'cc-050': {
    question:
      'Triển khai factory `idGenerator()` sử dụng generator function trả về chuỗi ID vô hạn bắt đầu từ 1.',
    explanation:
      'Generator function (`function*`) tạm dừng tại `yield` và tiếp tục khi `.next()`, cho phép tạo chuỗi vô hạn lazy mà không gặp vấn đề bộ nhớ. Vòng lặp `while (true)` an toàn vì thực thi bị tạm ngưng tại mỗi `yield`. Generator hữu ích cho ID unique, phân trang và streaming dữ liệu.',
  },
  'cc-051': {
    question:
      'Triển khai `chunk(arr, size)` chia mảng thành các phần có kích thước cho trước.',
    explanation:
      'Ta duyệt với bước nhảy `size`, cắt mảng tại mỗi khoảng. `Array.prototype.slice` xử lý tốt phần cuối cùng ngay cả khi còn ít phần tử hơn.',
  },
  'cc-052': {
    question:
      'Triển khai `groupBy(arr, keyFn)` nhóm các phần tử mảng theo kết quả của hàm key, trả về object với mảng cho mỗi nhóm.',
    explanation:
      '`reduce` tích luỹ object. Với mỗi phần tử, ta tính key (bằng cách gọi hàm hoặc truy cập thuộc tính), tạo mảng nhóm nếu chưa tồn tại, rồi push phần tử vào. Đây là cách triển khai chuẩn của `_.groupBy`.',
  },
  'cc-053': {
    question:
      'Triển khai `intersection(a, b)`, `union(a, b)` và `difference(a, b)` cho mảng sử dụng Set để tối ưu hiệu suất.',
    explanation:
      'Chuyển `b` sang Set làm tra cứu O(1), cho tổng độ phức tạp O(n+m) thay vì O(n*m) với vòng lặp lồng. `union` spread cả hai mảng vào Set để loại trùng rồi spread lại. `difference` trả về các phần tử trong `a` không có trong `b`.',
  },
  'cc-054': {
    question:
      'Triển khai tiện ích `pick(obj, keys)` và `omit(obj, keys)` tạo object mới chỉ với (hoặc không có) các key chỉ định.',
    explanation:
      '`pick` xây dựng object chỉ từ các key yêu cầu, dùng `hasOwnProperty` để tránh thuộc tính từ prototype chain. `omit` xây dựng từ tất cả key own ngoại trừ các key chỉ định. Set giúp kiểm tra loại trừ O(1).',
  },
  'cc-055': {
    question:
      'Triển khai hàm reactive đơn giản `observable(initialValue)` cho phép subscribe theo dõi thay đổi giá trị với thông báo tự động.',
    explanation:
      'Đây là nền tảng reactivity trong các framework như Vue 2 và MobX. Set các subscriber được thông báo mỗi lần gọi `set`. Trả về hàm unsubscribe từ `subscribe` như hàm cleanup là pattern phổ biến (giống cleanup của `useEffect` trong React). Bỏ qua giá trị không đổi ngăn render không cần thiết.',
  },
  'cc-056': {
    question:
      'Triển khai class `Queue` với `enqueue(value)`, `dequeue()`, `peek()`, `size` và `isEmpty` cung cấp enqueue và dequeue O(1).',
    explanation:
      'Dùng object thuần với con trỏ head/tail đạt O(1) cho cả enqueue và dequeue, tránh chi phí O(n) của `Array.prototype.shift`. Các chỉ số tăng đơn điệu; `delete` xoá tham chiếu cũ để tránh rò rỉ bộ nhớ.',
  },
  'cc-057': {
    question:
      'Triển khai `concurrentLimit(tasks, limit)` chạy mảng hàm task async với concurrency tối đa là `limit`, trả về tất cả kết quả theo thứ tự.',
    explanation:
      'Ta tạo `limit` coroutine "worker" đồng thời, mỗi worker lấy task từ hàng đợi chung (điều khiển bởi `currentIndex`) cho đến khi hết. Cách này tạo ra mô hình work-stealing tự nhiên. Kết quả được lưu tại vị trí ban đầu để giữ thứ tự.',
  },
  'cc-058': {
    question:
      'Triển khai `serialize(obj)` và `deserialize(str)` xử lý được `undefined`, function, Date và tham chiếu vòng — những thứ `JSON.stringify` không xử lý được.',
    explanation:
      'Ta dùng hàm replacer/reviver của JSON để encode các giá trị đặc biệt thành chuỗi có đánh dấu. Tham chiếu vòng được phát hiện bằng WeakMap và encode thành placeholder. Deserialize function bằng `new Function` mạnh nhưng có rủi ro bảo mật — chỉ dùng với dữ liệu tin cậy.',
  },
  'cc-059': {
    question:
      'Triển khai `flattenObject(obj)` làm phẳng object lồng nhau thành object một cấp với key dạng dot-notation.',
    explanation:
      'Ta đệ quy duyệt các thuộc tính object. Khi giá trị là object non-null, non-array ta đệ quy với prefix tích luỹ. Array được coi là giá trị lá (không làm phẳng) — đây là hành vi thông thường. Accumulator `result` được truyền tham chiếu để tránh tạo nhiều object trung gian.',
  },
  'cc-060': {
    question:
      'Triển khai `unflattenObject(obj)` là phép ngược của `flattenObject` — tái tạo object lồng nhau từ key dạng dot-notation.',
    explanation:
      'Ta tách mỗi key dot-notation thành các phần path, sau đó duyệt/tạo object lồng cho tất cả trừ phần cuối. Phần cuối nhận giá trị. Ghi đè giá trị non-object tại các node trung gian đảm bảo tái tạo đúng khi key xung đột.',
  },
  'cc-061': {
    question:
      'Triển khai class `LinkedList` đơn hướng với các phương thức `push(val)`, `pop()`, `shift()`, `unshift(val)` và `toArray()`.',
    explanation:
      'Linked list là chuỗi node mà mỗi node trỏ đến node tiếp theo. Duy trì cả tham chiếu `head` và `tail` giúp `push` và `unshift` O(1). `pop` là O(n) cho singly linked list vì phải duyệt để tìm node kế cuối. Doubly linked list sẽ làm tất cả thao tác O(1).',
  },
  'cc-062': {
    question:
      'Triển khai cấu trúc dữ liệu `Trie` với các phương thức `insert(word)`, `search(word)` và `startsWith(prefix)`.',
    explanation:
      'Trie (prefix tree) lưu chuỗi dưới dạng đường đi từ gốc đến lá. Mỗi node chứa Map các node con đánh key theo ký tự và cờ `isEnd`. `insert`, `search` và `startsWith` đều O(m) với m là độ dài chuỗi. Trie xuất sắc trong autocomplete, kiểm tra chính tả và tìm kiếm tiền tố.',
  },
  'cc-063': {
    question:
      'Triển khai `once(fn)` trả về hàm chỉ gọi `fn` tối đa một lần. Các lần gọi sau trả về kết quả của lần gọi đầu tiên.',
    explanation:
      'Closure capture `called` và `result`. Sau lần gọi đầu tiên `called` thành true và các lần gọi tiếp theo bỏ qua thân hàm, trả về kết quả đã cache. Pattern này hữu ích cho lazy initialization và đảm bảo code setup có side-effect chỉ chạy một lần.',
  },
  'cc-064': {
    question:
      'Triển khai `partial(fn, ...presetArgs)` trả về hàm mới với một số đối số được điền trước. Hỗ trợ placeholder `_` để điền đối số theo vị trí.',
    explanation:
      'Placeholder `_` (Symbol unique) đánh dấu vị trí được điền bởi đối số sau. Khi gọi, đối số preset được map: placeholder được thay bằng đối số sau theo thứ tự, preset không phải placeholder giữ nguyên. Đối số sau còn dư được nối thêm vào cuối.',
  },
  'cc-065': {
    question:
      'Triển khai wrapper `lazy(fn)` trì hoãn thực thi hàm cho đến khi kết quả được truy cập lần đầu (qua `.value`), sau đó cache lại.',
    explanation:
      'Pattern getter với `get value()` cho phép cú pháp truy cập thuộc tính trong suốt trong khi ẩn logic lazy evaluation. Lần truy cập đầu tiên kích hoạt tính toán; các lần sau trả về giá trị đã cache. Đây là bản chất của lazy initialization và được dùng trong các framework cho computed property tốn kém.',
  },
  'cc-066': {
    question:
      'Độ phức tạp thời gian và không gian của cách triển khai Fibonacci đệ quy naive `fib(n)` là gì?',
    explanation:
      'Mỗi lời gọi phân nhánh thành hai lời gọi con, tạo cây nhị phân cao n — do đó thời gian O(2^n). Tuy nhiên độ sâu call stack là O(n) (chỉ một nhánh hoạt động tại một thời điểm), nên không gian là O(n). Memoization giảm thời gian xuống O(n) và không gian vẫn O(n).',
    options: [
      'Thời gian: O(n), Không gian: O(n)',
      'Thời gian: O(2^n), Không gian: O(n)',
      'Thời gian: O(n log n), Không gian: O(log n)',
      'Thời gian: O(2^n), Không gian: O(2^n)',
    ],
  },
  'cc-067': {
    question:
      '`debounce` với delay 300ms được dùng trên ô tìm kiếm. Người dùng gõ 10 ký tự với 100ms giữa mỗi lần nhấn phím. Hàm debounce thực thi bao nhiêu lần?',
    explanation:
      'Vì mỗi lần nhấn phím reset timer 300ms, và người dùng gõ ký tự mới mỗi 100ms (nhỏ hơn delay), timer liên tục bị reset. Chỉ sau lần nhấn phím cuối cùng, khi 300ms trôi qua mà không có input nào thêm, hàm mới thực thi đúng một lần.',
    options: ['10 lần', '1 lần', '3 lần', '0 lần'],
  },
  'cc-068': {
    question:
      'Đoạn code `promiseAll` này có lỗi tinh vi. Hãy tìm và sửa lỗi.',
    explanation:
      '`Promise.all` đảm bảo thứ tự đầu ra khớp thứ tự đầu vào bất kể thứ tự resolve. Dùng `push` nối giá trị khi chúng đến, nên promise resolve nhanh nhất xuất hiện trước. Cách sửa là gán tại vị trí ban đầu `i`.',
  },
  'cc-069': {
    question:
      'Cho node cây `{ val, children: [] }`, triển khai `bfs(root)` (duyệt theo chiều rộng) và `dfs(root)` (duyệt theo chiều sâu pre-order) trả về mảng giá trị các node.',
    explanation:
      'BFS dùng hàng đợi (FIFO) để duyệt node theo từng cấp. DFS dùng stack (LIFO) — tự nhiên triển khai qua đệ quy hoặc tường minh bằng mảng. DFS lặp push con theo thứ tự ngược để node con trái nhất được xử lý trước (khớp đệ quy pre-order).',
  },
  'cc-070': {
    question:
      '`structuredClone()` là hàm built-in của trình duyệt/Node.js thực hiện deep clone, xử lý đúng tham chiếu vòng, Date, Map và Set.',
    explanation:
      '`structuredClone` (có sẵn trong trình duyệt từ ~2022 và Node.js 17+) sử dụng thuật toán structured clone để deep-copy hầu hết kiểu built-in bao gồm Date, RegExp, Map, Set, ArrayBuffer, và xử lý tham chiếu vòng. Nó KHÔNG clone function, DOM node, hay instance class có method tuỳ chỉnh.',
  },
  'cc-071': {
    question:
      'Closure trong JavaScript gây rò rỉ bộ nhớ nếu bạn tạo function bên trong vòng lặp mà không dọn dẹp tham chiếu.',
    explanation:
      'Closure giữ tham chiếu đến scope bên ngoài. Nếu closure capture một object lớn và được lưu ở nơi tồn tại lâu (ví dụ: event listener không bao giờ bị gỡ), object bị capture không thể được garbage collect. Đây là nguồn rò rỉ bộ nhớ phổ biến trong ứng dụng single-page.',
  },
  'cc-072': {
    question:
      'Triển khai `deepFreeze(obj)` áp dụng đệ quy `Object.freeze` để làm object và tất cả thuộc tính lồng nhau trở nên bất biến (immutable).',
    explanation:
      '`Object.freeze` là nông — nó chỉ ngăn chỉnh sửa thuộc tính trực tiếp. Để bất biến sâu, ta đệ quy freeze tất cả object lồng nhau. Kiểm tra `Object.isFrozen` tránh công việc thừa trên object đã freeze và ngăn vòng lặp vô hạn với tham chiếu vòng.',
  },
}
