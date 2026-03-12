import type { QuestionTranslationMap } from '../types'

export const baVi: QuestionTranslationMap = {
  'ba-ag-001': {
    question: `Điều nào sau đây KHÔNG phải là một trong bốn giá trị trong Tuyên ngôn Agile?`,
    options: [
      `Các cá nhân và sự tương tác qua các quy trình và công cụ`,
      `Phần mềm làm việc trên tài liệu toàn diện`,
      `Lập kế hoạch chi tiết để đáp ứng với sự thay đổi`,
      `Hợp tác của khách hàng thông qua đàm phán hợp đồng`
    ],
    explanation: `Tuyên ngôn Agile đánh giá cao: (1) Cá nhân và sự tương tác hơn là các quy trình và công cụ, (2) Phần mềm hoạt động hơn là tài liệu toàn diện, (3) Hợp tác với khách hàng hơn là đàm phán hợp đồng, (4) Phản hồi trước sự thay đổi theo kế hoạch.Tuyên ngôn KHÔNG làm giảm giá trị các mặt hàng ở bên phải - nó đánh giá cao mặt bên trái NHIỀU HƠN.`,
  },
  'ba-ag-002': {
    question: `Trong Scrum, ai chịu trách nhiệm tối đa hóa giá trị của sản phẩm và quản lý Product Backlog?`,
    options: [
      `Bậc thầy Scrum`,
      `Nhóm phát triển`,
      `Chủ sở hữu sản phẩm`,
      `Người quản lý dự án`
    ],
    explanation: `Chủ sở hữu sản phẩm (PO) là người duy nhất chịu trách nhiệm tối đa hóa giá trị sản phẩm.Họ quản lý Product Backlog: đặt hàng các hạng mục, đảm bảo sự rõ ràng và đưa ra các quyết định ưu tiên.PO đại diện cho lợi ích của các bên liên quan và là người đưa ra quyết định cuối cùng về những gì sẽ được xây dựng.Scrum Master hỗ trợ quá trình này;nhóm phát triển quyết định CÁCH xây dựng nó.`,
  },
  'ba-ag-003': {
    question: `Scrum Master là người quản lý Nhóm phát triển và phân công nhiệm vụ cho các thành viên trong nhóm.`,
    explanation: `Scrum Master là người lãnh đạo phục vụ chứ không phải người quản lý.Họ tạo điều kiện thuận lợi cho các sự kiện Scrum, loại bỏ các trở ngại và huấn luyện nhóm về cách thực hành Scrum.Nhóm Phát triển tự tổ chức - các thành viên trong nhóm tự quyết định ai sẽ làm việc gì.Scrum Master không có quyền phân công nhiệm vụ.`,
  },
  'ba-ag-004': {
    question: `Ba trụ cột của Scrum là gì?`,
    options: [
      `Lập kế hoạch, Thực hiện, Giao hàng`,
      `Minh bạch, kiểm tra, thích ứng`,
      `Tốc độ, chất lượng, chi phí`,
      `Yêu cầu, Thiết kế, Kiểm tra`
    ],
    explanation: `Scrum được thành lập dựa trên việc kiểm soát quy trình theo kinh nghiệm với ba trụ cột: Tính minh bạch (tất cả các khía cạnh mà những người chịu trách nhiệm về kết quả có thể nhìn thấy), Kiểm tra (thường xuyên kiểm tra các tạo tác và tiến trình) và Thích ứng (điều chỉnh quy trình hoặc sản phẩm khi phát hiện ra sai lệch).Những trụ cột này cho phép học hỏi và cải tiến liên tục.`,
  },
  'ba-ag-005': {
    question: `Khung thời gian được đề xuất cho buổi Cải tiến Sprint trong 2 tuần chạy nước rút là bao nhiêu?`,
    options: [
      `15 phút`,
      `1,5 giờ (90 phút)`,
      `4 giờ`,
      `8 giờ (cả ngày)`
    ],
    explanation: `Đối với chạy nước rút kéo dài 2 tuần, quá trình hồi tưởng được đặt khung thời gian là 1,5 giờ (tối đa 3 giờ cho chạy nước rút trong 4 tuần).Quá trình hồi cứu sẽ kiểm tra lần chạy nước rút cuối cùng liên quan đến con người, mối quan hệ, quy trình và công cụ.Nhóm xác định những thay đổi hữu ích nhất và tạo ra một kế hoạch cải tiến có thể thực hiện được.Đây là sự kiện quan trọng để cải tiến liên tục.`,
  },
  'ba-ag-006': {
    question: `Vai trò chính của BA trong quá trình Lập kế hoạch Sprint trong nhóm Scrum là gì?`,
    options: [
      `Viết mã cho những câu chuyện có mức độ ưu tiên cao nhất`,
      `Làm rõ các yêu cầu, trả lời các câu hỏi về tiêu chí chấp nhận và giúp nhóm hiểu được quan điểm của người dùng và bối cảnh kinh doanh`,
      `Điều hành cuộc họp Lập kế hoạch Sprint với tư cách là người điều phối`,
      `Ước tính điểm câu chuyện cho từng hạng mục tồn đọng`
    ],
    explanation: `Trong quá trình Lập kế hoạch Sprint, BA đóng vai trò là chuyên gia về miền - làm rõ các yêu cầu, giải thích các tiêu chí chấp nhận, cung cấp bối cảnh kinh doanh và trả lời các câu hỏi của nhóm phát triển về nhu cầu của người dùng.Scrum Master điều hành cuộc họp, PO đặt ra các ưu tiên và nhóm phát triển ước tính và lựa chọn công việc.BA thu hẹp khoảng cách giữa mục đích kinh doanh và hiểu biết kỹ thuật.`,
  },
  'ba-ag-007': {
    question: `Sự khác biệt giữa Đánh giá Sprint và Hồi tưởng Sprint là gì?`,
    options: [
      `Họ là cùng một cuộc gặp gỡ nhưng có những cái tên khác nhau`,
      `Sprint Review kiểm tra mức tăng trưởng của sản phẩm và nhận phản hồi của các bên liên quan;Sprint Retrospective kiểm tra quy trình của nhóm và xác định các cải tiến`,
      `Sprint Review chỉ dành cho nhóm phát triển;Sprint Retrospective bao gồm các bên liên quan`,
      `Đánh giá Sprint diễn ra khi bắt đầu một Sprint;Sprint Retrospective diễn ra vào cuối`
    ],
    explanation: `Đánh giá Sprint (bản demo): nhóm hiển thị tiến độ công việc cho các bên liên quan, thu thập phản hồi và thảo luận về những việc cần làm tiếp theo - tập trung vào SẢN PHẨM.Hồi tưởng Sprint: nhóm phản ánh về quy trình làm việc của họ, xác định những gì đã diễn ra tốt đẹp, những gì cần cải thiện và cam kết hành động - tập trung vào QUY TRÌNH.Cả hai đều xảy ra ở cuối nước rút, nhưng việc Đánh giá được thực hiện trước.`,
  },
  'ba-ag-008': {
    question: `Trong Kanban, các mục công việc được sắp xếp thành các lần lặp có khung thời gian cố định được gọi là chạy nước rút.`,
    explanation: `Kanban KHÔNG sử dụng các lần chạy nước rút cố định.Nó là một hệ thống dựa trên dòng chảy với khả năng phân phối liên tục.Các phương pháp thực hành chính của Kanban bao gồm: trực quan hóa quy trình làm việc trên bảng, giới hạn Công việc đang tiến hành (giới hạn WIP), quản lý quy trình, đưa ra các chính sách quy trình rõ ràng và liên tục cải tiến.Sprint là một khái niệm của Scrum.Một số nhóm kết hợp cả hai cách tiếp cận (Scrumban).`,
  },
  'ba-ag-009': {
    question: `Một nhóm liên tục không hoàn thành các cam kết chạy nước rút của mình.Với tư cách là một BA, nguyên nhân gốc rễ có khả năng xảy ra nhất liên quan đến yêu cầu là gì?`,
    options: [
      `Đội bóng lười biếng và cần nhiều áp lực hơn`,
      `Các câu chuyện bước vào sprint không được tinh chỉnh đầy đủ — tiêu chí chấp nhận không rõ ràng, độ phức tạp tiềm ẩn hoặc các phần phụ thuộc chưa được giải quyết gây ra các phát hiện và làm lại giữa sprint`,
      `Chủ sản phẩm không tham dự các cuộc họp dự kiến ​​hàng ngày`,
      `Nhóm đang sử dụng sai ngôn ngữ lập trình`
    ],
    explanation: `Việc sàng lọc không đầy đủ là nguyên nhân số 1 gây ra lỗi chạy nước rút liên quan đến yêu cầu.Khi các câu chuyện bước vào một sprint với tiêu chí mơ hồ, sự phụ thuộc không xác định hoặc độ phức tạp tiềm ẩn, nhóm sẽ phát hiện ra các vấn đề ở giữa sprint, gây ra sự chậm trễ và phải làm lại.Cách khắc phục: đầu tư nhiều hơn vào việc sàng lọc các hồ sơ tồn đọng (chuẩn bị chu đáo), đảm bảo các câu chuyện đáp ứng Định nghĩa Sẵn sàng và phân chia các câu chuyện phức tạp sớm hơn.`,
  },
  'ba-ag-010': {
    question: `SAFe (Scaled Agile Framework) là gì và khi nào thì phù hợp?`,
    options: [
      `Phiên bản đơn giản của Scrum dành cho các nhóm nhỏ`,
      `Một khuôn khổ để mở rộng quy mô thực hành Agile cho các doanh nghiệp lớn có nhiều nhóm, cung cấp các cấu trúc như Chương trình phát hành Agile (ART), lập kế hoạch Tăng trưởng chương trình (PI) và điều phối cấp danh mục đầu tư`,
      `Khung thử nghiệm để thử nghiệm Agile tự động`,
      `Một công cụ quản lý dự án như Jira hoặc Azure DevOps`
    ],
    explanation: `SAFe giải quyết các thách thức khi nhiều nhóm Scrum phải phối hợp trên một sản phẩm lớn.Các khái niệm chính: Đào tạo phát hành Agile (ART) = nhóm các nhóm (~50-125 người), Lập kế hoạch tăng trưởng chương trình (PI) = lập kế hoạch phòng lớn cứ sau 8-12 tuần và Cấp độ danh mục đầu tư để liên kết chiến lược.SAFe phù hợp với các tổ chức lớn (hơn 100 nhà phát triển) nhưng được coi là nặng nề đối với các nhóm nhỏ.`,
  },
  'ba-ag-011': {
    question: `Thiết kế quy trình sàng lọc hồ sơ tồn đọng cho nhóm đang chuyển đổi từ Waterfall sang Agile.Bao gồm tần suất, người tham gia, hoạt động và cách đo lường sự cải thiện.`,
    answer: `Thiết kế quy trình sàng lọc:

Tần suất: 2 buổi cho mỗi lần chạy nước rút (ví dụ: Thứ Ba và Thứ Năm, mỗi buổi 1 giờ) - ban đầu thường xuyên hơn để xây dựng thói quen.

Thành phần tham gia: Product Owner, BA, 2-3 dev (luân phiên), đại diện QA, Scrum Master (hỗ trợ viên).

Cấu trúc phiên:
(1) PO trình bày các hạng mục tồn đọng sắp tới (5 phút)
(2) BA trình bày bối cảnh yêu cầu, wireframe, tiêu chí chấp nhận (10 phút mỗi câu chuyện)
(3) Nhóm đặt câu hỏi làm rõ - Câu trả lời BA và PO
(4) Nhóm xác định các cân nhắc kỹ thuật, sự phụ thuộc và rủi ro
(5) Ước tính của nhóm bằng Planning Poker (điểm câu chuyện tương đối)
(6) Câu chuyện họp Định nghĩa Sẵn sàng được đánh dấu là "tinh tế"
(7) Những câu chuyện cần làm nhiều hơn sẽ được giao các mục hành động

Hỗ trợ chuyển tiếp:
- Bắt đầu với các câu chuyện chi tiết (gần như thông số kỹ thuật) và giảm dần về định dạng câu chuyện tiêu chuẩn của người dùng khi nhóm trưởng thành
- Tạo cột bảng "Sẵn sàng" trực quan
- BA viết truyện với PO ban đầu

Số liệu:
- Tỷ lệ hoàn thành Sprint (mục tiêu: >80%)
- Các câu chuyện bị từ chối khi lập kế hoạch chạy nước rút (mục tiêu: <10%)
- Làm rõ phạm vi giữa sprint (mục tiêu: xu hướng giảm)
- Thông lượng sàng lọc (câu chuyện được tinh chỉnh mỗi phiên)`,
    explanation: `Các nhóm chuyển đổi từ Waterfall thường gặp khó khăn với quá trình sàng lọc Agile vì họ mong đợi các thông số kỹ thuật đầy đủ, rõ ràng.Một quy trình có cấu trúc với các hoạt động và thước đo rõ ràng sẽ giúp xây dựng thói quen sàng lọc.Ban đầu, nhiều phiên hơn sẽ ngăn những câu chuyện chưa được cải tiến tham gia vào các giai đoạn nước rút.Các nhà phát triển luân phiên đảm bảo việc chia sẻ kiến ​​thức.Số liệu theo dõi xem chất lượng sàng lọc có cải thiện theo thời gian hay không.`,
  },
  'ba-ag-012': {
    question: `Với tư cách là BA trưởng hỗ trợ 4 nhóm Scrum xây dựng một sản phẩm thống nhất, thiết kế chiến lược phối hợp yêu cầu giữa các nhóm nhằm ngăn ngừa các vấn đề tích hợp, công việc trùng lặp và triển khai xung đột.`,
    answer: `Chiến lược phối hợp liên nhóm:

1. Kiến trúc tồn đọng sản phẩm dùng chung:
- Single Product Backlog thuộc quyền sở hữu của một Trưởng PO
- Mỗi nhóm có một Team Backlog được lấy từ Product Backlog
- Cộng đồng thực hành BA (CoP) họp hàng tuần để xem xét sự phụ thuộc giữa các nhóm

2. Quản lý phụ thuộc:
- Lập bản đồ phụ thuộc giữa các nhóm phụ thuộc vào bảng phụ thuộc trực quan (vật lý hoặc kỹ thuật số)
- Các phần phụ thuộc được xác định trong quá trình sàng lọc và được gắn cờ với các câu chuyện được liên kết
- "Ngày phụ thuộc" — phiên dành riêng cho mỗi PI/quý nơi tất cả các nhóm điều chỉnh trên các giao diện dùng chung (API, mô hình dữ liệu, thành phần dùng chung)

3. Mô hình miền và bảng thuật ngữ dùng chung:
- Mô hình miền trung tâm do Lead BA duy trì
- Bảng chú giải ngôn ngữ phổ biến — tất cả các đội đều sử dụng cùng một thuật ngữ
- Đánh giá mô hình miền thường xuyên khi có thêm tính năng mới

4. Yêu cầu tích hợp:
- Thiết kế API ưu tiên hợp đồng - các nhóm thống nhất về hợp đồng giao diện trước khi triển khai
- Tiêu chí chấp nhận chung cho các điểm tích hợp
- Các kịch bản thử nghiệm tích hợp giữa các nhóm được duy trì bởi BA + QA

5. Nhịp phối hợp:
- Scrum of Scrums (3 lần/tuần): trưởng nhóm kỹ thuật từ mỗi nhóm đồng bộ về các trở ngại và sự phụ thuộc
- BA Sync (hàng tuần): BA chia sẻ các yêu cầu sắp tới, xác định các phần trùng lặp
- Lập kế hoạch phòng lớn (hàng quý): tất cả các nhóm cùng nhau lập kế hoạch, xác định các câu chuyện giữa các nhóm, thống nhất các mục tiêu PI`,
    explanation: `Nếu không có sự phối hợp, nhiều nhóm chắc chắn sẽ tạo ra xung đột trong quá trình triển khai, công việc trùng lặp và lỗi tích hợp ở giai đoạn cuối.Chiến lược phối hợp có cấu trúc với các hồ sơ tồn đọng được chia sẻ, theo dõi phụ thuộc, căn chỉnh miền và nhịp đồng bộ hóa thường xuyên sẽ ngăn ngừa những vấn đề này.BA chính đóng vai trò là "mô liên kết" đảm bảo các yêu cầu được nhất quán và tác động giữa các nhóm được xác định sớm.`,
  },
  'ba-ag-013': {
    question: `Trong một tổ chức Agile lớn, tốc độ thay đổi đáng kể giữa các nhóm (một nhóm mang lại 40 điểm/chạy nước rút, nhóm khác mang lại 20 điểm).Người quản lý muốn chuẩn hóa các điểm trong câu chuyện giữa các nhóm.Lead BA nên tư vấn gì?`,
    options: [
      `Thống nhất và tạo bảng đánh giá điểm câu chuyện chuẩn cho tất cả các đội`,
      `Lời khuyên không nên làm - điểm câu chuyện là những ước tính tương đối chỉ có ý nghĩa trong bối cảnh của một nhóm;thay vào đó, hãy sử dụng các số liệu khác như thời gian chu kỳ, thông lượng hoặc các tính năng được cung cấp để so sánh giữa các nhóm`,
      `Đề xuất sử dụng giờ thay vì điểm câu chuyện để có độ chính xác cao hơn`,
      `Đề xuất tăng gấp đôi ước tính của nhóm chậm hơn để bình thường hóa`
    ],
    explanation: `Điểm câu chuyện có liên quan đến thành tích lịch sử của mỗi đội.Số "5" trong Đội A phản ánh sự đánh giá về độ phức tạp của đội THAT chứ không phải là thước đo chung.Việc tiêu chuẩn hóa điểm giữa các nhóm tạo ra sự tương đương sai lệch và hành vi chơi game.Để so sánh giữa các nhóm, hãy sử dụng các số liệu trung lập trong nhóm: thời gian chu kỳ (tốc độ), thông lượng (số lượng mục được phân phối trong mỗi lần chạy nước rút) hoặc giá trị được phân phối (kết quả kinh doanh).`,
  },
  'ba-re-001': {
    question: `Định nghĩa nào sau đây là định nghĩa TỐT NHẤT về "yêu cầu chức năng"?`,
    options: [
      `Hạn chế về hiệu suất của hệ thống (ví dụ: thời gian phản hồi < 2 giây)`,
      `Hành vi hoặc chức năng cụ thể mà hệ thống phải thực hiện (ví dụ: "hệ thống sẽ cho phép người dùng đặt lại mật khẩu")`,
      `Mục tiêu kinh doanh mà các bên liên quan muốn đạt được`,
      `Mô tả về phần cứng mà hệ thống chạy trên đó`
    ],
    explanation: `Yêu cầu chức năng mô tả những gì hệ thống nên làm - hành vi, tính năng hoặc chức năng cụ thể.Các yêu cầu phi chức năng bao gồm “mức độ tốt” (hiệu suất, bảo mật, khả năng sử dụng).Mục tiêu kinh doanh là mục tiêu cấp cao hơn, không phải yêu cầu cấp hệ thống.`,
  },
  'ba-re-002': {
    question: `Yêu cầu phi chức năng (NFR) mô tả hệ thống làm NHỮNG GÌ, trong khi yêu cầu chức năng mô tả hệ thống thực hiện nó TỐT NHƯ THẾ NÀO.`,
    explanation: `Ngược lại: các yêu cầu chức năng mô tả NHỮNG GÌ hệ thống làm (hành vi/tính năng), trong khi các yêu cầu phi chức năng mô tả TỐT NHƯ THẾ NÀO (hiệu suất, bảo mật, khả năng mở rộng, khả năng sử dụng).Các danh mục NFR phổ biến bao gồm hiệu suất, độ tin cậy, tính khả dụng và khả năng bảo trì.`,
  },
  'ba-re-003': {
    question: `Kỹ thuật khơi gợi nào liên quan đến việc quan sát người dùng cuối thực hiện các công việc hàng ngày trong môi trường làm việc của họ?`,
    options: [
      `Động não`,
      `Quan sát (Theo dõi công việc)`,
      `nguyên mẫu`,
      `Phân tích tài liệu`
    ],
    explanation: `Việc quan sát (hoặc theo dõi công việc) cho phép BA biết cách người dùng thực sự làm việc - thường tiết lộ những nhu cầu chưa được nêu ra, cách giải quyết và những điểm khó khăn mà người dùng quên đề cập đến trong các cuộc phỏng vấn.Nó đặc biệt hữu ích khi người dùng không thể trình bày rõ ràng các quy trình của họ.`,
  },
  'ba-re-004': {
    question: `Từ viết tắt "MoSCoW" có nghĩa là gì trong mức độ ưu tiên của yêu cầu?`,
    options: [
      `Bắt buộc, Tùy chọn, Tiêu chuẩn, Quan trọng, Tùy chọn, Danh sách mong muốn`,
      `Phải có, Nên có, Có thể có, Sẽ không có (lần này)`,
      `Quan trọng nhất, Một số tầm quan trọng, Phổ biến, Thỉnh thoảng, Không có giá trị`,
      `Tối thiểu, Tối ưu, Có thể mở rộng, Quan trọng, Hoạt động, Truy nã`
    ],
    explanation: `MoSCoW là một kỹ thuật ưu tiên: Phải có (quan trọng để phân phối), Nên có (quan trọng nhưng không quan trọng), Có thể có (có thì tốt), Sẽ không có (đồng ý loại trừ khỏi bản phát hành này).Chữ "o" được thêm vào để làm cho từ viết tắt có thể phát âm được.`,
  },
  'ba-re-005': {
    question: `Mục đích CHÍNH của Ma trận truy xuất nguồn gốc yêu cầu (RTM) là gì?`,
    options: [
      `Để theo dõi ngân sách của từng yêu cầu`,
      `Để ánh xạ từng yêu cầu tới nguồn, yếu tố thiết kế, trường hợp thử nghiệm và trạng thái phân phối trong suốt vòng đời dự án`,
      `Để ưu tiên các yêu cầu theo giá trị kinh doanh`,
      `Chỉ ghi lại lịch sử thay đổi yêu cầu`
    ],
    explanation: `RTM đảm bảo mọi yêu cầu đều được liên kết từ nguồn gốc (nhu cầu kinh doanh/các bên liên quan) thông qua thiết kế, triển khai và thử nghiệm.Nó giúp phát hiện các lỗ hổng (yêu cầu chưa được kiểm tra), mạ vàng (các tính năng không có yêu cầu) và hỗ trợ phân tích tác động khi có thay đổi.`,
  },
  'ba-re-006': {
    question: `Một bên liên quan nói: "Hệ thống phải thân thiện với người dùng."BA nên làm gì với yêu cầu này?`,
    options: [
      `Chấp nhận nguyên trạng vì các bên liên quan biết rõ nhất`,
      `Bỏ đi vì nó mang tính chủ quan và không thể thực hiện được`,
      `Phân tách nó thành các tiêu chí có thể đo lường và kiểm tra được (ví dụ: "hoàn thành nhiệm vụ trong vòng 3 lần nhấp chuột", "tỷ lệ lỗi < 5%")`,
      `Chuyển tiếp trực tiếp đến người thiết kế giao diện người dùng mà không cần sửa đổi`
    ],
    explanation: `"Thân thiện với người dùng" là mơ hồ và không thể đo lường được.Một BA tốt sẽ phân tách các yêu cầu mơ hồ thành các tiêu chí SMART: Cụ thể, Có thể đo lường được, Có thể đạt được, Có liên quan, Có thời hạn.Ví dụ: "90% người dùng mới hoàn tất đăng ký trong vòng 2 phút mà không cần hỗ trợ."`,
  },
  'ba-re-007': {
    question: `Kỹ thuật nào hiệu quả NHẤT khi các bên liên quan có các yêu cầu xung đột nhau?`,
    options: [
      `Phân tích tài liệu`,
      `Hội thảo hỗ trợ (phiên JAD)`,
      `Khảo sát/Bảng câu hỏi`,
      `nguyên mẫu`
    ],
    explanation: `Một hội thảo được hỗ trợ (Phát triển ứng dụng chung - JAD) tập hợp các bên liên quan xung đột lại với nhau trong một phiên có cấu trúc với một người hỗ trợ trung lập.Điều này cho phép đàm phán, thỏa hiệp và xây dựng sự đồng thuận theo thời gian thực.Các cuộc khảo sát quá khách quan để giải quyết xung đột và việc phân tích tài liệu không giải quyết được xung đột.`,
  },
  'ba-re-008': {
    question: `Xác thực yêu cầu đảm bảo rằng các yêu cầu được triển khai chính xác trong hệ thống cuối cùng.`,
    explanation: `XÁC NHẬN yêu cầu kiểm tra xem các yêu cầu có phản ánh chính xác nhu cầu của các bên liên quan hay không (chúng ta có đang xây dựng đúng thứ không?).XÁC MINH Yêu cầu kiểm tra xem hệ thống có thực hiện đúng các yêu cầu hay không (chúng ta xây dựng nó có đúng không?).Việc xác nhận diễn ra sớm hơn;xác minh xảy ra trong quá trình thử nghiệm.`,
  },
  'ba-re-009': {
    question: `Trong một hệ thống doanh nghiệp phức tạp, cách tiếp cận nào là TỐT NHẤT để quản lý các yêu cầu thường xuyên thay đổi?`,
    options: [
      `Cố định tất cả các yêu cầu trước khi bắt đầu phát triển (Big Design Up Front)`,
      `Sử dụng phương pháp tiếp cận lặp đi lặp lại với tồn đọng sản phẩm, sàng lọc liên tục và các vòng phản hồi ngắn`,
      `Bỏ qua các yêu cầu chính thức và để nhà phát triển quyết định xây dựng nội dung gì`,
      `Tạo một tài liệu SRS toàn diện ngay từ đầu và không bao giờ cập nhật nó`
    ],
    explanation: `Các phương pháp lặp lại/Agile chấp nhận các yêu cầu phát triển.Một sản phẩm tồn đọng đang hoạt động với sự sàng lọc liên tục, đánh giá nước rút để lấy phản hồi của các bên liên quan và các chu kỳ ngắn cho phép nhóm thích ứng với những thay đổi.BDUF không thành công khi các yêu cầu không ổn định;bỏ qua các yêu cầu dẫn đến phạm vi sai lệch và sai lệch.`,
  },
  'ba-re-010': {
    question: `“Yêu cầu mạ vàng” là gì và tại sao lại có vấn đề?`,
    options: [
      `Thêm nhiều chi tiết hơn vào các yêu cầu so với yêu cầu của các bên liên quan - nó cải thiện chất lượng`,
      `Triển khai các tính năng hoặc khả năng vượt quá những gì đã được chỉ định — nó làm tăng phạm vi, chi phí và rủi ro mà không có giá trị kinh doanh được phê duyệt`,
      `Ưu tiên tất cả các yêu cầu là "Phải có" - đảm bảo không bỏ sót điều gì`,
      `Sử dụng các công cụ đắt tiền để quản lý yêu cầu - gây lãng phí ngân sách`
    ],
    explanation: `Mạ vàng xảy ra khi các nhà phát triển hoặc BA thêm các tính năng, sự đánh bóng hoặc các khả năng mà các bên liên quan không yêu cầu.Mặc dù có mục đích tốt nhưng nó làm tăng phạm vi, trì hoãn việc phân phối, giới thiệu chức năng chưa được kiểm tra và tiêu tốn ngân sách cho công việc chưa được phê duyệt.RTM giúp phát hiện việc mạ vàng bằng cách tiết lộ các tính năng được triển khai mà không cần yêu cầu phù hợp.`,
  },
  'ba-re-011': {
    question: `Thiết kế chiến lược khơi gợi yêu cầu cho nền tảng thương mại điện tử mới nơi khách hàng chỉ có ý tưởng sơ bộ về những gì họ muốn.Bao gồm ít nhất 4 kỹ thuật, trình tự và lý do căn bản của chúng.`,
    answer: `Giai đoạn 1 - Khám phá: (1) Phỏng vấn các bên liên quan với cấp độ C, chủ sở hữu sản phẩm và người dùng chính để hiểu mục tiêu kinh doanh, thị trường mục tiêu và bối cảnh cạnh tranh.(2) Phân tích tài liệu về nền tảng của đối thủ cạnh tranh, quy trình kinh doanh hiện tại và báo cáo nghiên cứu thị trường.Giai đoạn 2 - Khám phá: (3) Hội thảo được tạo điều kiện (JAD) với nhóm đa chức năng (tiếp thị, vận hành, hỗ trợ khách hàng) để suy nghĩ về các tính năng, xác định tính cách người dùng và lập bản đồ hành trình của khách hàng.(4) Quan sát/điều tra theo ngữ cảnh của các quy trình bán hàng hiện tại (nếu di chuyển từ cửa hàng truyền thống hoặc nền tảng khác).Giai đoạn 3 - Xác thực: (5) Tạo mẫu bằng wireframe có độ chính xác thấp để xác thực các luồng điều hướng và vị trí tính năng với người dùng thực.(6) Khảo sát/bảng câu hỏi dành cho người dùng cuối tiềm năng để xác thực các giả định về sở thích và điểm yếu.Giai đoạn 4 - Sàng lọc: (7) Hội thảo lập bản đồ câu chuyện của người dùng để sắp xếp các tính năng thành các bản phát hành, xác định phạm vi MVP và tạo tồn đọng sản phẩm ban đầu.`,
    explanation: `Chiến lược đa kỹ thuật là điều cần thiết khi khách hàng có những ý tưởng mơ hồ.Bắt đầu bằng các cuộc phỏng vấn và phân tích tài liệu sẽ thiết lập bối cảnh.Hội thảo thúc đẩy sự sáng tạo và sự liên kết.Nguyên mẫu làm cho các khái niệm trừu tượng trở nên hữu hình để phản hồi.Khảo sát xác nhận các giả định ở quy mô lớn.Ánh xạ câu chuyện của người dùng cung cấp một lộ trình có cấu trúc từ yêu cầu đến triển khai.`,
  },
  'ba-re-012': {
    question: `Điều nào sau đây là rủi ro chính của việc CHỈ sử dụng các cuộc phỏng vấn làm kỹ thuật khơi gợi?`,
    options: [
      `Các cuộc phỏng vấn quá tốn kém để thực hiện`,
      `Các bên liên quan có thể không trình bày rõ ràng kiến ​​thức ngầm, dẫn đến các yêu cầu không đầy đủ`,
      `Các cuộc phỏng vấn luôn đưa ra những yêu cầu trái ngược nhau`,
      `Các cuộc phỏng vấn không thể nắm bắt được các yêu cầu phi chức năng`
    ],
    explanation: `Các cuộc phỏng vấn dựa vào việc các bên liên quan trình bày rõ ràng những gì họ biết - nhưng phần lớn kiến ​​thức là ẩn (chuyên môn vô thức).Người dùng có thể quên các trường hợp đặc biệt, thừa nhận kiến ​​thức phổ biến hoặc mô tả quy trình làm việc lý tưởng hóa.Việc bổ sung khả năng quan sát, tạo nguyên mẫu và phân tích tài liệu sẽ giúp lấp đầy những khoảng trống này.`,
  },
  'ba-re-013': {
    question: `Bạn là BA chính của chương trình chuyển đổi kỹ thuật số quy mô lớn với 5 luồng công việc.Thiết kế khung quản trị yêu cầu để đảm bảo tính nhất quán, khả năng truy nguyên và kiểm soát thay đổi trên tất cả các quy trình công việc.`,
    answer: `Các thành phần khung: (1) Kho lưu trữ yêu cầu trung tâm — một công cụ duy nhất (ví dụ: Jira, Azure DevOps, DOORS) được chia sẻ trên các luồng công việc với các mẫu được tiêu chuẩn hóa, quy ước đặt tên và lược đồ thuộc tính (định dạng ID, quy trình làm việc trạng thái, mức độ ưu tiên).(2) Phân loại yêu cầu - cấu trúc phân cấp: Yêu cầu kinh doanh → Yêu cầu của các bên liên quan → Yêu cầu giải pháp (Chức năng + Phi chức năng) → Yêu cầu chuyển đổi.Mỗi cấp độ có một chủ sở hữu được xác định.(3) Truy xuất nguồn gốc giữa các luồng công việc - RTM liên kết các mục tiêu kinh doanh → yêu cầu → thiết kế → trường hợp thử nghiệm → triển khai.Báo cáo tự động gắn cờ các yêu cầu đơn lẻ hoặc các mục chưa được kiểm tra.(4) Ban kiểm soát thay đổi (CCB) — một cơ quan quản trị có đại diện từ mỗi luồng công việc xem xét các yêu cầu thay đổi, đánh giá tác động xuyên suốt luồng công việc và phê duyệt/từ chối các thay đổi.Các yêu cầu thay đổi tuân theo một quy trình chính thức: gửi → phân tích tác động → xem xét CCB → phê duyệt/từ chối → thực hiện → xác minh.(5) Cổng chất lượng - các điểm kiểm tra đánh giá yêu cầu ở từng giai đoạn: danh sách kiểm tra tính đầy đủ, phân tích sự mơ hồ, đánh giá khả năng kiểm tra và phát hiện xung đột giữa các luồng công việc.(6) Cộng đồng thực hành BA - các cuộc họp đồng bộ thường xuyên giữa các BA trong luồng công việc để chia sẻ các mẫu, xác định các mối phụ thuộc, giải quyết xung đột và duy trì tính nhất quán trong ký hiệu mô hình hóa và các tiêu chuẩn tài liệu.`,
    explanation: `Ở quy mô chương trình, các BA công việc riêng lẻ có thể tuân theo các tiêu chuẩn và tạo ra các yêu cầu xung đột.Khung quản trị đảm bảo tính nhất quán (phân loại chung, mẫu), khả năng hiển thị (kho lưu trữ trung tâm, truy xuất nguồn gốc), kiểm soát (CCB, quy trình thay đổi) và chất lượng (điểm kiểm tra đánh giá).Nếu không có sự quản trị, khả năng tích hợp giữa các luồng công việc gần như sẽ không xảy ra.`,
  },
  'ba-re-014': {
    question: `Khi quản lý các yêu cầu cho một hệ thống phải tuân thủ nhiều tiêu chuẩn quy định (ví dụ: GDPR, PCI-DSS, HIPAA), thực hành kỹ thuật yêu cầu quan trọng NHẤT là gì?`,
    options: [
      `Thuê một nhân viên tuân thủ chuyên trách để viết tất cả các yêu cầu`,
      `Tạo ma trận truy xuất nguồn gốc tuân thủ để ánh xạ từng điều khoản quy định tới các yêu cầu cụ thể, quyết định thiết kế và bằng chứng xác minh`,
      `Thêm tuyên bố từ chối trách nhiệm rằng hệ thống "nhằm mục đích tuân thủ"`,
      `Triển khai tất cả các tính năng bảo mật có thể bất kể áp dụng quy định nào`
    ],
    explanation: `Ma trận truy xuất nguồn gốc tuân thủ ánh xạ các điều khoản quy định cụ thể (ví dụ: GDPR Điều 17 "Quyền xóa") tới các yêu cầu bắt nguồn (ví dụ: "Hệ thống sẽ xóa vĩnh viễn dữ liệu người dùng trong vòng 30 ngày kể từ ngày yêu cầu"), các quyết định thiết kế, bằng chứng triển khai và các trường hợp thử nghiệm chứng minh sự tuân thủ.Điều này cung cấp bằng chứng có thể kiểm tra được và đảm bảo không bỏ sót điều khoản quy định nào.`,
  },
  'ba-re-015': {
    question: `BA phát hiện ra rằng 30% lỗi trong quá trình sản xuất bắt nguồn từ các yêu cầu mơ hồ hoặc thiếu sót.BA dẫn đầu nên đề xuất cải tiến mang tính hệ thống nào?`,
    options: [
      `Thuê thêm người kiểm tra QA để phát hiện lỗi sớm hơn`,
      `Triển khai đánh giá yêu cầu chính thức với danh sách kiểm tra có cấu trúc, số liệu chất lượng yêu cầu và vòng phản hồi phân tích nguyên nhân gốc rễ`,
      `Giảm số lượng yêu cầu để giảm thiểu sai sót`,
      `Chuyển từ Agile sang Waterfall để có nhiều thời gian đáp ứng yêu cầu hơn`
    ],
    explanation: `Phân tích nguyên nhân gốc rễ cho thấy các vấn đề về chất lượng yêu cầu.Cải tiến có hệ thống bao gồm: (1) đánh giá ngang hàng có cấu trúc với danh sách kiểm tra (tính đầy đủ, nhất quán, khả năng kiểm tra, rõ ràng), (2) theo dõi số liệu (tỷ lệ rò rỉ lỗi, độ biến động của yêu cầu, phạm vi đánh giá) và (3) vòng phản hồi trong đó các lỗi sản xuất được truy ngược lại các yêu cầu và bài học kinh nghiệm được áp dụng.Đây là một cải tiến quy trình, không chỉ là thêm nhiều người hơn.`,
  },
  'ba-dk-001': {
    question: `Tại sao kiến ​​thức về miền lại quan trọng đối với Nhà phân tích kinh doanh?`,
    options: [
      `BA cần có kiến ​​thức domain để viết code cho hệ thống`,
      `Kiến thức về miền giúp BA hiểu được bối cảnh kinh doanh, nói ngôn ngữ của các bên liên quan, đặt câu hỏi hay hơn và xác định những lỗ hổng mà các chuyên gia không thuộc miền sẽ bỏ qua`,
      `Kiến thức miền chỉ quan trọng với BA cấp cao`,
      `Kiến thức về miền thay thế nhu cầu về kỹ thuật thu thập yêu cầu`
    ],
    explanation: `Một BA có kiến ​​thức về lĩnh vực có thể: (1) hiểu các thuật ngữ và khái niệm trong ngành mà không cần giải thích liên tục, (2) xác định các yêu cầu ngụ ý mà các bên liên quan cho là hiển nhiên, (3) dự đoán các nhu cầu về quy định và tuân thủ, (4) thách thức các yêu cầu không thực tế dựa trên kinh nghiệm trong ngành, (5) xây dựng uy tín với các bên liên quan trong kinh doanh.Kiến thức về miền là một hệ số nhân cho tất cả các kỹ năng BA khác.`,
  },
  'ba-dk-002': {
    question: `Trong thương mại điện tử, “SKU” có nghĩa là gì?`,
    options: [
      `Đơn vị kiến ​​thức chuẩn`,
      `Đơn vị lưu kho - mã định danh duy nhất cho từng sản phẩm và mẫu mã riêng biệt`,
      `Cập nhật khóa bán hàng`,
      `Tiện ích kiến ​​thức hệ thống`
    ],
    explanation: `SKU (Đơn vị giữ hàng tồn kho) xác định duy nhất từng biến thể sản phẩm trong quản lý hàng tồn kho.Ví dụ: "Áo thun xanh cỡ M" có SKU khác với "Áo thun xanh cỡ L".Các BA làm việc trên hệ thống thương mại điện tử phải hiểu SKU để quản lý hàng tồn kho, xử lý đơn hàng và yêu cầu báo cáo.`,
  },
  'ba-dk-003': {
    question: `Trong các ứng dụng fintech, KYC (Biết khách hàng của bạn) là một quy trình tùy chọn mà các công ty có thể bỏ qua để cải thiện trải nghiệm người dùng.`,
    explanation: `KYC (Biết khách hàng của bạn) là yêu cầu pháp lý bắt buộc đối với các tổ chức tài chính ở hầu hết các quốc gia.Nó liên quan đến việc xác minh danh tính khách hàng, đánh giá rủi ro và giám sát các giao dịch để ngăn chặn hoạt động rửa tiền (AML), gian lận và tài trợ khủng bố.Việc bỏ qua KYC có thể dẫn đến các hình phạt pháp lý nghiêm trọng, phạt tiền và thu hồi giấy phép.BA phải thiết kế hệ thống cân bằng giữa việc tuân thủ KYC với trải nghiệm người dùng.`,
  },
  'ba-dk-004': {
    question: `Trong lĩnh vực CNTT chăm sóc sức khỏe, thuật ngữ "HL7" ám chỉ điều gì?`,
    options: [
      `Ngôn ngữ lập trình cho thiết bị y tế`,
      `Health Level Seven - một bộ tiêu chuẩn quốc tế về trao đổi, tích hợp, chia sẻ và truy xuất thông tin sức khỏe điện tử`,
      `Một loại cơ sở dữ liệu bệnh viện`,
      `Hệ thống phân loại chẩn đoán y tế`
    ],
    explanation: `HL7 (Health Level Seven International) xác định các tiêu chuẩn trao đổi dữ liệu chăm sóc sức khỏe.HL7 v2 sử dụng các bản tin được phân cách bằng dấu sổ đứng (được triển khai rộng rãi nhất).HL7 FHIR (Tài nguyên tương tác chăm sóc sức khỏe nhanh) là tiêu chuẩn dựa trên REST hiện đại.Cử nhân chăm sóc sức khỏe phải hiểu HL7 để xác định các yêu cầu tích hợp giữa các hệ thống lâm sàng (EHR, phòng thí nghiệm, hiệu thuốc, thanh toán).`,
  },
  'ba-dk-005': {
    question: `Hệ thống ERP là gì và nó thường bao gồm những lĩnh vực kinh doanh nào?`,
    options: [
      `ERP (Error Recovery Protocol) là một hệ thống khắc phục thảm họa`,
      `ERP (Enterprise Resource Planning) là một hệ thống quản lý kinh doanh tích hợp bao gồm tài chính, nhân sự, mua sắm, tồn kho, sản xuất, bán hàng và CRM trong một nền tảng duy nhất`,
      `ERP là một phương pháp quản lý dự án giống như Scrum`,
      `ERP là loại cơ sở dữ liệu được doanh nghiệp sử dụng`
    ],
    explanation: `Các hệ thống ERP (Enterprise Resource Planning) như SAP, Oracle, Microsoft Dynamics tích hợp các quy trình kinh doanh cốt lõi vào một hệ thống.Các mô-đun chính: Tài chính (GL, AP, AR), Nhân sự (tiền lương, nhân tài), Chuỗi cung ứng (mua sắm, tồn kho, hậu cần), Sản xuất (MRP, lập kế hoạch sản xuất), Bán hàng & CRM.Các BA làm việc trong các dự án ERP phải hiểu sự phụ thuộc giữa các mô-đun - một thay đổi trong một mô-đun sẽ ảnh hưởng đến các mô-đun khác.`,
  },
  'ba-dk-006': {
    question: `Trong lĩnh vực hậu cần, "giao hàng chặng cuối" ám chỉ điều gì?`,
    options: [
      `Bước đầu tiên của quy trình giao hàng từ kho đến trung tâm phân phối`,
      `Chặng giao hàng cuối cùng từ trung tâm phân phối đến tận nhà khách hàng cuối cùng - thường là phần đắt tiền và phức tạp nhất trong chuỗi cung ứng`,
      `Quy trình trả lại sản phẩm cho nhà sản xuất`,
      `Vận chuyển đường dài giữa các quốc gia`
    ],
    explanation: `Giao hàng chặng cuối là bước cuối cùng (và thường tốn kém nhất): từ trung tâm/trung tâm phân phối địa phương đến tận nhà khách hàng.Nó chiếm ~53% tổng chi phí vận chuyển do: giao hàng riêng lẻ nhỏ, giao thông đô thị, nỗ lực giao hàng không thành công và khoảng thời gian sẵn có của khách hàng.Cử nhân hậu cần tập trung vào việc tối ưu hóa điều này thông qua tối ưu hóa tuyến đường, khoảng thời gian giao hàng, theo dõi thời gian thực và các điểm giao hàng thay thế (tủ khóa, cửa hàng nhận hàng).`,
  },
  'ba-dk-007': {
    question: `Thiết kế các yêu cầu chức năng chính cho ứng dụng "ví kỹ thuật số" fintech.Bao gồm các tính năng cốt lõi, yêu cầu quy định và cân nhắc về bảo mật.`,
    answer: `Ví kỹ thuật số - Yêu cầu chức năng chính:

1. Quản lý tài khoản:
- Đăng ký người dùng với xác minh KYC (tải lên ID, xác minh selfie, bằng chứng địa chỉ)
- Tài khoản nhiều tầng dựa trên cấp độ xác minh (Cấp 1: giới hạn, Cấp 2: đầy đủ)
- Quản lý hồ sơ, liên kết tài khoản/thẻ ngân hàng

2. Hoạt động tiền tệ:
- Nạp tiền: chuyển khoản ngân hàng, thẻ tín dụng/thẻ ghi nợ, nộp tiền mặt tại các địa điểm đối tác
- Gửi tiền: Chuyển khoản P2P (đến điện thoại/email), thanh toán bằng mã QR
- Thanh toán hóa đơn: tiện ích, viễn thông, bảo hiểm, phí chính phủ
- Rút tiền: về tài khoản ngân hàng liên kết, tại ATM thông qua rút tiền không cần thẻ

3. Quản lý giao dịch:
- Lịch sử giao dịch với các bộ lọc (ngày, loại, số tiền, trạng thái)
- Biên lai giao dịch (có thể tải xuống, có thể chia sẻ)
- Lập kế hoạch thanh toán định kỳ
- Giới hạn giao dịch (ngày/tháng) theo cấp

4. Yêu cầu pháp lý:
- Tuân thủ KYC/AML (xác minh danh tính, giám sát giao dịch)
- Báo cáo giao dịch đáng ngờ (STR) cho cơ quan tài chính
- Lưu giữ dữ liệu theo yêu cầu quy định (thường là 5-7 năm)
- Tuân thủ giấy phép tiền điện tử
- Bảo vệ người tiêu dùng: giải quyết tranh chấp, chính sách hoàn tiền

5. Bảo mật:
- Xác thực đa yếu tố (sinh trắc học + mã PIN)
- Liên kết thiết bị và quản lý thiết bị đáng tin cậy
- Ký kết giao dịch chuyển nhượng giá trị cao
- Phát hiện gian lận theo thời gian thực (kiểm tra vận tốc, địa lý bất thường, dấu vân tay của thiết bị)
- Mã thông báo thẻ (không lưu trữ dữ liệu thẻ thô)`,
    explanation: `Các BA Fintech phải cân bằng giữa trải nghiệm người dùng với các yêu cầu pháp lý khắt khe.Việc tuân thủ KYC/AML là không thể thương lượng nhưng phải được thiết kế để giảm thiểu xung đột (ví dụ: xác minh theo cấp độ).Các tính năng bảo mật phải mạnh mẽ mà không làm cho ứng dụng không thể sử dụng được.Hiểu được bối cảnh pháp lý (giấy phép tiền điện tử, bảo vệ dữ liệu, bảo vệ người tiêu dùng) là điều cần thiết cho công việc BA miền fintech.`,
  },
  'ba-dk-008': {
    question: `Khi làm việc trong một dự án thương mại điện tử, "tỷ lệ bỏ giỏ hàng" đo lường điều gì và tại sao nó lại quan trọng đối với một BA?`,
    options: [
      `Tỷ lệ giỏ hàng bị hỏng trong các cửa hàng thực tế`,
      `Tỷ lệ phần trăm người dùng thêm mặt hàng vào giỏ hàng nhưng rời đi mà không hoàn tất giao dịch mua - tỷ lệ này tiết lộ các điểm cản trở về trải nghiệm người dùng và thông báo các yêu cầu về tối ưu hóa thanh toán`,
      `Tỷ lệ loại bỏ sản phẩm khỏi danh mục`,
      `Tốc độ tải trang giỏ hàng`
    ],
    explanation: `Tỷ lệ bỏ giỏ hàng (trên toàn cầu ~ 70%) đo lường doanh số bán hàng bị mất.Các nguyên nhân phổ biến mà BA nên giải quyết trong các yêu cầu: chi phí vận chuyển không mong muốn (→ hiển thị giao hàng sớm), bắt buộc tạo tài khoản (→ thanh toán cho khách), thanh toán phức tạp (→ ít bước hơn), lo ngại về bảo mật (→ huy hiệu tin cậy) và các hạn chế về phương thức thanh toán (→ nhiều tùy chọn thanh toán).BA có thể xác định các yêu cầu thử nghiệm A/B để tối ưu hóa chuyển đổi thanh toán.`,
  },
  'ba-dk-009': {
    question: `Một nhóm bệnh viện muốn triển khai hệ thống Hồ sơ sức khỏe điện tử (EHR) thống nhất trên 5 bệnh viện.Với tư cách là BA trưởng nhóm, hãy xác định các thách thức quan trọng theo từng miền cụ thể và cách tiếp cận yêu cầu của bạn phải khác với một dự án phần mềm doanh nghiệp thông thường như thế nào.`,
    answer: `EHR chăm sóc sức khỏe - Những thách thức theo từng miền cụ thể:

1. An toàn bệnh nhân (Quan trọng đến tính mạng):
- Dữ liệu không chính xác có thể giết chết bệnh nhân → yêu cầu phải bao gồm các quy tắc xác nhận lâm sàng, kiểm tra tương tác thuốc, cảnh báo dị ứng
- Khả năng chịu lỗi gần như bằng 0 → yêu cầu toàn diện về từng trường hợp, các kịch bản kiểm thử quan trọng về an toàn
- Các quy tắc hỗ trợ quyết định lâm sàng (CDS) phải dựa trên bằng chứng và được cập nhật thường xuyên

2. Độ phức tạp của quy định:
- HIPAA (US) / PDPA (VN) / GDPR: quyền riêng tư dữ liệu của bệnh nhân, kiểm soát truy cập, quy trình kiểm toán
- Tiêu chuẩn mã hóa lâm sàng: ICD-10 (chẩn đoán), CPT (thủ thuật), SNOMED CT (thuật ngữ lâm sàng)
- Tiêu chuẩn tương tác: HL7 FHIR, DICOM (hình ảnh), HL7 v2 (tích hợp kế thừa)
- Yêu cầu chứng nhận (JCI, tiêu chuẩn của cơ quan y tế địa phương)

3. Độ phức tạp của quy trình làm việc lâm sàng:
- Mỗi bệnh viện có quy trình làm việc khác nhau → phải lập mô hình theo hiện trạng của từng bệnh viện, xác định tiêu chuẩn hóa
- Quy trình công việc lâm sàng là phi tuyến tính (không giống quy trình công việc kinh doanh): gián đoạn, chuyển đổi bối cảnh nhiều bệnh nhân, ghi đè khẩn cấp
- Việc nhận con nuôi của bác sĩ là rủi ro thất bại số 1 → các yêu cầu phải giảm thiểu gánh nặng tài liệu

4. Sự khác biệt về cách tiếp cận yêu cầu:
- Sự phụ thuộc của SME: đòi hỏi sự tham gia của bác sĩ lâm sàng ở mọi giai đoạn (bác sĩ, y tá, dược sĩ)
- Thuật ngữ: BA phải học từ vựng lâm sàng (không chỉ dịch thuật ngữ kinh doanh)
- Xác nhận: thử nghiệm mô phỏng lâm sàng (dựa trên kịch bản với nhân viên lâm sàng, không chỉ thử nghiệm chức năng)
- Quản lý thay đổi: được cấu trúc thành quản trị lâm sàng, không chỉ quản trị CNTT
- Di chuyển dữ liệu: di chuyển lịch sử bệnh nhân là rất quan trọng và phức tạp (các hệ thống mã hóa khác nhau, hồ sơ giấy)

5. Khả năng tương tác:
- Hệ thống phòng thí nghiệm, nhà thuốc, X quang, thanh toán đều phải tích hợp
- So khớp bệnh nhân giữa các bệnh viện (Master Patient Index — MPI)
- Tích hợp bên ngoài: bảo hiểm y tế, cơ quan đăng ký chính phủ, mạng lưới giới thiệu`,
    explanation: `Các dự án CNTT chăm sóc sức khỏe thất bại với tỷ lệ cao hơn so với các ngành khác vì lĩnh vực này đặc biệt phức tạp: liên quan đến an toàn tính mạng, quy định nặng nề, quy trình làm việc lâm sàng phức tạp và thách thức áp dụng của bác sĩ.BA trưởng nhóm phải tiếp cận vấn đề này theo cách khác - tham gia nhiều hơn vào lâm sàng của SME, xác nhận chặt chẽ hơn, thử nghiệm mô phỏng lâm sàng và hiểu biết sâu sắc về các tiêu chuẩn chăm sóc sức khỏe.Cái giá của việc thực hiện sai yêu cầu không chỉ là tiền - mà còn là sự an toàn của bệnh nhân.`,
  },
  'ba-dk-010': {
    question: `BA trưởng nhóm nên tiếp cận việc học một lĩnh vực hoàn toàn mới như thế nào (ví dụ: chuyển từ thương mại điện tử sang bảo hiểm) khi bắt đầu một dự án mới?`,
    options: [
      `Dựa hoàn toàn vào các bên liên quan để giải thích mọi thứ trong hội thảo`,
      `Thực hiện một cách tiếp cận có hệ thống: nghiên cứu các nguyên tắc cơ bản của ngành (sách, khóa học, báo cáo), chuyên gia về miền bóng tối, phân tích sản phẩm của đối thủ cạnh tranh, tìm hiểu bối cảnh pháp lý và tạo bảng chú giải thuật ngữ về miền - trở nên thông thạo (không phải chuyên gia) trong vòng 4-6 tuần`,
      `Từ chối dự án vì chuyên môn về miền là điều cần thiết ngay từ ngày đầu`,
      `Chỉ sử dụng các bài viết trực tuyến và bài đăng trên blog để tìm hiểu tên miền nhanh chóng`
    ],
    explanation: `Học về miền hiệu quả: (1) Nghiên cứu các nguyên tắc cơ bản (sách giáo khoa ngành, giáo trình cấp chứng chỉ như LOMA cho bảo hiểm), (2) Phân tích đối thủ cạnh tranh (sử dụng sản phẩm của họ, đọc tài liệu của họ), (3) Các chuyên gia về miền bóng tối trong 2-3 ngày, (4) Lập bản đồ bối cảnh quy định (yêu cầu tuân thủ), (5) Tạo bảng chú giải miền (thuật ngữ chính, từ viết tắt, khái niệm), (6) Tham dự các sự kiện/hội thảo trực tuyến trong ngành.BA không cần phải trở thành chuyên gia về lĩnh vực - họ cần đủ thông thạo để đặt câu hỏi phù hợp và thách thức các giả định.`,
  },
  'ba-doc-001': {
    question: `SRS có nghĩa là gì trong tài liệu phân tích kinh doanh?`,
    options: [
      `Đặc tả tài nguyên hệ thống`,
      `Đặc tả yêu cầu phần mềm`,
      `Hệ thống báo cáo tiêu chuẩn`,
      `Tóm tắt đánh giá của các bên liên quan`
    ],
    explanation: `SRS (Đặc tả yêu cầu phần mềm) là một tài liệu toàn diện mô tả những gì phần mềm nên làm.Nó thường bao gồm các yêu cầu chức năng, yêu cầu phi chức năng, giao diện hệ thống, các ràng buộc và giả định.IEEE 830 là một tiêu chuẩn được sử dụng rộng rãi cho cấu trúc SRS.`,
  },
  'ba-doc-002': {
    question: `Sự khác biệt CHÍNH giữa BRD (Tài liệu yêu cầu kinh doanh) và SRS là gì?`,
    options: [
      `BRD ngắn hơn;SRS dài hơn`,
      `BRD tập trung vào NHỮNG GÌ doanh nghiệp cần và TẠI SAO;SRS tập trung vào CÁCH hệ thống sẽ đáp ứng những nhu cầu đó về mặt kỹ thuật`,
      `BRD dành cho các nhà phát triển;SRS dành cho các bên liên quan`,
      `Không có sự khác biệt - chúng là cùng một tài liệu`
    ],
    explanation: `BRD nắm bắt các yêu cầu ở cấp độ doanh nghiệp: mục tiêu, phạm vi kinh doanh, các bên liên quan và nhu cầu cấp cao (CÁI GÌ và TẠI SAO).SRS chuyển những thông số này thành các thông số kỹ thuật chi tiết ở cấp hệ thống: yêu cầu chức năng, mô hình dữ liệu, giao diện và các ràng buộc (CÁCH).BRD được viết cho các bên liên quan trong kinh doanh;SRS chủ yếu dành cho nhóm phát triển.`,
  },
  'ba-doc-003': {
    question: `Trong các dự án Agile, tài liệu bị loại bỏ hoàn toàn vì Tuyên ngôn Agile nói rằng "phần mềm hoạt động được trên tài liệu toàn diện".`,
    explanation: `Tuyên ngôn Agile coi trọng phần mềm hoạt động HƠN tài liệu toàn diện - nó không nói "không có tài liệu".Các nhóm linh hoạt vẫn ghi lại tài liệu nhưng tập trung vào tài liệu "vừa đủ" để tăng thêm giá trị: câu chuyện của người dùng, tiêu chí chấp nhận, quyết định kiến ​​trúc (ADR), tài liệu API và sổ tay.Điều quan trọng là tài liệu nhẹ, sống động và hữu ích.`,
  },
  'ba-doc-004': {
    question: `BA sẽ tạo tài liệu nào để mô tả các thông số chức năng chi tiết, từ điển dữ liệu và thiết kế giao diện cho nhóm phát triển?`,
    options: [
      `BRD (Tài liệu yêu cầu kinh doanh)`,
      `FRD (Tài liệu yêu cầu chức năng) / FSD (Tài liệu đặc tả chức năng)`,
      `Điều lệ dự án`,
      `Kế hoạch kiểm tra`
    ],
    explanation: `FRD/FSD thu hẹp khoảng cách giữa BRD và việc triển khai.Nó chứa các thông số kỹ thuật chi tiết về chức năng, định nghĩa thành phần dữ liệu, quy tắc nghiệp vụ, bố cục màn hình, thông số kỹ thuật giao diện và xử lý lỗi.Đây là tài liệu tham khảo chính cho các nhà phát triển trong quá trình triển khai và cho QA trong quá trình tạo trường hợp thử nghiệm.`,
  },
  'ba-doc-005': {
    question: `PRD (Tài liệu yêu cầu sản phẩm) là gì và nó khác với BRD như thế nào?`,
    options: [
      `PRD chỉ là tên kỹ thuật số của BRD`,
      `PRD lấy sản phẩm làm trung tâm - nó xác định tầm nhìn, tính năng, tính cách người dùng và tiêu chí phát hành của sản phẩm;BRD lấy doanh nghiệp làm trung tâm - nó xác định các mục tiêu kinh doanh và biện minh`,
      `PRD dành cho phần cứng;BRD dành cho phần mềm`,
      `PRD được viết bởi các nhà phát triển;BRD được viết bởi các nhà quản lý`
    ],
    explanation: `BRD trả lời “tại sao doanh nghiệp lại cần điều này?”— tập trung vào các mục tiêu kinh doanh, ROI và sự biện minh.PRD trả lời "chúng ta đang xây dựng sản phẩm gì?"- tập trung vào tầm nhìn sản phẩm, tính cách người dùng, danh sách tính năng, luồng người dùng và số liệu thành công.Trong các tổ chức định hướng sản phẩm, PRD (do Người quản lý sản phẩm viết) thường thay thế BRD.Cả hai có thể cùng tồn tại trong các tổ chức lớn hơn.`,
  },
  'ba-doc-006': {
    question: `Viết đề cương mẫu cho BRD (Tài liệu yêu cầu kinh doanh).Bao gồm các phần chính mà một BA nên đề cập.`,
    answer: `1. Thông tin tài liệu (phiên bản, tác giả, ngày tháng, trạng thái phê duyệt)
2. Tóm tắt điều hành (tổng quan ngắn gọn về vấn đề kinh doanh và giải pháp đề xuất)
3. Mục tiêu kinh doanh (mục tiêu có thể đo lường được mà dự án hướng tới)
4. Phạm vi dự án (trong phạm vi, ngoài phạm vi, giả định, ràng buộc)
5. Phân tích các bên liên quan (danh sách các bên liên quan, vai trò, trách nhiệm, mức độ ảnh hưởng)
6. Trạng thái hiện tại (mô tả quy trình hiện tại, điểm yếu, khoảng trống)
7. Trạng thái tương lai (mô tả quy trình sắp xảy ra, cải tiến)
8. Yêu cầu nghiệp vụ (danh sách đánh số các yêu cầu cấp cao với mức độ ưu tiên và lý do)
9. Tóm tắt yêu cầu chức năng (các tính năng cấp cao được ánh xạ tới yêu cầu nghiệp vụ)
10. Yêu cầu phi chức năng (hiệu suất, bảo mật, tuân thủ, khả năng sử dụng)
11. Business Rules (quy tắc quản lý logic nghiệp vụ)
12. Yêu cầu dữ liệu (thực thể dữ liệu chính, nguồn, di chuyển)
13. Giả định và sự phụ thuộc
14. Rủi ro & Chiến lược giảm nhẹ
15. Số liệu thành công/KPI
16. Bảng chú giải thuật ngữ
17. Phụ lục (tài liệu hỗ trợ, tài liệu tham khảo)`,
    explanation: `BRD có cấu trúc tốt sẽ cung cấp bối cảnh kinh doanh hoàn chỉnh cho dự án.Các phần chính đảm bảo không bỏ sót điều gì: mục tiêu phù hợp với dự án, phạm vi ngăn chặn phạm vi leo thang, phân tích các bên liên quan đảm bảo có đúng người tham gia, trạng thái hiện tại/tương lai cho thấy sự chuyển đổi và các thước đo thành công xác định cách đo lường thành công.`,
  },
  'ba-doc-007': {
    question: `Khái niệm "tài liệu sống" là gì và nó áp dụng như thế nào vào công việc của BA?`,
    options: [
      `Tài liệu được lưu trữ trên trang web thay vì trong tệp Word`,
      `Tài liệu được cập nhật liên tục khi sản phẩm phát triển, luôn đồng bộ với trạng thái hệ thống hiện tại và thường được tạo tự động hoặc gắn chặt với các tạo phẩm nguồn (kiểm tra, mã, tồn đọng)`,
      `Tài liệu được viết bằng công cụ AI`,
      `Bản thảo đầu tiên của các tài liệu chưa bao giờ được hoàn thiện`
    ],
    explanation: `Tài liệu sống luôn cập nhật bằng cách được liên kết chặt chẽ với hệ thống: thông số kỹ thuật thực thi (kịch bản thử nghiệm BDD đóng vai trò là yêu cầu), tài liệu API được tạo tự động (Swagger/OpenAPI), wiki được cập nhật mỗi lần chạy nước rút và bản ghi quyết định kiến ​​trúc (ADR).Cách tiếp cận này làm giảm vấn đề "thối nát tài liệu" khi tài liệu trở nên lỗi thời ngay sau khi tạo.`,
  },
  'ba-doc-008': {
    question: `Khi ghi lại các quy tắc kinh doanh cho một hệ thống tính toán bảo hiểm phức tạp, kỹ thuật nào mang lại sự rõ ràng NHẤT cho cả nhóm kinh doanh và kỹ thuật?`,
    options: [
      `Đoạn văn bản dài mô tả từng quy tắc`,
      `Bảng quyết định hoặc cây quyết định ánh xạ trực quan các điều kiện tới hành động/kết quả`,
      `Sơ đồ trình tự UML`,
      `Sơ đồ thực thể-mối quan hệ`
    ],
    explanation: `Bảng quyết định ánh xạ các kết hợp điều kiện (độ tuổi, loại chính sách, mức độ rủi ro) tới kết quả (tỷ lệ phí bảo hiểm, phạm vi bảo hiểm) trong một mạng lưới có cấu trúc.Chúng vượt trội hơn văn bản đối với các bộ quy tắc phức tạp vì: (1) chúng hiển thị tất cả các kết hợp, (2) chúng tiết lộ các khoảng trống (các kết hợp bị thiếu), (3) chúng có thể kiểm tra trực tiếp và (4) cả nhóm kinh doanh và công nghệ đều có thể đọc chúng.Cây quyết định hoạt động tương tự nhưng hiển thị trực quan logic phân nhánh.`,
  },
  'ba-doc-009': {
    question: `Thiết kế chiến lược tài liệu cho nền tảng thương mại điện tử dựa trên vi dịch vụ được xây dựng bởi 3 nhóm Scrum.Bao gồm các loại tài liệu, quyền sở hữu, công cụ và quy trình bảo trì.`,
    answer: `Chiến lược tài liệu:

1. Lớp kiến trúc:
- Bản ghi Quyết định Kiến trúc (ADR) — một bản ghi cho mỗi quyết định quan trọng, được lưu trữ trong kho Git
- Sơ đồ ngữ cảnh hệ thống (C4 cấp 1) — thuộc sở hữu của Tech Lead, được cập nhật hàng quý
- Danh mục dịch vụ — liệt kê tất cả các vi dịch vụ, chủ sở hữu, API, phần phụ thuộc

2. Lớp API:
- Thông số OpenAPI/Swagger - được tạo tự động từ mã, được xuất bản lên cổng API
- Nhật ký thay đổi API - được duy trì trên mỗi dịch vụ, phiên bản ngữ nghĩa
- Hướng dẫn tích hợp — được BA duy trì cho các điểm tích hợp giữa các nhóm

3. Lớp nghiệp vụ:
- Câu chuyện của người dùng + tiêu chí chấp nhận trong Jira (live backlog)
- Bảng thuật ngữ tên miền trong Confluence — được duy trì bởi Cộng đồng thực hành BA
- Bản đồ quy trình kinh doanh (BPMN) — dành cho các hành trình quan trọng của khách hàng

4. Lớp vận hành:
- Runbooks cho mỗi dịch vụ - thuộc sở hữu của nhóm dịch vụ
- Hướng dẫn triển khai — được duy trì bởi DevOps
- Khám nghiệm tử thi sự cố — được tạo sau mỗi sự cố sản xuất

Công cụ: Confluence (tài liệu kinh doanh), Git (ADR, thông số API), Swagger Hub (cổng API), Miro (sơ đồ)

Bảo trì: Xem xét tài liệu như một phần của Định nghĩa Hoàn thành.Nhiệm vụ chạy nước rút "nợ tài liệu" hàng tháng.Phát hiện trang cũ (tự động gắn cờ các trang không được cập nhật trong 90 ngày).`,
    explanation: `Microservices nhân lên nhu cầu về tài liệu vì mỗi dịch vụ có API, triển khai và bối cảnh kinh doanh riêng.Chiến lược phân lớp đảm bảo mỗi đối tượng (kiến trúc sư, nhà phát triển, BA, vận hành) tìm thấy những gì họ cần.Tự động tạo (Swagger, ADR trong Git) giúp tài liệu được đồng bộ hóa.Việc đưa việc xem xét tài liệu thành một phần của DoD sẽ ngăn ngừa nợ tài liệu tích lũy.`,
  },
  'ba-doc-010': {
    question: `Với tư cách là Trưởng nhóm BA, hãy thiết lập tiêu chuẩn tài liệu và khung quản trị cho nhóm BA gồm 8 nhà phân tích làm việc trên các dự án khác nhau.Bao gồm các mẫu, tiêu chí chất lượng, quy trình đánh giá và công cụ.`,
    answer: `Khung quản trị tài liệu:

1. Thư viện mẫu:
- Mẫu chuẩn: BRD, FRD, SRS, Use Case Spec, User Story, Decision Log
- Mỗi mẫu bao gồm các phần, ghi chú hướng dẫn và ví dụ
- Được lưu trữ trong không gian Hợp lưu được chia sẻ với kiểm soát phiên bản

2. Tiêu chí chất lượng (SMART-Q):
- Cụ thể: không có thuật ngữ mơ hồ (“phù hợp”, “nhanh”, “thân thiện với người dùng”)
- Đo lường được: tất cả các yêu cầu đều có thể kiểm tra được với tiêu chí đạt/không đạt rõ ràng
- Phù hợp với đối tượng: BRD dành cho doanh nghiệp;FRD cho công nghệ
- Đã đánh giá: đánh giá ngang hàng đã hoàn thành và được ký kết
- Có thể theo dõi: mọi yêu cầu được liên kết với nguồn và trường hợp thử nghiệm
- Đã kiểm tra chất lượng: vượt qua danh sách kiểm tra tài liệu BA

3. Quy trình xem xét:
- Tự kiểm tra đối chiếu (tác giả)
- Đánh giá ngang hàng bởi một BA khác (ưu tiên dự án khác)
- Đánh giá SME của chuyên gia tên miền hoặc trưởng nhóm công nghệ
- Phê duyệt chính thức của các bên liên quan/PO
- Tổng thời gian thực hiện: 3 ngày làm việc cho mỗi chu kỳ xét duyệt

4. Công cụ & Tiêu chuẩn:
- Hợp lưu cho các tài liệu BA (cấu trúc trang được chuẩn hóa)
- Jira cho các câu chuyện/yêu cầu (được liên kết với các trang Confluence)
- Miro/Lucidchart cho sơ đồ (chuẩn BPMN 2.0, UML)
- Quy ước đặt tên: [Project]-[DocType]-[Version] (ví dụ: "ECOM-BRD-v2.1")

5. Quản trị:
- Kiểm tra tài liệu BA hàng tháng (ngẫu nhiên 2 tài liệu cho mỗi nhà phân tích)
- Số liệu tài liệu: tỷ lệ hoàn thành đánh giá, tỷ lệ làm lại, sự hài lòng của các bên liên quan
- Làm mới mẫu hàng quý dựa trên phản hồi của nhóm`,
    explanation: `Nếu không có tiêu chuẩn tài liệu, 8 BA tạo ra 8 kiểu tài liệu khác nhau, khiến việc chuyển giao kiến ​​thức giữa các dự án trở nên khó khăn.Khung quản trị đảm bảo tính nhất quán (mẫu), chất lượng (quy trình đánh giá, danh sách kiểm tra) và cải tiến liên tục (kiểm toán, số liệu).Điều quan trọng là làm cho các tiêu chuẩn trở nên thiết thực - các quy trình quá cứng nhắc sẽ bị bỏ qua, vì vậy các mẫu phải hữu ích chứ không quan liêu.`,
  },
  'ba-doc-011': {
    question: `Một khách hàng yêu cầu một tài liệu SRS dài 200 trang trước khi bắt đầu bất kỳ quá trình phát triển nào, nhưng dự án đang tuân theo Agile.BA trưởng nhóm nên giải quyết tình huống này như thế nào?`,
    options: [
      `Từ chối yêu cầu của khách hàng và giải thích rằng Agile có nghĩa là không có tài liệu`,
      `Viết SRS đầy đủ 200 trang để làm hài lòng khách hàng, sau đó bỏ qua trong quá trình phát triển`,
      `Đàm phán một thỏa hiệp: cung cấp kiến ​​trúc "SRS-lite" nhẹ, bao gồm kiến ​​trúc, các quy tắc kinh doanh chính và trả trước NFR, sau đó xây dựng chi tiết dần dần thông qua các câu chuyện của người dùng và tài liệu chạy nước rút, cung cấp các cập nhật tài liệu thường xuyên phù hợp với nhịp chạy nước rút`,
      `Chuyển dự án sang Waterfall để phù hợp với khách hàng`
    ],
    explanation: `Giải pháp cân bằng kỳ vọng của khách hàng với các nguyên tắc Agile.Tài liệu trả trước mang lại sự tin cậy mà khách hàng cần (kiến trúc, các quyết định quan trọng, NFR) mà không trở thành một đặc tả toàn diện sẽ lỗi thời trước khi bắt đầu phát triển.Việc xây dựng tiến bộ thông qua các tạo phẩm chạy nước rút giúp cập nhật tài liệu.Cập nhật thường xuyên cho khách hàng thấy rằng tài liệu sẽ phát triển cùng với sản phẩm.`,
  },
  'ba-us-001': {
    question: `Định dạng chuẩn của câu chuyện của người dùng là gì?`,
    options: [
      `Cho [bối cảnh], Khi [hành động], Sau đó [kết quả]`,
      `Với tư cách là một [vai trò], tôi muốn [tính năng], để [lợi ích]`,
      `Nếu [điều kiện] thì [hành động], nếu không thì [thay thế]`,
      `Tiêu đề, Mô tả, Ưu tiên, Trạng thái`
    ],
    explanation: `Định dạng câu chuyện tiêu chuẩn của người dùng là: "Là một [loại người dùng], tôi muốn [mục tiêu/mong muốn], để [lợi ích/lý do]."Định dạng này nắm bắt được AI cần tính năng này, NHỮNG GÌ họ cần và TẠI SAO.Định dạng Given-When-Then được sử dụng cho tiêu chí chấp nhận (BDD), chứ không phải bản thân câu chuyện.`,
  },
  'ba-us-002': {
    question: `Từ viết tắt ĐẦU TƯ có nghĩa là gì trong bối cảnh câu chuyện của người dùng?`,
    options: [
      `Quan trọng, Cần thiết, Đã xác thực, Đã ước tính, Đã xác định phạm vi, Đã kiểm tra`,
      `Độc lập, có thể thương lượng, có giá trị, có thể ước tính được, nhỏ, có thể kiểm tra được`,
      `Lặp lại, Thu hẹp, Đã xác minh, Hiệu quả, Có cấu trúc, Có thể theo dõi`,
      `Sáng tạo, đáng chú ý, khả thi, có thể thực thi, ổn định, minh bạch`
    ],
    explanation: `INVEST là một công cụ ghi nhớ cho chất lượng câu chuyện tốt của người dùng: Độc lập (không phụ thuộc), Có thể thương lượng (không phải hợp đồng), Có giá trị (mang lại giá trị kinh doanh), Ước tính (nhóm có thể xác định quy mô), Nhỏ (phù hợp với chạy nước rút), Có thể kiểm thử (tiêu chí chấp nhận rõ ràng).Những câu chuyện vi phạm ĐẦU TƯ sẽ khó lập kế hoạch và phân phối hơn.`,
  },
  'ba-us-003': {
    question: `Tiêu chí chấp nhận và câu chuyện của người dùng đều giống nhau - cả hai đều mô tả những gì người dùng muốn.`,
    explanation: `Câu chuyện của người dùng mô tả CÁI GÌ và TẠI SAO ở cấp độ cao ("Là người dùng, tôi muốn đặt lại mật khẩu của mình để có thể lấy lại quyền truy cập").Tiêu chí chấp nhận xác định các điều kiện cụ thể, có thể kiểm tra phải đáp ứng để câu chuyện được coi là hoàn chỉnh (ví dụ: "Email đặt lại mật khẩu được gửi trong vòng 30 giây", "Liên kết hết hạn sau 24 giờ").Tiêu chí chấp nhận chi tiết hơn và có thể đo lường được.`,
  },
  'ba-us-004': {
    question: `Trong sơ đồ ca sử dụng, "tác nhân" đại diện cho điều gì?`,
    options: [
      `Một module phần mềm bên trong hệ thống`,
      `Một thực thể bên ngoài (người, hệ thống hoặc thiết bị) tương tác với hệ thống`,
      `Cơ sở dữ liệu lưu trữ dữ liệu người dùng`,
      `Kịch bản thử nghiệm cho hệ thống`
    ],
    explanation: `Tác nhân là bất kỳ thực thể nào bên ngoài hệ thống tương tác với nó.Đây có thể là người dùng con người (ví dụ: Khách hàng, Quản trị viên), hệ thống khác (ví dụ: Cổng thanh toán) hoặc thiết bị (ví dụ: cảm biến IoT).Các tác nhân được vẽ dưới dạng hình que bên ngoài ranh giới hệ thống trong sơ đồ ca sử dụng UML.`,
  },
  'ba-us-005': {
    question: `Sự khác biệt giữa Epic và User Story là gì?`,
    options: [
      `Sử thi là dành cho lỗi;câu chuyện của người dùng là dành cho các tính năng`,
      `Sử thi là một khối lượng lớn tác phẩm có thể được chia thành các câu chuyện nhỏ hơn của người dùng;nó quá lớn để hoàn thành trong một lần chạy nước rút`,
      `Sử thi là một bản mô tả chi tiết;câu chuyện của người dùng là một bản tóm tắt`,
      `Không có sự khác biệt - chúng là những thuật ngữ có thể hoán đổi cho nhau`
    ],
    explanation: `Epic là một câu chuyện người dùng lớn, quá lớn cho một lần chạy nước rút và cần được phân tách.Hệ thống phân cấp: Chủ đề → Sử thi → Câu chuyện của người dùng → Nhiệm vụ.Ví dụ: Sử thi: "Hệ thống xác thực người dùng" → Câu chuyện: "Đăng nhập bằng email", "Đặt lại mật khẩu", "Thiết lập 2FA", "Đăng nhập xã hội".Sử thi giúp tổ chức tồn đọng ở cấp độ chiến lược.`,
  },
  'ba-us-006': {
    question: `Viết 3 tiêu chí chấp nhận ở định dạng Given-When-Then (Gherkin) cho câu chuyện của người dùng sau: "Là khách hàng, tôi muốn thêm các mặt hàng vào giỏ hàng của mình để có thể mua nhiều sản phẩm cùng một lúc."`,
    answer: `Vì tôi đang ở trang chi tiết sản phẩm và sản phẩm còn hàng,
Khi tôi nhấp vào nút "Thêm vào giỏ hàng",
Sau đó, mặt hàng đó được thêm vào giỏ hàng của tôi và số lượng mặt hàng trong giỏ hàng tăng thêm 1.

Vì tôi có một mặt hàng trong giỏ hàng của mình,
Khi tôi thêm lại mục tương tự,
Khi đó số lượng mặt hàng đó trong giỏ hàng tăng thêm 1 (không trùng thành một dòng riêng).

Vì tôi đang ở trang sản phẩm và sản phẩm đã hết hàng,
Khi tôi xem nút "Thêm vào giỏ hàng",
Sau đó, nút này bị tắt và hiển thị "Hết hàng".`,
    explanation: `Given-When-Then (cú pháp Gherkin) cung cấp các tiêu chí chấp nhận có cấu trúc, có thể kiểm tra được."Đã cho" đặt điều kiện tiên quyết, "Khi" mô tả hành động, "Sau đó" nêu kết quả mong đợi.Tiêu chí chấp nhận tốt bao gồm đường đi phù hợp, các trường hợp khó khăn (thêm trùng lặp) và các tình huống lỗi (hết hàng).Chúng phải cụ thể và có thể kiểm chứng được.`,
  },
  'ba-us-007': {
    question: `Bản đồ câu chuyện người dùng là gì và khi nào BA nên sử dụng nó?`,
    options: [
      `Một kỹ thuật ánh xạ câu chuyện của người dùng vào các bảng cơ sở dữ liệu`,
      `Một bài tập trực quan sắp xếp các câu chuyện của người dùng dọc theo hành trình của người dùng theo chiều ngang (xương sống) và mức độ ưu tiên theo chiều dọc (bộ xương đi bộ), được sử dụng để lập kế hoạch phát hành và định nghĩa MVP`,
      `Sơ đồ cho thấy cách các câu chuyện của người dùng diễn ra trong quy trình phát triển`,
      `Một công cụ để ước tính điểm câu chuyện bằng cách lập kế hoạch chơi bài poker`
    ],
    explanation: `Bản đồ câu chuyện người dùng (của Jeff Patton) tạo bản đồ 2D: trục hoành hiển thị các bước trong hành trình của người dùng (xương sống/hoạt động) và trục tung hiển thị các câu chuyện theo từng bước được sắp xếp theo mức độ ưu tiên.Một đường ngang cắt ngang để xác định MVP hoặc phạm vi phát hành.Nó cung cấp bối cảnh mà một hồ sơ tồn đọng phẳng thiếu - cho thấy các câu chuyện liên quan như thế nào đến trải nghiệm tổng thể của người dùng.`,
  },
  'ba-us-008': {
    question: `Trong mô hình hóa trường hợp sử dụng, sự khác biệt giữa các mối quan hệ <<include>> và <<extend>> là gì?`,
    options: [
      `<<include>> có nghĩa là hành vi tùy chọn;<<extend>> có nghĩa là hành vi bắt buộc`,
      `<<include>> có nghĩa là trường hợp sử dụng cơ sở LUÔN thực thi trường hợp sử dụng đi kèm;<<extend>> có nghĩa là trường hợp sử dụng mở rộng TÙY CHỌN thêm hành vi vào cơ sở trong các điều kiện nhất định`,
      `<<include>> dành cho diễn viên;<<extend>> dành cho hệ thống`,
      `Chúng giống hệt nhau;hoặc có thể được sử dụng thay thế cho nhau`
    ],
    explanation: `<<include>> = thành phần bắt buộc: trường hợp sử dụng cơ sở luôn gọi thành phần được bao gồm (ví dụ: "Đặt hàng" <<includes>> "Xác thực thanh toán").<<extend>> = phần mở rộng tùy chọn: trường hợp sử dụng mở rộng chỉ thêm hành vi khi một điều kiện được đáp ứng (ví dụ: "Đặt hàng" được <<mở rộng bởi>> "Áp dụng phiếu giảm giá" nếu nhập mã phiếu giảm giá).Sự khác biệt này rất quan trọng để hiểu được tính đầy đủ của hành vi hệ thống.`,
  },
  'ba-us-009': {
    question: `BA nên xử lý một câu chuyện của người dùng vi phạm nguyên tắc "Độc lập" của ĐẦU TƯ (tức là nó có sự phụ thuộc mạnh mẽ vào các câu chuyện khác) như thế nào?`,
    options: [
      `Xóa câu chuyện vì vi phạm ĐẦU TƯ`,
      `Cắt lại các câu chuyện bằng cách sử dụng tính năng cắt dọc (các lát mỏng từ đầu đến cuối) để giảm thiểu phần phụ thuộc hoặc ghi lại rõ ràng phần phụ thuộc và sắp xếp chúng trong cùng một lần chạy nước rút`,
      `Hợp nhất tất cả các câu chuyện phụ thuộc vào một câu chuyện lớn`,
      `Chỉ định tất cả các câu chuyện phụ thuộc cho cùng một nhà phát triển`
    ],
    explanation: `Cắt dọc tạo ra các câu chuyện mang lại giá trị từ đầu đến cuối thông qua tất cả các lớp (UI → API → DB) thay vì cắt ngang theo lớp.Ví dụ: thay vì "Xây dựng bảng người dùng" + "Xây dựng API người dùng" + "Xây dựng biểu mẫu người dùng", hãy tạo "Người dùng có thể đăng ký bằng email" — một lát mỏng qua tất cả các lớp.Khi không thể loại bỏ sự phụ thuộc, hãy ghi lại chúng một cách rõ ràng và lập kế hoạch theo trình tự trong cùng một lần chạy nước rút.`,
  },
  'ba-us-010': {
    question: `Bạn đang xây dựng một nền tảng thương mại điện tử.Phân tách "Quản lý đơn hàng" sử thi thành ít nhất 6 câu chuyện của người dùng với các tiêu chí chấp nhận được phác thảo.Hãy xem xét các tác nhân và trường hợp khác nhau.`,
    answer: `1. "Là khách hàng, tôi muốn đặt hàng từ giỏ hàng của mình để có thể mua các mặt hàng đã chọn."AC: đơn hàng được tạo bằng ID duy nhất, hàng tồn kho giảm, email xác nhận đã được gửi.

2. "Là khách hàng, tôi muốn xem lịch sử đặt hàng của mình để có thể theo dõi các lần mua hàng trước đây."AC: danh sách hiển thị ngày đặt hàng, mặt hàng, tổng số, trạng thái;có thể sắp xếp theo ngày;được phân trang.

3. "Là khách hàng, tôi muốn hủy đơn hàng trong vòng 1 giờ để có thể đổi ý."AC: nút hủy chỉ hiển thị trong cửa sổ 1 giờ;hàng tồn kho được khôi phục;hoàn trả bắt đầu.

4. "Là quản trị viên, tôi muốn cập nhật trạng thái đơn hàng (đang xử lý → đã giao → đã giao) để khách hàng có thể xem tiến trình theo thời gian thực."AC: thay đổi trạng thái kích hoạt email thông báo;dấu thời gian được ghi lại;lịch sử trạng thái có thể xem được.

5. "Là một khách hàng, tôi muốn yêu cầu trả lại/hoàn tiền cho một đơn hàng đã giao trong vòng 30 ngày để tôi có thể trả lại những mặt hàng không đạt yêu cầu."AC: trả về mẫu có lựa chọn lý do;nhãn vận chuyển trả lại được tạo;hoàn tiền được xử lý trong vòng 5 ngày làm việc.

6. "Là quản trị viên, tôi muốn tìm kiếm và lọc đơn hàng theo trạng thái, phạm vi ngày và khách hàng để có thể quản lý hoạt động đặt hàng một cách hiệu quả."AC: bộ lọc có thể kết hợp được;tải kết quả trong vòng 2 giây;xuất sang CSV có sẵn.`,
    explanation: `Phân tích sử thi tốt xem xét nhiều tác nhân (khách hàng, quản trị viên), toàn bộ vòng đời (tạo → xem → cập nhật → hủy → trả lại) và cả các trường hợp vui vẻ và khó khăn.Mỗi câu chuyện tuân theo định dạng câu chuyện của người dùng, có thể phân phối độc lập và có các tiêu chí chấp nhận có thể kiểm tra được.Việc phân tách này cho phép phân phối tăng dần — nhóm có thể gửi "đặt hàng" trước với tư cách là MVP.`,
  },
  'ba-us-011': {
    question: `Khái niệm "3C" trong câu chuyện của người dùng (của Ron Jeffries) là gì?`,
    options: [
      `Tạo, Mã, Đóng`,
      `Thẻ (viết truyện), Hội thoại (thảo luận chi tiết), Xác nhận (tiêu chí chấp nhận)`,
      `Khách hàng, Người viết mã, Người kiểm tra`,
      `Khái niệm, bối cảnh, tiêu chí`
    ],
    explanation: `Ron Jeffries đã xác định 3 chữ C: Thẻ (câu chuyện được viết trên thẻ - ngắn gọn, lời nhắc), Hội thoại (đối thoại liên tục giữa BA, PO, nhà phát triển và người kiểm tra để xác định chi tiết) và Xác nhận (tiêu chí/kiểm tra chấp nhận xác nhận câu chuyện đã hoàn thành).Câu chuyện của người dùng KHÔNG phải là thông số kỹ thuật chi tiết — Thẻ là phần giữ chỗ cho Cuộc trò chuyện, được xác nhận bằng các thử nghiệm.`,
  },
  'ba-us-012': {
    question: `Với tư cách là BA lãnh đạo, hãy xác định tiêu chuẩn về chất lượng câu chuyện của người dùng trong tổ chức của bạn.Bao gồm danh sách kiểm tra Định nghĩa sẵn sàng (DoR), hướng dẫn viết câu chuyện và quy trình đánh giá để đảm bảo tính nhất quán giữa nhiều nhóm BA.`,
    answer: `Danh sách kiểm tra Định nghĩa về Sẵn sàng (DoR): (1) Câu chuyện theo định dạng "Như... Tôi muốn... Vậy thì..." với vai trò, hành động và giá trị rõ ràng.(2) Tiêu chí chấp nhận được viết ở định dạng Given-When-Then (tối thiểu 3 kịch bản: đường dẫn hạnh phúc, trường hợp cạnh, trường hợp lỗi).(3) Câu chuyện đáp ứng tiêu chí ĐẦU TƯ - được nhóm xác minh trong quá trình sàng lọc.(4) Các yếu tố phụ thuộc được xác định và ghi lại (các câu chuyện/nhiệm vụ được liên kết).(5) Mô hình giao diện người dùng hoặc wireframe được đính kèm (nếu hướng tới người dùng).(6) Kích thước câu chuyện (điểm câu chuyện được ước tính bởi nhóm phát triển).(7) Không có câu hỏi mở - tất cả các giải thích rõ ràng đã được giải quyết.

Nguyên tắc viết truyện: Sử dụng ngôn ngữ cụ thể, có thể đo lường được.Tránh các chi tiết triển khai kỹ thuật trong chính câu chuyện (những chi tiết đó đi vào nhiệm vụ).Bao gồm các yêu cầu phi chức năng làm tiêu chí chấp nhận khi có liên quan (ví dụ: "tải trang trong vòng 2 giây").Sử dụng thuật ngữ nhất quán từ bảng thuật ngữ dự án.

Quy trình đánh giá: (1) BA tự đánh giá dựa trên danh sách kiểm tra DoR.(2) Đánh giá ngang hàng bởi một BA khác (liên nhóm nếu có thể).(3) Phiên sàng lọc với nhóm phát triển - nhóm xác nhận sự hiểu biết, đặt câu hỏi, ước tính.(4) Phê duyệt PO xác nhận sự liên kết giá trị doanh nghiệp.(5) Đánh giá QA xác nhận khả năng kiểm tra các tiêu chí chấp nhận.Những câu chuyện không đạt DoR sẽ được gửi lại để làm lại trước khi bước vào kế hoạch chạy nước rút.`,
    explanation: `Khung chất lượng câu chuyện được tiêu chuẩn hóa đảm bảo tính nhất quán giữa các nhóm BA, giảm việc làm lại trong quá trình chạy nước rút và cải thiện độ chính xác của ước tính.DoR hoạt động như một cổng chất lượng - những câu chuyện không đáp ứng được danh sách kiểm tra sẽ không sẵn sàng cho việc lập kế hoạch chạy nước rút.Đánh giá ngang hàng phát hiện các điểm mù và sự tham gia của QA đảm bảo khả năng kiểm tra.Quá trình này có quy mô khắp các tổ chức lớn với nhiều nhóm Scrum.`,
  },
  'ba-us-013': {
    question: `Khi nào BA nên khuyến nghị sử dụng các thông số kỹ thuật ca sử dụng chính thức (các trường hợp sử dụng được trang bị đầy đủ) thay vì các câu chuyện của người dùng?`,
    options: [
      `Luôn luôn - các trường hợp sử dụng chi tiết hơn và do đó luôn tốt hơn`,
      `Không bao giờ - câu chuyện của người dùng đã thay thế hoàn toàn các trường hợp sử dụng`,
      `Đối với các hệ thống phức tạp có nhiều tác nhân và luồng tương tác phức tạp (ví dụ: chăm sóc sức khỏe, ngân hàng), trong đó các luồng, ngoại lệ và điều kiện trước/sau chi tiết từng bước cung cấp sự rõ ràng cần thiết mà chỉ riêng câu chuyện của người dùng không thể nắm bắt được`,
      `Chỉ khi dự án sử dụng phương pháp Thác nước`
    ],
    explanation: `Câu chuyện của người dùng hoạt động tốt trong Agile đối với hầu hết các tính năng vì chúng nhấn mạnh vào cuộc trò chuyện.Tuy nhiên, các lĩnh vực phức tạp (y tế, tài chính, quy định) thường cần các luồng tương tác chi tiết, từng bước với các điều kiện tiên quyết, hậu điều kiện, luồng ngoại lệ và quy tắc kinh doanh rõ ràng.Các trường hợp sử dụng được trang bị đầy đủ (theo Alistair Cockburn) mang lại sự nghiêm ngặt này.Sự lựa chọn phụ thuộc vào ngữ cảnh, không phụ thuộc vào phương pháp luận - ngay cả các nhóm Agile cũng có thể sử dụng các trường hợp sử dụng khi mức độ phức tạp đòi hỏi điều đó.`,
  },
  'ba-bp-001': {
    question: `BPMN có nghĩa là gì?`,
    options: [
      `Ký hiệu quản lý dự án kinh doanh`,
      `Mô hình và ký hiệu quy trình kinh doanh`,
      `Mạng mô hình hóa quy trình cơ bản`,
      `Ghi chú về lập kế hoạch và quản lý kinh doanh`
    ],
    explanation: `BPMN (Mô hình và ký hiệu quy trình nghiệp vụ) là ký hiệu đồ họa được tiêu chuẩn hóa để mô hình hóa các quy trình nghiệp vụ.Nó được duy trì bởi OMG (Nhóm quản lý đối tượng).BPMN 2.0 là phiên bản hiện tại và được sử dụng rộng rãi bởi các BA, kỹ sư xử lý và nhóm kỹ thuật vì nó vừa dễ đọc vừa có thể thực thi được trong kinh doanh.`,
  },
  'ba-bp-002': {
    question: `Trong BPMN, hình dạng nào biểu thị một Nhiệm vụ (một hoạt động được thực hiện trong một quy trình)?`,
    options: [
      `Kim cương (◇)`,
      `Vòng tròn (○)`,
      `Hình chữ nhật tròn (▢)`,
      `Tam giác (△)`
    ],
    explanation: `Trong BPMN: Hình chữ nhật tròn = Nhiệm vụ/Hoạt động (công việc cần thực hiện), Kim cương = Cổng (điểm quyết định/phân nhánh), Vòng tròn = Sự kiện (bắt đầu, trung gian, kết thúc), Mũi tên = Luồng trình tự (thứ tự các hoạt động).Hiểu những hình dạng cơ bản này là điều cần thiết để đọc và tạo sơ đồ BPMN.`,
  },
  'ba-bp-003': {
    question: `Sơ đồ đường bơi cho thấy người hoặc bộ phận nào chịu trách nhiệm cho từng bước trong quy trình kinh doanh.`,
    explanation: `Đường bơi (hồ bơi và làn đường trong BPMN) chia sơ đồ quy trình thành các dải ngang hoặc dọc, mỗi dải thể hiện một vai trò, bộ phận hoặc hệ thống.Các hoạt động được đặt trong một làn đường thuộc về tác nhân đó.Điều này giúp việc phân công trách nhiệm trở nên rõ ràng trong nháy mắt và giúp xác định các điểm bàn giao (nơi công việc đi qua các làn đường).`,
  },
  'ba-bp-004': {
    question: `Trong BPMN, sự khác biệt giữa Cổng độc quyền (XOR) và Cổng song song (AND) là gì?`,
    options: [
      `Không có sự khác biệt - cả hai đều chia luồng như nhau`,
      `Cổng độc quyền chọn MỘT đường dẫn dựa trên một điều kiện;Cổng song song kích hoạt TẤT CẢ các đường dẫn đi cùng một lúc`,
      `Cổng độc quyền dành cho lỗi;Cổng song song dành cho luồng thông thường`,
      `Cổng độc quyền hợp nhất các đường dẫn;Cổng song song chia đường dẫn`
    ],
    explanation: `Cổng độc quyền (X hoặc ◇ với X): chính xác một đường dẫn đi được chọn dựa trên một điều kiện (chẳng hạn như if-else).Cổng song song (+ hoặc ◇ với +): TẤT CẢ các đường dẫn đi được kích hoạt đồng thời (thực thi đồng thời).Khi được sử dụng để hợp nhất, Cổng song song sẽ đợi TẤT CẢ các đường dẫn đến hoàn tất trước khi tiếp tục.Cổng bao gồm (O) cho phép một hoặc nhiều đường dẫn.`,
  },
  'ba-bp-005': {
    question: `Mục đích của việc lập mô hình quy trình "As-Is" và "To-Be" trong công việc BA là gì?`,
    options: [
      `As-Is mô tả trạng thái tương lai;To-Be mô tả trạng thái hiện tại`,
      `As-Is ghi lại quy trình hiện tại (với những điểm yếu và sự kém hiệu quả);To-Be thiết kế quy trình cải tiến trong tương lai - khoảng cách giữa chúng xác định phạm vi dự án`,
      `As-Is dành cho các quy trình nội bộ;To-Be dành cho các quy trình tiếp xúc với khách hàng`,
      `Chúng là các định dạng khác nhau cho cùng một quy trình`
    ],
    explanation: `Phân tích nguyên trạng sẽ lập bản đồ trạng thái hiện tại: công việc thực sự được thực hiện như thế nào (không phải nó phải như thế nào), phát hiện các tắc nghẽn, lãng phí, các bước trùng lặp và cách giải quyết thủ công.To-Be thiết kế trạng thái tương lai mong muốn với những cải tiến.Phân tích khoảng cách giữa Hiện tại và Tương lai xác định những thay đổi cần thiết - điều này trực tiếp thúc đẩy các yêu cầu đối với giải pháp.`,
  },
  'ba-bp-006': {
    question: `Phần tử BPMN nào đại diện cho một điểm trong quá trình xảy ra điều gì đó (ví dụ: một tin nhắn đến, đồng hồ hẹn giờ kích hoạt hoặc quá trình bắt đầu/kết thúc)?`,
    options: [
      `Cổng (kim cương)`,
      `Hoạt động (hình chữ nhật tròn)`,
      `Sự kiện (vòng tròn)`,
      `Đối tượng dữ liệu (biểu tượng trang)`
    ],
    explanation: `Sự kiện là các vòng tròn trong BPMN.Sự kiện bắt đầu (viền mỏng) kích hoạt quá trình, Sự kiện kết thúc (viền dày) kết thúc quá trình và Sự kiện trung gian (viền kép) xảy ra trong quá trình.Các sự kiện có thể được gõ: tin nhắn (biểu tượng phong bì), bộ đếm thời gian (biểu tượng đồng hồ), lỗi (tia chớp), tín hiệu, v.v. Chúng đại diện cho các yếu tố kích hoạt và kết quả.`,
  },
  'ba-bp-007': {
    question: `Lập mô hình quy trình "Giới thiệu nhân viên" bằng cách sử dụng các khái niệm BPMN.Mô tả các nhóm/làn đường, hoạt động chính, cổng và sự kiện cho một quy trình liên quan đến nhân sự, CNTT và Người quản lý của nhân viên mới.`,
    answer: `Nhóm: "Quy trình giới thiệu nhân viên"

Ngõ 1 – Phòng Nhân sự:
- Sự kiện bắt đầu: “Ký hợp đồng thuê mới”
- Nhiệm vụ: “Tạo hồ sơ nhân viên trong HRIS”
- Nhiệm vụ: "Gửi gói chào mừng và lịch định hướng"
- Nhiệm vụ: "Tiến hành buổi định hướng ngày 1"
- Nhiệm vụ: “Đăng ký kế hoạch phúc lợi”

Ngõ 2 - Phòng CNTT:
- Nhiệm vụ: "Cung cấp laptop và thông tin truy cập"
- Nhiệm vụ: "Thiết lập tài khoản email và phần mềm"
- Nhiệm vụ: "Cấp quyền truy cập hệ thống theo vai trò"
- Cổng độc quyền: "Nhân viên từ xa?"
- Có → Nhiệm vụ: "Gửi thiết bị về địa chỉ nhà"
- Không → Nhiệm vụ: “Bàn setup và thiết bị văn phòng”

Ngõ 3 - Người quản lý:
- Nhiệm vụ: “Lập kế hoạch 30-60-90 ngày”
- Nhiệm vụ: "Phân công bạn đồng hành"
- Nhiệm vụ: "Lên lịch họp giới thiệu với nhóm"
- Sự kiện trung gian hẹn giờ: "Sau 30 ngày"
- Nhiệm vụ: “Tiến hành rà soát lần đầu đăng ký”

Cổng song song sau khi bắt đầu: Các hoạt động Nhân sự, CNTT và Người quản lý bắt đầu đồng thời.
Cổng song song (hợp nhất): Tất cả các bản nhạc phải hoàn thành trước → Sự kiện kết thúc: "Hoàn tất triển khai"

Luồng thông báo giữa các làn: Nhân sự thông báo cho CNTT về việc tuyển dụng mới, CNTT xác nhận việc thiết lập đã hoàn tất cho Người quản lý.`,
    explanation: `Mô hình quy trình này thể hiện các khái niệm BPMN chính: nhiều làn để phân tách vai trò, cổng song song cho các hoạt động đồng thời (nhân sự, CNTT, Người quản lý đều bắt đầu đồng thời), cổng độc quyền để phân nhánh có điều kiện (từ xa so với văn phòng), sự kiện hẹn giờ cho các hoạt động đã lên lịch và luồng tin nhắn để liên lạc giữa các bộ phận.Phân tích lỗ hổng có thể cho thấy những điểm nghẽn như sự chậm trễ trong việc cung cấp CNTT.`,
  },
  'ba-bp-008': {
    question: `Khi phân tích một quy trình kinh doanh để cải tiến, khái niệm phương pháp Lean nào xác định các bước KHÔNG tăng thêm giá trị từ quan điểm của khách hàng?`,
    options: [
      `Phân tích đường dẫn quan trọng`,
      `Lập bản đồ dòng giá trị - xác định các hoạt động gia tăng giá trị và không gia tăng giá trị (lãng phí/muda)`,
      `Phân tích biểu đồ Gantt`,
      `Mô phỏng Monte Carlo`
    ],
    explanation: `Bản đồ dòng giá trị (từ Lean) phân loại từng bước thành: Giá trị gia tăng (khách hàng sẽ trả tiền), Không tăng giá trị nhưng cần thiết (tuân thủ, phê duyệt) hoặc Lãng phí (chờ đợi, làm lại, chuyển giao không cần thiết).Lean nhằm mục đích loại bỏ chất thải (muda).7 lãng phí: sản xuất thừa, chờ đợi, vận chuyển, xử lý quá mức, tồn kho, chuyển động, sai sót.BA sử dụng điều này để hợp lý hóa các quy trình trước khi tự động hóa.`,
  },
  'ba-bp-009': {
    question: `Quy trình phụ trong BPMN là gì và khi nào bạn nên sử dụng nó?`,
    options: [
      `Một tiến trình chạy trên một máy chủ riêng biệt`,
      `Một nhóm hoạt động được thu gọn hoặc mở rộng trong một quy trình, được sử dụng để quản lý độ phức tạp bằng cách gói gọn một tập hợp các nhiệm vụ liên quan vào một đơn vị duy nhất, có thể tái sử dụng`,
      `Một tiến trình chỉ chạy khi tiến trình chính bị lỗi`,
      `Một quy trình con giống như một nhiệm vụ nhưng có mô tả dài hơn`
    ],
    explanation: `Các quy trình con gói gọn sự phức tạp: một nhóm các nhiệm vụ liên quan được hiển thị dưới dạng một hình chữ nhật tròn duy nhất có dấu (+] (thu gọn) hoặc được mở rộng để hiển thị các chi tiết bên trong.Lợi ích: (1) quản lý độ phức tạp về mặt hình ảnh, (2) có thể xác định cách xử lý lỗi cục bộ, (3) có thể được sử dụng lại trên các quy trình, (4) có thể có các sự kiện bắt đầu/kết thúc riêng.Sử dụng khi nhiều tác vụ thuộc về nhau một cách hợp lý (ví dụ: quy trình phụ "Xử lý thanh toán").`,
  },
  'ba-bp-010': {
    question: `Một công ty bán lẻ muốn số hóa và tự động hóa quy trình thực hiện đơn hàng của họ.Với tư cách là Trưởng nhóm BA, hãy mô tả cách tiếp cận của bạn để khám phá, phân tích, tối ưu hóa và đề xuất tự động hóa quy trình.Bao gồm sự tham gia của các bên liên quan, công cụ và số liệu thành công.`,
    answer: `Cách tiếp cận:

1. Khám phá quy trình (2-3 tuần):
- Hội thảo các bên liên quan với nhân viên kho, hậu cần, dịch vụ khách hàng, tài chính
- Quan sát/theo dõi công việc trong kho
- Phân tích tài liệu về các SOP hiện có, mẫu đơn đặt hàng, hồ sơ vận chuyển
- Đầu ra: Sơ đồ quy trình nguyên trạng (chi tiết BPMN L2) để nhận đơn hàng → lấy hàng → đóng gói → vận chuyển → xác nhận giao hàng

2. Phân tích quy trình (1-2 tuần):
- Lập bản đồ dòng giá trị: xác định các hoạt động giá trị gia tăng và hoạt động lãng phí
- Phân tích tắc nghẽn: thời gian chu kỳ trên mỗi bước, thời gian xếp hàng, tỷ lệ lỗi
- Phân tích nguyên nhân gốc rễ (Ishikawa/5-Tại sao) cho 3 điểm yếu hàng đầu
- Điểm chuẩn so với tiêu chuẩn ngành (thời gian đặt hàng đến khi giao hàng)
- Đầu ra: Báo cáo phân tích với các điểm yếu được định lượng và cơ hội cải tiến

3. Tối ưu hóa quy trình (2 tuần):
- Thiết kế quy trình tương lai loại bỏ lãng phí và tắc nghẽn
- Ứng viên tự động hóa ghi điểm trên: khối lượng, độ lặp lại, dựa trên quy tắc, dễ mắc lỗi, chi phí thực hiện thủ công
- Mô phỏng quy trình để xác thực hiệu suất To-Be
- Đầu ra: Sơ đồ BPMN tương lai + ma trận đề xuất tự động hóa

4. Đề xuất tự động hóa:
- Cấp 1 (Thắng nhanh): quét mã vạch để lấy hàng, tạo nhãn vận chuyển tự động
- Cấp 2 (Nỗ lực trung bình): tích hợp hệ thống quản lý hàng tồn kho, định tuyến đơn hàng tự động
- Cấp 3 (Chiến lược): dự báo nhu cầu, lấy hàng bằng robot

Số liệu thành công: giảm thời gian đặt hàng đến khi giao hàng (mục tiêu: -40%), tỷ lệ lỗi chọn hàng (mục tiêu: <1%), chi phí cho mỗi đơn hàng được xử lý (mục tiêu: -25%), sự hài lòng của khách hàng (cải thiện NPS)`,
    explanation: `Cách tiếp cận có cấu trúc chuyển từ khám phá (hiểu trạng thái hiện tại) thông qua phân tích (định lượng vấn đề) đến tối ưu hóa (cải tiến thiết kế) đến tự động hóa (đề xuất công nghệ).Điều quan trọng là định lượng các điểm yếu trước khi đề xuất giải pháp - các đề xuất dựa trên dữ liệu sẽ thuyết phục hơn các ý kiến.Tự động hóa dựa trên cấp độ cho phép đầu tư gia tăng và xác thực ROI.`,
  },
  'ba-sql-001': {
    question: `SQL có nghĩa là gì?`,
    options: [
      `Logic truy vấn hệ thống`,
      `Ngôn ngữ truy vấn có cấu trúc`,
      `Ngôn ngữ câu hỏi chuẩn`,
      `Danh sách truy vấn tuần tự`
    ],
    explanation: `SQL (Ngôn ngữ truy vấn có cấu trúc) là ngôn ngữ tiêu chuẩn để quản lý và truy vấn cơ sở dữ liệu quan hệ.Nó được sử dụng để truy xuất dữ liệu (CHỌN), thao tác dữ liệu (CHÈN, CẬP NHẬT, XÓA) và định nghĩa dữ liệu (CREATE, ALTER, DROP).BA sử dụng SQL để phân tích dữ liệu, xác thực các yêu cầu và tạo báo cáo.`,
  },
  'ba-sql-002': {
    question: `Mệnh đề SQL nào được sử dụng để lọc các hàng được truy vấn trả về?`,
    options: [
      `ĐẶT HÀNG BỞI`,
      `NHÓM THEO`,
      `Ở ĐÂU`,
      `CÓ`
    ],
    explanation: `WHERE lọc các hàng trước khi nhóm.Ví dụ: CHỌN * TỪ đơn hàng WHERE trạng thái = 'đã vận chuyển'.ORDER BY sắp xếp kết quả.GROUP BY nhóm các hàng để tổng hợp.HAVING lọc các nhóm sau GROUP BY.Thứ tự thực hiện là: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.`,
  },
  'ba-sql-003': {
    question: `Viết câu truy vấn SQL để tìm tất cả các khách hàng trong bảng “customer” ở “TPHCM” và đã hoạt động từ năm 2025.`,
    answer: `CHỌN *
TỪ khách hàng
Thành phố WHERE = 'Thành phố Hồ Chí Minh'
VÀ active_since >= '2025-01-01';`,
    explanation: `Truy vấn này sử dụng WHERE với AND để kết hợp hai điều kiện lọc.Việc so sánh ngày sử dụng >= để bao gồm tất cả các ngày từ ngày 1 tháng 1 năm 2025 trở đi.BA thường viết các truy vấn như vậy để xác thực các giả định dữ liệu, tạo phân khúc người dùng hoặc tạo báo cáo cho các bên liên quan.`,
  },
  'ba-sql-004': {
    question: `Sự khác biệt giữa INNER THAM GIA và TRÁI THAM GIA là gì?`,
    options: [
      `Không có sự khác biệt - chúng trả về cùng một kết quả`,
      `INNER THAM GIA chỉ trả về các hàng có kết quả khớp trong CẢ HAI bảng;LEFT THAM GIA trả về TẤT CẢ các hàng từ bảng bên trái và các hàng khớp từ bên phải (NULL khi không khớp)`,
      `INNER THAM GIA nhanh hơn;LEFT THAM GIA chính xác hơn`,
      `INNER THAM GIA hoạt động trên 2 bảng;LEFT THAM GIA hoạt động trên hơn 3 bảng`
    ],
    explanation: `INNER THAM GIA: chỉ các hàng có điều kiện nối khớp trong cả hai bảng (giao lộ).THAM GIA TRÁI: tất cả các hàng từ bảng bên trái + các hàng khớp từ bảng bên phải;các giá trị bên phải chưa được so sánh là NULL.Ví dụ: LEFT JOIN hiển thị tất cả khách hàng ngay cả khi họ không có đơn hàng nào (cột đơn hàng = NULL), trong khi INNER JOIN sẽ loại trừ họ.`,
  },
  'ba-sql-005': {
    question: `Viết truy vấn SQL để tìm 5 sản phẩm hàng đầu theo tổng doanh thu (số lượng × giá) từ bảng "order_items", được nhóm theo tên sản phẩm.`,
    answer: `CHỌN tên_sản phẩm,
TỔNG(số lượng * giá) NHƯ tổng_doanh thu
TỪ đơn hàng_items
NHÓM THEO tên_sản phẩm
ĐẶT HÀNG THEO tổng_doanh thu DESC
GIỚI HẠN 5;`,
    explanation: `Truy vấn này thể hiện: (1) hàm tổng hợp SUM() với biểu thức được tính toán, (2) GROUP BY để tổng hợp cho mỗi sản phẩm, (3) ĐẶT HÀNG THEO DESC cho mức cao nhất đầu tiên, (4) GIỚI HẠN 5 cho top 5. BA sử dụng loại truy vấn này để phân tích hiệu suất sản phẩm, báo cáo doanh thu và xác định các sản phẩm bán chạy nhất.`,
  },
  'ba-sql-006': {
    question: `Một BA cần phân tích xu hướng bán hàng hàng tháng.Những hàm SQL nào sẽ hữu ích NHẤT?`,
    options: [
      `CHÈN và CẬP NHẬT`,
      `Hàm DATE (EXTRACT, DATE_TRUNC) kết hợp với hàm GROUP BY và hàm tổng hợp (SUM, COUNT, AVG)`,
      `TẠO BẢNG và THẢ BẢNG`,
      `CẤP VÀ THU HỒI`
    ],
    explanation: `Phân tích xu hướng yêu cầu trích xuất các thành phần thời gian (tháng, năm) và tổng hợp số liệu theo từng thời kỳ.Ví dụ: CHỌN DATE_TRUNC('tháng', ngày_đặt hàng) NHƯ tháng, SUM(tổng) NHƯ doanh thu TỪ đơn hàng NHÓM THEO tháng ĐẶT HÀNG THEO tháng.Điều này tạo ra một chuỗi thời gian hàng tháng có thể được lập biểu đồ để phân tích xu hướng, so sánh so sánh cùng kỳ và dự báo đầu vào.`,
  },
  'ba-sql-007': {
    question: `Viết truy vấn SQL để tìm những khách hàng thực hiện giao dịch mua hàng đầu tiên vào năm 2025 VÀ đã thực hiện ít nhất 3 đơn hàng kể từ đó.Sử dụng bảng "đơn hàng" (customer_id, order_date, Total_amount).`,
    answer: `CHỌN khách hàng_id,
MIN(ngày_đặt hàng) NHƯ_đặt hàng đầu tiên,
COUNT(*) NHƯ tổng_đơn đặt hàng,
SUM(tổng_số tiền) dưới dạng giá trị trọn đời
TỪ đơn đặt hàng
NHÓM THEO khách hàng_id
CÓ MIN(order_date) >= '2025-01-01'
VÀ ĐẾM(*) >= 3
ĐẶT HÀNG THEO life_value DESC;`,
    explanation: `Truy vấn này sử dụng HAVING (không phải WHERE) vì chúng tôi lọc kết quả tổng hợp: MIN(order_date) cho ngày mua hàng đầu tiên và COUNT(*) cho số lượng đơn hàng.WHERE lọc các hàng trước khi nhóm;HAVING lọc các nhóm sau khi tổng hợp.Kiểu phân tích đoàn hệ này giúp BA xác định các phân khúc khách hàng mới có giá trị cho các chương trình tiếp thị hoặc chương trình khách hàng thân thiết được nhắm mục tiêu.`,
  },
  'ba-sql-008': {
    question: `Khi BA phát hiện ra rằng cùng một dữ liệu khách hàng tồn tại ở 3 hệ thống khác nhau với các giá trị xung đột nhau (địa chỉ, số điện thoại khác nhau), vấn đề về chất lượng dữ liệu là gì?`,
    options: [
      `Vấn đề về tính đầy đủ của dữ liệu`,
      `Vấn đề về tính nhất quán của dữ liệu - cùng một thực thể có các cách trình bày xung đột giữa các hệ thống, cho thấy cần có chiến lược quản lý dữ liệu chính (MDM)`,
      `Vấn đề về tính kịp thời của dữ liệu`,
      `Vấn đề về tính hợp lệ của dữ liệu`
    ],
    explanation: `Tính nhất quán của dữ liệu có nghĩa là cùng một thực thể dữ liệu có cùng giá trị trên tất cả các hệ thống.Sự không nhất quán thường xuất phát từ: không có nguồn thông tin chính xác duy nhất, nhập dữ liệu thủ công trong nhiều hệ thống hoặc thiếu đồng bộ hóa dữ liệu.Giải pháp là Quản lý dữ liệu tổng thể (MDM): thiết lập bản ghi vàng (nguồn có thẩm quyền) và đồng bộ hóa nó trên các hệ thống.Các khía cạnh chất lượng dữ liệu bao gồm: tính chính xác, tính đầy đủ, tính nhất quán, tính kịp thời, tính hợp lệ và tính duy nhất.`,
  },
  'ba-sql-009': {
    question: `Thiết kế cách tiếp cận dựa trên dữ liệu cho BA để hỗ trợ quyết định kinh doanh về việc có nên mở rộng sang thị trường mới hay không.Bao gồm những dữ liệu cần thu thập, phương pháp phân tích và cách trình bày các phát hiện.`,
    answer: `Phân tích mở rộng thị trường theo hướng dữ liệu:

1. Thu thập dữ liệu:
- Nội bộ: dữ liệu bán hàng theo khu vực, nhân khẩu học của khách hàng, hiệu suất sản phẩm, xu hướng yêu cầu hỗ trợ, chi phí thu hút khách hàng (CAC), giá trị trọn đời của khách hàng (CLV)
- Bên ngoài: dữ liệu quy mô thị trường (TAM/SAM/SOM), phân tích đối thủ cạnh tranh, dữ liệu nhân khẩu học, chỉ số kinh tế, yêu cầu pháp lý
- Nghiên cứu sơ cấp: khảo sát khách hàng tại thị trường mục tiêu, nhóm tập trung, kết quả chương trình thí điểm

2. Phương pháp phân tích:
- Quy mô thị trường: Tính toán TAM/SAM/SOM cho thị trường mới
- Phân khúc khách hàng: phân tích cụm khách hàng hiện tại để xác định hồ sơ phù hợp với thị trường mục tiêu
- Dự báo doanh thu: mô hình dự báo dựa trên các mục nhập thị trường tương tự + đường cong tăng trưởng
- Đánh giá rủi ro: phân tích SWOT, lập bản đồ sức mạnh của đối thủ cạnh tranh, phân tích rào cản gia nhập
- Phân tích tài chính: dự báo ROI, phân tích điểm hòa vốn, phân tích độ nhạy (kịch bản tốt nhất/xấu nhất/dự kiến)

3. Truy vấn SQL/dữ liệu:
- Phân tích địa lý khách hàng: đơn hàng theo bản đồ nhiệt khu vực
- Sản phẩm phù hợp với thị trường: sản phẩm nào bán chạy nhất trong cùng nhóm nhân khẩu học
- Phân tích tỷ lệ rời bỏ ở các vùng lân cận làm chỉ báo proxy

4. Trình bày với Ban Giám đốc:
- Tóm tắt điều hành với khuyến nghị (Đi/Không đi/Đi có điều kiện)
- Quy mô cơ hội thị trường với khoảng tin cậy
- Dự báo tài chính (3 kịch bản: thận trọng, kỳ vọng, lạc quan)
- Ma trận rủi ro với các chiến lược giảm thiểu
- Phương pháp tiếp cận theo từng giai đoạn được đề xuất với các cổng giai đoạn
- Bảng điều khiển để theo dõi liên tục sau khi ra mắt`,
    explanation: `Việc ra quyết định dựa trên dữ liệu kết hợp phân tích nội bộ, thông tin thị trường bên ngoài và mô hình tài chính.Giá trị của BA là chuyển dữ liệu thô thành những hiểu biết sâu sắc có thể áp dụng được với các đề xuất rõ ràng.Việc trình bày các kịch bản (không chỉ một con số) mang lại cho các nhà điều hành sự tự tin để đưa ra những quyết định sáng suốt với mức độ rủi ro được hiểu rõ.`,
  },
  'ba-sql-010': {
    question: `Một công ty muốn triển khai kho dữ liệu cho hoạt động kinh doanh thông minh.Với tư cách là BA Lead, bạn nên ưu tiên những yêu cầu nào trong lần khám phá ban đầu?`,
    options: [
      `Kiến trúc kỹ thuật và lựa chọn nhà cung cấp cơ sở dữ liệu`,
      `Các câu hỏi kinh doanh mà kho dữ liệu phải trả lời (KPI, báo cáo, bảng thông tin), nguồn dữ liệu, yêu cầu về chất lượng dữ liệu, nhu cầu truy cập/bảo mật và nghĩa vụ tuân thủ`,
      `Bảng màu và bố cục của báo cáo bảng điều khiển`,
      `Tài liệu đào tạo cho nhóm phát triển`
    ],
    explanation: `Dự án kho dữ liệu phải được thúc đẩy bởi các câu hỏi kinh doanh chứ không phải công nghệ.BA Lead trước tiên cần hiểu: (1) Doanh nghiệp cần đưa ra những quyết định gì?(2) Những câu hỏi/KPI nào thúc đẩy những quyết định đó?(3) Cần có dữ liệu gì để trả lời chúng?(4) Dữ liệu đó đến từ đâu (hệ thống nguồn)?(5) Đường cơ sở chất lượng dữ liệu là gì?(6) Ai cần tiếp cận và ở cấp độ nào?Cách tiếp cận "dựa trên câu hỏi" này đảm bảo DW mang lại giá trị kinh doanh.`,
  },
  'ba-wp-001': {
    question: `Sự khác biệt giữa wireframe và nguyên mẫu là gì?`,
    options: [
      `Chúng giống nhau`,
      `Wireframe là một bố cục tĩnh, có độ chính xác thấp hiển thị cấu trúc và vị trí nội dung;nguyên mẫu là một mô phỏng tương tác thể hiện các luồng và tương tác của người dùng`,
      `Wireframe có tính tương tác;một nguyên mẫu là tĩnh`,
      `Wireframe được thiết kế bởi các nhà phát triển;một nguyên mẫu được thiết kế bởi các nhà thiết kế`
    ],
    explanation: `Wireframe là các bố cục khung - giống như bản thiết kế hiển thị vị trí của các phần tử (điều hướng, khu vực nội dung, nút) mà không có chi tiết thiết kế trực quan.Nguyên mẫu thêm tính tương tác: các nút có thể nhấp, chuyển trang, gửi biểu mẫu.Phổ độ trung thực: phác thảo → wireframe → mockup (thiết kế trực quan) → nguyên mẫu (tương tác).BA thường tạo wireframe có độ chính xác thấp/trung bình để xác thực các yêu cầu.`,
  },
  'ba-wp-002': {
    question: `Tại sao BA nên tạo wireframe trong giai đoạn yêu cầu?`,
    options: [
      `Để thay thế công việc của người thiết kế giao diện người dùng`,
      `Để truyền đạt các yêu cầu một cách trực quan, xác thực sự hiểu biết với các bên liên quan, sớm xác định các yêu cầu còn thiếu và giảm sự mơ hồ trong các thông số kỹ thuật dựa trên văn bản`,
      `Để xác định màu sắc và phông chữ chính xác cho sản phẩm cuối cùng`,
      `Wireframes chỉ được tạo ra bởi các nhà thiết kế, không phải BA`
    ],
    explanation: `Wireframe giúp BA vì: (1) các bên liên quan hiểu hình ảnh tốt hơn thông số văn bản, (2) cách trình bày trực quan cho thấy những khoảng trống ("thông báo lỗi đi đâu?"), (3) tạo điều kiện cho các vòng phản hồi nhanh hơn, (4) giảm thông tin sai lệch giữa BA, thiết kế và phát triển.Wireframe BA có độ chính xác thấp - chúng truyền đạt cấu trúc và dòng chảy chứ không phải thiết kế cuối cùng.`,
  },
  'ba-wp-003': {
    question: `Wireframe có độ chính xác thấp phải bao gồm các yếu tố thiết kế trực quan chi tiết như màu sắc, hình ảnh và kiểu chữ chính xác.`,
    explanation: `Các wireframe có độ trung thực thấp (lo-fi) cố tình tránh các chi tiết thiết kế trực quan.Họ sử dụng thang độ xám, hộp giữ chỗ cho hình ảnh và phông chữ chung.Điều này tập trung vào bố cục, cấu trúc và phân cấp thông tin - chứ không phải tính thẩm mỹ.Việc thêm thiết kế trực quan quá sớm (1) lãng phí thời gian nếu bố cục thay đổi, (2) khiến các bên liên quan mất tập trung vào các cuộc thảo luận về màu sắc/phông chữ thay vì phản hồi về chức năng.`,
  },
  'ba-wp-004': {
    question: `Sơ đồ "luồng người dùng" là gì và nó bổ sung cho wireframe như thế nào?`,
    options: [
      `Luồng người dùng là một loại wireframe có nhiều chi tiết hơn`,
      `Luồng người dùng ánh xạ đường dẫn từng bước mà người dùng thực hiện trong hệ thống để hoàn thành mục tiêu - nó hiển thị trình tự các màn hình, quyết định và hành động, trong khi wireframe hiển thị giao diện của từng màn hình riêng lẻ`,
      `Luồng người dùng là sơ đồ cơ sở dữ liệu hiển thị chuyển động của dữ liệu`,
      `Luồng người dùng là kế hoạch triển khai của nhà phát triển`
    ],
    explanation: `Luồng người dùng hiển thị hành trình (màn hình A → quyết định → màn hình B hoặc C), trong khi wireframe hiển thị bố cục màn hình riêng lẻ.Chúng cùng nhau tạo thành một bức tranh hoàn chỉnh: luồng hiển thị ĐÂU người dùng đến và wireframe hiển thị NHỮNG GÌ họ nhìn thấy ở mỗi điểm dừng.Ví dụ: Luồng đăng nhập → Bảng điều khiển → Danh sách sản phẩm → Chi tiết sản phẩm → Giỏ hàng → Thanh toán → Xác nhận.`,
  },
  'ba-wp-005': {
    question: `Công cụ nào được các BA và nhà thiết kế sử dụng phổ biến nhất để tạo wireframing và tạo mẫu hợp tác?`,
    options: [
      `Microsoft Excel`,
      `Figma — một công cụ thiết kế dựa trên đám mây với tính năng cộng tác theo thời gian thực, thư viện thành phần và các tính năng tạo nguyên mẫu`,
      `sổ ghi chú`,
      `Photoshop`
    ],
    explanation: `Figma là tiêu chuẩn ngành cho wireframing và tạo mẫu vì: (1) cộng tác trong thời gian thực (như Google Docs dành cho thiết kế), (2) thư viện hệ thống thiết kế/thành phần để đảm bảo tính nhất quán, (3) tạo mẫu tích hợp sẵn (khung liên kết, thêm chuyển tiếp), (4) miễn phí cho các nhóm nhỏ, (5) chạy trong trình duyệt (không cần cài đặt).Các công cụ khác: Sketch (chỉ dành cho máy Mac), Adobe XD (đã ngừng sản xuất), Balsamiq (chỉ lo-fi), Axure (tạo mẫu nâng cao).`,
  },
  'ba-wp-006': {
    question: `10 phương pháp chẩn đoán khả năng sử dụng của Nielsen chủ yếu được sử dụng để làm gì?`,
    options: [
      `Đo tốc độ tải trang web`,
      `Đánh giá khả năng sử dụng của giao diện người dùng bằng cách đánh giá nó dựa trên 10 nguyên tắc về khả năng sử dụng được công nhận (khả năng hiển thị trạng thái hệ thống, ngăn ngừa lỗi, tính nhất quán, v.v.)`,
      `Đếm số lần nhấp chuột trong luồng người dùng`,
      `Kiểm tra chất lượng mã trong các ứng dụng lối vào`
    ],
    explanation: `10 chẩn đoán của Jakob Nielsen là một khuôn khổ để đánh giá khả năng sử dụng UI: (1) Khả năng hiển thị trạng thái hệ thống, (2) Sự phù hợp giữa hệ thống và thế giới thực, (3) Kiểm soát và tự do của người dùng, (4) Tính nhất quán và tiêu chuẩn, (5) Ngăn ngừa lỗi, (6) Nhận biết hơn là thu hồi, (7) Tính linh hoạt và hiệu quả, (8) Thiết kế thẩm mỹ và tối giản, (9) Giúp người dùng nhận ra/khắc phục sau lỗi, (10) Trợ giúp và tài liệu hóa.Các BA sử dụng chúng để xem xét wireframe trước khi chuyển giao.`,
  },
  'ba-wp-007': {
    question: `Thiết kế luồng người dùng và màn hình wireframe chính cho tính năng "Gửi tiền" của ứng dụng ngân hàng di động.Bao gồm đường dẫn hạnh phúc, xử lý lỗi và cân nhắc về bảo mật.`,
    answer: `Luồng người dùng:
1. Bảng điều khiển (CTA: nút "Gửi tiền")
2. Màn hình Chọn người nhận (tìm kiếm danh bạ, nhập tài khoản/số điện thoại, người nhận gần đây)
3. Màn hình nhập số tiền (trường số tiền, bộ chọn tiền tệ, số dư khả dụng được hiển thị, ghi chú tùy chọn)
4. Màn hình Xem lại & Xác nhận (người nhận, số tiền, chi tiết phí, tổng số tiền đã khấu trừ)
5. Xác thực (xác minh sinh trắc học/mã PIN)
6. Màn hình xử lý (tải ảnh động)
7a.Màn hình thành công (số xác nhận, biên nhận, nút "Chia sẻ biên nhận")
7b.Màn hình lỗi (xóa thông báo lỗi, tùy chọn thử lại, liên hệ hỗ trợ)

Màn hình khung dây chính:

Màn hình 2 - Lựa chọn người nhận:
- Thanh tìm kiếm ở trên cùng (theo tên, số điện thoại, số tài khoản)
- Phần "Người nhận gần đây" có hình đại diện và tên
- Nút "Người nhận mới" (dẫn đến biểu mẫu nhập thủ công)
- Xác thực đầu vào: kiểm tra định dạng thời gian thực

Màn hình 3 - Nhập số tiền:
- Trường nhập số lượng lớn (định dạng tự động bằng dấu phẩy)
- “Số dư khả dụng: \$X,XXX” hiển thị nổi bật
- Tính phí hiển thị theo thời gian thực
- Hành động nhanh "Gửi tất cả"
- Tắt "Tiếp theo" nếu số tiền > số dư

Màn hình 4 - Xem lại & Xác nhận:
- Tất cả các chi tiết được hiển thị rõ ràng (không có thông tin ẩn)
- Các trường có thể chỉnh sửa (nhấn để thay đổi người nhận/số tiền)
- Minh bạch về phí (phí chuyển khoản, tỷ giá nếu có)
- "Xác nhận & Gửi" CTA nổi bật

Bảo mật:
- Sinh trắc học hoặc mã PIN trước khi xác nhận cuối cùng
- Hết thời gian phiên sau 2 phút không hoạt động
- Cảnh báo giới hạn giao dịch
- Cờ phát hiện gian lận đối với số tiền/người nhận bất thường`,
    explanation: `Thiết kế này tuân theo các phương pháp hay nhất của UX: tiết lộ lũy tiến (một nhiệm vụ trên mỗi màn hình), phản hồi rõ ràng ở mỗi bước, ngăn ngừa lỗi (kiểm tra số dư, xác thực định dạng) và xây dựng lòng tin (minh bạch về phí, xem xét xác nhận).BA đảm bảo tất cả các yêu cầu chức năng được thể hiện một cách trực quan: quy tắc xác thực, bảo mật, trạng thái lỗi và các trường hợp khó khăn (không đủ tiền, lỗi mạng, vượt quá giới hạn hàng ngày).`,
  },
  'ba-wp-008': {
    question: `"Kiến trúc thông tin" (IA) là gì và tại sao BA nên quan tâm đến nó?`,
    options: [
      `IA là kiến ​​trúc máy chủ nơi lưu trữ thông tin`,
      `IA là thiết kế cấu trúc của môi trường thông tin - sắp xếp, gắn nhãn và cấu trúc nội dung để người dùng có thể tìm và hiểu thông tin một cách dễ dàng.Các BA nên quan tâm vì IA ảnh hưởng trực tiếp đến cách ánh xạ các yêu cầu tới điều hướng, phân loại và cấu trúc nội dung`,
      `IA là tên gọi khác của thiết kế lược đồ cơ sở dữ liệu`,
      `IA là một khung CSS cho bố cục đáp ứng`
    ],
    explanation: `Kiến trúc thông tin xác định cách tổ chức, gắn nhãn và truy cập nội dung.Nó bao gồm: cấu trúc điều hướng (menu, đường dẫn), phân loại nội dung (danh mục, thẻ), chiến lược tìm kiếm và ghi nhãn (những thứ được gọi là gì).BA ảnh hưởng đến IA thông qua: mô hình hóa miền (mối quan hệ thực thể), nghiên cứu người dùng (cách người dùng nghĩ về nội dung) và bài tập sắp xếp thẻ (cho phép người dùng sắp xếp nội dung một cách tự nhiên).`,
  },
  'ba-wp-009': {
    question: `Với tư cách là BA trưởng nhóm, hãy xác định quy trình kết hợp xác thực UX vào vòng đời yêu cầu.Bao gồm thời điểm tạo wireframe, cách nhận phản hồi của người dùng và cách phản hồi thông tin chi tiết về wireframe cho các yêu cầu.`,
    answer: `Quy trình yêu cầu tích hợp UX:

1. Giai đoạn khám phá:
- Nghiên cứu người dùng (phỏng vấn, quan sát, khảo sát) → chân dung người dùng + bản đồ hành trình
- BA tạo sơ đồ luồng người dùng cho các hành trình chính
- Đầu ra: chân dung người dùng đã được xác thực, bản đồ hành trình hiện tại, điểm yếu

2. Giai đoạn yêu cầu:
- Đối với từng tính năng hoành tráng/chính:
một.BA viết câu chuyện người dùng ban đầu + tiêu chí chấp nhận
b.BA tạo wireframe có độ chính xác thấp (giấy/Balsamiq) cho màn hình chính
c.Đánh giá wireframe với 3-5 người dùng đại diện (kiểm tra khả năng sử dụng không chính thức)
d.Phản hồi được ghi lại → yêu cầu được cập nhật/tinh chỉnh
đ.BA và nhà thiết kế cộng tác trên wireframe có độ trung thực trung bình trong Figma

3. Giai đoạn xác nhận:
- Nguyên mẫu tương tác được tạo từ wireframe (Tạo nguyên mẫu Figma)
- Kiểm tra khả năng sử dụng với 5 người dùng (giao thức think-aloud)
- Tỷ lệ thành công của nhiệm vụ, thời gian thực hiện nhiệm vụ, tỷ lệ lỗi được đo
- Các phát hiện được ưu tiên: quan trọng (ngăn chặn nhiệm vụ), chính (khó hiểu), thứ yếu (mỹ phẩm)
- Yêu cầu tồn đọng được cập nhật với các phát hiện UX

4. Bàn giao phát triển:
- Wireframes được chú thích với các yêu cầu (xác thực trường, quy tắc kinh doanh, thông báo lỗi)
- Thông số thiết kế được liên kết với câu chuyện của người dùng trong Jira
- QA viết test case từ wireframe + tiêu chí chấp nhận

5. Phản hồi liên tục:
- Sau khi phát hành: phân tích (bản đồ nhiệt, phân tích kênh, thử nghiệm A/B)
- Kênh phản hồi của người dùng → sàng lọc tồn đọng
- Đánh giá số liệu UX hàng tháng: tỷ lệ hoàn thành nhiệm vụ, NPS, phân tích phiếu hỗ trợ`,
    explanation: `Việc tích hợp xác thực UX vào các yêu cầu sẽ ngăn ngừa việc xây dựng sai.Việc thử nghiệm sớm với độ chính xác thấp sẽ rẻ (nguyên mẫu trên giấy);thiết kế lại muộn là tốn kém.Ngưỡng thử nghiệm 5 người dùng (theo Nielsen) nắm bắt được ~85% vấn đề về khả năng sử dụng.Liên kết wireframe với các câu chuyện đảm bảo nhà phát triển và QA có bối cảnh trực quan.Phản hồi liên tục sau khi phát hành sẽ đóng vòng lặp.`,
  },
  'ba-wp-010': {
    question: `Khi nào BA nên khuyên nên xây dựng nguyên mẫu tương tác có độ chính xác cao trước khi bắt đầu phát triển (bất chấp chi phí)?`,
    options: [
      `Luôn luôn - nguyên mẫu phải được xây dựng cho mọi tính năng`,
      `Không bao giờ - nguyên mẫu lãng phí thời gian mà lẽ ra có thể dùng để viết mã`,
      `Khi dự án có độ không chắc chắn cao (sản phẩm mới, tên miền không quen thuộc), chi phí xây dựng sai thứ đó rất cao hoặc các bên liên quan gặp khó khăn trong việc hình dung chỉ từ các yêu cầu dựa trên văn bản.`,
      `Chỉ khi có người thiết kế`
    ],
    explanation: `Nguyên mẫu có độ chính xác cao là một khoản đầu tư.Chúng có giá trị khi: (1) Sản phẩm mới và chưa có mô hình tinh thần hiện có, (2) Các bên liên quan không thể đồng ý về những gì họ muốn từ thông số kỹ thuật văn bản, (3) Chi phí phát triển rất cao (ứng dụng di động, hệ thống nhúng) — rẻ hơn khi lặp lại trên nguyên mẫu, (4) Phê duyệt theo quy định yêu cầu trình diễn giao diện người dùng trước khi xây dựng, (5) Khả năng sử dụng là điểm khác biệt chính.Đối với các tính năng hoặc công cụ nội bộ được hiểu rõ, độ trung thực thấp hơn là đủ.`,
  },
  'ba-sm-001': {
    question: `"Các bên liên quan" trong bối cảnh của một dự án là gì?`,
    options: [
      `Chỉ có nhà tài trợ dự án tài trợ cho dự án`,
      `Bất kỳ cá nhân, nhóm hoặc tổ chức nào có thể ảnh hưởng, bị ảnh hưởng hoặc nhận thấy mình bị ảnh hưởng bởi dự án`,
      `Chỉ người dùng cuối của hệ thống`,
      `Chỉ có thành viên nhóm phát triển`
    ],
    explanation: `Các bên liên quan bao gồm bất kỳ ai quan tâm hoặc có tác động từ dự án: nhà tài trợ, người dùng cuối, nhà phát triển, cơ quan quản lý, khách hàng, ban quản lý, nhóm hỗ trợ, thậm chí cả đối thủ cạnh tranh.Việc xác định sớm TẤT CẢ các bên liên quan sẽ ngăn ngừa những bất ngờ sau này.Việc thiếu một bên liên quan chính có thể dẫn đến những thay đổi yêu cầu muộn hoặc sự phản đối của dự án.`,
  },
  'ba-sm-002': {
    question: `Lưới Quyền lực/Lợi ích được sử dụng để quản lý các bên liên quan là gì?`,
    options: [
      `Phân công nhiệm vụ cho các thành viên trong nhóm dựa trên kỹ năng của họ`,
      `Phân loại các bên liên quan theo cấp độ quyền hạn (quyền lực) và mức độ quan tâm (lợi ích) để xác định chiến lược gắn kết cho từng nhóm`,
      `Tính toán ngân sách dự án dựa trên ý kiến ​​đóng góp của các bên liên quan`,
      `Xếp hạng các bên liên quan theo mức lương của họ`
    ],
    explanation: `Lưới Quyền lực/Lợi ích tạo ra 4 góc phần tư: Quyền lực cao + Lãi suất cao → Quản lý chặt chẽ (những người đóng vai trò chủ chốt), Quyền lực cao + Lãi suất thấp → Luôn hài lòng, Quyền lực thấp + Lãi suất cao → Luôn cập nhật thông tin, Quyền lực thấp + Lãi suất thấp → Giám sát.Điều này giúp BA phân bổ nỗ lực giao tiếp một cách hiệu quả - không phải tất cả các bên liên quan đều cần mức độ tham gia như nhau.`,
  },
  'ba-sm-003': {
    question: `Ma trận RACI cho thấy ai là người chịu trách nhiệm, chịu trách nhiệm, được tư vấn và được thông báo cho từng nhiệm vụ hoặc quyết định trong dự án.`,
    explanation: `RACI xác định các vai trò cho mỗi nhiệm vụ: Chịu trách nhiệm (thực hiện công việc), Chịu trách nhiệm (cuối cùng có thể trả lời - chỉ MỘT cho mỗi nhiệm vụ), Được tư vấn (cung cấp đầu vào - giao tiếp hai chiều), Được thông báo (được lưu giữ trong vòng lặp - giao tiếp một chiều).Ma trận RACI ngăn ngừa sự nhầm lẫn về việc ai làm gì và đảm bảo mọi nhiệm vụ đều có quyền sở hữu rõ ràng.`,
  },
  'ba-sm-004': {
    question: `Một bên liên quan chính (Phó chủ tịch bán hàng) phản đối hệ thống mới vì nó làm thay đổi quy trình làm việc của nhóm họ.Cách tiếp cận TỐT NHẤT là gì?`,
    options: [
      `Bỏ qua sự phản đối của họ - dự án có sự tài trợ điều hành`,
      `Báo cáo ngay cho nhà tài trợ dự án để bác bỏ VP`,
      `Đồng cảm với những mối quan tâm của họ, hiểu những phản đối cụ thể của họ, lôi kéo họ tham gia vào quá trình thiết kế và chứng minh hệ thống mới mang lại lợi ích như thế nào cho nhóm của họ`,
      `Loại bỏ các tính năng ảnh hưởng đến đội ngũ Bán hàng`
    ],
    explanation: `Sự phản kháng thường xuất phát từ nỗi sợ thay đổi, mất kiểm soát hoặc thiếu hiểu biết.BA nên: (1) lắng nghe và xác thực các mối quan ngại, (2) hiểu nguyên nhân cốt lõi (điều gì khiến họ lo lắng cụ thể?), (3) lôi kéo các bên liên quan vào thiết kế để họ có quyền sở hữu, (4) thể hiện những lợi ích cụ thể cho nhóm CỦA HỌ (không chỉ tổ chức), (5) cung cấp hỗ trợ đào tạo.Bỏ qua hoặc áp đảo sẽ tạo ra một kẻ thù mạnh mẽ.`,
  },
  'ba-sm-005': {
    question: `Kế hoạch truyền thông các bên liên quan là gì và nó nên bao gồm những gì?`,
    options: [
      `Danh sách tất cả địa chỉ email của các bên liên quan`,
      `Một kế hoạch xác định thông tin mà mỗi nhóm bên liên quan cần, THẾ NÀO (kênh), THƯỜNG XUYÊN (tần suất) và AI cung cấp thông tin đó`,
      `Lịch trình dự án được chia sẻ với tất cả các bên liên quan`,
      `Biên bản ghi lại tất cả các cuộc họp được tổ chức với các bên liên quan`
    ],
    explanation: `Kế hoạch truyền thông ánh xạ từng nhóm bên liên quan tới: Thông tin cần thiết (cập nhật trạng thái, quyết định, rủi ro), Kênh (email, cuộc họp, bảng thông tin, báo cáo), Tần suất (dự kiến ​​hàng ngày, báo cáo hàng tuần, chỉ đạo hàng tháng), Chủ sở hữu (người gửi nó) và Định dạng (slide deck, một trang, bảng thông tin).Điều này đảm bảo đúng người nhận được thông tin phù hợp vào đúng thời điểm — ngăn ngừa tình trạng quá tải thông tin và thiếu hụt thông tin.`,
  },
  'ba-sm-006': {
    question: `Hai bên liên quan có những yêu cầu trái ngược nhau: CFO muốn giảm thiểu chi phí trong khi CTO muốn sử dụng công nghệ tiên tiến (đắt tiền).BA nên xử lý việc này như thế nào?`,
    options: [
      `Sát cánh cùng CFO vì ngân sách luôn là ưu tiên hàng đầu`,
      `Sát cánh cùng CTO vì công nghệ tốt hơn đồng nghĩa với kết quả tốt hơn`,
      `Tạo điều kiện thảo luận giữa cả hai bên liên quan, giúp họ hiểu những hạn chế của nhau, khám phá các lựa chọn thay thế giúp cân bằng mục tiêu chi phí và công nghệ, và nếu cần, hãy báo cáo với nhà tài trợ dự án để đưa ra quyết định ưu tiên`,
      `Ghi lại cả hai yêu cầu một cách riêng biệt và để các nhà phát triển quyết định`
    ],
    explanation: `Các yêu cầu xung đột là phổ biến khi các bên liên quan có những ưu tiên khác nhau.BA đóng vai trò là người hỗ trợ trung lập: (1) đảm bảo mỗi bên hiểu quan điểm của bên kia, (2) khám phá các lựa chọn thay thế sáng tạo (ví dụ: áp dụng công nghệ theo từng giai đoạn, các lựa chọn thay thế nguồn mở), (3) sử dụng các tiêu chí khách quan (phân tích ROI, đánh giá rủi ro) để đánh giá các lựa chọn, (4) nếu không thể đạt được sự đồng thuận, hãy chuyển lên cơ quan quản trị hoặc nhà tài trợ để đưa ra quyết định ưu tiên.`,
  },
  'ba-sm-007': {
    question: `Thiết kế chiến lược gắn kết các bên liên quan để triển khai ERP trên toàn công ty, ảnh hưởng đến hơn 500 nhân viên ở 6 phòng ban.Bao gồm nhận dạng, phân tích, phương pháp tiếp cận tương tác và cách xử lý sự phản kháng.`,
    answer: `Chiến lược gắn kết các bên liên quan:

1. Nhận dạng:
- Hội thảo lập bản đồ các bên liên quan với các nhà tài trợ dự án
- Danh mục: Nhà tài trợ điều hành, Trưởng bộ phận, Quản lý cấp trung, Người dùng cuối, Đội ngũ CNTT, Bên ngoài (nhà cung cấp, cơ quan quản lý)
- Tổng số đăng ký các bên liên quan: ~30 cá nhân chủ chốt + 6 nhóm người dùng bộ phận

2. Phân tích:
- Lưới quyền lực/lợi ích cho các cá nhân chủ chốt
- Bản đồ ảnh hưởng của các bên liên quan thể hiện mối quan hệ và liên minh
- Đánh giá tác động thay đổi theo từng bộ phận (tác động cao/trung bình/thấp)
- Đánh giá thái độ hiện tại: Nhà vô địch, Người hỗ trợ, Trung lập, Điện trở, Người chặn

3. Phương pháp tiếp cận tương tác theo góc phần tư:
- Nhà vô địch (quyền lực cao, tích cực): đòn bẩy với tư cách là đại sứ thay đổi, tham gia vào ban chỉ đạo
- Người hỗ trợ (quyền lực thấp, tích cực): trao quyền với tư cách là người đào tạo và người sử dụng quyền lực của bộ phận
- Trung lập: giáo dục bằng thông điệp lợi ích được nhắm mục tiêu, đưa vào các bản demo
- Điện trở: các buổi gặp trực tiếp để hiểu mối quan tâm, tham gia vào thiết kế, giải quyết các điểm yếu cụ thể
- Người cản trở (quyền lực cao, tiêu cực): sự can thiệp của cấp điều hành, tìm điểm chung, thể hiện nguy cơ không thay đổi

4. Nhịp độ giao tiếp:
- Điều hành: ban chỉ đạo hàng tháng + cập nhật hội đồng quản trị hàng quý
- Trưởng bộ phận: họp tiến độ hai tuần một lần
- Người dùng cuối: bản tin hàng tháng + tòa thị chính theo bộ phận cụ thể
- Thay đổi mạng tướng: đồng bộ hàng tuần

5. Quản lý kháng chiến:
- Chủ động: tham gia sớm, trao đổi thông tin minh bạch, có kế hoạch đào tạo
- Reactive: kênh phản hồi (khảo sát ẩn danh), phản hồi nhanh các mối quan tâm, chia sẻ câu chuyện thành công
- Số liệu: khảo sát ý kiến của các bên liên quan (hàng tháng), tỷ lệ chấp nhận sau khi phát hành`,
    explanation: `Việc triển khai ERP quy mô lớn thất bại chủ yếu do vấn đề con người chứ không phải công nghệ.Chiến lược tham gia có cấu trúc đảm bảo mọi nhóm bên liên quan đều được xác định, thái độ của họ được đánh giá và các phương pháp tham gia phù hợp được áp dụng.Mạng lưới những nhà tiên phong thay đổi tạo ra sự hỗ trợ ở cấp cơ sở, trong khi sự chỉ đạo điều hành mang lại sự liên kết từ trên xuống.Theo dõi tâm lý hàng tháng cho phép phát hiện sớm mức kháng cự.`,
  },
  'ba-sm-008': {
    question: `"Sự nổi bật của các bên liên quan" (mô hình Mitchell, Agle & Wood) là gì và nó cải thiện như thế nào trên Lưới Quyền lực/Sở thích đơn giản?`,
    options: [
      `Đây là phiên bản đơn giản hơn của Lưới Quyền lực/Sở thích`,
      `Nó phân loại các bên liên quan theo ba thuộc tính - Quyền lực, Tính hợp pháp và Tính khẩn cấp - tạo ra 7 loại bên liên quan cung cấp phân tích nhiều sắc thái hơn 4 góc phần tư`,
      `Nó đo lường tần suất các bên liên quan tham dự các cuộc họp`,
      `Nó xếp hạng các bên liên quan theo thâm niên tổ chức của họ`
    ],
    explanation: `Mô hình nổi bật sử dụng 3 khía cạnh: Quyền lực (khả năng gây ảnh hưởng), Tính hợp pháp (sự tham gia phù hợp của họ), Tính khẩn cấp (sự nhạy cảm về thời gian trong các tuyên bố của họ).Sự kết hợp tạo ra 7 loại: ví dụ: "Dứt khoát" (cả 3), "Thống trị" (quyền lực + chính đáng), "Nguy hiểm" (quyền lực + cấp bách, không chính đáng).Điều này giúp xác định các bên liên quan có thể bị các mô hình đơn giản hơn bỏ qua - ví dụ: các cơ quan quản lý có thể có tính hợp pháp và tính cấp bách cao nhưng quyền lực hàng ngày lại thấp.`,
  },
  'ba-sm-009': {
    question: `Với tư cách là BA trưởng cho một dự án đa quốc gia với các bên liên quan ở 3 múi giờ (Mỹ, Châu Âu, Việt Nam), hãy thiết kế phương pháp quản lý các bên liên quan để giải quyết những khác biệt về văn hóa, thách thức giao tiếp và ra quyết định giữa các nhóm phân tán.`,
    answer: `Quản lý các bên liên quan phân tán:

1. Nhận thức về văn hóa:
- Mỹ: giao tiếp trực tiếp, ra quyết định nhanh, thoải mái tranh luận
- Châu Âu: quy trình chính thức, dựa trên sự đồng thuận, nặng về tài liệu
- Việt Nam: phân cấp, giao tiếp gián tiếp, đặt mối quan hệ lên hàng đầu
- Đào tạo: buổi nâng cao nhận thức đa văn hóa cho tất cả các trưởng nhóm
- BA điều chỉnh phong cách giao tiếp theo từng nền văn hóa (trực tiếp, đồng thuận hay xây dựng mối quan hệ)

2. Hạ tầng thông tin liên lạc:
- Thời gian họp luân phiên (chia sẻ gánh nặng cuộc gọi ngoài giờ)
- Cập nhật không đồng bộ "Theo dõi mặt trời": tóm tắt bằng văn bản hàng ngày trong kênh chia sẻ
- Nhật ký quyết định với quyền sở hữu và thời hạn rõ ràng
- Nguồn thông tin đáng tin cậy duy nhất: Confluence/SharePoint với các mẫu được chuẩn hóa
- Video hội trường thị trấn hàng tháng (ghi hình cho những người không thể tham dự)

3. Khung ra quyết định:
- Ma trận thẩm quyền quyết định: quyết định nào mang tính địa phương, yêu cầu phê duyệt chéo địa điểm
- Lộ trình thăng tiến: Nhóm → Trưởng khu vực → Ban chỉ đạo toàn cầu
- Quy tắc quyết định 48 giờ: nếu không có phản hồi trong vòng 48 giờ, quyết định sẽ mặc định là khuyến nghị
- Ra quyết định không đồng bộ cho các mục không khẩn cấp (tài liệu RFC có thời gian nhận xét)

4. Xây dựng mối quan hệ:
- Gặp mặt trực tiếp hàng quý (luân phiên giữa các địa điểm)
- Hoạt động xây dựng nhóm ảo (ghép nối giữa các địa điểm)
- Liên lạc BA chuyên dụng theo từng múi giờ
- Phần trao đổi văn hóa (mỗi đội trình bày văn hóa làm việc của mình)

5. Công cụ & Thực hành:
- Miro cho các hội thảo hợp tác giữa các múi giờ
- Ghi lại khung dệt/video để biết hướng dẫn về yêu cầu không đồng bộ
- Các kênh Slack/Teams có quy ước đặt tên rõ ràng cho mỗi chủ đề
- Hỗ trợ dịch các tài liệu quan trọng (tiếng Anh là ngôn ngữ thông dụng, tóm tắt bằng ngôn ngữ địa phương)`,
    explanation: `Các dự án đa quốc gia thất bại khi sự khác biệt về văn hóa bị bỏ qua.Giao tiếp trực tiếp có hiệu quả ở Mỹ nhưng có thể mang lại cảm giác hung hăng ở Việt Nam.Các phương pháp tiếp cận dựa trên sự đồng thuận có hiệu quả ở châu Âu nhưng lại gây cảm giác chậm chạp đối với các bên liên quan ở Hoa Kỳ.BA lãnh đạo phải điều chỉnh phong cách của họ theo từng nền văn hóa, tạo cơ sở hạ tầng cho sự cộng tác không đồng bộ và xây dựng các mối quan hệ vượt qua các múi giờ."Quy tắc quyết định 48 giờ" ngăn chặn sự khác biệt về múi giờ khỏi các quyết định bị đình trệ.`,
  },
  'ba-sm-010': {
    question: `Một CEO mới gia nhập tổ chức khi đang trong giai đoạn dự án và đặt câu hỏi về toàn bộ hướng đi của dự án.Với tư cách là Lead BA, ưu tiên ĐẦU TIÊN của bạn là gì?`,
    options: [
      `Tiếp tục với kế hoạch hiện tại - dự án đã được phê duyệt`,
      `Dừng ngay mọi công việc cho đến khi CEO đưa ra hướng đi mới`,
      `Yêu cầu một cuộc họp liên kết chiến lược với Giám đốc điều hành để hiểu tầm nhìn của họ, trình bày tình hình kinh doanh và tiến độ hiện tại của dự án, đồng thời đánh giá xem dự án có còn phù hợp với định hướng chiến lược mới hay không`,
      `Từ bỏ dự án vì phạm vi sẽ thay đổi`
    ],
    explanation: `Thay đổi CEO là một sự kiện quan trọng của các bên liên quan.Phương án kinh doanh của dự án có thể phù hợp hoặc không phù hợp với tầm nhìn của CEO mới.BA trưởng nhóm nên chủ động: (1) yêu cầu một cuộc họp (không chờ được triệu tập), (2) chuẩn bị một bản tóm tắt trường hợp kinh doanh ngắn gọn thể hiện giá trị đã phân phối và lên kế hoạch, (3) lắng nghe các ưu tiên của CEO mới, (4) đánh giá sự liên kết và những khoảng trống, (5) đề xuất điều chỉnh nếu cần.Điều này thể hiện giá trị BA và giúp dự án không bị hủy bỏ hoặc bị loại bỏ nếu không có phân tích thích hợp.`,
  },
  'ba-cn-001': {
    question: `"Lắng nghe tích cực" là gì và tại sao nó lại quan trọng đối với BA?`,
    options: [
      `Nghe trong khi thực hiện đa nhiệm trên máy tính xách tay của bạn trong cuộc họp`,
      `Tập trung hoàn toàn vào người nói, hiểu thông điệp của họ, trả lời chu đáo và xác nhận sự hiểu biết - điều đó giúp nắm bắt các yêu cầu chính xác và xây dựng niềm tin của các bên liên quan`,
      `Lặp lại tất cả những gì một bên liên quan nói từng chữ`,
      `Chỉ lắng nghe các bên liên quan cấp cao vì họ có nhiều quyền hơn`
    ],
    explanation: `Lắng nghe tích cực bao gồm: (1) hoàn toàn chú ý (không bị phân tâm), (2) diễn giải để xác nhận sự hiểu biết ("Vậy điều tôi nghe được là..."), (3) đặt câu hỏi làm rõ, (4) quan sát các tín hiệu phi ngôn ngữ, (5) giữ lại phán xét cho đến khi người nói kết thúc.Đối với BA, điều này rất quan trọng vì việc hiểu sai các yêu cầu sẽ dẫn đến việc làm lại tốn kém.`,
  },
  'ba-cn-002': {
    question: `BA nên điều chỉnh phong cách giao tiếp của mình dựa trên đối tượng - sử dụng ngôn ngữ kinh doanh với giám đốc điều hành và ngôn ngữ kỹ thuật với nhà phát triển.`,
    explanation: `Thích ứng với khán giả là một kỹ năng BA quan trọng.Các nhà điều hành quan tâm đến ROI, rủi ro và sự liên kết chiến lược (sử dụng ngôn ngữ kinh doanh).Nhà phát triển quan tâm đến thông số kỹ thuật, API và mô hình dữ liệu (sử dụng ngôn ngữ kỹ thuật).Người dùng cuối quan tâm đến khả năng sử dụng và tác động của quy trình làm việc (sử dụng ngôn ngữ đơn giản, tập trung vào quy trình).Sử dụng sai ngôn ngữ sẽ tạo ra sự hiểu lầm và mất gắn kết.`,
  },
  'ba-cn-003': {
    question: `Trong cuộc họp, một bên liên quan lạc đề và bắt đầu thảo luận về các vấn đề không liên quan.BA/điều phối viên nên làm gì?`,
    options: [
      `Hãy để họ tiếp tục vì ngắt lời là thô lỗ`,
      `Đột ngột cắt chúng đi và chuyển sang mục chương trình nghị sự tiếp theo`,
      `Ghi nhận quan điểm của họ, ghi chú vào "bãi đỗ xe" để theo dõi và chuyển hướng cuộc trò chuyện trở lại chương trình làm việc`,
      `Kết thúc cuộc họp sớm vì không còn hiệu quả`
    ],
    explanation: `Kỹ thuật "bãi đậu xe" nắm bắt các mục lạc đề mà không loại bỏ chúng: "Đó là một điểm quan trọng - hãy để tôi thêm nó vào danh sách bãi đậu xe của chúng ta và chúng ta sẽ giải quyết vấn đề đó riêng sau cuộc họp."Điều này tôn trọng các bên liên quan trong khi vẫn giữ cho cuộc họp đi đúng hướng.Xem lại các hạng mục trong bãi đậu xe vào cuối hoặc lên lịch các buổi theo dõi.`,
  },
  'ba-cn-004': {
    question: `Kỹ thuật "5 Whys" là gì và khi nào BA nên sử dụng nó?`,
    options: [
      `Hỏi "tại sao" 5 lần trong cuộc phỏng vấn để khiến các bên liên quan khó đưa ra câu trả lời tốt hơn`,
      `Một kỹ thuật phân tích nguyên nhân gốc rễ hỏi lặp đi lặp lại "tại sao" (thường ~ 5 lần) để tìm hiểu sâu hơn các triệu chứng trong quá khứ đến nguyên nhân gốc rễ cơ bản của vấn đề`,
      `Một kỹ thuật động não tạo ra 5 giải pháp thay thế`,
      `Một kỹ thuật ưu tiên xếp hạng 5 yêu cầu`
    ],
    explanation: `5 Whys (từ Hệ thống sản xuất Toyota) đi sâu vào quan hệ nhân quả: "Tại sao giao hàng trễ?"→ "Bởi vì QA tìm thấy lỗi" → "Tại sao?"→ “Bởi vì yêu cầu không rõ ràng” → “Tại sao?”→ "Bởi vì quá trình sàng lọc đã bị bỏ qua" → đã xác định được nguyên nhân gốc rễ.BA sử dụng nó trong quá trình phân tích vấn đề để hiểu vấn đề thực sự đằng sau các triệu chứng.Số 5 là kim chỉ nam - hãy dừng lại khi bạn tìm ra nguyên nhân gốc rễ.`,
  },
  'ba-cn-005': {
    question: `Khi trình bày với các giám đốc điều hành cấp cao, cấu trúc trình bày hiệu quả NHẤT là gì?`,
    options: [
      `Bắt đầu với dữ liệu phân tích chi tiết, sau đó xây dựng kết luận trong vòng 60 phút`,
      `Bắt đầu với khuyến nghị/kết luận trước (tóm tắt điều hành), sau đó cung cấp bằng chứng hỗ trợ và giữ nó ngắn gọn (10-15 phút)`,
      `Sử dụng càng nhiều slide càng tốt để thể hiện sự kỹ lưỡng`,
      `Đọc trực tiếp từ slide để đảm bảo độ chính xác`
    ],
    explanation: `Các nhà điều hành có thời gian và sự chú ý hạn chế.Sử dụng "nguyên tắc kim tự tháp" (của Barbara Minto): dẫn đầu bằng khuyến nghị, sau đó đưa ra các lập luận và bằng chứng hỗ trợ.Cấu trúc: (1) Tóm tắt kèm theo khuyến nghị, (2) 3-4 điểm hỗ trợ chính, (3) Dữ liệu/bằng chứng cho từng điểm.Giữ nó ngắn gọn, trực quan và định hướng hành động.Chuẩn bị các slide dự phòng chi tiết cho phần hỏi đáp nếu cần.`,
  },
  'ba-cn-006': {
    question: `Sự khác biệt giữa "lập trường" và "lợi ích" trong đàm phán là gì?`,
    options: [
      `Các chức vụ do người quản lý nắm giữ;lợi ích được nắm giữ bởi các thành viên trong nhóm`,
      `Chức vụ là những gì mọi người NÓI họ muốn (các yêu cầu đã nêu);sở thích là TẠI SAO họ muốn nó (nhu cầu cơ bản) - hiểu rõ sở thích sẽ tạo ra các giải pháp sáng tạo`,
      `Các vị trí có thể thương lượng;lợi ích không`,
      `Chúng giống nhau được thể hiện khác nhau`
    ],
    explanation: `Ví dụ điển hình: hai đứa trẻ tranh nhau một quả cam (vị thế: “Con muốn quả cam”).Hiểu được sở thích cho thấy một người muốn nước trái cây, người kia muốn vỏ để nướng - cả hai đều có thể hài lòng.Trong công việc BA: bên liên quan nói "Tôi cần tính năng này trước thứ Sáu" (vị trí).Mối quan tâm có thể là "Tôi có bản demo cho khách hàng vào thứ Hai" - biết điều này, bạn có thể cung cấp một nguyên mẫu sẵn sàng cho bản demo thay vì tính năng đầy đủ.`,
  },
  'ba-cn-007': {
    question: `Bạn cần tổ chức một buổi hội thảo về yêu cầu kéo dài 2 giờ với 12 người tham gia từ các bộ phận khác nhau, những người chưa từng làm việc cùng nhau.Thiết kế chương trình hội thảo, các kỹ thuật điều hành và cách bạn xử lý những người tham gia chiếm ưu thế và im lặng.`,
    answer: `Thiết kế xưởng:

Trước hội thảo:
- Gửi chương trình nghị sự, mục tiêu và tài liệu đọc trước 3 ngày
- Phỏng vấn cá nhân với 2-3 người tham gia chính để hiểu các ưu tiên
- Chuẩn bị bảng Miro có mẫu

Chương trình nghị sự (2 giờ):
0:00-0:10 — Chào mừng, mục tiêu, quy tắc cơ bản (từng người phát biểu, hoan nghênh tất cả các ý tưởng, gọi điện thoại)
0:10-0:25 — Cài đặt bối cảnh: trình bày báo cáo vấn đề và tóm tắt trạng thái hiện tại
0:25-0:45 — Động não trong im lặng: mỗi người tham gia viết ý tưởng lên giấy ghi chú một cách độc lập (ngăn suy nghĩ nhóm và mang lại tiếng nói bình đẳng cho người hướng nội)
0:45-1:05 — Nhóm sở thích: người tham gia đăng hình dán, hợp tác phân nhóm thành các chủ đề
1:05-1:15 — Nghỉ giải lao
1:15-1:40 — Bỏ phiếu theo chấm: mỗi người tham gia có 5 chấm để bỏ phiếu cho các chủ đề có mức độ ưu tiên cao nhất
1:40-1:55 — Thảo luận về 3-4 chủ đề hàng đầu: tìm hiểu sâu, làm rõ, nắm bắt các mục hành động
1:55-2:00 — Tóm tắt, các bước tiếp theo, đánh giá bãi đậu xe

Xử lý những người tham gia chiếm ưu thế:
- Kỹ thuật quay vòng: đi quanh phòng, từng người nói (hạn chế độc quyền)
- "Cảm ơn bạn, đó là một điểm tuyệt vời — hãy lắng nghe ý kiến của người khác"
- Trực tiếp hướng dẫn những người tham gia trầm lặng hơn: "Maria, quan điểm của bạn về vấn đề này là gì?"
- Bãi đỗ xe tiếp tuyến chi tiết

Xử lý người tham gia im lặng:
- Động não trong im lặng đảm bảo mọi người đều đóng góp bằng văn bản trước tiên
- Chia nhóm nhỏ (3 người) trước khi thảo luận toàn thể
- Lời mời trực tiếp nhưng nhẹ nhàng: "Chúng tôi chưa nhận được phản hồi từ phía Hoạt động - bạn có ý kiến gì không?"
- Bỏ phiếu ẩn danh (Mentimeter) cho các chủ đề nhạy cảm`,
    explanation: `Việc tổ chức hội thảo hiệu quả đòi hỏi các kỹ thuật có cấu trúc để cân bằng sự tham gia.Động não trong im lặng sẽ ngăn chặn hiệu ứng HIPPO (Ý kiến ​​của người được trả lương cao nhất chiếm ưu thế).Bỏ phiếu chấm dân chủ hóa mức độ ưu tiên.Round-robin đảm bảo tất cả các giọng nói đều được lắng nghe.Vai trò của người điều phối là quản lý sự năng động của nhóm chứ không phải đóng góp ý kiến ​​- tính trung lập tạo dựng niềm tin.`,
  },
  'ba-cn-008': {
    question: `Trong quá trình đàm phán về phạm vi dự án, khách hàng yêu cầu 5 tính năng bổ sung mà không tăng ngân sách.Chiến lược đàm phán nào phù hợp nhất?`,
    options: [
      `Chấp nhận tất cả 5 tính năng để giữ cho khách hàng hài lòng`,
      `Từ chối cả 5 tính năng để bảo vệ ngân sách dự án`,
      `Sử dụng đàm phán có nguyên tắc: khám phá lợi ích đằng sau nhu cầu, đưa ra các lựa chọn (thêm ngân sách, kéo dài thời gian, tính năng hoán đổi, phân phối theo giai đoạn) và tìm giải pháp cùng có lợi bằng cách sử dụng các tiêu chí khách quan`,
      `Đồng ý với 2,5 tính năng như một sự thỏa hiệp`
    ],
    explanation: `Đàm phán theo nguyên tắc (Fisher & Ury, "Getting to Yes") có 4 nguyên tắc: (1) Tách con người ra khỏi vấn đề, (2) Tập trung vào lợi ích chứ không phải vị trí, (3) Tạo ra các phương án để cùng có lợi, (4) Sử dụng các tiêu chí khách quan.Thay vì chấp nhận hoặc từ chối, hãy khám phá TẠI SAO những tính năng này lại cần thiết và đưa ra các lựa chọn thay thế: hoán đổi các tính năng có mức độ ưu tiên thấp hơn, phân phối theo giai đoạn hoặc điều chỉnh ngân sách/dòng thời gian.Điều này bảo vệ các mối quan hệ trong khi duy trì tính toàn vẹn của dự án.`,
  },
  'ba-cn-009': {
    question: `Với tư cách là Trưởng BA, thiết kế khung truyền thông cho một dự án có mức đặt cược cao trong đó nhà tài trợ là Giám đốc điều hành, ban chỉ đạo họp hàng tháng, có 3 nhóm phân phối và các nhà cung cấp bên ngoài tham gia.Bao gồm các đường dẫn leo thang và truyền thông trong thời kỳ khủng hoảng.`,
    answer: `Khung truyền thông:

1. Nhịp độ giao tiếp thường xuyên:
- Nhà tài trợ CEO: Cuộc họp giao ban 30 phút 1:1 hàng tháng (các quyết định quan trọng, rủi ro, cột mốc quan trọng) + đánh giá chiến lược hàng quý
- Ban chỉ đạo: Cuộc họp 1 giờ hàng tháng (tiến độ so với kế hoạch, rủi ro, quyết định cần thiết, tình trạng ngân sách)
- Nhóm phân phối: Bản demo/đồng bộ hóa hai tuần một lần (kết quả chạy nước rút, sự phụ thuộc giữa các nhóm, công việc sắp tới)
- Nhà cung cấp: Cuộc gọi trạng thái hàng tuần (giao hàng, tuân thủ SLA, vấn đề, lập hóa đơn)
- Tất cả các bên liên quan: Bản tin hàng tháng (điểm nổi bật, các cột mốc sắp tới, tiêu điểm của nhóm)

2. Đường dẫn leo thang:
- Cấp độ 1 (Team): Trưởng nhóm giải quyết trong vòng 24h
- Cấp độ 2 (PM/Lead BA): Các vấn đề liên nhóm hoặc nhà cung cấp, giải quyết trong vòng 48 giờ
- Cấp độ 3 (Ban chỉ đạo): Tác động đến ngân sách/phạm vi/thời gian, giải pháp tại cuộc họp tiếp theo hoặc phiên họp khẩn cấp
- Cấp độ 4 (Nhà tài trợ CEO): Rủi ro đe dọa dự án, xoay chuyển chiến lược, giải quyết trong vòng 24 giờ

3. Giao thức truyền thông trong khủng hoảng:
- Phát hiện sự cố → Thông báo ngay cho PM + Lead BA
- Trong vòng 2 giờ: đánh giá tác động, kế hoạch ngăn chặn, thông báo cho các bên liên quan
- Kênh liên lạc: khẩn cấp = điện thoại/gọi nhóm;quan trọng = email;thông tin = bản tin
- Người phát ngôn được chỉ định cho hoạt động truyền thông đối ngoại
- Hậu khủng hoảng: phân tích nguyên nhân gốc rễ, bài học kinh nghiệm, cập nhật quy trình

4. Điều hành cuộc họp:
- Mỗi cuộc họp đều có: nội dung cuộc họp (được gửi trước 24h), người điều phối, người chấm công, người ghi chép
- Nhật ký quyết định được cập nhật trong vòng 4 giờ kể từ cuộc họp
- Các mục hành động được theo dõi trong công cụ chia sẻ với chủ sở hữu và ngày đến hạn
- Chính sách “Không lịch trình, không họp”`,
    explanation: `Các dự án mang tính rủi ro cao đòi hỏi sự giao tiếp có kỷ luật.Khung này đảm bảo Giám đốc điều hành nhận được các cập nhật chiến lược ngắn gọn (không phải chi tiết hoạt động), ban chỉ đạo đưa ra các quyết định sáng suốt, các nhóm luôn liên kết và các nhà cung cấp chịu trách nhiệm.Lộ trình leo thang ngăn chặn các vấn đề trở nên trầm trọng hơn và giao thức xử lý khủng hoảng đảm bảo phản ứng nhanh chóng, phối hợp khi có sự cố xảy ra.`,
  },
  'ba-cn-010': {
    question: `Khái niệm "BATNA" trong đàm phán là gì và nó giúp ích gì cho Lead BA?`,
    options: [
      `BATNA là viết tắt của "Phân bổ ngân sách để đánh giá nhu cầu kỹ thuật"`,
      `BATNA (Giải pháp thay thế tốt nhất cho thỏa thuận thương lượng) là lựa chọn dự phòng tốt nhất của bạn nếu đàm phán thất bại - biết rằng BATNA của bạn sẽ mang lại cho bạn sức mạnh để thoát khỏi các giao dịch bất lợi và đặt ra kết quả tối thiểu có thể chấp nhận được`,
      `BATNA là một công cụ phần mềm để đàm phán tự động`,
      `BATNA là viết tắt của "Đào tạo và đánh giá phân tích kinh doanh"`
    ],
    explanation: `BATNA (từ "Đi đến Đồng ý") là lựa chọn tốt nhất của bạn nếu cuộc đàm phán này thất bại.Nếu một nhà cung cấp báo giá \$500K nhưng bạn có một nhà cung cấp thay thế ở mức \$400K, thì BATNA của bạn là \$400K — bạn không bao giờ nên chấp nhận mức giá cao hơn.Đối với BA: nếu các bên liên quan yêu cầu các mốc thời gian không thể thực hiện được, BATNA của bạn có thể là cách tiếp cận theo từng giai đoạn hoặc phạm vi giảm bớt.BATNA mạnh mang lại sự tự tin trong đàm phán;BATNA yếu có nghĩa là bạn cần đàm phán chặt chẽ hơn hoặc cải thiện các lựa chọn thay thế của mình.`,
  },
  'ba-si-001': {
    question: `API (Giao diện lập trình ứng dụng) theo thuật ngữ đơn giản là gì?`,
    options: [
      `Một loại cơ sở dữ liệu lưu trữ thông tin người dùng`,
      `Một bộ quy tắc và giao thức cho phép các hệ thống phần mềm khác nhau giao tiếp và trao đổi dữ liệu với nhau`,
      `Ngôn ngữ lập trình dùng để xây dựng trang web`,
      `Một cáp vật lý kết nối hai máy chủ`
    ],
    explanation: `API giống như người phục vụ trong nhà hàng: bạn (khách hàng) nói với người phục vụ (API) những gì bạn muốn, người phục vụ nhận đơn đặt hàng của bạn đến nhà bếp (máy chủ) và mang thức ăn trở lại (phản hồi).API xác định cách các hệ thống giao tiếp với nhau - dữ liệu nào sẽ gửi, ở định dạng nào và những gì mong đợi nhận lại.BA cần hiểu API để xác định các yêu cầu tích hợp.`,
  },
  'ba-si-002': {
    question: `REST có nghĩa là gì trong bối cảnh API web?`,
    options: [
      `Công nghệ truyền phát sự kiện theo thời gian thực`,
      `Chuyển giao trạng thái đại diện - một phong cách kiến ​​trúc để thiết kế các ứng dụng nối mạng bằng các phương thức HTTP tiêu chuẩn`,
      `Thực thi từ xa và kiểm tra máy chủ`,
      `Công nghệ phần mềm doanh nghiệp đáng tin cậy`
    ],
    explanation: `REST là một kiểu kiến ​​trúc (không phải giao thức) sử dụng các phương thức HTTP: GET (đọc), POST (tạo), PUT/PATCH (cập nhật), DELETE (xóa).API REST trao đổi dữ liệu ở định dạng JSON hoặc XML.API RESTful không có trạng thái (mỗi yêu cầu chứa tất cả thông tin cần thiết).BA nên hiểu REST khi viết yêu cầu tích hợp và thông số kỹ thuật API.`,
  },
  'ba-si-003': {
    question: `Trong tích hợp hệ thống, “thời gian thực” luôn có nghĩa là dữ liệu được truyền ngay lập tức mà không có độ trễ.`,
    explanation: `"Thời gian thực" trong ngữ cảnh tích hợp thường có nghĩa là "gần thời gian thực" — dữ liệu được truyền trong vòng vài giây đến vài phút chứ không phải ngay lập tức theo nghĩa đen.Độ trễ bằng 0 thực sự là không thể thực hiện được.Các loại tích hợp theo thời gian: Thời gian thực/đồng bộ (cần phản hồi ngay lập tức), Gần thời gian thực (vài giây đến vài phút qua hàng đợi tin nhắn), Hàng loạt (chuyển số lượng lớn định kỳ - hàng ngày, hàng giờ).BA phải xác định các yêu cầu về độ trễ cụ thể chứ không chỉ nói "thời gian thực".`,
  },
  'ba-si-004': {
    question: `Sự khác biệt giữa tích hợp đồng bộ và không đồng bộ là gì?`,
    options: [
      `Đồng bộ nhanh hơn;không đồng bộ chậm hơn`,
      `Đồng bộ: hệ thống gọi đợi phản hồi trước khi tiếp tục (mẫu yêu cầu-phản hồi);Không đồng bộ: hệ thống gọi điện sẽ gửi tin nhắn và tiếp tục mà không cần chờ đợi — phản hồi sẽ đến sau thông qua lệnh gọi lại, webhook hoặc hàng đợi tin nhắn`,
      `Đồng bộ dành cho API;không đồng bộ dành cho cơ sở dữ liệu`,
      `Không có sự khác biệt thực tế`
    ],
    explanation: `Đồng bộ (ví dụ: lệnh gọi API REST): Hệ thống A gọi Hệ thống B và chờ phản hồi - đơn giản nhưng tạo ra sự kết nối chặt chẽ.Không đồng bộ (ví dụ: hàng đợi tin nhắn): Hệ thống A gửi tin nhắn đến hàng đợi (Kafka, RabbitMQ) và tiếp tục - Hệ thống B xử lý tin nhắn đó khi sẵn sàng.Async phù hợp hơn cho: các tác vụ chạy dài, xử lý khối lượng lớn và tách rời hệ thống.BA phải chỉ định mẫu nào phù hợp với từng kịch bản tích hợp.`,
  },
  'ba-si-005': {
    question: `BA nên bao gồm những gì trong đặc tả yêu cầu tích hợp?`,
    options: [
      `Chỉ tên của hai hệ thống được tích hợp`,
      `Hệ thống nguồn và đích, trường dữ liệu và ánh xạ, định dạng dữ liệu (JSON/XML), giao thức (REST/SOAP), tần suất/kích hoạt, xử lý lỗi, logic thử lại, bảo mật (xác thực/ủy quyền) và SLA (độ trễ, tính khả dụng)`,
      `Chỉ URL API và yêu cầu mẫu`,
      `Danh sách tất cả các API có sẵn trên internet`
    ],
    explanation: `Thông số tích hợp hoàn chỉnh bao gồm: (1) Các hệ thống liên quan và chỉ đạo (nguồn → đích), (2) Ánh xạ dữ liệu (từng trường: trường nguồn → trường đích, chuyển đổi), (3) Chi tiết kỹ thuật (giao thức, định dạng, phương thức xác thực), (4) Trình kích hoạt/tần suất (theo hướng sự kiện, được lên lịch, theo yêu cầu), (5) Xử lý lỗi (điều gì xảy ra khi lỗi), (6) Bảo mật (khóa API, OAuth, chứng chỉ), (7) SLA (thời gian phản hồi, tính khả dụng, thông lượng), (8) Kiểm tracách tiếp cận.`,
  },
  'ba-si-006': {
    question: `Webhook là gì và nó khác với bỏ phiếu như thế nào?`,
    options: [
      `Webhooks và bỏ phiếu là như nhau`,
      `Webhook là một cơ chế đẩy trong đó máy chủ tự động gửi dữ liệu đến máy khách khi có sự kiện xảy ra;Bỏ phiếu là một cơ chế kéo trong đó máy khách liên tục yêu cầu máy chủ cập nhật theo các khoảng thời gian`,
      `Webhooks dành cho thời gian thực;bỏ phiếu là để xử lý hàng loạt`,
      `Webhooks yêu cầu thiết lập thủ công;bỏ phiếu là tự động`
    ],
    explanation: `Webhook (đẩy): "Gọi cho tôi khi có chuyện gì xảy ra" — máy chủ thông báo cho khách hàng bằng cách gửi HTTP POST tới URL đã đăng ký khi xảy ra sự kiện (ví dụ: thanh toán đã hoàn tất).Bỏ phiếu (kéo): "Tôi sẽ kiểm tra 5 phút một lần" — máy khách liên tục truy vấn máy chủ.Webhooks hiệu quả hơn (không lãng phí yêu cầu) nhưng yêu cầu máy khách lưu trữ điểm cuối.Các BA nên đề xuất webhooks khi có sẵn để tích hợp theo sự kiện.`,
  },
  'ba-si-007': {
    question: `Thiết kế kiến ​​trúc tích hợp cho nền tảng thương mại điện tử cần tích hợp với: Cổng thanh toán, Nhà cung cấp vận chuyển, Hệ thống kho hàng và Dịch vụ email.Chỉ định mẫu tích hợp, luồng dữ liệu và xử lý lỗi cho từng mẫu.`,
    answer: `Kiến trúc tích hợp:

1. Cổng thanh toán (Stripe/PayPal):
- Mẫu: API REST đồng bộ (luồng thanh toán yêu cầu phản hồi ngay lập tức)
- Luồng: Thương mại điện tử → API thanh toán (POST/phí) → phản hồi (thành công/thất bại)
- Xử lý lỗi: thử lại với thời gian chờ theo cấp số nhân (tối đa 3 lần thử), thời gian chờ là 30 giây, chuyển sang phương thức thanh toán thay thế
- Bảo mật: mã thông báo, tuân thủ PCI-DSS, webhook cho các thông báo không đồng bộ (hoàn tiền, tranh chấp)

2. Nhà cung cấp dịch vụ vận chuyển (DHL/FedEx):
- Mẫu: Không đồng bộ + Webhook
- Luồng: Xác nhận đơn hàng → POST yêu cầu vận chuyển → nhận số theo dõi (đồng bộ)
- Cập nhật trạng thái qua webhook (đã vận chuyển, đang vận chuyển, đã giao hàng, ngoại lệ)
- Xử lý lỗi: xếp hàng các yêu cầu không thành công, thử lại thủ công, dự phòng cho nhà cung cấp dịch vụ thay thế
- Ánh xạ dữ liệu: địa chỉ đơn hàng → định dạng địa chỉ nhà cung cấp dịch vụ, kích thước gói hàng → định dạng dành riêng cho nhà cung cấp dịch vụ

3. Hệ thống kho (ERP/WMS):
- Mẫu: Hướng sự kiện qua hàng đợi tin nhắn (Kafka/RabbitMQ)
- Luồng: Đơn hàng đã đặt → sự kiện "order.created" → Dịch vụ hàng tồn kho giảm tồn kho
- Cập nhật hàng tồn kho: Hàng tồn kho → sự kiện "stock.update" → Thương mại điện tử cập nhật tình trạng còn hàng của sản phẩm
- Xử lý lỗi: xếp hàng thư chết cho các tin nhắn không thành công, xử lý bình thường, đặt hàng tồn kho với TTL (thời gian chờ 5 phút)
- Tính nhất quán: tính nhất quán cuối cùng có thể chấp nhận được (cập nhật trong vòng 30 giây)

4. Dịch vụ Email (SendGrid/SES):
- Mẫu: Không đồng bộ qua hàng đợi tin nhắn
- Luồng: Sự kiện đặt hàng (xác nhận, vận chuyển, giao hàng) → hàng đợi email → Dịch vụ email gửi email theo mẫu
- Xử lý lỗi: thử lại 3x, sau đó chuyển sang hàng đợi không thành công để xem xét thủ công, không chặn luồng lệnh
- SLA: email được gửi trong vòng 5 phút kể từ khi diễn ra sự kiện

Cắt ngang:
- API Gateway để xác thực tập trung, giới hạn tốc độ, ghi nhật ký
- Mẫu ngắt mạch cho tất cả các tích hợp bên ngoài (ngăn chặn sự cố theo tầng)
- Ghi nhật ký và giám sát tập trung (cảnh báo tỷ lệ lỗi > ngưỡng)`,
    explanation: `Sự tích hợp khác nhau đòi hỏi các mẫu khác nhau dựa trên đặc điểm của chúng.Thanh toán cần đồng bộ (người dùng đang chờ), hàng tồn kho cần sự nhất quán cuối cùng (đánh đổi tốc độ và độ chính xác), email có thể gửi và quên (không bao giờ chặn luồng đơn hàng).Mẫu cầu dao ngăn chặn việc tích hợp thất bại làm toàn bộ hệ thống bị hỏng.BA phải chỉ định các mẫu và chiến lược xử lý lỗi này - không chỉ "hai hệ thống này nói chuyện với nhau".`,
  },
  'ba-si-008': {
    question: `Khi hai hệ thống có các mô hình dữ liệu khác nhau (ví dụ: Hệ thống A sử dụng "customer_name" làm một trường duy nhất, Hệ thống B sử dụng riêng "first_name" và "last_name"), thách thức tích hợp này được gọi là gì?`,
    options: [
      `Mã hóa dữ liệu không khớp`,
      `Trở kháng mô hình dữ liệu không khớp - được giải quyết thông qua các quy tắc chuyển đổi và ánh xạ dữ liệu được xác định trong các yêu cầu tích hợp`,
      `Vấn đề về độ trễ mạng`,
      `Xung đột phiên bản API`
    ],
    explanation: `Trở kháng mô hình dữ liệu không khớp là một trong những thách thức tích hợp phổ biến nhất.BA phải xác định ánh xạ dữ liệu chi tiết: target_first_name = SPLIT(source_customer_name, " ")[0], target_last_name = SPLIT(source_customer_name, " ")[1:].Các thông tin không khớp khác: các định dạng ngày khác nhau (US so với ISO), các đơn vị khác nhau (dặm so với km), hệ thống mã hóa khác nhau (mã quốc gia: US so với USA so với 840) và các loại dữ liệu khác nhau (chuỗi so với ID số nguyên).`,
  },
  'ba-si-009': {
    question: `Một doanh nghiệp lớn có hơn 15 hệ thống tích hợp điểm-điểm tạo ra một "kiến trúc spaghetti".Với tư cách là Trưởng nhóm BA, hãy đề xuất một chiến lược tích hợp để đơn giản hóa việc này và cách di chuyển từ trạng thái hiện tại.`,
    answer: `Chiến lược hiện đại hóa hội nhập:

1. Đánh giá hiện trạng:
- Ánh xạ tất cả các tích hợp hiện có (nguồn, đích, giao thức, dữ liệu, tần suất)
- Xác định các điểm yếu: kết nối dễ vỡ, dữ liệu không nhất quán, chi phí bảo trì cao
- Phân loại tích hợp theo mức độ quan trọng và độ phức tạp
- Tính toán chi phí bảo trì hiện tại (công sức, thất bại, nợ công nghệ)

2. Kiến trúc mục tiêu - Nền tảng tích hợp (Hub-and-Spoke):
- Giới thiệu Nền tảng tích hợp / Bus dịch vụ doanh nghiệp (ESB) hoặc tương đương hiện đại (API Gateway + Event Bus)
- Tất cả các hệ thống kết nối với hub, không kết nối với nhau
- Tập trung: chuyển đổi dữ liệu, định tuyến, xử lý lỗi, ghi nhật ký, bảo mật
- Lợi ích: N kết nối thay vì N×(N-1)/2, điểm giám sát duy nhất, chuyển đổi có thể tái sử dụng

3. Phương pháp di chuyển (Mẫu hình Strangler):
- Giai đoạn 1: Thiết lập nền tảng tích hợp, di chuyển 2-3 tích hợp có rủi ro thấp nhất làm bằng chứng cho khái niệm
- Giai đoạn 2: Di chuyển các tích hợp có độ phức tạp trung bình (chuyển hàng loạt/theo lịch trình)
- Giai đoạn 3: Di chuyển các tích hợp có độ phức tạp cao (thời gian thực, tài chính)
- Giai đoạn 4: Ngừng kết nối point-to-point cũ
- Từng giai đoạn: chạy song song cũ và mới (ghi kép/đọc kép) trước khi chuyển đổi

4. Quản trị:
- Tiêu chuẩn thiết kế tích hợp (đặt tên API, mã lỗi, phương thức xác thực)
- Danh mục tích hợp (tích hợp nào tồn tại, ai sở hữu chúng, SLA)
- Thay đổi quy trình quản lý để sửa đổi tích hợp
- Giám sát bảng điều khiển với các cảnh báo về lỗi, độ trễ, thông lượng

5. Số liệu thành công:
- Giảm tỷ lệ thất bại tích hợp (mục tiêu: -60%)
- Thời gian thiết lập tích hợp mới (mục tiêu: giờ thay vì tuần)
- Giảm chi phí bảo trì (mục tiêu: -40%)
- Thời gian trung bình để phát hiện/giải quyết các vấn đề tích hợp`,
    explanation: `Tích hợp Spaghetti (điểm-điểm) có quy mô kém: 15 hệ thống = tối đa 210 kết nối.Mỗi hệ thống mới bổ sung thêm 15 kết nối mới.Kiến trúc hub-and-nan hoa giảm thiểu con số này xuống còn 15 kết nối (mỗi hệ thống có một kết nối tới hub).Mô hình Strangler Fig di chuyển tăng dần - không có "vụ nổ lớn" rủi ro - chạy song song giữa cũ và mới cho đến khi sự tin cậy được thiết lập.`,
  },
  'ba-si-010': {
    question: `Khi xác định các yêu cầu đối với việc tích hợp API của bên thứ ba, BA trưởng nhóm phải đảm bảo xem xét những vấn đề pháp lý/hợp đồng nào?`,
    options: [
      `Chỉ cần xem xét tài liệu API`,
      `Tất cả các điều khoản dịch vụ của API, đảm bảo SLA (thời gian hoạt động, độ trễ), quyền sở hữu dữ liệu, thỏa thuận xử lý dữ liệu (DPA cho GDPR), giới hạn tốc độ, mô hình định giá, chính sách ngừng sử dụng và rủi ro khóa nhà cung cấp đều phải được đánh giá và ghi lại trong yêu cầu tích hợp`,
      `Chỉ kiểm tra xem API có hỗ trợ định dạng JSON không`,
      `Chỉ cần xác minh khóa API hoạt động`
    ],
    explanation: `API của bên thứ ba tạo ra sự phụ thuộc kinh doanh.BA khách hàng tiềm năng phải đánh giá: (1) SLA - nhà cung cấp đảm bảo thời gian hoạt động và thời gian phản hồi như thế nào?(2) Quyền sở hữu dữ liệu - ai sở hữu dữ liệu được xử lý thông qua API?(3) DPA/tuân thủ — nhà cung cấp có tuân thủ GDPR/PDPA đối với dữ liệu cá nhân không?(4) Giới hạn tỷ lệ - chúng ta có thể mở rộng quy mô sử dụng mà không cần đạt đến giới hạn không?(5) Định giá - định giá cho mỗi cuộc gọi có thể gây bất ngờ trên quy mô lớn, (6) Khấu hao - điều gì xảy ra khi nhà cung cấp không dùng phiên bản API nữa?(7) Khóa chặt - việc chuyển đổi nhà cung cấp khó đến mức nào?Những yếu tố này phải được ghi lại trong các yêu cầu.`,
  },
  'ba-uq-001': {
    question: `UAT là viết tắt của từ gì và mục đích của nó là gì?`,
    options: [
      `Kiểm tra chấp nhận của người dùng - thử nghiệm chính thức được thực hiện bởi người dùng cuối để xác minh hệ thống đáp ứng các yêu cầu kinh doanh và sẵn sàng triển khai sản xuất`,
      `Kiểm tra tự động hợp nhất - chạy bộ kiểm tra tự động`,
      `Kiểm tra xác thực người dùng - kiểm tra chức năng đăng nhập`,
      `Kiểm thử ứng dụng toàn cầu - kiểm thử trên tất cả các nền tảng`
    ],
    explanation: `UAT là giai đoạn thử nghiệm cuối cùng trong đó người dùng doanh nghiệp thực tế xác nhận rằng hệ thống đáp ứng các yêu cầu và quy trình kinh doanh của họ.Đây KHÔNG phải là thử nghiệm chức năng/kỹ thuật (được thực hiện bởi QA trước đó).UAT trả lời câu hỏi: “Hệ thống này có làm được những gì doanh nghiệp cần không?”UAT thành công dẫn đến việc phê duyệt chính thức và triển khai sản xuất.`,
  },
  'ba-uq-002': {
    question: `UAT nên được thực hiện bởi nhóm phát triển vì họ hiểu hệ thống nhất.`,
    explanation: `UAT phải được thực hiện bởi người dùng doanh nghiệp/các bên liên quan - KHÔNG phải nhà phát triển hoặc QA.Mục đích là để xác nhận rằng hệ thống hoạt động trong bối cảnh kinh doanh thực tế với các tình huống thực tế.Các nhà phát triển có thể có sự hiểu biết thiên vị (họ xây dựng nó để phù hợp với cách giải thích của họ).Người dùng doanh nghiệp kiểm tra từ góc độ sử dụng thực tế hàng ngày, điều này thường tiết lộ các vấn đề mà nhà phát triển đã bỏ qua.`,
  },
  'ba-uq-003': {
    question: `"Trường hợp thử nghiệm" trong bối cảnh UAT là gì?`,
    options: [
      `Thư mục chứa file test`,
      `Kịch bản từng bước với đầu vào, hành động và kết quả mong đợi cụ thể nhằm xác minh một yêu cầu hoặc quy trình kinh doanh cụ thể`,
      `Bản tóm tắt tất cả các lỗi được tìm thấy trong quá trình thử nghiệm`,
      `Nhận xét mã của nhà phát triển giải thích logic kiểm tra`
    ],
    explanation: `Một trường hợp kiểm thử bao gồm: ID kiểm thử, Mô tả, Điều kiện tiên quyết, Các bước kiểm thử (hành động cụ thể), Dữ liệu kiểm thử (đầu vào cụ thể), Kết quả mong đợi (điều gì sẽ xảy ra) và Kết quả thực tế (điều thực sự đã xảy ra).Các trường hợp thử nghiệm được bắt nguồn từ các yêu cầu và tiêu chí chấp nhận.Mỗi trường hợp thử nghiệm phải xác minh một khía cạnh cụ thể của hệ thống.`,
  },
  'ba-uq-004': {
    question: `"Mức độ nghiêm trọng của lỗi" so với "mức độ ưu tiên của lỗi" trong quản lý lỗi là gì?`,
    options: [
      `Chúng giống nhau - cả hai đều đo lường mức độ nghiêm trọng của lỗi`,
      `Mức độ nghiêm trọng đo lường tác động kỹ thuật của lỗi lên hệ thống;Mức độ ưu tiên xác định thứ tự sửa lỗi dựa trên mức độ khẩn cấp của công việc - lỗi ở mức độ nghiêm trọng thấp có thể có mức độ ưu tiên cao và ngược lại`,
      `Mức độ nghiêm trọng do nhà phát triển ấn định;Ưu tiên được chỉ định bởi người thử nghiệm`,
      `Mức độ nghiêm trọng chỉ áp dụng cho UAT;Ưu tiên áp dụng cho thử nghiệm phát triển`
    ],
    explanation: `Ví dụ: Lỗi đánh máy trong logo công ty trên trang chủ = mức độ nghiêm trọng thấp (không ảnh hưởng đến chức năng) nhưng mức độ ưu tiên cao (tất cả người dùng đều có thể nhìn thấy, hình ảnh thương hiệu).Một sự cố hiếm gặp trong báo cáo quản trị được sử dụng hàng quý = mức độ nghiêm trọng cao (sự cố hệ thống) nhưng mức độ ưu tiên thấp hơn (hiếm khi được sử dụng, có giải pháp thay thế).BA giúp các bên liên quan hiểu được sự khác biệt này khi phân loại lỗi.`,
  },
  'ba-uq-005': {
    question: `Tiêu chí đầu vào điển hình để bắt đầu UAT là gì?`,
    options: [
      `Tất cả các nhà phát triển đã hoàn thành mã hóa`,
      `Kiểm thử hệ thống (SIT) đã hoàn tất với tất cả các lỗi nghiêm trọng/lớn đã được giải quyết, có sẵn môi trường kiểm thử ổn định, các trường hợp kiểm thử UAT được chuẩn bị, dữ liệu kiểm thử được tải và người dùng doanh nghiệp đã được đào tạo về hệ thống`,
      `Người quản lý dự án cho biết đã đến lúc bắt đầu UAT`,
      `Chỉ cần chuẩn bị sẵn tài liệu kế hoạch kiểm tra UAT`
    ],
    explanation: `Tiêu chí đầu vào ngăn chặn việc khởi động UAT sớm gây lãng phí thời gian của người dùng doanh nghiệp.Tiêu chí chính: (1) SIT hoàn chỉnh, không có lỗi mở nghiêm trọng/lớn, (2) môi trường thử nghiệm ổn định, giống như sản xuất, (3) các trường hợp thử nghiệm UAT được xem xét và phê duyệt, (4) dữ liệu thử nghiệm được chuẩn bị (thực tế, ẩn danh nếu cần), (5) quyền truy cập của người dùng được cung cấp, (6) người dùng doanh nghiệp được tóm tắt/đào tạo, (7) lịch trình UAT được truyền đạt.Bắt đầu UAT mà không có những thứ này sẽ dẫn đến sự thất vọng và kết quả không hợp lệ.`,
  },
  'ba-uq-006': {
    question: `Kiểm tra hồi quy là gì và khi nào cần thiết?`,
    options: [
      `Chỉ thử nghiệm các tính năng mới`,
      `Kiểm tra lại chức năng hiện có sau khi thay đổi mã để đảm bảo rằng các bản sửa lỗi hoặc tính năng mới không làm hỏng các tính năng hoạt động trước đó`,
      `Kiểm tra hệ thống trong quá trình hồi quy của người dùng (quay lại cách làm việc cũ)`,
      `Kiểm tra hiệu suất dưới tải nặng`
    ],
    explanation: `Kiểm tra hồi quy bảo vệ chống lại các tác dụng phụ ngoài ý muốn.Khi một lỗi được sửa hoặc một tính năng mới được thêm vào, sự thay đổi đó có thể làm hỏng một số thứ khác.Kiểm tra hồi quy chạy lại các trường hợp kiểm thử hiện có để xác minh không có gì bị hỏng.Tự động hóa rất có giá trị cho thử nghiệm hồi quy vì các thử nghiệm tương tự được chạy lặp đi lặp lại.BA phải đảm bảo phạm vi kiểm tra hồi quy bao gồm các lĩnh vực liên quan đến thay đổi.`,
  },
  'ba-uq-007': {
    question: `Thiết kế kế hoạch UAT toàn diện cho hệ thống thanh toán thương mại điện tử mới.Bao gồm phạm vi, cách tiếp cận, kịch bản kiểm thử, tiêu chí thoát và quy trình quản lý lỗi.`,
    answer: `Kế hoạch UAT - Thanh toán thương mại điện tử:

1. Phạm vi:
- Trong phạm vi: xem xét giỏ hàng, địa chỉ giao hàng, tùy chọn giao hàng, thanh toán (thẻ tín dụng, PayPal, COD), xác nhận đơn hàng, thông báo qua email
- Ngoài phạm vi: danh mục sản phẩm, tìm kiếm, đăng ký người dùng (thử nghiệm riêng)

2. Cách tiếp cận:
- Thời gian: 2 tuần (10 ngày làm việc)
- Người tham gia: 5 người dùng doanh nghiệp (2 người vận hành, 2 đại diện khách hàng, 1 người tài chính)
- Môi trường: dàn dựng với dữ liệu giống như sản xuất (ẩn danh)
- Phương pháp: test case theo kịch bản + test thăm dò (chia 30/70)

3. Các kịch bản kiểm thử chính:
- Con đường hạnh phúc: thêm vào giỏ hàng → thanh toán → thanh toán → xác nhận
- Thanh toán của khách so với người dùng đã đăng nhập
- Nhiều phương thức thanh toán (thẻ tín dụng, PayPal, chuyển khoản ngân hàng, COD)
- Xác thực địa chỉ: trong nước, quốc tế, PO Box
- Áp dụng mã khuyến mãi/phiếu giảm giá khi thanh toán
- Đặt hàng với hình thức vận chuyển hỗn hợp (một số mặt hàng chuyển phát nhanh, một số mặt hàng tiêu chuẩn)
- Các trường hợp đặc biệt: thanh toán giỏ hàng trống, thanh toán hết hạn, không đủ hàng khi thanh toán
- Xử lý lỗi: hết thời gian mạng trong khi thanh toán, gửi trùng lặp

4. Tiêu chí thoát:
- 100% các ca kiểm thử quan trọng đều đạt
- 95% trường hợp kiểm thử có mức độ ưu tiên cao đã vượt qua
- Không có lỗi nghiêm trọng nào được mở
- Tất cả các lỗi lớn đã được sửa hoặc đã có cách giải quyết được phê duyệt
- Đăng ký kinh doanh từ các hoạt động và đầu mối tài chính

5. Quản lý lỗi:
- Công cụ: Jira với quy trình làm việc dành riêng cho UAT (Mới → Đã chỉ định → Đang tiến hành → Đã kiểm tra lại → Đã đóng)
- Mức độ nghiêm trọng: Quan trọng (kiểm tra khối), Lớn (tác động đáng kể, tồn tại cách giải quyết), Nhỏ (thẩm mỹ/khả năng sử dụng), Nâng cao (có thì tốt)
- Họp phân loại lỗi hàng ngày (15 phút): BA, dev lead, test lead
- Giải quyết lỗi SLA: Quan trọng = 4 giờ, Chính = 1 ngày, Nhỏ = 3 ngày`,
    explanation: `Một kế hoạch UAT tốt đặt ra các ranh giới (phạm vi) rõ ràng, liên quan đến đúng người (người dùng doanh nghiệp, không phải CNTT), bao gồm các tình huống kinh doanh quan trọng (không chỉ là con đường hạnh phúc), xác định các tiêu chí thoát có thể đo lường được (không phải "UAT được thực hiện khi chúng tôi cảm thấy hài lòng") và có quy trình quản lý lỗi có cấu trúc.Tỷ lệ phân chia 30/70 giữa thử nghiệm theo kịch bản và thử nghiệm thăm dò cân bằng phạm vi bao phủ với việc phát hiện các vấn đề không mong muốn.`,
  },
  'ba-uq-008': {
    question: `Vai trò của BA trong việc đảm bảo "phạm vi yêu cầu" trong quá trình thử nghiệm là gì?`,
    options: [
      `BA nên tự viết tất cả các kịch bản kiểm tra`,
      `BA đảm bảo mọi yêu cầu đều có các ca kiểm thử liên quan (khả năng truy xuất nguồn gốc), xem xét các ca kiểm thử để đảm bảo độ chính xác trong kinh doanh, xác định các lỗ hổng trong phạm vi kiểm thử và xác minh rằng các tiêu chí chấp nhận có thể kiểm thử được`,
      `BA chỉ tham gia UAT, không tham gia các giai đoạn thử nghiệm trước đó`,
      `Phạm vi yêu cầu hoàn toàn thuộc trách nhiệm của nhóm QA`
    ],
    explanation: `Yêu cầu và thử nghiệm cầu nối của BA: (1) tạo/duy trì các yêu cầu liên kết Ma trận truy xuất nguồn gốc yêu cầu (RTM) → trường hợp thử nghiệm, (2) xem xét các trường hợp thử nghiệm QA về độ chính xác trong kinh doanh (QA có thể hiểu sai các yêu cầu), (3) xác định các khoảng trống trong phạm vi (yêu cầu chưa được kiểm tra hoặc tiêu chí chấp nhận), (4) đảm bảo các yêu cầu phi chức năng có phương pháp thử nghiệm, (5) tham gia phân loại lỗi để xác định xem lỗi là lỗi yêu cầu hay lỗi triển khai.`,
  },
  'ba-uq-009': {
    question: `Với tư cách là BA trưởng nhóm, hãy thiết kế một chiến lược đảm bảo chất lượng có sự tham gia của các BA trong toàn bộ SDLC (không chỉ UAT).Bao gồm các điểm kiểm tra BA ở từng giai đoạn, số liệu chất lượng và cách chuyển chất lượng sang trái.`,
    answer: `BA-Chiến lược chất lượng tích hợp:

1. Pha yêu cầu (Shift Left - Prevention):
- Yêu cầu đánh giá ngang hàng với danh sách kiểm tra (đầy đủ, nhất quán, có thể kiểm tra, rõ ràng)
- Đánh giá tiêu chí chấp nhận bởi QA (họ có thể viết test case từ những trường hợp này không?)
- Hướng dẫn yêu cầu với nhóm phát triển (họ có đủ hiểu để triển khai không?)
- Số liệu: Tỷ lệ lỗi yêu cầu (lỗi được tìm thấy trong quá trình xem xét yêu cầu)

2. Giai đoạn thiết kế:
- BA đánh giá tài liệu thiết kế theo yêu cầu (thiết kế có đáp ứng mọi yêu cầu không?)
- Xác định các lỗ hổng: thiết kế bao gồm các yêu cầu đã nêu nhưng bỏ sót các yêu cầu ngầm định?
- Chiến lược thử nghiệm đồng sáng tạo BA + QA dựa trên phân tích rủi ro yêu cầu
- Metric: Tỷ lệ bao phủ yêu cầu thiết kế

3. Giai đoạn phát triển:
- BA có sẵn để làm rõ yêu cầu (giảm giả định của nhà phát triển)
- BA đánh giá các yếu tố hướng tới người dùng (văn bản giao diện người dùng, thông báo lỗi, nhãn)
- BA tham gia các bản demo chạy nước rút - xác thực theo tiêu chí chấp nhận
- Số liệu: Yêu cầu làm rõ yêu cầu giữa giai đoạn chạy nước rút (mục tiêu: xu hướng giảm)

4. Giai đoạn thử nghiệm:
- BA đánh giá các trường hợp thử nghiệm về độ chính xác trong kinh doanh
- BA tham gia phân loại lỗi (phân loại lỗi yêu cầu và lỗi triển khai)
- BA duy trì RTM - đảm bảo giải quyết các khoảng trống trong vùng phủ sóng
- Metric: Tỷ lệ bao phủ yêu cầu, rò rỉ lỗi UAT

5. Giai đoạn UAT:
- BA tạo điều kiện cho UAT (môi trường, trường hợp thử nghiệm, hỗ trợ người dùng)
- BA theo dõi tiến trình UAT theo tiêu chí thoát
- BA quản lý mức độ ưu tiên của lỗi với các bên liên quan trong kinh doanh
- Số liệu: Tỷ lệ vượt qua UAT, thời gian đăng xuất

6. Sau khi phát hành:
- BA phân tích lỗi sản xuất - phân tích nguyên nhân gốc rễ trở lại yêu cầu
- Vòng phản hồi: bài học kinh nghiệm → cải tiến các yêu cầu thực tiễn
- Số liệu: Các lỗi sản xuất có thể truy nguyên theo các vấn đề về yêu cầu (mục tiêu: <10%)

Bảng điều khiển số liệu chất lượng tổng thể:
- Chỉ số ổn định yêu cầu (% thay đổi sau đường cơ sở)
- Rò rỉ lỗi theo từng giai đoạn (mỗi giai đoạn sẽ phát hiện vấn đề - không chuyển chúng)
- Nỗ lực làm lại do vấn đề yêu cầu`,
    explanation: `Chuyển chất lượng sang trái có nghĩa là ngăn ngừa lỗi tại nguồn (yêu cầu) thay vì tìm ra chúng sau này (kiểm tra).Mỗi đô la chi cho chất lượng yêu cầu sẽ tiết kiệm được 10-100 đô la trong các giai đoạn sau (Định luật Boehm).BA được định vị duy nhất để nhúng chất lượng trong toàn bộ SDLC vì họ sở hữu các yêu cầu mà mọi thứ khác đều được xây dựng từ đó.Bảng điều khiển số liệu cung cấp khả năng hiển thị về nơi chất lượng bị hỏng.`,
  },
  'ba-uq-010': {
    question: `Các bên liên quan muốn bỏ qua UAT vì dự án bị chậm tiến độ.Với tư cách là Lead BA, đề xuất của bạn là gì?`,
    options: [
      `Đồng ý bỏ qua UAT để đáp ứng deadline`,
      `Đề xuất cách tiếp cận UAT dựa trên rủi ro: ưu tiên các kịch bản kinh doanh quan trọng cho UAT rút gọn 3-5 ngày, ghi lại các rủi ro được chấp nhận đối với các trường hợp thử nghiệm bị trì hoãn và lập kế hoạch cho giai đoạn xác thực sau phát hành với khả năng khôi phục`,
      `Yêu cầu UAT đầy đủ bất kể lịch trình - chất lượng không thể bị tổn hại`,
      `Hãy để người quản lý dự án đưa ra quyết định này mà không cần đầu vào BA`
    ],
    explanation: `Bỏ qua hoàn toàn UAT là vô trách nhiệm (vấn đề sản xuất tốn kém hơn so với việc trì hoãn ra mắt).Tuy nhiên, việc nhấn mạnh vào UAT đầy đủ khi lịch trình là quan trọng có thể không thực tế.Cách tiếp cận dựa trên rủi ro tập trung UAT vào các lộ trình quan trọng (tác động kinh doanh cao nhất), trì hoãn các kịch bản có rủi ro thấp hơn (với sự chấp nhận rủi ro được ghi lại) và cung cấp mạng lưới an toàn (kế hoạch khôi phục, giám sát sau phát hành).Điều này giúp cân bằng chất lượng với tính cấp bách trong kinh doanh - một kỹ năng quan trọng của Lead BA.`,
  },
}
