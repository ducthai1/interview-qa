import type { QuestionTranslationMap } from '../types'

export const typescriptVi: QuestionTranslationMap = {
  'ts-001': {
    question:
      'Sự khác biệt chính giữa `interface` và `type` trong TypeScript là gì?',
    options: [
      'Interface có thể extend interface khác; type không thể extend bất cứ thứ gì',
      'Type có thể biểu diễn primitive, union và tuple; interface thì không',
      'Interface hỗ trợ generics; type thì không',
      'Type bị xoá khi compile; interface thì không',
    ],
    explanation:
      '`type` alias có thể biểu diễn bất kỳ kiểu nào bao gồm primitive (`type ID = string`), union type (`type Result = Success | Error`) và tuple (`type Pair = [string, number]`). Interface chỉ giới hạn trong việc mô tả hình dạng đối tượng. Cả hai đều hỗ trợ generics và đều bị xoá khi compile.',
  },
  'ts-002': {
    question:
      'Trong TypeScript, các khai báo `interface` cùng tên trong cùng phạm vi sẽ tự động được gộp thành một interface duy nhất.',
    explanation:
      'Declaration merging là tính năng chỉ có ở `interface`. Nếu bạn khai báo `interface Foo {}` hai lần, TypeScript sẽ gộp chúng thành một interface với tất cả các thành viên được kết hợp. Điều này hữu ích khi mở rộng kiểu của thư viện bên thứ ba. `type` alias không hỗ trợ tính năng này - khai báo lại type alias sẽ gây lỗi compile.',
  },
  'ts-003': {
    question: 'TypeScript suy luận kiểu của `result` là gì?',
    explanation:
      'TypeScript suy luận mảng literal là union của các kiểu phần tử. Vì `dog` là `Dog` và `cat` là `Cat`, nên `result` được suy luận là `(Dog | Cat)[]`. Lưu ý `Dog` extend `Animal` qua `interface extends` trong khi `Cat` dùng intersection type - cả hai cách đều tạo ra kiểu tương đương về mặt cấu trúc.',
  },
  'ts-004': {
    question:
      'Phát biểu nào về `interface` và `type` trong TypeScript là chính xác?',
    options: [
      'Chỉ `type` mới có thể dùng với `implements` trong class',
      'Chỉ `interface` mới có thể mô tả callable signature',
      'Cả `interface` và `type` đều hỗ trợ declaration merging',
      '`interface` hỗ trợ `extends` với nhiều kiểu; `type` dùng `&` cho intersection',
    ],
    explanation:
      '`interface` dùng `extends` (ví dụ: `interface A extends B, C {}`), trong khi `type` dùng intersection (`type A = B & C`). Cả hai đều có thể mô tả callable signature. Chỉ `interface` hỗ trợ declaration merging. Cả `interface` và `type` đều có thể dùng với `implements`.',
  },
  'ts-005': {
    question: 'Đoạn mã TypeScript sau cho kết quả gì?',
    explanation:
      'TypeScript suy luận generic type argument từ nơi gọi hàm. `identity(42)` suy luận `T = number`, nên `a` là `number`. `identity("hello")` suy luận `T = string`, nên `b` là `string`. Tại runtime các kiểu đã bị xoá, nhưng `typeof` phản ánh kiểu runtime của JavaScript.',
  },
  'ts-006': {
    question:
      'Generic constraint `<T extends { length: number }>` đảm bảo điều gì?',
    options: [
      'T phải là kiểu mảng',
      'T phải là string hoặc mảng',
      'T phải có thuộc tính `length` kiểu number',
      'T phải extend class `Array` có sẵn',
    ],
    explanation:
      'Constraint `T extends { length: number }` sử dụng structural typing: bất kỳ kiểu nào có thuộc tính `length: number` đều thoả mãn. Điều này bao gồm string, mảng, typed array, và thậm chí cả đối tượng tuỳ chỉnh có thuộc tính `length` - không chỉ mảng.',
  },
  'ts-007': {
    question:
      'Hàm `getProperty` trả về kiểu TypeScript gì trong lời gọi bên dưới?',
    explanation:
      '`T` được suy luận là `{ id: number; name: string; active: boolean }` và `K` là `"active"`. Kiểu trả về `T[K]` là lookup type, phân giải thành `boolean` - kiểu của `user["active"]`. Pattern này cung cấp truy cập thuộc tính an toàn về kiểu.',
  },
  'ts-008': {
    question:
      'Generic class sau đây có lỗi TypeScript. Hãy xác định và sửa lỗi.',
    answer:
      'Kiểu trả về của `pop()` phải là `T | undefined` vì `Array.prototype.pop()` trả về `T | undefined` khi mảng có thể rỗng. Sửa: `pop(): T | undefined { return this.items.pop(); }`',
    explanation:
      '`Array<T>.pop()` trả về `T | undefined` - nó trả về `undefined` khi mảng rỗng. Khai báo kiểu trả về là `T` mà không có `undefined` sẽ gây lỗi kiểu khi bật `strictNullChecks` vì giá trị trả về thực tế từ `.pop()` là `T | undefined`, không thể gán cho `T`.',
  },
  'ts-009': {
    question:
      '`Partial<User>` tạo ra kiểu gì nếu `User` là `{ id: number; name: string; email: string }`?',
    options: [
      '{ id?: number; name?: string; email?: string }',
      '{ id: number; name?: string; email?: string }',
      '{ id?: number | null; name?: string | null; email?: string | null }',
      'Nó xoá trường `id` và biến phần còn lại thành optional',
    ],
    explanation:
      '`Partial<T>` ánh xạ tất cả thuộc tính của `T` thành optional (thêm modifier `?`). Mọi thuộc tính đều trở thành optional trong khi giữ nguyên kiểu gốc. Nó tương đương với `{ [K in keyof T]?: T[K] }`.',
  },
  'ts-010': {
    question:
      'Cho `type User = { id: number; name: string; role: string; token: string }`, `Omit<User, "token" | "role">` là gì?',
    options: [
      '{ name: string; role: string }',
      '{ id: number; name: string }',
      '{ id: number; name: string; role: string }',
      '{ token: string; role: string }',
    ],
    explanation:
      '`Omit<T, K>` tạo kiểu bằng cách loại bỏ các key trong `K` khỏi `T`. Loại bỏ `"token"` và `"role"` khỏi `User` còn lại `{ id: number; name: string }`. Nó tương đương với `Pick<T, Exclude<keyof T, K>>`.',
  },
  'ts-011': {
    question: '`Result` phân giải thành kiểu gì?',
    explanation:
      '`Pick<T, K>` tạo kiểu bằng cách chỉ chọn các key được chỉ định từ `T`. `Pick<ApiResponse, \'data\' | \'status\'>` tạo ra `{ data: string; status: number }`, loại bỏ `headers` và thuộc tính optional `error`.',
  },
  'ts-012': {
    question: '`Record<string, number>` biểu diễn điều gì?',
    options: [
      'Mảng các number được đánh chỉ mục bằng string',
      'Kiểu đối tượng trong đó tất cả key là `string` và tất cả giá trị là `number`',
      'Một Map từ string sang number',
      'Kiểu có thể là string hoặc number',
    ],
    explanation:
      '`Record<K, V>` tạo kiểu đối tượng với các key kiểu `K` và giá trị kiểu `V`. `Record<string, number>` tương đương với `{ [key: string]: number }`. Nó thường được dùng cho dictionary và bảng tra cứu.',
  },
  'ts-013': {
    question: '`Extracted` phân giải thành kiểu gì?',
    explanation:
      '`Extract<T, U>` chỉ trả về các thành viên của `T` có thể gán được cho `U`. Từ `Status`, các giá trị `\'active\'` và `\'inactive\'` tồn tại trong cả `T` và `U`. `\'archived\'` có trong `U` nhưng không có trong `T` nên bị loại. `\'pending\'` và `\'deleted\'` có trong `T` nhưng không có trong `U` nên cũng bị loại.',
  },
  'ts-014': {
    question: 'Kiểu của `Params` và `Return` bên dưới là gì?',
    explanation:
      '`Parameters<T>` trích xuất các kiểu tham số của hàm dưới dạng labeled tuple. `ReturnType<T>` trích xuất kiểu trả về của hàm. Các utility type này hữu ích khi bọc hoặc trang trí các hàm có sẵn mà không cần sao chép lại signature.',
  },
  'ts-015': {
    question: 'Sự khác biệt giữa `Required<T>` và `NonNullable<T>` là gì?',
    options: [
      '`Required<T>` xoá tất cả modifier `?`; `NonNullable<T>` xoá `null` và `undefined` khỏi union',
      '`Required<T>` xoá `null`; `NonNullable<T>` xoá `undefined`',
      'Chúng là alias của cùng một thao tác',
      '`Required<T>` hoạt động trên kiểu đối tượng; `NonNullable<T>` chỉ hoạt động trên kiểu primitive',
    ],
    explanation:
      '`Required<T>` ánh xạ tất cả thuộc tính thành bắt buộc bằng cách xoá modifier `?`: `{ [K in keyof T]-?: T[K] }`. `NonNullable<T>` xoá `null` và `undefined` khỏi type union: `NonNullable<string | null | undefined>` thành `string`. Chúng hoạt động ở cấp độ khác nhau - một cái trên tính optional của thuộc tính đối tượng, cái kia trên thành viên của type union.',
  },
  'ts-016': {
    question: 'Console in ra gì?',
    explanation:
      '`typeof value === "string"` thu hẹp kiểu thành `string` bên trong khối `if`, cho phép dùng `.length`. Trong nhánh `else`, TypeScript biết `value` là `number`, cho phép dùng `.toFixed(2)`. `"hello".length` là `5` và `(3.14159).toFixed(2)` là `"3.14"`.',
  },
  'ts-017': {
    question: '"Discriminated union" trong TypeScript là gì?',
    options: [
      'Union type chỉ có thể chứa hai thành viên',
      'Union của các kiểu đối tượng cùng chia sẻ một thuộc tính literal dùng để thu hẹp kiểu',
      'Union type có `never` là một trong các thành viên',
      'Union type trong đó tất cả thành viên được phân biệt với `null`',
    ],
    explanation:
      'Discriminated union là union của các kiểu đối tượng chia sẻ chung thuộc tính "discriminant" với các literal type riêng biệt (ví dụ: `kind: "circle"` so với `kind: "square"`). TypeScript sử dụng discriminant này để thu hẹp kiểu trong luồng điều khiển, cho phép kiểm tra toàn diện.',
  },
  'ts-018': {
    question:
      'TypeScript suy luận kiểu của `shape` là gì trong mỗi nhánh?',
    explanation:
      'Phân tích luồng điều khiển của TypeScript sử dụng discriminant literal `shape.kind` để thu hẹp union. Trong case `\'circle\'`, `shape` thu hẹp thành `{ kind: \'circle\'; radius: number }`, cho phép truy cập `.radius`. Trong case `\'rect\'` nó thu hẹp thành variant rect. `switch` cũng cho phép kiểm tra toàn diện.',
  },
  'ts-019': {
    question:
      'User-defined type guard là gì và khi nào nên sử dụng?',
    options: [
      'Một generic constraint giới hạn các kiểu mà hàm chấp nhận',
      'Hàm có kiểu trả về `value is T` cho TypeScript biết cách thu hẹp kiểu',
      'Conditional type thu hẹp kiểu dựa trên kiểm tra `extends`',
      'Assertion function ném lỗi nếu giá trị không phải kiểu mong đợi',
    ],
    explanation:
      'User-defined type guard là hàm có kiểu trả về là type predicate: `function isString(val: unknown): val is string { return typeof val === "string"; }`. Khi hàm này trả về `true`, TypeScript thu hẹp kiểu của `val` thành `string` trong phạm vi gọi. Sử dụng khi các cách thu hẹp có sẵn (`typeof`, `instanceof`, `in`) không đủ cho kiểm tra kiểu.',
  },
  'ts-020': {
    question: 'Type guard sau đây có một lỗi tinh vi. Đó là gì?',
    answer:
      'Guard kiểm tra `!== undefined` nhưng `(animal as Cat).meow` trên Dog sẽ trả về `undefined` tại runtime - tuy nhiên phép ép kiểu im lặng bỏ qua TypeScript. Lỗi thực sự: truy cập `.meow` qua ép kiểu `as Cat` trên đối tượng Dog trả về `undefined` đúng cách, nên logic hoạt động - NHƯNG nếu Dog vô tình có thuộc tính `.meow` thì guard sẽ sai. Cách kiểm tra an toàn hơn là `typeof (animal as Cat).meow === \'function\'`.',
    explanation:
      'Type assertion `(animal as Cat)` bỏ qua kiểm tra kiểu của TypeScript, hoàn toàn dựa vào giá trị runtime. So sánh `!== undefined` chấp nhận được vì truy cập method trên thuộc tính không tồn tại trả về `undefined`. Tuy nhiên, cách kiểm tra đúng chuẩn và đáng tin cậy hơn là `typeof (animal as Cat).meow === \'function\'` hoặc dùng toán tử `in`: `return \'meow\' in animal`.',
  },
  'ts-021': {
    question:
      '`IsString` phân giải thành gì cho mỗi type argument?',
    explanation:
      'Conditional type phân phối qua union type theo mặc định. Với `D`, TypeScript phân phối `IsString` qua từng thành viên union: `IsString<string>` thành `"yes"`, `IsString<number>` thành `"no"`, kết quả là `"yes" | "no"`. Hành vi phân phối này là đặc điểm chính của conditional type khi kiểu được kiểm tra là naked type parameter.',
  },
  'ts-022': {
    question: '`Readonly` tạo ra kiểu gì cho `Config`?',
    explanation:
      'Đây là mapped type dùng `keyof` để duyệt qua tất cả thuộc tính của `Config` và thêm modifier `readonly`. Điều này tương đương với `Readonly<Config>` có sẵn. Mapped type có thể thêm hoặc xoá modifier (`readonly`, `?`) bằng tiền tố `+` (mặc định) hoặc `-`.',
  },
  'ts-023': {
    question: '`EventMap` phân giải thành gì?',
    explanation:
      'Đây sử dụng mapped type với key remapping qua `as`. Template literal type `` `on${Capitalize<K>}` `` biến đổi mỗi tên event: `\'click\'` thành `\'onClick\'`, `\'focus\'` thành `\'onFocus\'`, `\'blur\'` thành `\'onBlur\'`. `Capitalize` là intrinsic string manipulation type có sẵn. Pattern này được dùng bên trong các kiểu event handler của React.',
  },
  'ts-024': {
    question: '`infer` làm gì trong conditional type?',
    options: [
      'Nó suy luận kiểu của biến từ giá trị tại thời điểm compile',
      'Nó khai báo biến kiểu để được bắt trong mệnh đề `extends` của conditional type',
      'Nó buộc TypeScript mở rộng kiểu hẹp thành kiểu cơ sở',
      'Nó xoá `null` và `undefined` khỏi kiểu được suy luận',
    ],
    explanation:
      '`infer` giới thiệu biến kiểu trong mệnh đề `extends` của conditional type mà TypeScript sẽ "suy luận" (bắt lấy) khi điều kiện khớp. Ví dụ: `type UnpackPromise<T> = T extends Promise<infer U> ? U : T`. Ở đây `U` bắt lấy kiểu mà Promise bọc. Đây là cách các utility type có sẵn như `ReturnType`, `Parameters` được triển khai.',
  },
  'ts-025': {
    question: '`UnwrapPromise<T>` trả về gì cho mỗi kiểu bên dưới?',
    explanation:
      'Với `A`, `T` là `Promise<string>`, khớp với `Promise<infer U>` với `U = string`, nên kết quả là `string`. Với `B`, `U` được suy luận là `number[]`. Với `C`, `boolean` không extend `Promise<infer U>`, nên nhánh false `T` được trả về, giữ nguyên `boolean`.',
  },
  'ts-026': {
    question:
      'Module augmentation được dùng để làm gì trong TypeScript?',
    options: [
      'Chia module lớn thành nhiều file nhỏ hơn',
      'Thêm export mới vào module ngoài hiện có mà không sửa mã nguồn gốc',
      'Tạo barrel export từ nhiều module',
      'Ghi đè kiểu từ module bằng phiên bản mới hơn',
    ],
    explanation:
      'Module augmentation cho phép bạn thêm khai báo vào module hiện có bằng cú pháp `declare module \'module-name\' {}` trong file `.d.ts` hoặc `.ts` của bạn. Trường hợp sử dụng phổ biến: thêm thuộc tính tuỳ chỉnh vào `Express.Request`, mở rộng kiểu `process.env`, thêm method vào class của thư viện bên thứ ba.',
  },
  'ts-027': {
    question:
      'Làm thế nào để thêm thuộc tính `currentUser` vào `Express.Request` bằng module augmentation trong TypeScript?',
    options: [
      'Chỉnh sửa trực tiếp `node_modules/@types/express/index.d.ts`',
      'Tạo file `custom.d.ts` với `declare module \'express\' { interface Request { currentUser?: User } }`',
      'Tạo class extend `express.Request` và thêm thuộc tính',
      'Dùng `Partial<Request>` và spread vào interface mới',
    ],
    explanation:
      'Module augmentation qua `declare module \'express\'` mở lại namespace của module Express và gộp các khai báo mới. Vì Express dùng `interface Request` và interface hỗ trợ declaration merging, bạn có thể thêm `currentUser?: User` mà không cần chạm vào node_modules. Đây là cách tiếp cận TypeScript chuẩn để mở rộng kiểu thư viện.',
  },
  'ts-028': {
    question:
      'Trong TypeScript hiện đại, `enum` hay string literal union type thường được ưu tiên hơn?',
    options: [
      '`enum` luôn được ưu tiên nhờ biểu diễn runtime vượt trội',
      'String literal union type thường được ưu tiên hơn vì chúng bị xoá khi compile và tránh overhead runtime',
      '`const enum` luôn được ưu tiên hơn cả hai',
      'Không có sự khác biệt thực tế giữa hai cách',
    ],
    explanation:
      'String literal union (`type Direction = "north" | "south" | "east" | "west"`) chỉ tồn tại lúc compile - không có overhead runtime. `enum` thông thường tạo ra mã JavaScript (một object). `const enum` được inline nhưng có vấn đề với `isolatedModules` (dùng bởi Babel/esbuild/Vite). Trong hầu hết trường hợp, string literal union hoặc object `as const` là lựa chọn TypeScript hiện đại chuẩn.',
  },
  'ts-029': {
    question: 'Kết quả JavaScript của TypeScript enum này là gì?',
    explanation:
      'String enum được compile thành object: `var Direction = { Up: \'UP\', Down: \'DOWN\', ... }`. Khác với numeric enum, string enum KHÔNG tạo reverse mapping. `Direction.Up` trả về `\'UP\'` và `Direction[\'Down\']` trả về `\'DOWN\'`. String enum là variant enum an toàn nhất vì giá trị của chúng dễ đọc trong log/serialization.',
  },
  'ts-030': {
    question:
      'Các thành viên `const enum` luôn được inline tại nơi sử dụng và do đó không tạo ra runtime object trong JavaScript đã compile.',
    explanation:
      '`const enum` hướng dẫn trình biên dịch TypeScript inline trực tiếp các giá trị enum, không tạo JavaScript object. Tuy nhiên điều này chỉ hoạt động khi TypeScript compile file trực tiếp. Với `isolatedModules: true` (yêu cầu bởi Vite, esbuild, Babel), `const enum` trong file `.d.ts` không thể inline và sẽ gây lỗi - khiến chúng có vấn đề trong toolchain hiện đại.',
  },
  'ts-031': {
    question:
      'Sự khác biệt chính giữa `unknown` và `any` là gì?',
    options: [
      '`unknown` là subtype của `any`; `any` là supertype của tất cả các kiểu',
      'Bạn có thể thực hiện bất kỳ thao tác nào trên `unknown` mà không cần kiểm tra kiểu; `any` yêu cầu thu hẹp trước',
      '`unknown` yêu cầu thu hẹp kiểu trước khi sử dụng; `any` bỏ qua mọi kiểm tra kiểu',
      '`unknown` chỉ có thể chứa giá trị primitive; `any` có thể chứa bất kỳ giá trị nào kể cả object',
    ],
    explanation:
      '`unknown` là đối tác an toàn về kiểu của `any`. Giá trị kiểu `unknown` không thể dùng trong các thao tác mà không thu hẹp kiểu trước qua `typeof`, `instanceof` hoặc type guard. `any` hoàn toàn bỏ qua kiểm tra kiểu - bạn có thể gọi method, truy cập thuộc tính và gán nó ở bất đâu. `unknown` nên được ưu tiên hơn `any` khi kiểu thực sự chưa biết.',
  },
  'ts-032': {
    question:
      'Trong trường hợp nào TypeScript gán kiểu `never` cho biến?',
    options: [
      'Khi biến được khai báo nhưng không bao giờ sử dụng',
      'Khi hàm không có annotation kiểu trả về rõ ràng',
      'Khi tất cả thành viên union đã bị loại bỏ qua thu hẹp kiểu, để lại kiểu không thể tồn tại',
      'Khi biến được gán `null` trong strict mode',
    ],
    explanation:
      '`never` biểu diễn bottom type - kiểu không có giá trị nào. TypeScript gán `never` khi tất cả thành viên union đã bị loại bỏ (ví dụ: trong kiểm tra toàn diện `switch` sau tất cả các case), khi hàm không bao giờ trả về (ném lỗi hoặc vòng lặp vô hạn), hoặc trong các kiểu overload/filter. `never` có thể gán cho mọi kiểu nhưng không kiểu nào (trừ `never`) có thể gán cho nó.',
  },
  'ts-033': {
    question: 'Đoạn mã này có compile được không? Nếu không, tại sao?',
    answer:
      'Không - Lỗi TypeScript: Object is of type \'unknown\'. Bạn phải thu hẹp kiểu `val` trước.',
    explanation:
      'Khác với `any`, `unknown` không cho phép truy cập thuộc tính hoặc gọi method mà không thu hẹp kiểu. Cách sửa là: `if (typeof val === \'string\') { return val.toUpperCase(); }`. Đây là thiết kế có chủ đích - `unknown` buộc bạn xử lý sự không chắc chắn về kiểu một cách rõ ràng, an toàn hơn `any`.',
  },
  'ts-034': {
    question:
      '`strictNullChecks: true` kích hoạt điều gì trong TypeScript?',
    options: [
      'Nó ngăn biến được gán `null` hoặc `undefined` ở bất kỳ đâu trong codebase',
      'Nó biến `null` và `undefined` thành các kiểu riêng biệt không thể gán cho kiểu khác nếu không có union rõ ràng',
      'Nó ném lỗi runtime khi xảy ra null dereference',
      'Nó tự động chuyển đổi tất cả giá trị `null` thành `undefined`',
    ],
    explanation:
      'Với `strictNullChecks: true`, `null` và `undefined` là các kiểu riêng biệt và không tự động gán được cho `string`, `number`, v.v. Bạn phải khai báo rõ ràng `string | null` để cho phép null. Nếu không bật cờ này (mặc định trong config TS cũ), `null` và `undefined` có thể gán cho mọi kiểu, che giấu các lỗi null-dereference tiềm ẩn.',
  },
  'ts-035': {
    question:
      'Bật `noImplicitAny: true` trong tsconfig khiến TypeScript báo lỗi khi kiểu của tham số hàm không thể suy luận được và không có annotation nào được cung cấp.',
    explanation:
      'Với `noImplicitAny: true`, TypeScript sẽ báo lỗi trên bất kỳ biến hoặc tham số nào mà nếu không sẽ ngầm có kiểu `any`. Ví dụ, `function log(msg) {}` báo lỗi vì `msg` có kiểu `any` ngầm định. Điều này buộc phải có annotation kiểu rõ ràng và được bao gồm trong tuỳ chọn bao trùm `strict: true`. Nó giúp phát hiện các kiểu `any` vô tình làm suy yếu tính an toàn kiểu.',
  },
  'ts-036': {
    question:
      'Tuỳ chọn tsconfig nào, khi được bật, khiến TypeScript báo lỗi với biến local và tham số không sử dụng?',
    options: [
      '`noUnusedLocals` và `noUnusedParameters`',
      '`strictBindCallApply`',
      '`noImplicitReturns`',
      '`noFallthroughCasesInSwitch`',
    ],
    explanation:
      '`noUnusedLocals: true` báo lỗi cho biến được khai báo nhưng không bao giờ đọc. `noUnusedParameters: true` làm tương tự cho tham số hàm. Chúng tách biệt khỏi `strict: true` và phải được bật riêng. Chúng giúp giữ code sạch và phát hiện lỗi tiềm ẩn khi biến lẽ ra phải được dùng nhưng vô tình bị bỏ sót.',
  },
  'ts-037': {
    question:
      'Cách chính xác để khai báo kiểu cho React functional component nhận props `name: string` và `age: number` là gì?',
    options: [
      '`const MyComp: React.FC = ({ name, age }) => ...`',
      '`const MyComp: React.FC<{ name: string; age: number }> = ({ name, age }) => ...`',
      '`const MyComp = ({ name: string, age: number }) => ...`',
      '`function MyComp(props: React.Props<{ name: string; age: number }>) { ... }`',
    ],
    explanation:
      '`React.FC<Props>` (hoặc `React.FunctionComponent<Props>`) là kiểu cho functional component. Tham số generic chỉ định kiểu props. Trong React hiện đại với TypeScript, nhiều team ưu tiên cách rõ ràng: `function MyComp({ name, age }: { name: string; age: number }) {}` vì `React.FC` ngầm bao gồm `children` (trước thay đổi React 18) và có một số edge case với generics.',
  },
  'ts-038': {
    question:
      'Cách chính xác để khai báo kiểu cho handler `onChange` của phần tử HTML `<input>` trong React là gì?',
    options: [
      '`(e: Event) => void`',
      '`(e: InputEvent) => void`',
      '`(e: React.ChangeEvent<HTMLInputElement>) => void`',
      '`(e: React.SyntheticEvent<HTMLInputElement>) => void`',
    ],
    explanation:
      'React bọc các event DOM gốc trong `SyntheticEvent`. Với `onChange` trên `<input>`, kiểu chính xác là `React.ChangeEvent<HTMLInputElement>`. Tham số generic chỉ định kiểu phần tử DOM, cho phép truy cập `e.target.value` dưới dạng `string`. Các kiểu event phổ biến khác: `React.MouseEvent<HTMLButtonElement>`, `React.FormEvent<HTMLFormElement>`.',
  },
  'ts-039': {
    question:
      'Generic React component này có compile được không? Kiểu của `items` trong `StringList` là gì?',
    answer:
      'Có, nó compile được. `items` có kiểu `string[]` vì `T` được cung cấp rõ ràng là `string`.',
    explanation:
      'Generic component trong TSX được hỗ trợ. Khi dùng file `.tsx`, bạn có thể cần viết `<T,>` (dấu phẩy cuối) hoặc `<T extends unknown>` để tránh trình phân tích JSX hiểu nhầm `<T>` là thẻ JSX. Với type argument rõ ràng `<List<string> ...>`, `T` là `string`, nên `items: string[]` và `renderItem: (item: string) => ReactNode`.',
  },
  'ts-040': {
    question:
      'React component sau có lỗi TypeScript. Hãy xác định và sửa lỗi.',
    answer:
      '`useRef(null)` suy luận thành `RefObject<null>`. Sửa: `useRef<HTMLInputElement>(null)` - điều này cho `RefObject<HTMLInputElement>`, khiến `inputRef.current` có kiểu `HTMLInputElement | null`. Sau đó bảo vệ lời gọi: `inputRef.current?.focus()`.',
    explanation:
      '`useRef(null)` không có generic argument tạo `MutableRefObject<null>` với `.current` có kiểu `null`, nên `.focus()` không truy cập được. Cung cấp generic `useRef<HTMLInputElement>(null)` cho TypeScript biết ref này sẽ chứa `HTMLInputElement`. `.current` khi đó là `HTMLInputElement | null`, yêu cầu optional chain hoặc kiểm tra null trước khi gọi `.focus()`.',
  },
  'ts-041': {
    question:
      'Cách chính xác để khai báo kiểu prop `children` rõ ràng trong React 18+ với TypeScript là gì?',
    options: [
      '`children: React.ReactChild`',
      '`children: JSX.Element`',
      '`children: React.ReactNode`',
      '`children: React.FC`',
    ],
    explanation:
      '`React.ReactNode` là kiểu rộng nhất cho children trong React - nó bao gồm `ReactElement`, `string`, `number`, `boolean`, `null`, `undefined` và mảng/fragment của chúng. `JSX.Element` quá hẹp (chỉ element, không phải string/number). `ReactChild` đã bị deprecated trong React 18. Trong React 18, `React.FC` không còn ngầm bao gồm `children`, nên phải khai báo rõ ràng là `React.ReactNode`.',
  },
  'ts-042': {
    question:
      'Kiểu suy luận của `value` từ `useLocalStorage` là gì?',
    explanation:
      '`T` được suy luận là `number` từ `initialValue = 0`. `useState<number>` trả về `[number, Dispatch<SetStateAction<number>>]`, nhưng `setStoredValue` bọc nó với kiểu `(newValue: T) => void`. Assertion `as const` trả về tuple `readonly` `[T, (newValue: T) => void]`, nên destructuring khai báo đúng kiểu `count` là `number` và `setCount` là `(newValue: number) => void`.',
  },
  'ts-043': {
    question:
      'Bạn có kiểu đối tượng lồng sâu và muốn utility type biến TẤT CẢ thuộc tính lồng thành optional (deep partial). Cách triển khai đúng là gì?',
    options: [
      '`type DeepPartial<T> = Partial<T>`',
      '`type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }`',
      '`type DeepPartial<T> = { [K in keyof T]-?: DeepPartial<T[K]> }`',
      '`type DeepPartial<T> = T extends object ? Partial<T> : T`',
    ],
    explanation:
      'Cách tiếp cận đệ quy ánh xạ mỗi key thành optional và, nếu kiểu giá trị là `object`, đệ quy vào với `DeepPartial`. Điều này xử lý đối tượng lồng ở độ sâu bất kỳ. Lưu ý: dùng `extends object` là kiểm tra đơn giản hoá - trong production, bạn có thể muốn loại trừ `Date`, `Array` và các kiểu built-in khác khỏi đệ quy. Modifier `-?` trong tuỳ chọn C sẽ biến thuộc tính thành bắt buộc (xoá tính optional), điều này sai.',
  },
  'ts-044': {
    question:
      'Lợi ích chính của toán tử `satisfies` (TypeScript 4.9) so với type annotation là gì?',
    options: [
      'Nó tạo ra JavaScript nhanh hơn so với type annotation',
      'Nó xác thực rằng giá trị khớp với kiểu trong khi giữ nguyên kiểu suy luận cụ thể nhất, thay vì mở rộng thành kiểu annotation',
      'Nó là cách duy nhất để annotate object literal trong TypeScript',
      'Nó cho phép giá trị thoả mãn nhiều kiểu đồng thời tại runtime',
    ],
    explanation:
      'Với type annotation (`const palette: Record<string, string> = {...}`), kiểu bị mở rộng thành `Record<string, string>`, mất đi các key cụ thể. Với `satisfies`, biểu thức được kiểm tra với kiểu nhưng kiểu suy luận được giữ nguyên. Ví dụ: `const palette = { red: "#ff0000" } satisfies Record<string, string>` - TypeScript biết `palette.red` tồn tại và là `string`, trong khi vẫn bắt lỗi đánh máy trong key hoặc kiểu giá trị sai.',
  },
  'ts-045': {
    question:
      'Kiểu suy luận của `config.port` trong mỗi trường hợp là gì?',
    explanation:
      'Với annotation `configA: Config`, TypeScript mở rộng `port` thành kiểu đã khai báo `number | string`. Với `satisfies Config`, TypeScript xác thực object với `Config` nhưng giữ nguyên kiểu suy luận chính xác hơn, nên `configB.port` là `number` (vì `3000` là number). Đây là sự khác biệt then chốt: `satisfies` cho bạn tính an toàn kiểu mà không mở rộng kiểu.',
  },
  'ts-046': {
    question:
      '`const` trong vị trí generic type parameter làm gì trong TypeScript 5.0?',
    options: [
      'Nó ngăn generic function được gọi với argument có thể thay đổi',
      'Nó suy luận type argument dưới dạng literal/const type thay vì mở rộng, tương tự dùng `as const` tại nơi gọi',
      'Nó đánh dấu generic parameter là read-only trong toàn bộ thân hàm',
      'Nó khiến generic chỉ được đánh giá lúc compile',
    ],
    explanation:
      'TypeScript 5.0 giới thiệu `const` type parameter: `function identity<const T>(value: T): T`. Không có `const`, `identity(["a", "b"])` suy luận `T = string[]`. Với `const`, nó suy luận `T = readonly ["a", "b"]`, giữ nguyên cấu trúc tuple và literal type. Điều này giúp người gọi không cần viết `identity(["a", "b"] as const)`.',
  },
  'ts-047': {
    question: 'Kiểu suy luận của `a` và `b` là gì?',
    explanation:
      'Không có `const`, TypeScript mở rộng mảng literal thành `string[]`. Với `const T`, nó giữ nguyên cấu trúc tuple và string literal type, suy luận `readonly ["x", "y", "z"]`. Điều này tương đương với người gọi viết `wrapConst(["x", "y", "z"] as const)` nhưng bỏ đi gánh nặng đó.',
  },
  'ts-048': {
    question:
      'Từ khoá `using` (Explicit Resource Management, TypeScript 5.2) làm gì?',
    options: [
      'Nó import module và ngay lập tức huỷ nó sau khi sử dụng',
      'Nó khai báo biến có method `[Symbol.dispose]()` được tự động gọi khi thoát khỏi phạm vi block, cho phép dọn dẹp tài nguyên xác định',
      'Nó là alias cho `const` ngăn gán lại và thay đổi thuộc tính',
      'Nó tạo WeakRef tới giá trị để có thể thu gom rác sớm hơn',
    ],
    explanation:
      '`using` (và `await using` cho huỷ bất đồng bộ) là một phần của đề xuất TC39 Explicit Resource Management (Stage 3). Biến `using` phải triển khai `[Symbol.dispose]()` (hoặc `[Symbol.asyncDispose]()` cho `await using`). Khi thoát khỏi block - bình thường hoặc qua exception - method dispose được gọi tự động. Pattern này thay thế dọn dẹp thủ công `try/finally` cho kết nối database, file handle, lock, v.v.',
  },
  'ts-049': {
    question: 'Điều gì xảy ra khi đoạn mã này chạy và thoát khỏi block?',
    options: [
      'result of: SELECT 1  (dispose không bao giờ được gọi)',
      'result of: SELECT 1\nConnection closed',
      'Connection closed\nresult of: SELECT 1',
      'TypeError: Symbol.dispose is not defined',
    ],
    explanation:
      'Với `using`, `[Symbol.dispose]()` được tự động gọi khi thoát khỏi block bao quanh. `query` chạy trước (in kết quả), sau đó khi `doWork` return, output đã compile của TypeScript gọi `conn[Symbol.dispose]()`, in `"Connection closed"`. Thứ tự là: thân hàm chạy trước, sau đó dispose khi thoát.',
  },
  'ts-050': {
    question:
      'Utility type `NoInfer<T>` (TypeScript 5.4) làm gì?',
    options: [
      'Nó ngăn type parameter được suy luận từ vị trí argument cụ thể, buộc người gọi cung cấp rõ ràng',
      'Nó đánh dấu kiểu là non-nullable mà không dùng `NonNullable`',
      'Nó tắt mở rộng kiểu cho literal type ở vị trí được annotate',
      'Nó là alias cho `never` dùng để báo hiệu các nhánh code không thể xảy ra',
    ],
    explanation:
      '`NoInfer<T>` bọc kiểu để loại trừ vị trí sử dụng đó khỏi việc đóng góp vào suy luận generic. Ví dụ: `function createState<T>(initial: T, fallback: NoInfer<T>): T`. Không có `NoInfer`, TypeScript có thể suy luận `T = string | "active"` từ cả hai argument. Với `NoInfer` trên `fallback`, chỉ `initial` điều khiển suy luận - `fallback` sau đó được kiểm tra với `T` đã suy luận, tăng cường tính an toàn kiểu.',
  },
  'ts-051': {
    question:
      'Variadic tuple type trong TypeScript là gì và chúng giải quyết vấn đề gì?',
    options: [
      'Tuple tự động thay đổi kích thước dựa trên số lượng argument truyền vào tại runtime',
      'Kiểu tuple có thể spread các kiểu tuple khác bằng cú pháp `...T`, cho phép khai báo kiểu chính xác cho các hàm nối hoặc thao tác tuple - giải quyết bài toán trước đây không thể khai báo kiểu cho hàm như `concat<A, B>(a: A[], b: B[]): [...A, ...B]`',
      'Mảng có độ dài thay đổi trong đó tất cả phần tử có cùng kiểu',
      'Kiểu tuple cho phép phần tử optional ở bất kỳ vị trí nào',
    ],
    explanation:
      'Variadic tuple (TypeScript 4.0) cho phép spread generic tuple type parameter: `type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]`. Điều này cho phép khai báo kiểu chính xác cho `concat`, `prepend`, `append` và các thao tác cấu trúc tương tự mà trước đây phải dùng overload mất thông tin. Chúng cũng cho phép rest parameter có kiểu với phần tử đầu/cuối: `[string, ...number[], boolean]`.',
  },
  'ts-052': {
    question: '`Joined` phân giải thành gì?',
    explanation:
      'Variadic tuple spread cho phép bạn kết hợp tuple về mặt cấu trúc. `Prepend<string, [number, boolean]>` spread `[number, boolean]` sau `string`, cho ra `[string, number, boolean]`. `Append<[string, number], boolean>` spread `[string, number]` và thêm `boolean`, cũng cho ra `[string, number, boolean]`. Cả hai phân giải thành cùng kiểu qua các đường kết hợp khác nhau.',
  },
  'ts-053': {
    question:
      '"Recursive conditional type" là gì và hạn chế chính của nó trong các phiên bản TypeScript cũ là gì?',
    options: [
      'Conditional type dùng `infer` đệ quy - giới hạn 10 cấp đệ quy',
      'Conditional type tham chiếu chính nó trong các nhánh, cho phép thao tác kiểu cấp sâu như `DeepReadonly` hoặc `Flatten`. Trong TypeScript < 4.1 chúng có thể gây lỗi đệ quy vô hạn; 4.1+ giới thiệu tối ưu hoá tail-call cho kiểu đệ quy',
      'Bất kỳ kiểu nào dùng `extends` nhiều hơn một lần - giới hạn 5 điều kiện chuỗi',
      'Mapped type có thuộc tính đệ quy - chỉ giới hạn với kiểu tham chiếu',
    ],
    explanation:
      'Recursive conditional type tham chiếu chính nó: `type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T`. Trước TypeScript 4.1, kiểu đệ quy sâu sẽ gặp lỗi "Type instantiation is excessively deep". TypeScript 4.1+ tối ưu hoá tail-recursive conditional type. Ứng dụng thực tế: `DeepPartial`, `DeepReadonly`, `JSONValue`, kiểu path accessor.',
  },
  'ts-054': {
    question:
      'Pattern "branded types" (nominal typing) trong TypeScript là gì và tại sao nó được sử dụng?',
    options: [
      'Dùng kế thừa class để tạo các subtype riêng biệt mà TypeScript xử lý khác nhau',
      'Tạo type intersection với thuộc tính phantom duy nhất để phân biệt các kiểu giống nhau về cấu trúc (ví dụ: `UserId` vs `OrderId`) mà hệ thống structural typing của TypeScript sẽ coi là hoán đổi được',
      'Thêm tag JSDoc `@brand` vào kiểu để công cụ tài liệu có thể nhóm chúng',
      'Dùng giá trị enum làm định danh kiểu cho discriminated union',
    ],
    explanation:
      'TypeScript dùng structural typing - `UserId = string` và `OrderId = string` là giống hệt nhau. Branded type thêm phantom brand: `type UserId = string & { readonly _brand: "UserId" }`. Bây giờ `UserId` và `OrderId` khác nhau về cấu trúc dù cả hai đều là string tại runtime. Constructor xác thực và ép kiểu: `function createUserId(id: string): UserId { return id as UserId }`. Điều này ngăn chặn việc vô tình truyền `OrderId` vào nơi cần `UserId`.',
  },
  'ts-055': {
    question: 'Đoạn mã này có compile được không? Lỗi gì xảy ra nếu có?',
    answer:
      'Không - Lỗi TypeScript: Argument of type \'OrderId\' is not assignable to parameter of type \'UserId\' vì các thuộc tính _brand khác nhau.',
    explanation:
      'Intersection branded làm `UserId` và `OrderId` trở thành kiểu khác biệt về cấu trúc dù cả hai đều là string. Các literal type `_brand` `"UserId"` và `"OrderId"` khác nhau, nên TypeScript từ chối truyền `OrderId` vào nơi cần `UserId`. Đây chính là mục đích của branded type: an toàn lúc compile với overhead runtime bằng không.',
  },
  'ts-056': {
    question:
      'Chiến lược module resolution `bundler` trong TypeScript 5.0 là gì và khi nào nên sử dụng?',
    options: [
      'Nó gộp tất cả file TypeScript thành một file output duy nhất',
      'Nó mô phỏng cách các bundler hiện đại (Vite, esbuild, Webpack 5) phân giải module - hỗ trợ trường `exports` trong `package.json`, import không có extension, và phân giải file `index` - mà không bắt buộc yêu cầu extension nghiêm ngặt của Node.js',
      'Nó tắt mọi phân giải module và hoàn toàn dựa vào path mapping trong `tsconfig.json`',
      'Nó bật tree-shaking ở cấp độ kiểu TypeScript',
    ],
    explanation:
      '`moduleResolution: "bundler"` được giới thiệu trong TypeScript 5.0 cho dự án dùng bundler. Khác với `node16`/`nodenext` (yêu cầu extension `.js` rõ ràng trong import), `bundler` cho phép import không extension và hỗ trợ trường `exports` trong `package.json`. Nó KHÔNG cho phép `require` CommonJS với cú pháp `import`. Kết hợp với `module: "esnext"` và `moduleDetection: "force"` cho setup bundler hiện đại.',
  },
  'ts-057': {
    question:
      'Với `moduleResolution: "node16"` hoặc `"nodenext"`, TypeScript yêu cầu import tương đối phải dùng extension `.js` ngay cả khi import file nguồn `.ts`.',
    explanation:
      'Trong chế độ `node16`/`nodenext`, TypeScript tuân theo ngữ nghĩa phân giải ESM của Node.js, yêu cầu extension file rõ ràng. Khi bạn import `./utils`, Node.js tìm chính xác `./utils` - không đoán extension. TypeScript phân giải `import "./utils.js"` bằng cách tìm `utils.ts`, `utils.tsx` hoặc `utils.d.ts`. Đây là nguồn nhầm lẫn phổ biến: bạn viết `.js` trong mã nguồn TS nhưng TypeScript phân giải sang file `.ts`.',
  },
  'ts-058': {
    question:
      'Trong file khai báo `.d.ts`, mục đích của `declare module "module-name"` so với `declare global` là gì?',
    options: [
      '`declare module` tạo module mới có thể import; `declare global` thêm kiểu luôn có sẵn mà không cần import',
      'Chúng hoán đổi được - cả hai đều mở rộng phạm vi global',
      '`declare module` áp dụng cho module ngoài; `declare global` chỉ áp dụng cho file ambient script',
      '`declare global` đã bị deprecated để thay bằng `declare module "globalThis"`',
    ],
    explanation:
      '`declare module "name"` mở rộng hoặc khai báo hình dạng của module có thể import - dùng cho module augmentation (`declare module "express"`) hoặc khai báo module chưa có kiểu (`declare module "*.svg"`). `declare global { ... }` trong file module thêm khai báo vào phạm vi global (như mở rộng `window`, `process.env`) mà không cần import. Trong file ambient script (không có import/export), các khai báo mặc định là global.',
  },
  'ts-059': {
    question: 'File khai báo này có lỗi. Lỗi gì?',
    answer:
      'Trong block `declare module`, bạn không thể khởi tạo giá trị - `export const version = \'1.0.0\'` là lỗi vì khai báo ambient chỉ khai báo kiểu/hình dạng, không phải giá trị. Sửa: `export const version: string`',
    explanation:
      'File khai báo ambient mô tả hình dạng của JavaScript hiện có - chúng không thể chứa giá trị khởi tạo. `export const version = \'1.0.0\'` cố gắng gán giá trị, điều này không hợp lệ trong ngữ cảnh ambient. Dạng đúng là annotation kiểu: `export const version: string`. Tương tự, `declare function` và `declare class` không thể có thân method.',
  },
  'ts-060': {
    question: '`GetRouteParams` phân giải thành gì?',
    explanation:
      'Đây dùng recursive conditional type với template literal inference để trích xuất tên tham số route. Nhánh đầu tiên khớp pattern `/:param/rest` và xử lý đệ quy phần còn lại. Nhánh thứ hai khớp `/:param` ở cuối. Áp dụng cho `/users/:userId/posts/:postId`, nó trích xuất `"userId"` từ nhánh đầu, sau đó đệ quy `"postId"` từ `/posts/:postId`, kết quả là `"userId" | "postId"`.',
  },
  'ts-061': {
    question:
      '`EventEmitter` suy luận gì cho `on("click", handler)`?',
    explanation:
      'Template literal và indexed access type kết hợp tạo event emitter an toàn kiểu hoàn toàn. `K` được suy luận là `"click"`, `Events["click"]` là `[x: number, y: number]`, và `EventHandler<[number, number]>` mở rộng thành `(x: number, y: number) => void`. Các tham số handler do đó được suy luận là `number` mà không cần annotation thủ công.',
  },
  'ts-062': {
    question:
      'Kiểm tra toàn diện `switch` với `never` trông như thế nào và tại sao nó hữu ích?',
    options: [
      'Thêm case `default: return undefined` để xử lý tất cả giá trị không khớp',
      'Thêm case `default` gán giá trị cho `never`: `const _exhaustive: never = shape` - điều này gây lỗi compile nếu thành viên union mới được thêm mà không cập nhật switch',
      'Dùng `switch (true)` thay vì switch trên discriminant',
      'TypeScript tự động thực hiện kiểm tra toàn diện trong câu lệnh `switch` mà không cần code thêm',
    ],
    explanation:
      'Pattern kiểm tra toàn diện: `default: { const _: never = value; throw new Error("Unhandled case") }`. Nếu tất cả thành viên union đã được xử lý, `value` có kiểu `never` trong nhánh default (TypeScript thu hẹp bỏ tất cả case đã xử lý). Nếu bạn thêm thành viên union mới mà không cập nhật switch, `value` sẽ có kiểu đó trong `default`, khiến phép gán `never` trở thành lỗi compile. Đây là pattern TypeScript phổ biến cho xử lý toàn diện an toàn.',
  },
  'ts-063': {
    question:
      'Việc thêm variant `Shape` mới có gây lỗi compile trong switch toàn diện này không? Tại sao?',
    answer:
      'Có - lỗi compile: Type \'{ kind: "triangle"; base: number; height: number }\' is not assignable to type \'never\' trong nhánh default.',
    explanation:
      'Sau khi xử lý `\'circle\'` và `\'rect\'`, `s` trong nhánh `default` vẫn có kiểu `{ kind: \'triangle\'; ... }` vì case đó chưa được xử lý. Gán kiểu không phải `never` cho `never` là lỗi compile. Đây là hành vi mong muốn - nó buộc developer thêm nhánh `case \'triangle\'` trước khi code compile được.',
  },
  'ts-064': {
    question:
      'Sự khác biệt chính giữa decorator TypeScript 5.0 (TC39 Stage 3) và triển khai legacy `experimentalDecorators` là gì?',
    options: [
      'Decorator mới không hỗ trợ method decorator, chỉ class decorator',
      'Legacy decorator (`experimentalDecorators: true`) dùng API metadata cũ và nhận property descriptor; decorator TC39/TS5.0 nhận giá trị được decorate và context object với `name`, `kind`, `addInitializer`, và tuỳ chọn `metadata` - và chúng không được điều khiển bởi `experimentalDecorators` mà bằng cách KHÔNG set nó (hoặc set thành `false`)',
      'Decorator TC39 yêu cầu plugin Babel trong khi legacy decorator hoạt động native',
      'Decorator mới giống hệt legacy decorator nhưng với cú pháp mới',
    ],
    explanation:
      'TypeScript 5.0 triển khai đề xuất decorator TC39 Stage 3. Khác biệt chính so với legacy: (1) decorator mới nhận context object với `kind`, `name`, `static`, `private`, `addInitializer` và `metadata`; (2) chúng KHÔNG dùng `reflect-metadata` mặc định; (3) không thể dùng đồng thời với `experimentalDecorators: true`; (4) giá trị trả về của class decorator thay thế class; (5) từ khoá `accessor` cho auto-accessor.',
  },
  'ts-065': {
    question:
      '`const enum` của TypeScript an toàn khi dùng với `isolatedModules: true` được set trong `tsconfig.json` (theo yêu cầu của Vite, esbuild và Babel).',
    explanation:
      '`const enum` yêu cầu trình biên dịch TypeScript thấy tất cả nơi sử dụng để inline giá trị. Với `isolatedModules: true`, mỗi file được compile độc lập (như Vite/esbuild/Babel thực hiện). `const enum` định nghĩa trong file `.d.ts` hoặc module riêng không thể inline vì trình biên dịch chỉ thấy file hiện tại. Điều này gây lỗi runtime hoặc compile. Dùng `enum` thông thường hoặc object `as const` thay thế khi `isolatedModules` được bật.',
  },
  'ts-066': {
    question: 'Mapped type nâng cao sau có lỗi. Lỗi gì?',
    answer:
      'Không có lỗi - kiểu này đúng. `Promisify<T>` bọc đúng kiểu trả về của method trong `Promise` trong khi giữ nguyên thuộc tính không phải hàm. `infer A` bắt kiểu tham số và `infer R` bắt kiểu trả về, sau đó tái tạo hàm với kiểu trả về `Promise<R>`.',
    explanation:
      '`Promisify<T>` ánh xạ mỗi thuộc tính: nếu là hàm (`extends (...args: infer A) => infer R`), nó trả về kiểu hàm mới `(...args: A) => Promise<R>`. Nếu không phải hàm (như `config`), nó giữ nguyên kiểu (`T[K]`). Đây là pattern phổ biến để bọc interface service đồng bộ thành bất đồng bộ.',
  },
  'ts-067': {
    question: '`Paths` phân giải thành gì cho object 2 cấp?',
    explanation:
      'Recursive mapped type này tạo tất cả đường dẫn ký hiệu dấu chấm cho object lồng. Với `User`: `name` là string nên cho ra `"name"`. `address` là object nên cho ra `"address"` VÀ đệ quy vào với prefix `"address."` để cho ra `"address.city"` và `"address.zip"`. Union cuối cùng là `"name" | "address" | "address.city" | "address.zip"`. Pattern này được dùng trong thư viện form, schema validation và tiện ích `get`/`set` có kiểu.',
  },
  'ts-068': {
    question:
      'Từ khoá `infer` của TypeScript có thể được dùng để trích xuất kiểu từ vị trí template literal trong conditional type (ví dụ: trích xuất các phần của string type).',
    explanation:
      'Từ TypeScript 4.7, `infer` hoạt động trong pattern template literal: `type GetPrefix<T> = T extends \\`${infer P}_suffix\\` ? P : never`. Áp dụng cho `"hello_suffix"`, nó suy luận `P = "hello"`. Điều này cho phép phân tích string literal type ở cấp độ kiểu - trích xuất prefix, suffix, đoạn route, tên event và hơn thế mà không cần code runtime.',
  },
}
