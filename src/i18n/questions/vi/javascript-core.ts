import type { QuestionTranslationMap } from '../types'

export const javascriptCoreVi: QuestionTranslationMap = {
  'js-core-001': {
    question:
      'Sự khác biệt chính giữa `var`, `let` và `const` trong JavaScript là gì?',
    options: [
      '`var` có phạm vi hàm và được hoisting; `let`/`const` có phạm vi khối và không được hoisting',
      '`var` có phạm vi khối; `let`/`const` có phạm vi hàm',
      '`var` có phạm vi hàm và được hoisting; `let`/`const` có phạm vi khối và rơi vào Temporal Dead Zone (TDZ) trước khi được khai báo',
      '`const` không thể chứa object hoặc array',
    ],
    explanation:
      'Khai báo `var` được hoisting lên đầu phạm vi hàm và khởi tạo với giá trị `undefined`. `let` và `const` có phạm vi khối và cũng được hoisting, nhưng chúng nằm trong Temporal Dead Zone (TDZ) — truy cập chúng trước dòng khai báo sẽ ném ra ReferenceError. `const` yêu cầu phải có giá trị khởi tạo và ngăn việc gán lại binding, tuy nhiên giá trị bên trong vẫn có thể thay đổi nếu đó là object hoặc array.',
  },
  'js-core-002': {
    question: 'Đoạn code này xuất ra kết quả gì?',
    options: [
      `'Alice' 30 undefined`,
      `'Alice' 30 'Unknown'`,
      `ReferenceError`,
      `'Alice' 30 null`,
    ],
    explanation:
      'Destructuring object cho phép đặt giá trị mặc định với `= value`. Vì `city` không tồn tại trên `person`, giá trị mặc định `"Unknown"` sẽ được sử dụng. `name` và `age` được trích xuất bình thường.',
  },
  'js-core-003': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      '[0, [1, 2, 3], 4]',
      '[0, 1, 2, 3, 4]',
      '[1, 2, 3, 0, 4]',
      'TypeError',
    ],
    explanation:
      'Toán tử spread `...` mở rộng một iterable tại chỗ. `[0, ...arr, 4]` tạo ra một mảng mới chứa `0`, sau đó từng phần tử của `arr`, rồi `4`.',
  },
  'js-core-004': {
    question: 'Phát biểu nào về arrow function là SAI?',
    options: [
      'Arrow function không có binding `this` riêng',
      'Arrow function không thể dùng làm constructor',
      'Arrow function không có đối tượng `arguments`',
      'Arrow function có thể được dùng làm generator function với cú pháp `function*`',
    ],
    explanation:
      'Arrow function không thể là generator function — cú pháp `function*` bắt buộc cho generator và không thể kết hợp với cú pháp arrow. Ba phát biểu còn lại đều đúng: arrow function kế thừa `this` theo lexical scope, không thể gọi với `new`, và không có đối tượng `arguments`.',
  },
  'js-core-005': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `{ key: 42, 'best_key': 84 }`,
      `{ score: 42, best_score: 84 }`,
      `{ '[key]': 42, '[best_key]': 84 }`,
      'SyntaxError',
    ],
    explanation:
      'Computed property name cho phép bất kỳ biểu thức nào bên trong `[]` trở thành key của property. Template literal cũng có thể dùng bên trong computed property name. `[key]` được tính thành `"score"` và `` [`best_${key}`] `` được tính thành `"best_score"`.',
  },
  'js-core-006': {
    question:
      'Optional chaining trả về gì khi truy cập một property không tồn tại?',
    options: ['null', 'undefined', 'TypeError', 'ReferenceError'],
    explanation:
      '`?.` (optional chaining) ngắt mạch và trả về `undefined` nếu bất kỳ phần nào trong chuỗi là `null` hoặc `undefined`. Nó KHÔNG trả về `null` mặc dù `profile` là `null`.',
  },
  'js-core-007': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `'A' 'B' 'C' 'D'`,
      `'A' 'B' 0 ''`,
      `null undefined 0 ''`,
      `'A' 'B' 0 'D'`,
    ],
    explanation:
      'Toán tử nullish coalescing `??` chỉ sử dụng giá trị bên phải khi giá trị bên trái là `null` hoặc `undefined`. Các giá trị falsy như `0` và `""` KHÔNG được coi là nullish, nên chúng được giữ nguyên.',
  },
  'js-core-008': {
    question:
      'Phát biểu nào sau đây đúng về ES modules so với CommonJS?',
    options: [
      'ES modules là đồng bộ; CommonJS là bất đồng bộ',
      'ES modules được phân tích tĩnh tại thời điểm parse; `require()` của CommonJS là động và chạy tại runtime',
      'ES modules không hỗ trợ default export',
      '`module.exports` của CommonJS và `export default` của ES module hoàn toàn có thể thay thế cho nhau',
    ],
    explanation:
      'Câu lệnh `import`/`export` của ES module được parse tĩnh trước khi code chạy, cho phép tree-shaking và phát hiện circular dependency. `require()` của CommonJS là một lời gọi hàm tại runtime và có thể có điều kiện. Đây là sự khác biệt kiến trúc cơ bản giữa hai hệ thống module.',
  },
  'js-core-009': {
    question: 'Kết quả xuất ra là gì?',
    options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
    explanation:
      '`var` có phạm vi hàm, nên cả ba callback đều closure trên cùng một biến `i`. Khi event loop chạy các timeout, vòng lặp đã kết thúc và `i` là `3`. Để log `0 1 2`, sử dụng `let` (tạo binding mới mỗi lần lặp) hoặc IIFE.',
  },
  'js-core-010': {
    question: 'Closure counter sau đây xuất ra kết quả gì?',
    options: ['10', '11', '12', '9'],
    explanation:
      'Counter bắt đầu tại 10. Hai lần gọi `increment()` tăng lên 12. Một lần gọi `decrement()` giảm xuống 11. Cả ba phương thức chia sẻ cùng một biến `count` thông qua closure.',
  },
  'js-core-011': {
    question: 'Temporal Dead Zone (TDZ) là gì?',
    options: [
      'Khoảng thời gian mà biến `var` có giá trị `undefined`',
      'Khoảng thời gian từ đầu phạm vi khối đến dòng khai báo `let`/`const`, trong đó truy cập biến sẽ ném ra ReferenceError',
      'Giai đoạn garbage collection loại bỏ các closure không sử dụng',
      'Tối ưu hóa của trình duyệt trì hoãn việc khởi tạo biến',
    ],
    explanation:
      'Khi một khối được thực thi, các binding `let` và `const` được tạo nhưng chưa được khởi tạo. Khoảng thời gian từ khi vào khối đến dòng khai báo chính là TDZ. Bất kỳ thao tác đọc hoặc ghi nào lên binding trong TDZ đều ném `ReferenceError: Cannot access "x" before initialization`. Điều này khác với `var`, vốn được khởi tạo thành `undefined` tại thời điểm hoisting.',
  },
  'js-core-012': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `'Rex makes a sound' true`,
      `'Rex barks' false`,
      `'Rex barks' true`,
      `TypeError`,
    ],
    explanation:
      '`Dog.prototype` được gán một object mới có prototype là `Animal.prototype`, thiết lập prototype chain. `Dog.prototype.speak` che khuất (shadow) `Animal.prototype.speak`, nên trả về `"Rex barks"`. Vì chain bao gồm `Animal.prototype`, `d instanceof Animal` là `true`.',
  },
  'js-core-013': {
    question: '`Object.create(null)` tạo ra gì so với `{}`?',
    options: [
      'Chúng giống hệt nhau — cả hai đều tạo object rỗng',
      '`Object.create(null)` tạo object không có prototype, nên không kế thừa `toString`, `hasOwnProperty`, v.v.',
      '`Object.create(null)` ném ra TypeError',
      '`Object.create(null)` tạo một object bị đóng băng (frozen)',
    ],
    explanation:
      'Object literal thông thường (`{}`) có `Object.prototype` làm prototype, cung cấp các phương thức như `toString`, `valueOf` và `hasOwnProperty`. `Object.create(null)` đặt prototype thành `null`, tạo ra một "pure dictionary" không có property kế thừa — hữu ích cho các key-value store an toàn tránh tấn công prototype pollution.',
  },
  'js-core-014': {
    question:
      'Tính năng nào của ES6 class cho phép gọi phương thức của lớp cha từ lớp con?',
    options: [
      '`this.super()`',
      '`parent.method()`',
      '`super.method()`',
      '`prototype.method.call(this)`',
    ],
    explanation:
      '`super.methodName()` gọi phương thức được định nghĩa trên prototype của lớp cha. Trong constructor, bạn phải gọi `super()` trước khi truy cập `this`. `super` là một từ khóa đặc biệt, không phải tham chiếu object thông thường.',
  },
  'js-core-015': {
    question: 'Thứ tự các kết quả console là gì?',
    options: ['1 2 3 4', '1 4 2 3', '1 4 3 2', '1 3 4 2'],
    explanation:
      'Code đồng bộ chạy trước: `1` rồi `4`. Sau khi call stack trống, hàng đợi microtask được xử lý trước bất kỳ macrotask nào. `Promise.resolve().then(...)` là microtask, nên `3` in tiếp. Callback `setTimeout` là macrotask, nên `2` in cuối cùng. Thứ tự: 1 → 4 → 3 → 2.',
  },
  'js-core-016': {
    question: 'Thứ tự xuất ra là gì?',
    options: ['C A D B', 'A C D B', 'C A B D', 'A B C D'],
    explanation:
      '`C` được log đồng bộ. `main()` được gọi: `A` được log, sau đó `await` tạm dừng `main` dưới dạng microtask. `D` được log đồng bộ. Call stack trống, hàng đợi microtask chạy, tiếp tục `main`, nên `B` được log cuối cùng. Thứ tự: C → A → D → B.',
  },
  'js-core-017': {
    question: 'Cái nào sau đây được xử lý trong hàng đợi microtask?',
    options: [
      'Callback `setTimeout`',
      'Callback `setInterval`',
      'Callback `Promise.then()` và `queueMicrotask()`',
      'Callback `requestAnimationFrame`',
    ],
    explanation:
      'Hàng đợi microtask được xử lý hoàn toàn sau mỗi task (macrotask) trước khi macrotask tiếp theo chạy. Nó xử lý: callback Promise đã resolve (`.then`, `.catch`, `.finally`), `queueMicrotask()`, và callback `MutationObserver`. `setTimeout`, `setInterval` và `requestAnimationFrame` đều lên lịch macrotask (hoặc rendering task).',
  },
  'js-core-018': {
    question: '`Promise.allSettled` trả về gì cho các lời gọi sau?',
    options: [
      `['fulfilled', 'fulfilled', 'fulfilled']`,
      `['fulfilled', 'rejected', 'fulfilled']`,
      `Ném ra unhandled rejection`,
      `['resolved', 'rejected', 'resolved']`,
    ],
    explanation:
      '`Promise.allSettled()` không bao giờ reject. Nó đợi tất cả các promise settle và trả về mảng các object kết quả, mỗi object có trường `status`: hoặc `"fulfilled"` (kèm `value`) hoặc `"rejected"` (kèm `reason`). Đây là điểm khác biệt chính so với `Promise.all()`, vốn ngắt mạch ngay khi có rejection đầu tiên.',
  },
  'js-core-019': {
    question: 'Sự khác biệt giữa `Promise.all()` và `Promise.race()` là gì?',
    options: [
      '`Promise.all` resolve khi promise đầu tiên resolve; `Promise.race` đợi tất cả',
      '`Promise.all` đợi tất cả các promise resolve và reject ngay lập tức khi có bất kỳ rejection nào; `Promise.race` resolve/reject ngay khi promise đầu tiên settle',
      '`Promise.race` chỉ hoạt động với các promise đã resolve; `Promise.all` xử lý rejection',
      'Chúng giống hệt nhau chỉ khác tên gọi',
    ],
    explanation:
      '`Promise.all([...])` resolve với mảng các giá trị khi mọi promise fulfil, nhưng reject ngay lập tức với reason của rejection đầu tiên (các promise khác không bị hủy). `Promise.race([...])` settle — fulfil hoặc reject — ngay khi bất kỳ promise nào trong mảng settle trước.',
  },
  'js-core-020': {
    question:
      'Hàm async này có bug — lỗi không bao giờ được bắt. Hãy sửa nó.',
    options: [
      'Thêm `try/catch` bên trong `fetchData`',
      'Await `res.json()`: đổi thành `const data = await res.json()`',
      'Xóa `.catch()` khỏi nơi gọi hàm',
      'Đổi `async function` thành hàm thông thường',
    ],
    explanation:
      '`res.json()` trả về một Promise. Không có `await`, `data` là một Promise đang pending thay vì JSON đã parse. Cách sửa là `const data = await res.json()`. Ngoài ra, nên kiểm tra `res.ok` trước khi parse để xử lý lỗi HTTP, vì `fetch` không tự reject khi gặp lỗi HTTP.',
  },
  'js-core-021': {
    question:
      'Cách nào chạy đúng ba thao tác async song song và thu thập kết quả?',
    options: [
      `async function run() {
  const a = await fetchA()
  const b = await fetchB()
  const c = await fetchC()
  return [a, b, c]
}`,
      `async function run() {
  const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()])
  return [a, b, c]
}`,
      'Cả hai đều tương đương về hiệu suất',
      'Cả hai đều sai — async/await không thể kết hợp với Promise.all',
    ],
    explanation:
      'Phương án A chạy tuần tự: mỗi `await` đợi thao tác trước hoàn thành rồi mới bắt đầu tiếp, nên tổng thời gian là tổng tất cả các khoảng thời gian. Phương án B khởi chạy cả ba đồng thời bằng cách tạo tất cả Promise trước khi await chúng qua `Promise.all`, nên tổng thời gian chỉ là thời gian của thao tác chậm nhất.',
  },
  'js-core-022': {
    question: 'Kết quả xuất ra là gì?',
    options: ['20', '4', '10', '25'],
    explanation:
      '`filter(n => n % 2 === 0)` cho `[2, 4]`. `.map(n => n ** 2)` cho `[4, 16]`. `.reduce((acc, n) => acc + n, 0)` tính tổng: `0 + 4 + 16 = 20`.',
  },
  'js-core-023': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, 2, 3, [4, 5]]',
      '[[1, 2], [3, [4, 5]]]',
      'TypeError',
    ],
    explanation:
      '`Array.prototype.flat()` không có tham số mặc định là depth `1`. Nó làm phẳng một cấp: `[1, 2]` và `[3, [4, 5]]` trở thành các phần tử riêng lẻ. Mảng `[4, 5]` bên trong không được làm phẳng vì nó nằm ở hai cấp sâu. Sử dụng `.flat(Infinity)` để làm phẳng tất cả các cấp.',
  },
  'js-core-024': {
    question:
      'Sự khác biệt giữa `Array.prototype.find()` và `Array.prototype.findIndex()` là gì?',
    options: [
      '`find` trả về chỉ số; `findIndex` trả về phần tử',
      '`find` trả về phần tử khớp đầu tiên; `findIndex` trả về chỉ số của phần tử khớp đầu tiên',
      '`find` thay đổi mảng; `findIndex` thì không',
      'Chúng giống hệt nhau',
    ],
    explanation:
      'Cả hai đều nhận callback predicate và duyệt cho đến khi tìm thấy phần tử khớp đầu tiên. `find()` trả về chính phần tử đó (hoặc `undefined` nếu không tìm thấy). `findIndex()` trả về chỉ số (hoặc `-1` nếu không tìm thấy). Cả hai đều không thay đổi mảng.',
  },
  'js-core-025': {
    question: 'Lời gọi reduce này trả về gì?',
    options: [
      `{ a: 1, b: 2 }`,
      `{ a: 4, b: 2 }`,
      `{ a: [1, 3], b: [2] }`,
      `{ a: 3, b: 2 }`,
    ],
    explanation:
      'Reducer tích lũy tổng theo category. Với `"a"`: `0 + 1 = 1`, rồi `1 + 3 = 4`. Với `"b"`: `0 + 2 = 2`. Kết quả: `{ a: 4, b: 2 }`. `?? 0` xử lý trường hợp undefined ban đầu cho key mới.',
  },
  'js-core-026': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `'Hello, Bob' 'Hello, Bob'`,
      `'Hello, Bob' 'Hello, undefined'`,
      `'Hello, undefined' 'Hello, Bob'`,
      `TypeError TypeError`,
    ],
    explanation:
      '`greet` là hàm thông thường. Khi gọi `obj.greet()`, `this` tham chiếu đến `obj`, nên `this.name` là `"Bob"`. `greetArrow` là arrow function được định nghĩa trong object literal, nằm ở phạm vi module/global — `this` là `this` bên ngoài (global object trong non-strict mode, nơi `name` có thể là `undefined`). Arrow function không có `this` riêng.',
  },
  'js-core-027': {
    question: 'Sự khác biệt giữa `call`, `apply` và `bind` là gì?',
    options: [
      '`call` và `apply` đều gọi hàm ngay lập tức; `bind` trả về hàm mới với `this` được gán trước',
      '`bind` gọi hàm ngay lập tức; `call` và `apply` trả về hàm mới',
      '`apply` nhận các tham số riêng lẻ; `call` nhận mảng',
      'Cả ba đều giống hệt nhau',
    ],
    explanation:
      '`fn.call(thisArg, arg1, arg2)` gọi `fn` ngay lập tức với `this = thisArg` và các tham số riêng lẻ. `fn.apply(thisArg, [arg1, arg2])` làm tương tự nhưng nhận tham số dưới dạng mảng. `fn.bind(thisArg, arg1)` trả về một hàm MỚI với `this` được gán cố định vào `thisArg`; nó không được gọi ngay lập tức.',
  },
  'js-core-028': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `'Hi, Alice!' 'Hi, Alice?'`,
      `'Hi, undefined!' 'Hi, undefined?'`,
      `TypeError`,
      `'Hi, Alice' 'Hi, Alice'`,
    ],
    explanation:
      '`bind` áp dụng một phần các tham số: `greeting` được gán trước giá trị `"Hi"` và `this` được khóa vào `user`. Mỗi lần gọi `sayHi` chỉ cần cung cấp `punct`. Đây được gọi là partial application.',
  },
  'js-core-029': {
    question:
      'Tại sao bạn nên chọn `WeakMap` thay vì `Map` để gắn metadata với các DOM node?',
    options: [
      'WeakMap có tốc độ tra cứu nhanh hơn Map',
      'Key của WeakMap phải là chuỗi, giúp chúng an toàn hơn',
      'Key của WeakMap được giữ yếu (weakly) — nếu một DOM node bị xóa và không còn tham chiếu nào khác, entry sẽ tự động được garbage collect',
      'WeakMap hỗ trợ duyệt (iteration); Map thì không',
    ],
    explanation:
      '`Map` giữ tham chiếu mạnh (strong reference) đến các key, ngăn garbage collection của DOM node ngay cả sau khi chúng bị xóa khỏi document. `WeakMap` giữ tham chiếu yếu (weak reference): khi một key object không còn tham chiếu mạnh nào khác, nó có thể được thu gom, và entry tương ứng tự động bị xóa. Điều này ngăn rò rỉ bộ nhớ. Đánh đổi là `WeakMap` không thể duyệt (iterate) và không thể truy vấn kích thước.',
  },
  'js-core-030': {
    question: 'Phát biểu nào về `Symbol` là đúng?',
    options: [
      'Hai symbol tạo với cùng mô tả thì bằng nhau: `Symbol("id") === Symbol("id")` là `true`',
      'Mỗi lần gọi `Symbol()` trả về một primitive duy nhất, bất biến; hai symbol với cùng mô tả không bao giờ `===` bằng nhau',
      'Symbol tự động được ép kiểu thành chuỗi khi dùng làm key của object',
      'Symbol có thể được liệt kê bằng `Object.keys()`',
    ],
    explanation:
      '`Symbol("id") === Symbol("id")` là `false` — mỗi lần gọi tạo ra một giá trị hoàn toàn duy nhất bất kể mô tả. Symbol dùng làm property key KHÔNG thể liệt kê qua `Object.keys()` hoặc `for...in`; sử dụng `Object.getOwnPropertySymbols()` để truy cập chúng. Chúng cũng không được ép kiểu ngầm thành chuỗi (làm vậy sẽ ném TypeError).',
  },
  'js-core-031': {
    question: 'Validation bằng Proxy này trả về gì?',
    options: [
      `'Only numbers allowed' 10`,
      `TypeError 10`,
      `undefined 10`,
      `'Only numbers allowed' undefined`,
    ],
    explanation:
      'Trap `set` chặn các phép gán property. Gán `nums.a = 10` thành công. Gán `nums.b = "hello"` kích hoạt trap, ném ra `TypeError`. Khối catch log thông điệp `"Only numbers allowed"`. `nums.a` là `10` như đã gán trước đó.',
  },
  'js-core-032': {
    question: 'Kết quả xuất ra là gì?',
    options: ['0 3 6 9', '0 3 6 undefined', '0 3 6 done', '1 4 7 undefined'],
    explanation:
      'Generator yield các giá trị cho i = 0, 3, 6, 9 (tất cả thỏa mãn i < 10). Bốn lần gọi `gen.next()` trả về bốn giá trị này: 0, 3, 6, 9. Lần gọi thứ năm sẽ trả về `{ value: undefined, done: true }` vì i = 12 không thỏa điều kiện vòng lặp.',
  },
  'js-core-033': {
    question: 'Điều gì làm cho một object có thể iterable trong JavaScript?',
    options: [
      'Triển khai phương thức `forEach`',
      'Có property `length`',
      'Triển khai phương thức `[Symbol.iterator]` trả về một iterator object có phương thức `next()`',
      'Kế thừa từ `Array`',
    ],
    explanation:
      'Giao thức iteration yêu cầu object phải có phương thức `[Symbol.iterator]()`. Phương thức đó phải trả về một iterator: object có phương thức `next()` trả về `{ value, done }`. Các iterable tích hợp bao gồm Array, String, Map, Set và generator object. Iterable tùy chỉnh có thể dùng với `for...of`, spread và destructuring.',
  },
  'js-core-034': {
    question: 'Async generator này xuất ra gì?',
    options: ['0 1 2', '0 0 0', 'undefined undefined undefined', 'TypeError'],
    explanation:
      'Async generator kết hợp `async`/`await` với cú pháp generator. Mỗi `yield` bên trong async generator trả về một Promise khi `next()` được gọi. `for await...of` await từng giá trị yield theo thứ tự. Kết quả là `0`, `1`, `2` trên các tick riêng biệt, ngăn cách bởi delay của `setTimeout`.',
  },
  'js-core-035': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      `true true 'Out of bounds' 'cleanup'`,
      `true false 'Out of bounds' 'cleanup'`,
      `false true 'Out of bounds' 'cleanup'`,
      `RangeError 'cleanup'`,
    ],
    explanation:
      '`RangeError` kế thừa từ `Error`, nên cả hai kiểm tra `instanceof` đều trả về `true`. Khối `catch` bắt lỗi được ném ra, và khối `finally` luôn thực thi bất kể có ngoại lệ hay không.',
  },
  'js-core-036': {
    question:
      'Mẫu (pattern) đúng để rethrow lỗi cụ thể trong khi để các lỗi khác lan truyền là gì?',
    options: [
      `try { ... } catch (e) { throw e }`,
      `try { ... } catch (e) { if (e instanceof TypeError) handleIt(e); else throw e }`,
      `try { ... } catch (TypeError e) { handleIt(e) }`,
      'Sử dụng `.catch(e => {})` sẽ tự động lọc theo kiểu',
    ],
    explanation:
      'JavaScript không hỗ trợ typed catch clause (phương án C là cú pháp không hợp lệ). Mẫu đúng là catch tất cả lỗi, kiểm tra kiểu bằng `instanceof`, xử lý trường hợp cụ thể, và rethrow những lỗi khác. Điều này giữ cho khối catch có trách nhiệm hẹp.',
  },
  'js-core-037': {
    question:
      'Hàm này âm thầm nuốt lỗi. Vấn đề là gì và bạn sửa thế nào?',
    options: [
      'Xóa hoàn toàn `try/catch`',
      'Re-throw lỗi hoặc trả về fallback/chỉ báo lỗi có ý nghĩa để caller có thể xử lý',
      'Sử dụng `.then()/.catch()` thay vì async/await',
      'Thêm `return null` bên trong khối catch — điều này sẽ sửa lỗi',
    ],
    explanation:
      'Nuốt lỗi làm việc debug trở nên bất khả thi và che giấu thất bại khỏi caller. Cách sửa là re-throw (`throw e`), trả về kết quả lỗi có kiểu, hoặc log và rethrow. Cũng lưu ý rằng `fetch` chỉ reject khi lỗi mạng — HTTP 4xx/5xx là các fetch thành công. Luôn kiểm tra `res.ok` trước khi parse.',
  },
  'js-core-038': {
    question:
      '`typeof null === "object"` trả về `true` trong JavaScript.',
    explanation:
      'Đây là một quirk nổi tiếng của JavaScript. `typeof null` trả về `"object"` do một bug trong triển khai JavaScript gốc và không bao giờ được sửa để đảm bảo tương thích ngược. `null` thực tế không phải là object — để kiểm tra `null` an toàn, sử dụng so sánh nghiêm ngặt: `value === null`.',
  },
  'js-core-039': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      'true true',
      'false true',
      'false false',
      'true false',
    ],
    explanation:
      '`0.1 + 0.2` trong IEEE-754 double precision bằng `0.30000000000000004`, không phải `0.3`, nên phép so sánh nghiêm ngặt là `false`. Cách đúng để so sánh số dấu phẩy động là dùng dung sai epsilon. `Number.EPSILON` là sự khác biệt nhỏ nhất có thể biểu diễn giữa hai số double khác nhau.',
  },
  'js-core-040': {
    question:
      'Trong strict mode (`"use strict"`), gán giá trị cho biến chưa khai báo sẽ ném ra `ReferenceError`.',
    explanation:
      'Trong sloppy mode, `x = 5` (không có `var`/`let`/`const`) âm thầm tạo biến global. Trong strict mode, điều này ném `ReferenceError: x is not defined`, ngăn việc vô tình tạo biến global. ES modules và class body luôn ở strict mode.',
  },
  'js-core-041': {
    question:
      '`structuredClone()` cung cấp gì mà `JSON.parse(JSON.stringify())` không có?',
    options: [
      'Nó nhanh hơn trong mọi trường hợp',
      'Nó clone đúng các kiểu như `Date`, `Map`, `Set`, `ArrayBuffer`, tham chiếu vòng (circular reference) và giá trị `undefined` mà `JSON` không thể biểu diễn',
      'Nó thực hiện shallow clone thay vì deep clone',
      'Nó được hỗ trợ trong tất cả trình duyệt từ ES5',
    ],
    explanation:
      '`JSON.parse(JSON.stringify(x))` âm thầm bỏ `undefined`, chuyển `Date` thành chuỗi, bỏ qua `Map`/`Set`, và ném lỗi với tham chiếu vòng. `structuredClone()` (giới thiệu trong Node 17 và trình duyệt hiện đại) xử lý tất cả những trường hợp này đúng cách bằng thuật toán structured clone được sử dụng bởi `postMessage`.',
  },
  'js-core-042': {
    question:
      'Phát biểu nào mô tả đúng nhất mục đích của `Object.freeze()` so với `Object.seal()`?',
    options: [
      '`freeze` ngăn thêm property mới; `seal` ngăn sửa đổi property hiện có',
      '`freeze` làm tất cả property chỉ đọc VÀ ngăn thêm/xóa property; `seal` ngăn thêm/xóa property nhưng vẫn cho phép sửa đổi giá trị hiện có',
      'Chúng giống hệt nhau',
      '`seal` là đệ quy (deep); `freeze` là shallow',
    ],
    explanation:
      '`Object.seal(obj)` đánh dấu tất cả property hiện có là non-configurable và ngăn thêm hoặc xóa property mới, nhưng các property writable hiện có vẫn có thể được cập nhật. `Object.freeze(obj)` thêm vào đó làm tất cả property non-writable, tạo object hoàn toàn bất biến (shallow — object lồng nhau không bị freeze). Cả hai đều không đệ quy/deep.',
  },
  'js-core-043': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      '2 2',
      '2 rồi SyntaxError',
      '2 rồi TypeError',
      'undefined undefined',
    ],
    explanation:
      'Private class field (có tiền tố `#`) thực sự là private và chỉ truy cập được bên trong class body. `c.value` trả về `2` qua getter. `c.#count` bên ngoài class là SyntaxError tại thời điểm parse — không phải lỗi runtime — vì parser từ chối truy cập private field ngoài class khai báo nó.',
  },
  'js-core-044': {
    question:
      'Hàm `async` luôn trả về một Promise, ngay cả khi bạn trả về một giá trị không phải Promise.',
    explanation:
      'Hàm `async` bọc giá trị trả về trong `Promise.resolve()`. Nếu bạn `return 42`, caller nhận được một Promise resolve thành `42`. Nếu bạn throw bên trong hàm async, Promise trả về sẽ reject với giá trị được throw.',
  },
  'js-core-045': {
    question: 'Tagged template literal này xuất ra kết quả gì?',
    options: [
      `'Hello Alice, your score is 99!'`,
      `'Hello [Alice], your score is [99]!'`,
      `'Hello [Alice], your score is [99]'`,
      `TypeError`,
    ],
    explanation:
      'Tagged template literal truyền các phần chuỗi dưới dạng mảng (`strings`) và các giá trị nội suy dưới dạng rest args (`values`). Tag `highlight` này bọc mỗi giá trị nội suy trong `[...]`. Phần tử `strings` cuối cùng là `"!"` và `values[2]` là `undefined`, nên không có gì được thêm vào sau. Kết quả: `"Hello [Alice], your score is [99]!"`.',
  },
  'js-core-046': {
    question:
      '`Promise.withResolvers()` (ES2024) giải quyết vấn đề gì so với mẫu Promise constructor truyền thống?',
    options: [
      'Nó tạo Promise tự động resolve sau một khoảng timeout',
      'Nó expose các hàm `resolve` và `reject` bên ngoài callback của Promise constructor, loại bỏ nhu cầu dùng biến closure',
      'Nó trả về nhiều Promise cùng lúc — một cho resolve và một cho reject',
      'Nó tạo Promise có thể resolve nhiều lần',
    ],
    explanation:
      'Trước ES2024, để expose `resolve`/`reject` ra ngoài constructor bạn phải dùng mẫu "deferred": `let resolve, reject; const p = new Promise((res, rej) => { resolve = res; reject = rej; })`. `Promise.withResolvers()` trả về `{ promise, resolve, reject }` trong một lời gọi gọn gàng. Điều này đặc biệt hữu ích cho API hướng sự kiện, hàng đợi và điều khiển luồng thủ công.',
  },
  'js-core-047': {
    question: 'Đoạn code này log ra gì?',
    options: [
      'Không có gì — promise không bao giờ resolve',
      'resolved: 42',
      'rejected: 42',
      'TypeError: Promise.withResolvers is not a function',
    ],
    explanation:
      '`Promise.withResolvers()` trả về một object thuần với `{ promise, resolve, reject }`. `promise` là một Promise chuẩn. Gọi `resolve(42)` sau khi hàng đợi microtask trống sẽ kích hoạt callback `.then` ở tick tiếp theo, log `resolved: 42`. Về chức năng, điều này giống hệt mẫu deferred thủ công nhưng gọn gàng hơn nhiều.',
  },
  'js-core-048': {
    question:
      '`Array.fromAsync()` (ES2024) làm được gì mà `Array.from()` không thể?',
    options: [
      'Nó tạo mảng từ Map hoặc Set một cách đồng bộ',
      'Nó thu thập giá trị từ async iterable (ví dụ: async generator, ReadableStream) vào mảng, trả về một Promise',
      'Nó thực hiện callback mapping bất đồng bộ song song',
      'Nó tạo typed array từ một Promise',
    ],
    explanation:
      '`Array.from()` chỉ hoạt động với iterable đồng bộ. `Array.fromAsync(asyncIterable)` trả về Promise resolve thành mảng sau khi consume tất cả giá trị từ async iterable. Ví dụ: `const lines = await Array.fromAsync(fs.readLines("file.txt"))`. Nó cũng nhận hàm mapping làm tham số thứ hai, được gọi với `await` trên mỗi giá trị.',
  },
  'js-core-049': {
    question:
      'Phát biểu nào về JavaScript Decorators (Stage 3 / TypeScript 5.0 experimental) là chính xác?',
    options: [
      'Decorator chỉ có thể áp dụng cho class method, không cho class hoặc field',
      'Decorator là một hàm nhận target và descriptor, có thể thay thế hoặc sửa đổi giá trị được decorate',
      'Decorator được áp dụng tại runtime bên trong class constructor',
      'Decorator đã được chốt trong ES2022',
    ],
    explanation:
      'Decorator là một hàm được gọi với giá trị được decorate (class, method, accessor, hoặc field) và context object mô tả khai báo. Nó có thể trả về giá trị thay thế hoặc sửa đổi hành vi. Class decorator nhận class constructor; method decorator nhận hàm method. Đề xuất TC39 Stage 3 (triển khai trong TypeScript 5.0 với `experimentalDecorators: false`) khác với API decorator experimental cũ của TypeScript.',
  },
  'js-core-050': {
    question: 'Kết quả xuất ra là gì?',
    options: [
      'Bob 4 true',
      'Alice 3 true',
      'Alice 4 true',
      'Alice 3 false',
    ],
    explanation:
      '`structuredClone` thực hiện deep clone — thay đổi `clone.scores` không ảnh hưởng đến `original.scores`. `original.name` vẫn là `"Alice"` và `original.scores.length` vẫn là `3`. Khác với `JSON.parse(JSON.stringify(...))`, `structuredClone` giữ nguyên `Date` object dưới dạng instance `Date` thực sự, nên `clone.birthday instanceof Date` là `true`.',
  },
  'js-core-051': {
    question:
      '`structuredClone()` có thể clone object có tham chiếu vòng (circular reference) mà không ném lỗi.',
    explanation:
      '`structuredClone` sử dụng thuật toán HTML Structured Clone, thuật toán này xử lý rõ ràng tham chiếu vòng. Đây là một trong những ưu điểm chính so với `JSON.parse(JSON.stringify(...))` vốn ném `TypeError: Converting circular structure to JSON`. Tuy nhiên, `structuredClone` không thể clone function, DOM node, hoặc class instance có prototype method.',
  },
  'js-core-052': {
    question:
      'Mục đích chính của `AbortController` trong JavaScript là gì?',
    options: [
      'Để buộc kết thúc một JavaScript thread đang chạy',
      'Để cung cấp signal có thể truyền cho các thao tác async (như `fetch`) để hủy chúng',
      'Để hủy một Promise đã reject trước khi nó đến handler `.catch`',
      'Để hủy `setTimeout` hoặc `setInterval`',
    ],
    explanation:
      '`AbortController` tạo một `AbortSignal` (`controller.signal`) có thể truyền cho các API hỗ trợ hủy như `fetch`, event listener, và async iterator. Gọi `controller.abort()` kích hoạt sự kiện `abort` trên signal và khiến `fetch` liên quan reject với `AbortError`. Đây là cơ chế Web API chuẩn cho hủy hợp tác (cooperative cancellation).',
  },
  'js-core-053': {
    question: 'Đoạn code này log ra gì?',
    options: [
      'data: { ... } (request hoàn thành)',
      'Request aborted',
      'Other error: Failed to fetch',
      'Không có gì được log',
    ],
    explanation:
      'Gọi `controller.abort()` trước khi fetch hoàn thành khiến Promise của fetch reject với `DOMException` có `name` là `"AbortError"`. Handler `.catch` kiểm tra name cụ thể này và log `"Request aborted"`. Nếu request đã hoàn thành, abort sẽ không có tác dụng.',
  },
  'js-core-054': {
    question:
      'Cú pháp hiện đại đúng cho import attributes (trước đây là "import assertions") trong ES2025 là gì?',
    options: [
      '`import data from "./data.json" assert { type: "json" }`',
      '`import data from "./data.json" with { type: "json" }`',
      '`import { json } from "./data.json"`',
      '`const data = require("./data.json", { type: "json" })`',
    ],
    explanation:
      'Đề xuất TC39 đã được đổi tên từ "Import Assertions" (dùng `assert`) thành "Import Attributes" (dùng `with`) trong ES2025. Từ khóa `assert` bị deprecated để thay bằng `with`. Attribute `type` cho host environment biết cách diễn giải module (ví dụ: `"json"` cho JSON module). Trình duyệt và Node.js 22+ hỗ trợ cú pháp `with`.',
  },
  'js-core-055': {
    question: '`Object.groupBy()` (ES2024) trả về gì?',
    options: [
      'Một `Map` nhóm các giá trị theo key',
      'Một plain object trong đó mỗi key ánh xạ tới mảng các phần tử mà callback trả về key đó',
      'Một mảng các tuple `[key, values[]]` được sắp xếp theo key',
      'Một `Set` các key duy nhất được trích xuất từ mảng',
    ],
    explanation:
      '`Object.groupBy(iterable, keyFn)` nhóm các phần tử của iterable thành plain object. Callback nhận mỗi phần tử và trả về string key. Các phần tử có cùng key được gom vào mảng dưới key đó. `Map.groupBy()` làm tương tự nhưng trả về `Map`, cho phép key không phải chuỗi (bao gồm object). Cả hai đều không sắp xếp key.',
  },
  'js-core-056': {
    question: 'Đoạn code này log ra gì?',
    options: [
      `['fruit', 'vegetable'] 3`,
      `['fruit', 'vegetable'] 2`,
      `['apple', 'banana', 'carrot', 'broccoli'] 2`,
      `TypeError: Object.groupBy is not a function`,
    ],
    explanation:
      '`Object.groupBy` nhóm các item theo giá trị callback trả về. Mảng `inventory` tạo ra hai nhóm: `fruit` (apple, banana) và `vegetable` (carrot, broccoli). `Object.keys(grouped)` là `["fruit", "vegetable"]` và `grouped.fruit.length` là `2`. Có sẵn trong Chrome 117+, Node 21+, Firefox 119+.',
  },
  'js-core-057': {
    question:
      'Những phương thức Set nào được thêm vào ES2025 cho các phép toán tập hợp (set algebra)?',
    options: [
      '`Set.prototype.merge()`, `Set.prototype.filter()`, `Set.prototype.diff()`',
      '`Set.prototype.union()`, `Set.prototype.intersection()`, `Set.prototype.difference()`, `Set.prototype.symmetricDifference()`, `Set.prototype.isSubsetOf()`, `Set.prototype.isSupersetOf()`, `Set.prototype.isDisjointFrom()`',
      '`Set.prototype.add()`, `Set.prototype.remove()`, `Set.prototype.contains()`',
      '`Set.prototype.map()`, `Set.prototype.filter()`, `Set.prototype.reduce()`',
    ],
    explanation:
      'ES2025 thêm bộ đầy đủ các phương thức tập hợp: `union(other)` (A ∪ B), `intersection(other)` (A ∩ B), `difference(other)` (A − B), `symmetricDifference(other)` (A △ B), `isSubsetOf(other)`, `isSupersetOf(other)`, và `isDisjointFrom(other)`. Tất cả phương thức chấp nhận bất kỳ object nào có property `size` và phương thức `has()` (ví dụ: `Map`, `ReadonlySet`). Chúng trả về instance `Set` mới mà không thay đổi operand nào.',
  },
  'js-core-058': {
    question: 'Đoạn code này log ra gì?',
    options: [
      '[3, 4]  [1, 2]  [1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 6]  [3, 4]  [1, 2]',
      '[3, 4]  [1, 2, 5, 6]  [1, 2, 3, 4, 5, 6]',
      'TypeError: a.intersection is not a function',
    ],
    explanation:
      '`intersection` trả về các phần tử có trong cả hai tập: `{3, 4}`. `difference` (A − B) trả về các phần tử trong A nhưng không trong B: `{1, 2}`. `union` trả về tất cả phần tử từ cả hai: `{1, 2, 3, 4, 5, 6}`. Đây là các phương thức Set mới của ES2025, có sẵn trong tất cả engine hiện đại từ 2024.',
  },
  'js-core-059': {
    question:
      'Iterator Helpers (ES2025) là gì và chúng giải quyết vấn đề gì?',
    options: [
      'Các hàm helper cho vòng lặp `for...of` cải thiện hiệu suất',
      'Các phương thức lazy chainable tích hợp (`map`, `filter`, `take`, `drop`, `flatMap`, `reduce`, `toArray`, `forEach`, `some`, `every`, `find`) trên iterator prototype, cho phép đánh giá lười (lazy evaluation) mà không tạo mảng trung gian',
      'Các tiện ích wrapper chuyển đổi iterator thành generator',
      'Các phương thức được thêm vào `Array.prototype` hoạt động với cả mảng và iterator',
    ],
    explanation:
      'Iterator Helpers thêm các phương thức trực tiếp vào iterator prototype để bạn có thể chain lazy: `iter.filter(x => x > 2).map(x => x * 2).take(5).toArray()`. Khác với phương thức mảng, chúng là lazy — giá trị chỉ được tính khi consume. Điều này tránh tạo mảng trung gian cho mỗi bước, cải thiện hiệu suất cho chuỗi lớn hoặc vô hạn (như output của generator).',
  },
  'js-core-060': {
    question: 'Đoạn code này log ra gì? (Iterator Helpers — ES2025)',
    options: [
      '[4, 16, 36]',
      '[1, 4, 9]',
      '[2, 4, 6]',
      'RangeError: Maximum call stack exceeded',
    ],
    explanation:
      '`naturals()` yield 1, 2, 3, 4, 5, 6, … một cách lazy. `.filter(n % 2 === 0)` giữ số chẵn: 2, 4, 6, … `.map(n => n * n)` bình phương chúng: 4, 16, 36, … `.take(3)` dừng sau 3 giá trị. `.toArray()` thu thập chúng. Kết quả: `[4, 16, 36]`. Generator vô hạn an toàn vì `take` kết thúc iteration.',
  },
  'js-core-061': {
    question:
      'Trong biểu thức chính quy, flag `d` (thêm vào ES2022) cung cấp gì?',
    options: [
      'Bật chế độ dotAll để `.` khớp với ký tự xuống dòng',
      'Bật output debug ra console khi regex được kiểm tra',
      'Thêm property `indices` vào kết quả match, chứa vị trí bắt đầu và kết thúc của mỗi capture group',
      'Bật khớp decimal cho các mẫu số',
    ],
    explanation:
      'Flag `d` (hasIndices) khiến kết quả `exec()` và `match()` bao gồm property `.indices` — mảng các cặp `[start, end]` cho mỗi capture group. Điều này hữu ích cho editor, linter, và công cụ cần biết chính xác vị trí của các group khớp trong chuỗi nguồn, mà không cần tính offset thủ công.',
  },
  'js-core-062': {
    question: 'Đoạn code này log ra gì?',
    options: [
      '2026 03 07',
      'undefined undefined undefined',
      '["2026", "03", "07"]',
      'SyntaxError: Invalid regex',
    ],
    explanation:
      'Named capture group (`(?<name>...)`) được truy cập qua `match.groups.name`. Tính năng ES2018 này làm regex match tự mô tả và cho phép truy cập capture theo tên thay vì chỉ số số dễ sai. Cũng có thể destructuring: `const { year, month, day } = match.groups`.',
  },
  'js-core-063': {
    question:
      'Flag regex `s` (dotAll) làm cho ký tự meta `.` khớp với ký tự xuống dòng (`\\n`, `\\r`).',
    explanation:
      'Mặc định `.` khớp với mọi ký tự trừ xuống dòng. Flag `s` (dotAll), thêm vào ES2018, làm `.` khớp với TẤT CẢ ký tự bao gồm `\\n`, `\\r`, `\\u2028`, và `\\u2029`. Điều này tương đương với `[\\s\\S]` trong code cũ. Ví dụ: `/hello.world/s.test("hello\\nworld")` trả về `true`.',
  },
  'js-core-064': {
    question: 'Đoạn code này log ra gì?',
    options: [
      `['$100.00', '$50']`,
      `['100.00', '50']`,
      `['100.00', '200', '50']`,
      `null`,
    ],
    explanation:
      'Lookbehind assertion `(?<=\\$)` chỉ khớp tại vị trí có `$` đứng trước mà không consume ký tự `$`. Mẫu khớp một hoặc nhiều chữ số, tùy chọn theo sau bởi `.` và hai chữ số. Vì `$` không bị consume, các kết quả khớp là `"100.00"` và `"50"` — không bao gồm ký hiệu `$`. `€200` bị bỏ qua vì không có `$` đứng trước.',
  },
  'js-core-065': {
    question:
      '`WeakRef` trong JavaScript là gì và khi nào nên sử dụng?',
    options: [
      'Một tham chiếu tự động trở thành `null` sau khoảng timeout cố định',
      'Một wrapper giữ tham chiếu yếu đến object, cho phép nó được garbage collect trong khi vẫn cho bạn dereference bằng `.deref()` nếu nó vẫn tồn tại',
      'Một kiểu tham chiếu dùng riêng với `Map` và `Set` để lưu trữ hiệu quả bộ nhớ',
      'Một proxy tích hợp chặn truy cập property trên object được bọc',
    ],
    explanation:
      '`WeakRef` bọc object mà không ngăn garbage collection. Gọi `.deref()` để lấy object — trả về object nếu vẫn tồn tại, hoặc `undefined` nếu đã được thu gom. Các use case hẹp và nâng cao: cache, registry muốn entry tự động được dọn dẹp. Luôn kiểm tra xem `.deref()` có trả về giá trị hay không trước khi sử dụng. `WeakRef` không nên dùng cho quản lý bộ nhớ chung.',
  },
  'js-core-066': {
    question: '`FinalizationRegistry` cho phép bạn làm gì?',
    options: [
      'Ngăn object bị garbage collect cho đến khi được giải phóng rõ ràng',
      'Đăng ký callback được gọi khi object đã đăng ký bị garbage collect',
      'Quan sát tất cả phép gán property trên object',
      'Tạo finaliser chạy logic dọn dẹp trong destructor của object như C++',
    ],
    explanation:
      '`FinalizationRegistry` cho phép bạn đăng ký callback mà engine sẽ gọi (tại thời điểm không xác định) sau khi target object đã đăng ký bị garbage collect. Bạn truyền "held value" khi đăng ký — chỉ giá trị này được truyền cho callback (không phải object đã thu gom, vì nó không còn tồn tại). Use case bao gồm dọn dẹp tài nguyên native, cache, và debug. Thời điểm không xác định.',
  },
  'js-core-067': {
    question:
      '`SharedArrayBuffer` yêu cầu trang phải được phục vụ trong ngữ cảnh cross-origin isolated (với các HTTP header `COOP` và `COEP` cụ thể) để có thể sử dụng.',
    explanation:
      'Sau lỗ hổng Spectre năm 2018, trình duyệt hạn chế `SharedArrayBuffer` chỉ cho các trang có header `Cross-Origin-Opener-Policy: same-origin` và `Cross-Origin-Embedder-Policy: require-corp`. Các header này thiết lập cross-origin isolation, ngăn các cuộc tấn công cross-origin có thể khai thác bộ đếm thời gian độ phân giải cao được kích hoạt bởi `Atomics.wait`. Không có các header này, việc tạo `SharedArrayBuffer` sẽ ném `TypeError`.',
  },
  'js-core-068': {
    question: '`Atomics.wait()` làm gì trong JavaScript?',
    options: [
      'Tạm dừng hàm async hiện tại cho đến khi Promise resolve',
      'Block thread hiện tại cho đến khi giá trị tại vị trí cụ thể của `SharedArrayBuffer` thay đổi hoặc timeout hết hạn — chỉ sử dụng được trong worker, không phải main thread',
      'Trì hoãn thực thi bằng `requestAnimationFrame` đến frame tiếp theo',
      'Đợi tất cả microtask đang chờ hoàn thành trước khi tiếp tục',
    ],
    explanation:
      '`Atomics.wait(typedArray, index, value[, timeout])` block đồng bộ worker thread hiện tại nếu giá trị tại `typedArray[index]` bằng `value`. Nó trả về `"ok"`, `"not-equal"`, hoặc `"timed-out"`. Điều này cho phép các mẫu mutex/semaphore cho concurrent shared-memory giữa các worker. Nó bị cấm trên main thread để tránh đóng băng UI.',
  },
  'js-core-069': {
    question:
      '"Top-level await" là gì và nó yêu cầu môi trường nào?',
    options: [
      'Sử dụng `await` ngoài mọi hàm — yêu cầu bọc trong IIFE: `(async () => { await ... })()`',
      'Sử dụng `await` ở top level của module mà không cần wrapper `async` — chỉ hoạt động trong ES modules (`type="module"` hoặc `.mjs`)',
      'Một Promise đặc biệt resolve đồng bộ trong môi trường Node.js',
      'Tính năng riêng của Node.js block event loop cho đến khi tất cả giá trị được await resolve',
    ],
    explanation:
      'Top-level `await` (ES2022) cho phép biểu thức `await` ở top level của ES module, không cần wrapper `async`. Việc thực thi module bị tạm dừng cho đến khi Promise được await resolve, và bất kỳ module nào import nó cũng sẽ đợi. Nó chỉ hoạt động trong ES modules — CommonJS (`require`) không hỗ trợ. Use case: dynamic import, khởi tạo lazy, phát hiện tính năng.',
  },
  'js-core-070': {
    question: 'Đoạn code này log ra gì?',
    options: [
      '100 2 true',
      '100 2 false',
      '0 2 false',
      'SyntaxError',
    ],
    explanation:
      'Private instance field (`#balance`) và private static field (`#fee`) thực sự là private. `acc.balance` trả về `100` qua getter. `BankAccount.getFee()` trả về `2` qua static method. `"#balance" in acc` trả về `false` — toán tử `in` với string literal không phát hiện private field. Tuy nhiên, `#balance in acc` (không có dấu ngoặc kép) LÀ cú pháp hợp lệ để kiểm tra sự hiện diện của private field.',
  },
  'js-core-071': {
    question:
      'Đoạn code sử dụng `AbortController` này có bug. Bug là gì?',
    options: [
      '`AbortController` không thể dùng với `setTimeout`',
      'Timeout không bao giờ được clear nếu fetch thành công, có thể abort request không liên quan sau này nếu controller được tái sử dụng',
      '`signal` phải được truyền bên trong object option với key `abortSignal`, không phải `signal`',
      'Thiếu `async` ở hàm ngoài',
    ],
    explanation:
      'Nếu `fetch` hoàn thành thành công trước khi timeout kích hoạt, `timeoutId` vẫn chạy sau đó và gọi `controller.abort()`. Dù controller instance này không được tái sử dụng ở đây, timer lãng phí tài nguyên và có thể gây vấn đề trong các kịch bản phức tạp hơn. Cách sửa là clear timeout khi thành công: thêm `clearTimeout(timeoutId)` sau `await response.json()`, hoặc dùng khối `try/finally`: `try { ... } finally { clearTimeout(timeoutId) }`.',
  },
  'js-core-072': {
    question:
      'Temporal API (TC39 Stage 3) nhằm thay thế cái gì, và cải tiến thiết kế chính của nó là gì?',
    options: [
      'Nó thay thế `setTimeout`/`setInterval` bằng API lên lịch chính xác hơn',
      'Nó thay thế object `Date` tích hợp bằng API ngày/giờ bất biến, nhận biết timezone, nhận biết lịch, tránh các lỗi thiết kế mutable và UTC-centric nổi tiếng của `Date`',
      'Nó giới thiệu định dạng ngày mới cho JSON serialization',
      'Nó cung cấp các hàm timing animation CSS truy cập được từ JavaScript',
    ],
    explanation:
      'API `Date` bị chỉ trích rộng rãi: nó mutable, tháng đánh số từ 0, hỗ trợ timezone hạn chế, và phép toán dễ sai. `Temporal` giới thiệu các kiểu bất biến (`Temporal.PlainDate`, `Temporal.ZonedDateTime`, `Temporal.Instant`, v.v.), hỗ trợ đầy đủ IANA timezone, hỗ trợ hệ thống lịch (ISO 8601, Hebrew, Japanese, v.v.), và phép toán rõ ràng. Sử dụng `Temporal.Now.plainDateISO()` thay cho `new Date()`.',
  },
  'js-core-073': {
    question:
      'Key của `WeakMap` phải là object (hoặc registered symbol), không phải giá trị nguyên thủy như chuỗi hoặc số.',
    explanation:
      'Key của `WeakMap` phải là object hoặc registered symbol (thêm vào ES2023). Các primitive như chuỗi, số, và boolean không thể dùng làm key của `WeakMap` — cố gắng làm vậy sẽ ném `TypeError`. Ràng buộc này tồn tại vì `WeakMap` giữ tham chiếu yếu đến key; primitive không phải kiểu tham chiếu và không thể được tham chiếu yếu. Điều này cũng áp dụng cho thành viên của `WeakSet`.',
  },
  'js-core-074': {
    question:
      'Đoạn code sử dụng top-level await này có vấn đề. Vấn đề là gì và bạn sửa thế nào?',
    options: [
      '`fetch` không có sẵn trong Node.js',
      'Top-level `await` chỉ hoạt động trong ES modules. File này là CommonJS (không có `"type": "module"` trong package.json và dùng extension `.js`). Cách sửa: đổi tên thành `.mjs` hoặc thêm `"type": "module"` vào `package.json`, hoặc bọc trong async IIFE',
      'Bạn không thể `export default` kết quả của `await` trực tiếp',
      'Top-level await yêu cầu Node.js 20+',
    ],
    explanation:
      'Top-level `await` là tính năng của ES module. Trong Node.js, file `.js` được coi là CommonJS theo mặc định trừ khi `"type": "module"` được đặt trong `package.json` hoặc file dùng extension `.mjs`. Sử dụng top-level `await` trong ngữ cảnh CommonJS là `SyntaxError`. Cách sửa là dùng extension `.mjs` hoặc đặt `"type": "module"` trong `package.json`.',
  },
  'js-core-075': {
    question:
      'Đoạn code này log ra gì? (private class field với toán tử `in` — ES2022)',
    options: [
      'true true false',
      'true false rồi TypeError',
      'true false false',
      'SyntaxError: private fields cannot be used with `in`',
    ],
    explanation:
      'ES2022 giới thiệu ergonomic brand check: `#privateField in obj` trả về `true` nếu `obj` có private field đó (được tạo bởi cùng class). `new Point(1, 2)` có `#x` và `#y`, nên `isPoint` trả về `true`. Object thuần `{ x: 1, y: 2 }` không có private field, nên trả về `false`. Truyền `null` ném `TypeError` vì `in` yêu cầu vế phải phải là object.',
  },
}
