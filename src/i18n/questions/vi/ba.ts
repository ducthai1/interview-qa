import type { QuestionTranslationMap } from '../types'

export const baVi: QuestionTranslationMap = {
  'ba-ag-001': {
    question: 'Điều nào sau đây KHÔNG phải là một trong bốn giá trị trong Tuyên ngôn Agile?',
    options: [
      'Các cá nhân và sự tương tác qua các quy trình và công cụ',
      'Phần mềm làm việc trên tài liệu toàn diện',
      'Lập kế hoạch chi tiết để đáp ứng với sự thay đổi',
      'Hợp tác của khách hàng thông qua đàm phán hợp đồng',
      ''
    ],
    answer: '2',
    explanation: 'Tuyên ngôn Agile đánh giá cao: (1) Cá nhân và sự tương tác hơn là các quy trình và công cụ, (2) Phần mềm hoạt động hơn là tài liệu toàn diện, (3) Hợp tác với khách hàng hơn là đàm phán hợp đồng, (4) Phản hồi trước sự thay đổi theo kế hoạch. Tuyên ngôn KHÔNG làm giảm giá trị các mặt hàng ở bên phải - nó đánh giá cao mặt bên trái NHIỀU HƠN.',
  },
  'ba-ag-002': {
    question: 'Trong Scrum, ai chịu trách nhiệm tối đa hóa giá trị của sản phẩm và quản lý Product Backlog?',
    options: [
      'Bậc thầy Scrum',
      'Nhóm phát triển',
      'Chủ sở hữu sản phẩm',
      'Người quản lý dự án',
      ''
    ],
    answer: '2',
    explanation: 'Chủ sở hữu sản phẩm (PO) là người duy nhất chịu trách nhiệm tối đa hóa giá trị sản phẩm. Họ quản lý Product Backlog: đặt hàng các hạng mục, đảm bảo sự rõ ràng và đưa ra các quyết định ưu tiên. PO đại diện cho lợi ích của các bên liên quan và là người đưa ra quyết định cuối cùng về những gì sẽ được xây dựng. Scrum Master hỗ trợ quá trình này; nhóm phát triển quyết định CÁCH xây dựng nó.',
  },
  'ba-ag-003': {
    question: 'Scrum Master là người quản lý Nhóm phát triển và phân công nhiệm vụ cho các thành viên trong nhóm.',
    answer: 'Sai',
    explanation: 'Scrum Master là người lãnh đạo phục vụ chứ không phải người quản lý. Họ tạo điều kiện thuận lợi cho các sự kiện Scrum, loại bỏ các trở ngại và huấn luyện nhóm về cách thực hành Scrum. Nhóm Phát triển tự tổ chức - các thành viên trong nhóm tự quyết định ai sẽ làm việc gì. Scrum Master không có quyền phân công nhiệm vụ.',
  },
  'ba-ag-004': {
    question: 'Ba trụ cột của Scrum là gì?',
    options: [
      'quy hoạch',
      'Thi hành',
      'Vận chuyển',
      'Minh bạch',
      'Điều tra',
      'Thích ứng',
      'Tốc độ',
      'Chất lượng',
      'Trị giá',
      'Yêu cầu',
      'Thiết kế',
      'Kiểm tra',
      ''
    ],
    answer: '1',
    explanation: 'Scrum được thành lập dựa trên việc kiểm soát quy trình theo kinh nghiệm với ba trụ cột: Tính minh bạch (tất cả các khía cạnh mà những người chịu trách nhiệm về kết quả có thể nhìn thấy), Kiểm tra (thường xuyên kiểm tra các tạo tác và tiến trình) và Thích ứng (điều chỉnh quy trình hoặc sản phẩm khi phát hiện ra sai lệch). Những trụ cột này cho phép học hỏi và cải tiến liên tục.',
  },
  'ba-ag-005': {
    question: 'Khung thời gian được đề xuất cho buổi Cải tiến Sprint trong 2 tuần chạy nước rút là bao nhiêu?',
    options: [
      '15 phút',
      '1,5 giờ (90 phút)',
      '4 giờ',
      '8 giờ (cả ngày)',
      ''
    ],
    answer: '1',
    explanation: 'Đối với chạy nước rút kéo dài 2 tuần, quá trình hồi tưởng được đặt khung thời gian là 1,5 giờ (tối đa 3 giờ cho chạy nước rút trong 4 tuần). Quá trình hồi cứu sẽ kiểm tra lần chạy nước rút cuối cùng liên quan đến con người, mối quan hệ, quy trình và công cụ. Nhóm xác định những thay đổi hữu ích nhất và tạo ra một kế hoạch cải tiến có thể thực hiện được. Đây là sự kiện quan trọng để cải tiến liên tục.',
  },
  'ba-ag-006': {
    question: 'Vai trò chính của BA trong quá trình Lập kế hoạch Sprint trong nhóm Scrum là gì?',
    options: [
      'Viết mã cho những câu chuyện có mức độ ưu tiên cao nhất',
      'Làm rõ yêu cầu',
      'giải đáp thắc mắc về tiêu chí chấp nhận',
      'và giúp nhóm hiểu được quan điểm của người dùng cũng như bối cảnh kinh doanh',
      'Điều hành cuộc họp Lập kế hoạch Sprint với tư cách là người điều phối',
      'Ước tính điểm câu chuyện cho từng hạng mục tồn đọng',
      ''
    ],
    answer: '1',
    explanation: 'Trong quá trình Lập kế hoạch Sprint, BA đóng vai trò là chuyên gia về miền - làm rõ các yêu cầu, giải thích các tiêu chí chấp nhận, cung cấp bối cảnh kinh doanh và trả lời các câu hỏi của nhóm phát triển về nhu cầu của người dùng. Scrum Master điều hành cuộc họp, PO đặt ra các ưu tiên và nhóm phát triển ước tính và lựa chọn công việc. BA thu hẹp khoảng cách giữa mục đích kinh doanh và hiểu biết kỹ thuật.',
  },
  'ba-ag-007': {
    question: 'Sự khác biệt giữa Đánh giá Sprint và Hồi tưởng Sprint là gì?',
    options: [
      'Họ là cùng một cuộc gặp gỡ nhưng có những cái tên khác nhau',
      'Sprint Review kiểm tra mức tăng trưởng của sản phẩm và nhận phản hồi của các bên liên quan; Sprint Retrospective kiểm tra quy trình của nhóm và xác định các cải tiến',
      'Sprint Review chỉ dành cho nhóm phát triển; Sprint Retrospective bao gồm các bên liên quan',
      'Đánh giá Sprint diễn ra khi bắt đầu một Sprint; Sprint Retrospective diễn ra vào cuối',
      ''
    ],
    answer: '1',
    explanation: 'Đánh giá Sprint (bản demo): nhóm hiển thị tiến độ công việc cho các bên liên quan, thu thập phản hồi và thảo luận về những việc cần làm tiếp theo - tập trung vào SẢN PHẨM. Hồi tưởng Sprint: nhóm phản ánh về quy trình làm việc của họ, xác định những gì đã diễn ra tốt đẹp, những gì cần cải thiện và cam kết hành động - tập trung vào QUY TRÌNH. Cả hai đều xảy ra ở cuối nước rút, nhưng việc Đánh giá được thực hiện trước.',
  },
  'ba-ag-008': {
    question: 'Trong Kanban, các mục công việc được sắp xếp thành các lần lặp có khung thời gian cố định được gọi là chạy nước rút.',
    answer: 'Sai',
    explanation: 'Kanban KHÔNG sử dụng các lần chạy nước rút cố định. Nó là một hệ thống dựa trên dòng chảy với khả năng phân phối liên tục. Các phương pháp thực hành chính của Kanban bao gồm: trực quan hóa quy trình làm việc trên bảng, giới hạn Công việc đang tiến hành (giới hạn WIP), quản lý quy trình, đưa ra các chính sách quy trình rõ ràng và liên tục cải tiến. Sprint là một khái niệm của Scrum. Một số nhóm kết hợp cả hai cách tiếp cận (Scrumban).',
  },
  'ba-ag-009': {
    question: 'Một nhóm liên tục không hoàn thành các cam kết chạy nước rút của mình. Với tư cách là một BA, nguyên nhân gốc rễ có khả năng xảy ra nhất liên quan đến yêu cầu là gì?',
    options: [
      'Đội bóng lười biếng và cần nhiều áp lực hơn',
      'Các câu chuyện bước vào giai đoạn nước rút chưa được sàng lọc đầy đủ — tiêu chí chấp nhận không rõ ràng',
      'sự phức tạp tiềm ẩn',
      'hoặc các phần phụ thuộc chưa được giải quyết gây ra việc khám phá và làm lại giữa chặng nước rút',
      'Chủ sản phẩm không tham dự các cuộc họp dự kiến ​​hàng ngày',
      'Nhóm đang sử dụng sai ngôn ngữ lập trình',
      ''
    ],
    answer: '1',
    explanation: 'Việc sàng lọc không đầy đủ là nguyên nhân số 1 gây ra lỗi chạy nước rút liên quan đến yêu cầu. Khi các câu chuyện bước vào một sprint với tiêu chí mơ hồ, sự phụ thuộc không xác định hoặc độ phức tạp tiềm ẩn, nhóm sẽ phát hiện ra các vấn đề ở giữa sprint, gây ra sự chậm trễ và phải làm lại. Cách khắc phục: đầu tư nhiều hơn vào việc sàng lọc các hồ sơ tồn đọng (chuẩn bị chu đáo), đảm bảo các câu chuyện đáp ứng Định nghĩa Sẵn sàng và phân chia các câu chuyện phức tạp sớm hơn.',
  },
  'ba-ag-010': {
    question: 'SAFe (Scaled Agile Framework) là gì và khi nào thì phù hợp?',
    options: [
      'Phiên bản đơn giản của Scrum dành cho các nhóm nhỏ',
      'Một khuôn khổ để mở rộng quy mô thực hành Agile cho các doanh nghiệp lớn có nhiều nhóm',
      'cung cấp các cấu trúc như Agile Release Trains (ART)',
      'Lập kế hoạch Tăng trưởng Chương trình (PI)',
      'và điều phối cấp danh mục đầu tư',
      'Khung thử nghiệm để thử nghiệm Agile tự động',
      'Một công cụ quản lý dự án như Jira hoặc Azure DevOps',
      ''
    ],
    answer: '1',
    explanation: 'SAFe giải quyết các thách thức khi nhiều nhóm Scrum phải phối hợp trên một sản phẩm lớn. Các khái niệm chính: Đào tạo phát hành Agile (ART) = nhóm các nhóm (~50-125 người), Lập kế hoạch tăng trưởng chương trình (PI) = lập kế hoạch phòng lớn cứ sau 8-12 tuần và Cấp độ danh mục đầu tư để liên kết chiến lược. SAFe phù hợp với các tổ chức lớn (hơn 100 nhà phát triển) nhưng được coi là nặng nề đối với các nhóm nhỏ.',
  },
  'ba-ag-011': {
    question: 'Thiết kế quy trình sàng lọc hồ sơ tồn đọng cho nhóm đang chuyển đổi từ Waterfall sang Agile. Bao gồm tần suất, người tham gia, hoạt động và cách đo lường sự cải thiện.',
    answer: 'Thiết kế quy trình sàng lọc:\n\nTần suất: 2 phiên mỗi lần chạy nước rút (ví dụ:',
    explanation: 'Các nhóm chuyển đổi từ Waterfall thường gặp khó khăn với quá trình sàng lọc Agile vì họ mong đợi các thông số kỹ thuật đầy đủ, rõ ràng. Một quy trình có cấu trúc với các hoạt động và thước đo rõ ràng sẽ giúp xây dựng thói quen sàng lọc. Ban đầu, nhiều phiên hơn sẽ ngăn những câu chuyện chưa được cải tiến tham gia vào các giai đoạn nước rút. Các nhà phát triển luân phiên đảm bảo việc chia sẻ kiến ​​thức. Số liệu theo dõi xem chất lượng sàng lọc có cải thiện theo thời gian hay không.',
  },
  'ba-ag-012': {
    question: 'Với tư cách là BA trưởng hỗ trợ 4 nhóm Scrum xây dựng một sản phẩm thống nhất, thiết kế chiến lược phối hợp yêu cầu giữa các nhóm nhằm ngăn ngừa các vấn đề tích hợp, công việc trùng lặp và triển khai xung đột.',
    answer: 'Chiến lược phối hợp liên nhóm:\n\n1. Kiến trúc tồn đọng sản phẩm được chia sẻ:\n- Backlog sản phẩm đơn do một PO trưởng sở hữu\n- Mỗi nhóm có Backlog nhóm bắt nguồn từ Product Backlog\n- Cộng đồng thực hành BA (CoP) họp hàng tuần để xem xét các phụ thuộc giữa các nhóm\n\n2. Quản lý phụ thuộc:\n- Ánh xạ bảng phụ thuộc trực quan (vật lý hoặc kỹ thuật số) phụ thuộc giữa các nhóm\n- Các phụ thuộc được xác định trong quá trình sàng lọc và được gắn cờ bằng các câu chuyện được liên kết\n- "Ngày phụ thuộc" — phiên dành riêng cho mỗi PI/quý nơi tất cả các nhóm căn chỉnh trên giao diện chung (API)',
    explanation: 'Nếu không có sự phối hợp, nhiều nhóm chắc chắn sẽ tạo ra xung đột trong quá trình triển khai, công việc trùng lặp và lỗi tích hợp ở giai đoạn cuối. Chiến lược phối hợp có cấu trúc với các hồ sơ tồn đọng được chia sẻ, theo dõi phụ thuộc, căn chỉnh miền và nhịp đồng bộ hóa thường xuyên sẽ ngăn ngừa những vấn đề này. BA chính đóng vai trò là "mô liên kết" đảm bảo các yêu cầu được nhất quán và tác động giữa các nhóm được xác định sớm.',
  },
  'ba-ag-013': {
    question: 'Trong một tổ chức Agile lớn, tốc độ thay đổi đáng kể giữa các nhóm (một nhóm mang lại 40 điểm/chạy nước rút, nhóm khác mang lại 20 điểm). Người quản lý muốn chuẩn hóa các điểm trong câu chuyện giữa các nhóm. Lead BA nên tư vấn gì?',
    options: [
      'Thống nhất và tạo bảng đánh giá điểm câu chuyện chuẩn cho tất cả các đội',
      'Lời khuyên không nên làm - điểm câu chuyện là những ước tính tương đối chỉ có ý nghĩa trong bối cảnh của một nhóm; thay vì',
      'sử dụng các số liệu khác như thời gian chu kỳ',
      'thông lượng',
      'hoặc các tính năng được cung cấp để so sánh giữa các nhóm',
      'Đề xuất sử dụng giờ thay vì điểm câu chuyện để có độ chính xác cao hơn',
      'Đề nghị tăng gấp đôi ước tính của nhóm chậm hơn để bình thường hóa',
      ''
    ],
    answer: '1',
    explanation: 'Điểm câu chuyện có liên quan đến thành tích lịch sử của mỗi đội. Điểm "5" trong Đội A phản ánh sự đánh giá về độ phức tạp của đội ĐÓ chứ không phải là thước đo chung. Việc tiêu chuẩn hóa điểm giữa các nhóm tạo ra sự tương đương sai lệch và hành vi chơi game. Để so sánh giữa các nhóm, hãy sử dụng các số liệu trung lập trong nhóm: thời gian chu kỳ (tốc độ), thông lượng (số lượng mục được phân phối trong mỗi lần chạy nước rút) hoặc giá trị được phân phối (kết quả kinh doanh).',
  },
  'ba-ag-014': {
    question: 'Daily Scrum kéo dài trong bao lâu?',
    options: ['30 phút', '15 phút', '1 giờ', 'Đến khi hết trở ngại'],
    explanation: 'Daily Scrum là sự kiện giới hạn trong 15 phút để các Nhà phát triển kiểm tra tiến độ hướng tới Mục tiêu Sprint và điều chỉnh Sprint Backlog khi cần thiết.',
  },
  'ba-ag-015': {
    question: '"Biểu đồ Sprint Burndown" đo lường điều gì?',
    options: ['Tổng chi phí của dự án', 'Lượng công việc còn lại trong sprint hiện tại theo thời gian', 'Năng suất cá nhân của từng nhà phát triển', 'Số lượng lỗi tìm thấy trên môi trường production'],
    explanation: 'Biểu đồ Burndown cho thấy nỗ lực còn lại so với thời gian. Nó giúp nhóm hình dung xem họ có đang đi đúng hướng để đạt được Mục tiêu Sprint hay không.',
  },
  'ba-ag-016': {
    question: 'Khi một stakeholder yêu cầu một tính năng mới quan trọng giữa sprint, BA/PO nên làm gì?',
    options: ['Thêm nó vào sprint hiện tại ngay lập tức', 'Yêu cầu các nhà phát triển làm việc nhanh hơn để bao gồm nó', 'Lắng nghe yêu cầu, đánh giá mức độ ưu tiên và thêm nó vào Product Backlog để xem xét trong tương lai', 'Nói với stakeholder đừng làm phiền nhóm'],
    explanation: 'Trong Scrum, Sprint Backlog thường không được thay đổi trong khi sprint đang diễn ra để tránh làm gián đoạn nhóm. Các yêu cầu mới nên được đưa vào Product Backlog để tinh lọc và ưu tiên đúng cách.',
  },
  'ba-ag-017': {
    question: '"Định nghĩa Hoàn thành" (DoD) trong Scrum là gì?',
    options: ['Danh sách các tính năng mà CEO muốn', 'Bản mô tả chính thức về trạng thái của Product Increment khi nó đáp ứng các biện pháp chất lượng cần thiết cho sản phẩm', 'Ngày dự án kết thúc', 'Danh sách tất cả các nhiệm vụ trong sprint'],
    explanation: 'DoD đảm bảo mọi người có hiểu biết chung về ý nghĩa của việc "xong" (ví dụ: mã đã được review, kiểm thử unit xong, tài liệu đã cập nhật). Một increment chỉ được coi là "Xong" nếu nó đáp ứng DoD.',
  },
  'ba-ag-018': {
    question: 'Nhóm của bạn đang gặp khó khăn với "Scrum-but" (chúng tôi sử dụng Scrum nhưng không làm retrospective). Làm thế nào để thuyết phục họ về giá trị của retros?',
    answer: 'Chiến lược:\n1. Nhấn mạnh các điểm đau: Chỉ ra các vấn đề lặp đi lặp lại không bao giờ được khắc phục.\n2. Thử nghiệm nhỏ: Đề xuất một buổi "Speed Retro" 45 phút cho một sprint duy nhất.\n3. Hướng tới hành động: Đảm bảo ít nhất một cải tiến được thực hiện ngay lập tức để họ thấy kết quả.\n4. Không gian an sau: Sử dụng các công cụ ẩn danh để đảm bảo sự tham gia.',
    explanation: 'Sự phản kháng đối với retro thường xuất phát từ việc họ cảm thấy đó là "những cuộc họp vô ích." Kết nối cuộc họp với những cải thiện trực tiếp trong cuộc sống hàng ngày của nhóm là chìa khóa.',
  },
  'ba-ag-019': {
    question: 'Sprint Backlog thuộc sở hữu của Product Owner.',
    answer: 'Sai',
    explanation: 'Product Owner sở hữu PRODUCT Backlog. Các Nhà phát triển sở hữu SPRINT Backlog (công việc họ đã cam kết cho sprint).',
  },
  'ba-ag-020': {
    question: '"Capacity" đại diện cho điều gì trong lập kế hoạch sprint?',
    options: ['Tổng số giờ làm việc khả dụng của các thành viên trong nhóm, có tính đến các cuộc họp, kỳ nghỉ và các nhiệm vụ khác', 'Tốc độ của mạng', 'Tổng kích thước của cơ sở dữ liệu', 'Số lượng người dùng tối đa mà hệ thống có thể xử lý'],
    explanation: 'Capacity giúp nhóm quyết định lượng công việc họ có thể thực hiện một cách thực tế trong sprint, tránh cam kết quá mức.',
  },
  'ba-ag-021': {
    question: 'Trong môi trường "Large Scale Scrum" (LeSS), cách tốt nhất để xử lý các yêu cầu được chia sẻ bởi nhiều nhóm là gì?',
    options: ['Tạo một BA chuyên biệt cho mỗi cá nhân nhóm', 'Sử dụng một Product Backlog duy nhất và một Product Owner duy nhất để duy trì tầm nhìn thống nhất, với các BA đóng vai trò là chuyên gia lĩnh vực giữa các nhóm', 'Yêu cầu mỗi nhóm xây dựng phiên bản riêng của họ', 'Có 10 PO khác nhau'],
    explanation: 'LeSS dựa trên nguyên tắc "Một Sản phẩm, Một PO, Một Backlog." Điều này ngăn chặn sự phân mảnh và đảm bảo tối ưu hóa mang tính hệ thống.',
  },
  'ba-ag-022': {
    question: 'Số liệu nào là tốt nhất để đo lường "Kết quả" (Outcome) thay vì "Đầu ra" (Output) của một nhóm Agile?',
    options: ['Velocity (Điểm mỗi sprint)', 'Số liệu sử dụng sản phẩm (ví dụ: Tỷ lệ chuyển đổi, tỷ lệ giữ chân người dùng)', 'Số dòng code đã viết', 'Số lượng story đã hoàn thành'],
    explanation: 'Output là "những gì chúng ta đã xây dựng" (vận tốc, story). Outcome là "những gì đã xảy ra vì chúng ta đã xây dựng nó" (thay đổi hành vi người dùng, doanh thu). BA tập trung vào Outcome.',
  },
  'ba-ag-023': {
    question: 'Là một Lead BA, bạn xử lý thế nào với một dự án "Ngày cố định, Phạm vi cố định, Giá cố định" đang được vận hành bằng Scrum?',
    answer: 'Chiến lược: Bẫy "Tam giác sắt"\n1. Theo dõi minh bạch: Sử dụng biểu đồ Burn-up để hiển thị ngày kết thúc dự kiến dựa trên vận tốc hiện tại.\n2. Đàm phán sự linh hoạt: Ngay cả khi "cố định", vẫn luôn có những chi tiết ít giá trị. Thúc đẩy "Giá cố định/Ngày cố định - Chi tiết biến đổi."\n3. Tinh lọc chất lượng cao: Đầu tư mạnh vào tinh lọc sớm để tìm ra rủi ro trước khi chúng tác động đến hạn chót.\n4. MVP trước tiên: Đảm bảo đường găng được xây dựng trước để nếu hết thời gian, những phần giá trị nhất đã hoàn thành.',
    explanation: 'Dẫn dắt thông qua "Tam giác sắt" đòi hỏi sự minh bạch liên tục và khả năng đàm phán "sự linh hoạt trong phạm vi" để đảm bảo giao hàng thành công.',
  },
  'ba-bp-001': {
    question: 'BPMN có nghĩa là gì?',
    options: [
      'Ký hiệu quản lý dự án kinh doanh',
      'Mô hình và ký hiệu quy trình kinh doanh',
      'Mạng mô hình hóa quy trình cơ bản',
      'Ghi chú về lập kế hoạch và quản lý kinh doanh',
      ''
    ],
    answer: '1',
    explanation: 'BPMN (Mô hình và ký hiệu quy trình nghiệp vụ) là ký hiệu đồ họa được tiêu chuẩn hóa để mô hình hóa các quy trình nghiệp vụ. Nó được duy trì bởi OMG (Nhóm quản lý đối tượng). BPMN 2.0 là phiên bản hiện tại và được sử dụng rộng rãi bởi các BA, kỹ sư xử lý và nhóm kỹ thuật vì nó vừa dễ đọc vừa có thể thực thi được trong kinh doanh.',
  },
  'ba-bp-002': {
    question: 'Trong BPMN, hình dạng nào biểu thị một Nhiệm vụ (một hoạt động được thực hiện trong một quy trình)?',
    options: [
      'Kim cương (◇)',
      'Vòng tròn (○)',
      'Hình chữ nhật tròn (▢)',
      'Tam giác (△)',
      ''
    ],
    answer: '2',
    explanation: 'Trong BPMN: Hình chữ nhật tròn = Nhiệm vụ/Hoạt động (công việc cần thực hiện), Kim cương = Cổng (điểm quyết định/phân nhánh), Vòng tròn = Sự kiện (bắt đầu, trung gian, kết thúc), Mũi tên = Luồng trình tự (thứ tự các hoạt động). Hiểu những hình dạng cơ bản này là điều cần thiết để đọc và tạo sơ đồ BPMN.',
  },
  'ba-bp-003': {
    question: 'Sơ đồ đường bơi cho thấy người hoặc bộ phận nào chịu trách nhiệm cho từng bước trong quy trình kinh doanh.',
    answer: 'Đúng',
    explanation: 'Đường bơi (hồ bơi và làn đường trong BPMN) chia sơ đồ quy trình thành các dải ngang hoặc dọc, mỗi dải thể hiện một vai trò, bộ phận hoặc hệ thống. Các hoạt động được đặt trong một làn đường thuộc về tác nhân đó. Điều này giúp việc phân công trách nhiệm trở nên rõ ràng trong nháy mắt và giúp xác định các điểm bàn giao (nơi công việc đi qua các làn đường).',
  },
  'ba-bp-004': {
    question: 'Trong BPMN, sự khác biệt giữa Cổng độc quyền (XOR) và Cổng song song (AND) là gì?',
    options: [
      'Không có sự khác biệt - cả hai đều chia luồng như nhau',
      'Cổng độc quyền chọn MỘT đường dẫn dựa trên một điều kiện; Cổng song song kích hoạt TẤT CẢ các đường dẫn đi cùng một lúc',
      'Cổng độc quyền dành cho lỗi; Cổng song song dành cho luồng thông thường',
      'Cổng độc quyền hợp nhất các đường dẫn; Cổng song song chia đường dẫn',
      ''
    ],
    answer: '1',
    explanation: 'Cổng độc quyền (X hoặc ◇ với X): chính xác một đường dẫn đi được chọn dựa trên một điều kiện (chẳng hạn như if-else). Cổng song song (+ hoặc ◇ với +): TẤT CẢ các đường dẫn đi được kích hoạt đồng thời (thực thi đồng thời). Khi được sử dụng để hợp nhất, Cổng song song sẽ đợi TẤT CẢ các đường dẫn đến hoàn tất trước khi tiếp tục. Cổng bao gồm (O) cho phép một hoặc nhiều đường dẫn.',
  },
  'ba-bp-005': {
    question: 'Mục đích của việc lập mô hình quy trình "As-Is" và "To-Be" trong công việc BA là gì?',
    options: [
      'As-Is mô tả trạng thái tương lai; To-Be mô tả trạng thái hiện tại',
      'As-Is ghi lại quy trình hiện tại (với những điểm yếu và sự kém hiệu quả); To-Be thiết kế quy trình cải tiến trong tương lai - khoảng cách giữa chúng xác định phạm vi dự án',
      'As-Is dành cho các quy trình nội bộ; To-Be dành cho các quy trình tiếp xúc với khách hàng',
      'Chúng là các định dạng khác nhau cho cùng một quy trình',
      ''
    ],
    answer: '1',
    explanation: 'Phân tích nguyên trạng sẽ lập bản đồ trạng thái hiện tại: công việc thực sự được thực hiện như thế nào (không phải nó phải như thế nào), phát hiện các tắc nghẽn, lãng phí, các bước trùng lặp và cách giải quyết thủ công. To-Be thiết kế trạng thái tương lai mong muốn với những cải tiến. Phân tích khoảng cách giữa Hiện tại và Tương lai xác định những thay đổi cần thiết - điều này trực tiếp thúc đẩy các yêu cầu đối với giải pháp.',
  },
  'ba-bp-006': {
    question: 'Phần tử BPMN nào đại diện cho một điểm trong quá trình xảy ra điều gì đó (ví dụ: một tin nhắn đến, đồng hồ hẹn giờ kích hoạt hoặc quá trình bắt đầu/kết thúc)?',
    options: [
      'Cổng (kim cương)',
      'Hoạt động (hình chữ nhật tròn)',
      'Sự kiện (vòng tròn)',
      'Đối tượng dữ liệu (biểu tượng trang)',
      ''
    ],
    answer: '2',
    explanation: 'Sự kiện là các vòng tròn trong BPMN. Sự kiện bắt đầu (viền mỏng) kích hoạt quá trình, Sự kiện kết thúc (viền dày) kết thúc quá trình và Sự kiện trung gian (viền kép) xảy ra trong quá trình. Các sự kiện có thể được gõ: tin nhắn (biểu tượng phong bì), bộ đếm thời gian (biểu tượng đồng hồ), lỗi (tia chớp), tín hiệu, v.v. Chúng đại diện cho các yếu tố kích hoạt và kết quả.',
  },
  'ba-bp-007': {
    question: 'Lập mô hình quy trình "Giới thiệu nhân viên" bằng cách sử dụng các khái niệm BPMN. Mô tả các nhóm/làn đường, hoạt động chính, cổng và sự kiện cho một quy trình liên quan đến nhân sự, CNTT và Người quản lý của nhân viên mới.',
    answer: 'Nhóm: "Quy trình giới thiệu nhân viên"\n\nNgõ 1 — Phòng nhân sự:\n- Sự kiện bắt đầu: "Hợp đồng thuê mới đã được ký"\n- Nhiệm vụ: "Tạo hồ sơ nhân viên trong HRIS"\n- Nhiệm vụ: "Gửi gói chào mừng và lịch định hướng"\n- Nhiệm vụ: "Tiến hành buổi định hướng Ngày 1"\n- Nhiệm vụ: "Đăng ký gói phúc lợi"\n\nLane 2 — Phòng CNTT:\n- Nhiệm vụ: "Cung cấp máy tính xách tay và thông tin xác thực truy cập"\n- Nhiệm vụ: "Thiết lập tài khoản email và phần mềm"\n- Nhiệm vụ: "Cấp quyền truy cập hệ thống dựa trên vai trò"\n- Cổng độc quyền: "Nhân viên từ xa?"\n - Có → Nhiệm vụ: "Gửi thiết bị đến địa chỉ nhà"\n - Không → Nhiệm vụ: "Bàn thiết lập và thiết bị văn phòng"\n\nNgõ 3 — Người quản lý:\n- Nhiệm vụ: "Chuẩn bị kế hoạch 30-60-90 ngày"\n- Nhiệm vụ: "Phân công bạn đồng hành"\n- Nhiệm vụ: "Lên lịch họp giới thiệu với nhóm"\n- Sự kiện trung gian hẹn giờ: "Sau 30 ngày"\n- Nhiệm vụ: "Tiến hành đánh giá đăng ký lần đầu"\n\nCổng song song sau khi bắt đầu: HR',
    explanation: 'Mô hình quy trình này thể hiện các khái niệm BPMN chính: nhiều làn để phân tách vai trò, cổng song song cho các hoạt động đồng thời (nhân sự, CNTT, Người quản lý đều bắt đầu đồng thời), cổng độc quyền để phân nhánh có điều kiện (từ xa so với văn phòng), sự kiện hẹn giờ cho các hoạt động đã lên lịch và luồng tin nhắn để liên lạc giữa các bộ phận. Phân tích lỗ hổng có thể cho thấy những điểm nghẽn như sự chậm trễ trong việc cung cấp CNTT.',
  },
  'ba-bp-008': {
    question: 'Khi phân tích một quy trình kinh doanh để cải tiến, khái niệm phương pháp Lean nào xác định các bước KHÔNG tăng thêm giá trị từ quan điểm của khách hàng?',
    options: [
      'Phân tích đường dẫn quan trọng',
      'Lập bản đồ dòng giá trị - xác định các hoạt động gia tăng giá trị và không gia tăng giá trị (lãng phí/muda)',
      'Phân tích biểu đồ Gantt',
      'Mô phỏng Monte Carlo',
      ''
    ],
    answer: '1',
    explanation: 'Bản đồ dòng giá trị (từ Lean) phân loại từng bước thành: Giá trị gia tăng (khách hàng sẽ trả tiền), Không tăng giá trị nhưng cần thiết (tuân thủ, phê duyệt) hoặc Lãng phí (chờ đợi, làm lại, chuyển giao không cần thiết). Lean nhằm mục đích loại bỏ chất thải (muda). 7 lãng phí: sản xuất thừa, chờ đợi, vận chuyển, xử lý quá mức, tồn kho, chuyển động, sai sót. BA sử dụng điều này để hợp lý hóa các quy trình trước khi tự động hóa.',
  },
  'ba-bp-009': {
    question: 'Quy trình phụ trong BPMN là gì và khi nào bạn nên sử dụng nó?',
    options: [
      'Một tiến trình chạy trên một máy chủ riêng biệt',
      'Một nhóm hoạt động được thu gọn hoặc mở rộng trong một quy trình',
      'được sử dụng để quản lý sự phức tạp bằng cách gói gọn một tập hợp các nhiệm vụ liên quan vào một',
      'đơn vị tái sử dụng',
      'Một tiến trình chỉ chạy khi tiến trình chính bị lỗi',
      'Một quy trình con giống như một nhiệm vụ nhưng có mô tả dài hơn',
      ''
    ],
    answer: '1',
    explanation: 'Các quy trình con gói gọn sự phức tạp: một nhóm các nhiệm vụ liên quan được hiển thị dưới dạng một hình chữ nhật tròn duy nhất có dấu (+] (thu gọn) hoặc được mở rộng để hiển thị các chi tiết bên trong. Lợi ích: (1) quản lý độ phức tạp về mặt hình ảnh, (2) có thể xác định cách xử lý lỗi cục bộ, (3) có thể được sử dụng lại trên các quy trình, (4) có thể có các sự kiện bắt đầu/kết thúc riêng. Sử dụng khi nhiều tác vụ thuộc về nhau một cách hợp lý (ví dụ: quy trình phụ "Xử lý thanh toán").',
  },
  'ba-bp-010': {
    question: 'Một công ty bán lẻ muốn số hóa và tự động hóa quy trình thực hiện đơn hàng của họ. Với tư cách là Trưởng nhóm BA, hãy mô tả cách tiếp cận của bạn để khám phá, phân tích, tối ưu hóa và đề xuất tự động hóa quy trình. Bao gồm sự tham gia của các bên liên quan, công cụ và số liệu thành công.',
    answer: 'Cách tiếp cận:\n\n1. Khám phá quy trình (2-3 tuần):\n- Hội thảo các bên liên quan với nhân viên kho',
    explanation: 'Cách tiếp cận có cấu trúc chuyển từ khám phá (hiểu trạng thái hiện tại) thông qua phân tích (định lượng vấn đề) đến tối ưu hóa (cải tiến thiết kế) đến tự động hóa (đề xuất công nghệ). Điều quan trọng là định lượng các điểm yếu trước khi đề xuất giải pháp - các đề xuất dựa trên dữ liệu sẽ thuyết phục hơn các ý kiến. Tự động hóa dựa trên cấp độ cho phép đầu tư gia tăng và xác thực ROI.',
  },
  'ba-cn-001': {
    question: '"Lắng nghe tích cực" là gì và tại sao nó lại quan trọng đối với BA?',
    options: [
      'Nghe trong khi thực hiện đa nhiệm trên máy tính xách tay của bạn trong cuộc họp',
      'Tập trung hoàn toàn vào người nói',
      'hiểu thông điệp của họ',
      'đáp lại một cách chu đáo',
      'và xác nhận sự hiểu biết - nó giúp nắm bắt các yêu cầu chính xác và xây dựng niềm tin của các bên liên quan',
      'Lặp lại tất cả những gì một bên liên quan nói từng chữ',
      'Chỉ lắng nghe các bên liên quan cấp cao vì họ có nhiều quyền hơn',
      ''
    ],
    answer: '1',
    explanation: 'Lắng nghe tích cực bao gồm: (1) hoàn toàn chú ý (không bị phân tâm), (2) diễn giải để xác nhận sự hiểu biết ("Vậy điều tôi nghe được là..."), (3) đặt câu hỏi làm rõ, (4) quan sát các tín hiệu phi ngôn ngữ, (5) giữ lại phán xét cho đến khi người nói kết thúc. Đối với BA, điều này rất quan trọng vì việc hiểu sai các yêu cầu sẽ dẫn đến việc làm lại tốn kém.',
  },
  'ba-cn-002': {
    question: 'BA nên điều chỉnh phong cách giao tiếp của mình dựa trên đối tượng - sử dụng ngôn ngữ kinh doanh với giám đốc điều hành và ngôn ngữ kỹ thuật với nhà phát triển.',
    answer: 'Đúng',
    explanation: 'Thích ứng với khán giả là một kỹ năng BA quan trọng. Các nhà điều hành quan tâm đến ROI, rủi ro và sự liên kết chiến lược (sử dụng ngôn ngữ kinh doanh). Nhà phát triển quan tâm đến thông số kỹ thuật, API và mô hình dữ liệu (sử dụng ngôn ngữ kỹ thuật). Người dùng cuối quan tâm đến khả năng sử dụng và tác động của quy trình làm việc (sử dụng ngôn ngữ đơn giản, tập trung vào quy trình). Sử dụng sai ngôn ngữ sẽ tạo ra sự hiểu lầm và mất gắn kết.',
  },
  'ba-cn-003': {
    question: 'Trong cuộc họp, một bên liên quan lạc đề và bắt đầu thảo luận về các vấn đề không liên quan. BA/điều phối viên nên làm gì?',
    options: [
      'Hãy để họ tiếp tục vì ngắt lời là thô lỗ',
      'Đột ngột cắt chúng đi và chuyển sang mục chương trình nghị sự tiếp theo',
      'Thừa nhận quan điểm của họ',
      'lưu ý vào “bãi đậu xe” để theo dõi',
      'và chuyển hướng cuộc trò chuyện trở lại chương trình làm việc',
      'Kết thúc cuộc họp sớm vì không còn hiệu quả',
      ''
    ],
    answer: '2',
    explanation: 'Kỹ thuật "bãi đậu xe" nắm bắt những mục lạc đề mà không loại bỏ chúng: "Đó là một điểm quan trọng - hãy để tôi thêm nó vào danh sách bãi đậu xe của chúng ta và chúng ta sẽ giải quyết vấn đề đó riêng sau cuộc họp." Điều này tôn trọng các bên liên quan trong khi vẫn giữ cho cuộc họp đi đúng hướng. Xem lại các hạng mục trong bãi đậu xe vào cuối hoặc lên lịch các buổi theo dõi.',
  },
  'ba-cn-004': {
    question: 'Kỹ thuật "5 Whys" là gì và khi nào BA nên sử dụng nó?',
    options: [
      'Hỏi "tại sao" 5 lần trong cuộc phỏng vấn để khiến các bên liên quan khó đưa ra câu trả lời tốt hơn',
      'Một kỹ thuật phân tích nguyên nhân gốc rễ hỏi lặp đi lặp lại "tại sao" (thường ~ 5 lần) để tìm hiểu sâu hơn các triệu chứng trong quá khứ đến nguyên nhân gốc rễ cơ bản của vấn đề',
      'Một kỹ thuật động não tạo ra 5 giải pháp thay thế',
      'Một kỹ thuật ưu tiên xếp hạng 5 yêu cầu',
      ''
    ],
    answer: '1',
    explanation: '5 Whys (từ Hệ thống sản xuất Toyota) đi sâu vào quan hệ nhân quả: "Tại sao giao hàng trễ?" → "Bởi vì QA tìm thấy lỗi" → "Tại sao?" → “Bởi vì yêu cầu không rõ ràng” → “Tại sao?” → "Bởi vì quá trình sàng lọc đã bị bỏ qua" → đã xác định được nguyên nhân gốc rễ. BA sử dụng nó trong quá trình phân tích vấn đề để hiểu vấn đề thực sự đằng sau các triệu chứng. Số 5 là kim chỉ nam - hãy dừng lại khi bạn tìm ra nguyên nhân gốc rễ.',
  },
  'ba-cn-005': {
    question: 'Khi trình bày với các giám đốc điều hành cấp cao, cấu trúc trình bày hiệu quả NHẤT là gì?',
    options: [
      'Bắt đầu với dữ liệu phân tích chi tiết',
      'sau đó đưa ra kết luận trong vòng 60 phút',
      'Bắt đầu với khuyến nghị/kết luận trước (tóm tắt điều hành)',
      'sau đó cung cấp bằng chứng hỗ trợ',
      'và giữ nó ngắn gọn (10-15 phút)',
      'Sử dụng càng nhiều slide càng tốt để thể hiện sự kỹ lưỡng',
      'Đọc trực tiếp từ slide để đảm bảo độ chính xác',
      ''
    ],
    answer: '1',
    explanation: 'Các nhà điều hành có thời gian và sự chú ý hạn chế. Sử dụng "nguyên tắc kim tự tháp" (của Barbara Minto): dẫn đầu bằng khuyến nghị, sau đó đưa ra các lập luận và bằng chứng hỗ trợ. Cấu trúc: (1) Tóm tắt kèm theo khuyến nghị, (2) 3-4 điểm hỗ trợ chính, (3) Dữ liệu/bằng chứng cho từng điểm. Giữ nó ngắn gọn, trực quan và định hướng hành động. Chuẩn bị các slide dự phòng chi tiết cho phần hỏi đáp nếu cần.',
  },
  'ba-cn-006': {
    question: 'Sự khác biệt giữa "lập trường" và "lợi ích" trong đàm phán là gì?',
    options: [
      'Các chức vụ do người quản lý nắm giữ; lợi ích được nắm giữ bởi các thành viên trong nhóm',
      'Chức vụ là những gì mọi người NÓI họ muốn (các yêu cầu đã nêu); sở thích là TẠI SAO họ muốn nó (nhu cầu cơ bản) - hiểu rõ sở thích sẽ tạo ra các giải pháp sáng tạo',
      'Các vị trí có thể thương lượng; lợi ích không',
      'Chúng giống nhau được thể hiện khác nhau',
      ''
    ],
    answer: '1',
    explanation: 'Ví dụ điển hình: hai đứa trẻ tranh nhau một quả cam (vị thế: “Con muốn quả cam”). Hiểu được sở thích cho thấy một người muốn nước trái cây, người kia muốn vỏ để nướng - cả hai đều có thể hài lòng. Trong công việc BA: bên liên quan nói "Tôi cần tính năng này trước thứ Sáu" (vị trí). Mối quan tâm có thể là "Tôi có bản demo cho khách hàng vào thứ Hai" - biết điều này, bạn có thể cung cấp một nguyên mẫu sẵn sàng cho bản demo thay vì tính năng đầy đủ.',
  },
  'ba-cn-007': {
    question: 'Bạn cần tổ chức một buổi hội thảo về yêu cầu kéo dài 2 giờ với 12 người tham gia từ các bộ phận khác nhau, những người chưa từng làm việc cùng nhau. Thiết kế chương trình hội thảo, các kỹ thuật điều hành và cách bạn xử lý những người tham gia chiếm ưu thế và im lặng.',
    answer: 'Thiết kế hội thảo:\n\nPre-workshop:\n- Gửi chương trình làm việc',
    explanation: 'Việc tổ chức hội thảo hiệu quả đòi hỏi các kỹ thuật có cấu trúc để cân bằng sự tham gia. Động não trong im lặng sẽ ngăn chặn hiệu ứng HIPPO (Ý kiến ​​của người được trả lương cao nhất chiếm ưu thế). Bỏ phiếu chấm dân chủ hóa mức độ ưu tiên. Round-robin đảm bảo tất cả các giọng nói đều được lắng nghe. Vai trò của người điều phối là quản lý sự năng động của nhóm chứ không phải đóng góp ý kiến ​​- tính trung lập tạo dựng niềm tin.',
  },
  'ba-cn-008': {
    question: 'Trong quá trình đàm phán về phạm vi dự án, khách hàng yêu cầu 5 tính năng bổ sung mà không tăng ngân sách. Chiến lược đàm phán nào phù hợp nhất?',
    options: [
      'Chấp nhận tất cả 5 tính năng để giữ cho khách hàng hài lòng',
      'Từ chối cả 5 tính năng để bảo vệ ngân sách dự án',
      'Sử dụng đàm phán có nguyên tắc: khám phá lợi ích đằng sau nhu cầu',
      'đưa ra các lựa chọn (thêm ngân sách',
      'kéo dài dòng thời gian',
      'tính năng trao đổi',
      'giai đoạn giao hàng)',
      'và tìm ra giải pháp đôi bên cùng có lợi bằng cách sử dụng các tiêu chí khách quan',
      'Đồng ý với 2,5 tính năng như một sự thỏa hiệp',
      ''
    ],
    answer: '2',
    explanation: 'Đàm phán theo nguyên tắc (Fisher & Ury, "Getting to Yes") có 4 nguyên tắc: (1) Tách con người ra khỏi vấn đề, (2) Tập trung vào lợi ích chứ không phải vị trí, (3) Tạo ra các phương án để cùng có lợi, (4) Sử dụng các tiêu chí khách quan. Thay vì chấp nhận hoặc từ chối, hãy khám phá TẠI SAO những tính năng này lại cần thiết và đưa ra các lựa chọn thay thế: hoán đổi các tính năng có mức độ ưu tiên thấp hơn, phân phối theo giai đoạn hoặc điều chỉnh ngân sách/dòng thời gian. Điều này bảo vệ các mối quan hệ trong khi duy trì tính toàn vẹn của dự án.',
  },
  'ba-cn-009': {
    question: 'Với tư cách là Trưởng BA, thiết kế khung truyền thông cho một dự án có mức đặt cược cao trong đó nhà tài trợ là Giám đốc điều hành, ban chỉ đạo họp hàng tháng, có 3 nhóm phân phối và các nhà cung cấp bên ngoài tham gia. Bao gồm các đường dẫn leo thang và truyền thông trong thời kỳ khủng hoảng.',
    answer: 'Khung giao tiếp:\n\n1. Nhịp độ giao tiếp thường xuyên:\n- Nhà tài trợ của CEO: Cuộc họp giao ban 1: 1 kéo dài 30 phút hàng tháng (các quyết định quan trọng',
    explanation: 'Các dự án mang tính rủi ro cao đòi hỏi sự giao tiếp có kỷ luật. Khung này đảm bảo Giám đốc điều hành nhận được các cập nhật chiến lược ngắn gọn (không phải chi tiết hoạt động), ban chỉ đạo đưa ra các quyết định sáng suốt, các nhóm luôn liên kết và các nhà cung cấp chịu trách nhiệm. Lộ trình leo thang ngăn chặn các vấn đề trở nên trầm trọng hơn và giao thức xử lý khủng hoảng đảm bảo phản ứng nhanh chóng, phối hợp khi có sự cố xảy ra.',
  },
  'ba-cn-010': {
    question: 'Khái niệm "BATNA" trong đàm phán là gì và nó giúp ích gì cho Lead BA?',
    options: [
      'BATNA là viết tắt của "Phân bổ ngân sách để đánh giá nhu cầu kỹ thuật"',
      'BATNA (Giải pháp thay thế tốt nhất cho thỏa thuận thương lượng) là lựa chọn dự phòng tốt nhất của bạn nếu đàm phán thất bại - biết rằng BATNA của bạn sẽ mang lại cho bạn sức mạnh để thoát khỏi các giao dịch bất lợi và đặt ra kết quả tối thiểu có thể chấp nhận được',
      'BATNA là một công cụ phần mềm để đàm phán tự động',
      'BATNA là viết tắt của "Đào tạo và đánh giá phân tích kinh doanh"',
      ''
    ],
    answer: '1',
    explanation: 'BATNA (từ "Đi đến Đồng ý") là lựa chọn tốt nhất của bạn nếu cuộc đàm phán này thất bại. Nếu một nhà cung cấp báo giá $500K nhưng bạn có một nhà cung cấp thay thế ở mức $400K, thì BATNA của bạn là $400K — bạn không bao giờ nên chấp nhận mức giá cao hơn. Đối với BA: nếu các bên liên quan yêu cầu các mốc thời gian không thể thực hiện được, BATNA của bạn có thể là cách tiếp cận theo từng giai đoạn hoặc phạm vi giảm bớt. BATNA mạnh mang lại sự tự tin trong đàm phán; BATNA yếu có nghĩa là bạn cần đàm phán chặt chẽ hơn hoặc cải thiện các lựa chọn thay thế của mình.',
  },
  'ba-cn-011': {
    question: 'When communicating a delay to a stakeholder, what is the most professional approach?',
    options: [
      'Wait until the deadline has passed to see if they notice',
      'Inform them at the last minute',
      'Proactively communicate as soon as the risk is identified',
      'explain the reason',
      'and provide a revised timeline with a mitigation plan',
      'Blame the development team'
    ],
    explanation: 'Transparency builds credibility. Early warning allows stakeholders to adjust their own plans and shows that you are in control of the situation despite the delay.',
  },
  'ba-cn-012': {
    question: 'What is the "Yes, and..." technique in facilitation?',
    options: [
      'Agreeing with everything the stakeholder says',
      'A technique from improvisational theatre used to build on others\' ideas without immediately shutting them down',
      'fostering creativity in sessions',
      'Saying yes but doing the opposite',
      'A way to trick people into agreeing'
    ],
    explanation: '"Yes, and..." allows ideas to grow. For example, "Yes, we can build the dashboard, and we could also include a real-time notification feature to make it more useful."',
  },
  'ba-cn-013': {
    question: 'A stakeholder is using aggressive language in a meeting. How should the BA respond?',
    options: [
      'Be aggressive back to show strength',
      'Stay calm',
      'use "I" statements',
      'and if necessary',
      'pause the meeting to address the behavior or move to a neutral topic',
      'Leave the room immediately without saying anything',
      'Cry and hope someone helps'
    ],
    explanation: 'De-escalation is a vital BA skill. Staying professional prevents the meeting from becoming a toxic conflict and keeps the focus on the business objective.',
  },
  'ba-cn-014': {
    question: 'Which of the following is a barrier to effective communication during elicitation?',
    options: [
      'Using a shared glossary',
      'Providing pre-read materials',
      'Cognitive bias (e.g.',
      'confirmation bias or availability heuristic)',
      'Recording the session with permission'
    ],
    explanation: 'BAs must be aware of their own biases. Confirmation bias leads you to only "hear" requirements that match your existing assumptions about the solution.',
  },
  'ba-cn-015': {
    question: 'Design a "Dashboard for Executives" that communicates project health for 5 different workstreams. What are the 4 most critical KPIs to show?',
    answer: 'Dashboard Design:\n1. Milestone Status: Visual timeline (Green/Yellow/Red) for key delivery dates.\n2. Budget vs. Actuals: Simple bar chart showing spend burn rate.\n3. Top 3 Risks: High-level summary of the biggest threats and their mitigation plans.\n4. Value Realization: % of "Must Have" requirements completed and verified.',
    explanation: 'Executives need "Information at a glance." Avoid showing list of JIRA tickets; focus on high-level confidence and risk.',
  },
  'ba-cn-016': {
    question: 'Visual communication (diagrams, wireframes) is usually more effective than long text descriptions for complex requirements.',
    answer: 'Đúng',
    explanation: 'The human brain processes visual information much faster than text. Diagrams like Flowcharts or Wireframes reduce ambiguity and help stakeholders "see" the logic.',
  },
  'ba-cn-017': {
    question: 'What is "Non-Verbal Communication" and why should a BA monitor it?',
    options: [
      'The code written by developers',
      'Body language',
      'eye contact',
      'and tone of voice — it often reveals more about a stakeholder\'s true feelings or level of agreement than their words alone',
      'The silent part of a video call',
      'A type of email that contains no text'
    ],
    explanation: 'If a stakeholder says "I agree" while crossing their arms and looking away, they likely have unexpressed concerns. A good BA probes further in these moments.',
  },
  'ba-cn-018': {
    question: 'As a Lead BA, you are negotiating with a vendor for a new software tool. You have a very weak BATNA. What should you do?',
    options: [
      'Tell the vendor you have no other options',
      'Focus on "Expanding the Pie" — find other non-monetary value you can provide to the vendor (e.g.',
      'being a case study',
      'longer contract) to gain concessions',
      'Accept any price they give',
      'Cancel the project'
    ],
    explanation: 'When you can\'t walk away, you must shift from competitive negotiation (splitting the pie) to collaborative negotiation (finding additional value for both sides).',
  },
  'ba-cn-019': {
    question: 'Which conflict management style is most appropriate when the business relationship is critical and the issue is complex?',
    options: [
      'Avoiding',
      'Competing (I win',
      'you lose)',
      'Collaborating (Win-Win)',
      'Accommodating (I lose',
      'you win)'
    ],
    explanation: 'Collaboration takes longer but ensures both parties\' interests are met, which is vital for long-term stakeholder partnerships on complex projects.',
  },
  'ba-cn-020': {
    question: 'Design a "Feedback Mechanism" to improve BA communication skills across your team of 10 BAs.',
    answer: 'BA Feedback Loop:\n1. Peer Reviews: BAs attend each others\' workshops and provide "Post-Session Feedback."\n2. Recording & Analysis: Recording (with permission) key elicitation sessions for self-review.\n3. Stakeholder NPS: Quarterly 3-question survey to internal stakeholders about BA clarity and responsiveness.\n4. Success Stories: Monthly knowledge-sharing sessions where "difficult negotiations" are discussed and learned from.',
    explanation: 'Communication is a soft skill that requires a culture of continuous feedback and safe practice to improve.',
  },
  'ba-dk-001': {
    question: 'Tại sao kiến ​​thức về miền lại quan trọng đối với Nhà phân tích kinh doanh?',
    options: [
      'BA cần có kiến ​​thức domain để viết code cho hệ thống',
      'Kiến thức về miền giúp BA hiểu được bối cảnh kinh doanh',
      'nói ngôn ngữ của các bên liên quan',
      'hỏi những câu hỏi hay hơn',
      'và xác định những lỗ hổng mà các chuyên gia không có chuyên môn sẽ bỏ qua',
      'Kiến thức miền chỉ quan trọng với BA cấp cao',
      'Kiến thức về miền thay thế nhu cầu về kỹ thuật thu thập yêu cầu',
      ''
    ],
    answer: '1',
    explanation: 'Một BA có kiến ​​thức về lĩnh vực có thể: (1) hiểu các thuật ngữ và khái niệm trong ngành mà không cần giải thích liên tục, (2) xác định các yêu cầu ngụ ý mà các bên liên quan cho là hiển nhiên, (3) dự đoán các nhu cầu về quy định và tuân thủ, (4) thách thức các yêu cầu không thực tế dựa trên kinh nghiệm trong ngành, (5) xây dựng uy tín với các bên liên quan trong kinh doanh. Kiến thức về miền là một hệ số nhân cho tất cả các kỹ năng BA khác.',
  },
  'ba-dk-002': {
    question: 'Trong thương mại điện tử, “SKU” có nghĩa là gì?',
    options: [
      'Đơn vị kiến ​​thức chuẩn',
      'Đơn vị lưu kho - mã định danh duy nhất cho từng sản phẩm và mẫu mã riêng biệt',
      'Cập nhật khóa bán hàng',
      'Tiện ích kiến ​​thức hệ thống',
      ''
    ],
    answer: '1',
    explanation: 'SKU (Đơn vị giữ hàng tồn kho) xác định duy nhất từng biến thể sản phẩm trong quản lý hàng tồn kho. Ví dụ: "Áo thun xanh cỡ M" có SKU khác với "Áo thun xanh cỡ L". Các BA làm việc trên hệ thống thương mại điện tử phải hiểu SKU để quản lý hàng tồn kho, xử lý đơn hàng và yêu cầu báo cáo.',
  },
  'ba-dk-003': {
    question: 'Trong các ứng dụng fintech, KYC (Biết khách hàng của bạn) là một quy trình tùy chọn mà các công ty có thể bỏ qua để cải thiện trải nghiệm người dùng.',
    answer: 'Sai',
    explanation: 'KYC (Biết khách hàng của bạn) là yêu cầu pháp lý bắt buộc đối với các tổ chức tài chính ở hầu hết các quốc gia. Nó liên quan đến việc xác minh danh tính khách hàng, đánh giá rủi ro và giám sát các giao dịch để ngăn chặn hoạt động rửa tiền (AML), gian lận và tài trợ khủng bố. Việc bỏ qua KYC có thể dẫn đến các hình phạt pháp lý nghiêm trọng, phạt tiền và thu hồi giấy phép. BA phải thiết kế hệ thống cân bằng giữa việc tuân thủ KYC với trải nghiệm người dùng.',
  },
  'ba-dk-004': {
    question: 'Trong lĩnh vực CNTT chăm sóc sức khỏe, thuật ngữ "HL7" ám chỉ điều gì?',
    options: [
      'Ngôn ngữ lập trình cho thiết bị y tế',
      'Health Level Seven — một bộ tiêu chuẩn trao đổi quốc tế',
      'hội nhập',
      'chia sẻ',
      'và truy xuất thông tin y tế điện tử',
      'Một loại cơ sở dữ liệu bệnh viện',
      'Hệ thống phân loại chẩn đoán y tế',
      ''
    ],
    answer: '1',
    explanation: 'HL7 (Health Level Seven International) xác định các tiêu chuẩn trao đổi dữ liệu chăm sóc sức khỏe. HL7 v2 sử dụng các bản tin được phân cách bằng dấu sổ đứng (được triển khai rộng rãi nhất). HL7 FHIR (Tài nguyên tương tác chăm sóc sức khỏe nhanh) là tiêu chuẩn dựa trên REST hiện đại. Cử nhân chăm sóc sức khỏe phải hiểu HL7 để xác định các yêu cầu tích hợp giữa các hệ thống lâm sàng (EHR, phòng thí nghiệm, hiệu thuốc, thanh toán).',
  },
  'ba-dk-005': {
    question: 'Hệ thống ERP là gì và nó thường bao gồm những lĩnh vực kinh doanh nào?',
    options: [
      'ERP (Error Recovery Protocol) là một hệ thống khắc phục thảm họa',
      'ERP (Enterprise Resource Planning) là một hệ thống quản lý kinh doanh tích hợp bao gồm tài chính',
      'nhân sự',
      'mua sắm',
      'hàng tồn kho',
      'chế tạo',
      'việc bán hàng',
      'và CRM trong một nền tảng duy nhất',
      'ERP là một phương pháp quản lý dự án giống như Scrum',
      'ERP là loại cơ sở dữ liệu được doanh nghiệp sử dụng',
      ''
    ],
    answer: '1',
    explanation: 'Các hệ thống ERP (Enterprise Resource Planning) như SAP, Oracle, Microsoft Dynamics tích hợp các quy trình kinh doanh cốt lõi vào một hệ thống. Các mô-đun chính: Tài chính (GL, AP, AR), Nhân sự (tiền lương, nhân tài), Chuỗi cung ứng (mua sắm, tồn kho, hậu cần), Sản xuất (MRP, lập kế hoạch sản xuất), Bán hàng & CRM. Các BA làm việc trong các dự án ERP phải hiểu sự phụ thuộc giữa các mô-đun - một thay đổi trong một mô-đun sẽ ảnh hưởng đến các mô-đun khác.',
  },
  'ba-dk-006': {
    question: 'Trong lĩnh vực hậu cần, "giao hàng chặng cuối" ám chỉ điều gì?',
    options: [
      'Bước đầu tiên của quy trình giao hàng từ kho đến trung tâm phân phối',
      'Chặng giao hàng cuối cùng từ trung tâm phân phối đến tận nhà khách hàng cuối cùng - thường là phần đắt đỏ và phức tạp nhất trong chuỗi cung ứng',
      'Quy trình trả lại sản phẩm cho nhà sản xuất',
      'Vận chuyển đường dài giữa các quốc gia',
      ''
    ],
    answer: '1',
    explanation: 'Giao hàng chặng cuối là bước cuối cùng (và thường tốn kém nhất): từ trung tâm/trung tâm phân phối địa phương đến tận nhà khách hàng. Nó chiếm ~53% tổng chi phí vận chuyển do: giao hàng riêng lẻ nhỏ, giao thông đô thị, nỗ lực giao hàng không thành công và khoảng thời gian sẵn có của khách hàng. Cử nhân hậu cần tập trung vào việc tối ưu hóa điều này thông qua tối ưu hóa tuyến đường, khoảng thời gian giao hàng, theo dõi thời gian thực và các điểm giao hàng thay thế (tủ khóa, cửa hàng nhận hàng).',
  },
  'ba-dk-007': {
    question: 'Thiết kế các yêu cầu chức năng chính cho ứng dụng "ví kỹ thuật số" fintech. Bao gồm các tính năng cốt lõi, yêu cầu quy định và cân nhắc về bảo mật.',
    answer: 'Ví kỹ thuật số — Yêu cầu chức năng chính:\n\n1. Quản lý tài khoản:\n- Đăng ký người dùng bằng xác minh KYC (tải lên ID',
    explanation: 'Các BA Fintech phải cân bằng giữa trải nghiệm người dùng với các yêu cầu pháp lý khắt khe. Việc tuân thủ KYC/AML là không thể thương lượng nhưng phải được thiết kế để giảm thiểu xung đột (ví dụ: xác minh theo cấp độ). Các tính năng bảo mật phải mạnh mẽ mà không làm cho ứng dụng không thể sử dụng được. Hiểu được bối cảnh pháp lý (giấy phép tiền điện tử, bảo vệ dữ liệu, bảo vệ người tiêu dùng) là điều cần thiết cho công việc BA miền fintech.',
  },
  'ba-dk-008': {
    question: 'Khi làm việc trong một dự án thương mại điện tử, "tỷ lệ bỏ giỏ hàng" đo lường điều gì và tại sao nó lại quan trọng đối với một BA?',
    options: [
      'Tỷ lệ giỏ hàng bị hỏng trong các cửa hàng thực tế',
      'Tỷ lệ phần trăm người dùng thêm mặt hàng vào giỏ hàng nhưng rời đi mà không hoàn tất giao dịch mua - tỷ lệ này tiết lộ các điểm cản trở về trải nghiệm người dùng và thông báo các yêu cầu về tối ưu hóa thanh toán',
      'Tỷ lệ loại bỏ sản phẩm khỏi danh mục',
      'Tốc độ tải trang giỏ hàng',
      ''
    ],
    answer: '1',
    explanation: 'Tỷ lệ bỏ giỏ hàng (trên toàn cầu ~ 70%) đo lường doanh số bán hàng bị mất. Các nguyên nhân phổ biến mà BA nên giải quyết trong các yêu cầu: chi phí vận chuyển không mong muốn (→ hiển thị giao hàng sớm), bắt buộc tạo tài khoản (→ thanh toán cho khách), thanh toán phức tạp (→ ít bước hơn), lo ngại về bảo mật (→ huy hiệu tin cậy) và các hạn chế về phương thức thanh toán (→ nhiều tùy chọn thanh toán). BA có thể xác định các yêu cầu thử nghiệm A/B để tối ưu hóa chuyển đổi thanh toán.',
  },
  'ba-dk-009': {
    question: 'Một nhóm bệnh viện muốn triển khai hệ thống Hồ sơ sức khỏe điện tử (EHR) thống nhất trên 5 bệnh viện. Với tư cách là BA trưởng nhóm, hãy xác định các thách thức quan trọng theo từng miền cụ thể và cách tiếp cận yêu cầu của bạn phải khác với một dự án phần mềm doanh nghiệp thông thường như thế nào.',
    answer: 'EHR chăm sóc sức khỏe - Những thách thức theo từng miền cụ thể:\n\n1. An toàn cho bệnh nhân (Quan trọng đến tính mạng):\n- Dữ liệu không chính xác có thể giết chết bệnh nhân → các yêu cầu phải bao gồm các quy tắc xác nhận lâm sàng',
    explanation: 'Các dự án CNTT chăm sóc sức khỏe thất bại với tỷ lệ cao hơn so với các ngành khác vì lĩnh vực này đặc biệt phức tạp: liên quan đến an toàn tính mạng, quy định nặng nề, quy trình làm việc lâm sàng phức tạp và thách thức áp dụng của bác sĩ. BA trưởng nhóm phải tiếp cận vấn đề này theo cách khác - tham gia nhiều hơn vào lâm sàng của SME, xác nhận chặt chẽ hơn, thử nghiệm mô phỏng lâm sàng và hiểu biết sâu sắc về các tiêu chuẩn chăm sóc sức khỏe. Cái giá của việc thực hiện sai yêu cầu không chỉ là tiền - mà còn là sự an toàn của bệnh nhân.',
  },
  'ba-dk-010': {
    question: 'BA trưởng nhóm nên tiếp cận việc học một lĩnh vực hoàn toàn mới như thế nào (ví dụ: chuyển từ thương mại điện tử sang bảo hiểm) khi bắt đầu một dự án mới?',
    options: [
      'Dựa hoàn toàn vào các bên liên quan để giải thích mọi thứ trong hội thảo',
      'Thực hiện một cách tiếp cận có hệ thống: nghiên cứu các nguyên tắc cơ bản của ngành (sách',
      'các khóa học',
      'báo cáo)',
      'chuyên gia về miền bóng tối',
      'phân tích sản phẩm của đối thủ cạnh tranh',
      'tìm hiểu bối cảnh pháp lý',
      'và tạo bảng chú giải thuật ngữ tên miền — trở nên thông thạo (không phải chuyên gia) trong vòng 4-6 tuần',
      'Từ chối dự án vì chuyên môn về miền là điều cần thiết ngay từ ngày đầu',
      'Chỉ sử dụng các bài viết trực tuyến và bài đăng trên blog để tìm hiểu tên miền nhanh chóng',
      ''
    ],
    answer: '1',
    explanation: 'Học về miền hiệu quả: (1) Nghiên cứu các nguyên tắc cơ bản (sách giáo khoa ngành, giáo trình cấp chứng chỉ như LOMA cho bảo hiểm), (2) Phân tích đối thủ cạnh tranh (sử dụng sản phẩm của họ, đọc tài liệu của họ), (3) Các chuyên gia về miền bóng tối trong 2-3 ngày, (4) Lập bản đồ bối cảnh quy định (yêu cầu tuân thủ), (5) Tạo bảng chú giải miền (thuật ngữ chính, từ viết tắt, khái niệm), (6) Tham dự các sự kiện/hội thảo trực tuyến trong ngành. BA không cần phải trở thành chuyên gia về lĩnh vực - họ cần đủ thông thạo để đặt câu hỏi phù hợp và thách thức các giả định.',
  },
  'ba-doc-001': {
    question: 'SRS có nghĩa là gì trong tài liệu phân tích kinh doanh?',
    options: [
      'Đặc tả tài nguyên hệ thống',
      'Đặc tả yêu cầu phần mềm',
      'Hệ thống báo cáo tiêu chuẩn',
      'Tóm tắt đánh giá của các bên liên quan',
      ''
    ],
    answer: '1',
    explanation: 'SRS (Đặc tả yêu cầu phần mềm) là một tài liệu toàn diện mô tả những gì phần mềm nên làm. Nó thường bao gồm các yêu cầu chức năng, yêu cầu phi chức năng, giao diện hệ thống, các ràng buộc và giả định. IEEE 830 là một tiêu chuẩn được sử dụng rộng rãi cho cấu trúc SRS.',
  },
  'ba-doc-002': {
    question: 'Sự khác biệt CHÍNH giữa BRD (Tài liệu yêu cầu kinh doanh) và SRS là gì?',
    options: [
      'BRD ngắn hơn; SRS dài hơn',
      'BRD tập trung vào NHỮNG GÌ doanh nghiệp cần và TẠI SAO; SRS tập trung vào CÁCH hệ thống sẽ đáp ứng những nhu cầu đó về mặt kỹ thuật',
      'BRD dành cho các nhà phát triển; SRS dành cho các bên liên quan',
      'Không có sự khác biệt - chúng là cùng một tài liệu',
      ''
    ],
    answer: '1',
    explanation: 'BRD nắm bắt các yêu cầu ở cấp độ doanh nghiệp: mục tiêu, phạm vi kinh doanh, các bên liên quan và nhu cầu cấp cao (CÁI GÌ và TẠI SAO). SRS chuyển những thông số này thành các thông số kỹ thuật chi tiết ở cấp hệ thống: yêu cầu chức năng, mô hình dữ liệu, giao diện và các ràng buộc (CÁCH). BRD được viết cho các bên liên quan trong kinh doanh; SRS chủ yếu dành cho nhóm phát triển.',
  },
  'ba-doc-003': {
    question: 'Trong các dự án Agile, tài liệu bị loại bỏ hoàn toàn vì Tuyên ngôn Agile nói rằng "phần mềm hoạt động được trên tài liệu toàn diện".',
    answer: 'Sai',
    explanation: 'Tuyên ngôn Agile coi trọng phần mềm hoạt động HƠN tài liệu toàn diện - nó không nói "không có tài liệu". Các nhóm linh hoạt vẫn ghi lại tài liệu nhưng tập trung vào tài liệu "vừa đủ" để tăng thêm giá trị: câu chuyện của người dùng, tiêu chí chấp nhận, quyết định kiến ​​trúc (ADR), tài liệu API và sổ tay. Điều quan trọng là tài liệu nhẹ, sống động và hữu ích.',
  },
  'ba-doc-004': {
    question: 'BA sẽ tạo tài liệu nào để mô tả các thông số chức năng chi tiết, từ điển dữ liệu và thiết kế giao diện cho nhóm phát triển?',
    options: [
      'BRD (Tài liệu yêu cầu kinh doanh)',
      'FRD (Tài liệu yêu cầu chức năng) / FSD (Tài liệu đặc tả chức năng)',
      'Điều lệ dự án',
      'Kế hoạch kiểm tra',
      ''
    ],
    answer: '1',
    explanation: 'FRD/FSD thu hẹp khoảng cách giữa BRD và việc triển khai. Nó chứa các thông số kỹ thuật chi tiết về chức năng, định nghĩa thành phần dữ liệu, quy tắc nghiệp vụ, bố cục màn hình, thông số kỹ thuật giao diện và xử lý lỗi. Đây là tài liệu tham khảo chính cho các nhà phát triển trong quá trình triển khai và cho QA trong quá trình tạo trường hợp thử nghiệm.',
  },
  'ba-doc-005': {
    question: 'PRD (Tài liệu yêu cầu sản phẩm) là gì và nó khác với BRD như thế nào?',
    options: [
      'PRD chỉ là tên kỹ thuật số của BRD',
      'PRD lấy sản phẩm làm trung tâm - nó xác định tầm nhìn của sản phẩm',
      'đặc trưng',
      'người dùng',
      'và tiêu chí phát hành; BRD lấy doanh nghiệp làm trung tâm - nó xác định các mục tiêu kinh doanh và biện minh',
      'PRD dành cho phần cứng; BRD dành cho phần mềm',
      'PRD được viết bởi các nhà phát triển; BRD được viết bởi các nhà quản lý',
      ''
    ],
    answer: '1',
    explanation: 'BRD trả lời “tại sao doanh nghiệp lại cần điều này?” — tập trung vào các mục tiêu kinh doanh, ROI và sự biện minh. PRD trả lời "chúng ta đang xây dựng sản phẩm gì?" - tập trung vào tầm nhìn sản phẩm, tính cách người dùng, danh sách tính năng, luồng người dùng và số liệu thành công. Trong các tổ chức định hướng sản phẩm, PRD (do Người quản lý sản phẩm viết) thường thay thế BRD. Cả hai có thể cùng tồn tại trong các tổ chức lớn hơn.',
  },
  'ba-doc-006': {
    question: 'Viết đề cương mẫu cho BRD (Tài liệu yêu cầu kinh doanh). Bao gồm các phần chính mà một BA nên đề cập.',
    answer: '1. Thông tin văn bản (phiên bản',
    explanation: 'BRD có cấu trúc tốt sẽ cung cấp bối cảnh kinh doanh hoàn chỉnh cho dự án. Các phần chính đảm bảo không bỏ sót điều gì: mục tiêu phù hợp với dự án, phạm vi ngăn chặn phạm vi leo thang, phân tích các bên liên quan đảm bảo có đúng người tham gia, trạng thái hiện tại/tương lai cho thấy sự chuyển đổi và các thước đo thành công xác định cách đo lường thành công.',
  },
  'ba-doc-007': {
    question: 'Khái niệm "tài liệu sống" là gì và nó áp dụng như thế nào vào công việc của BA?',
    options: [
      'Tài liệu được lưu trữ trên trang web thay vì trong tệp Word',
      'Tài liệu được cập nhật liên tục khi sản phẩm phát triển',
      'luôn đồng bộ với trạng thái hệ thống hiện tại',
      'và thường được tạo tự động hoặc gắn chặt với các tạo phẩm nguồn (kiểm tra',
      'mã số',
      'tồn đọng)',
      'Tài liệu được viết bằng công cụ AI',
      'Bản thảo đầu tiên của các tài liệu chưa bao giờ được hoàn thiện',
      ''
    ],
    answer: '1',
    explanation: 'Tài liệu sống luôn cập nhật bằng cách được liên kết chặt chẽ với hệ thống: thông số kỹ thuật thực thi (kịch bản thử nghiệm BDD đóng vai trò là yêu cầu), tài liệu API được tạo tự động (Swagger/OpenAPI), wiki được cập nhật mỗi lần chạy nước rút và bản ghi quyết định kiến ​​trúc (ADR). Cách tiếp cận này làm giảm vấn đề "thối nát tài liệu" khi tài liệu trở nên lỗi thời ngay sau khi tạo.',
  },
  'ba-doc-008': {
    question: 'Khi ghi lại các quy tắc kinh doanh cho một hệ thống tính toán bảo hiểm phức tạp, kỹ thuật nào mang lại sự rõ ràng NHẤT cho cả nhóm kinh doanh và kỹ thuật?',
    options: [
      'Đoạn văn bản dài mô tả từng quy tắc',
      'Bảng quyết định hoặc cây quyết định ánh xạ trực quan các điều kiện tới hành động/kết quả',
      'Sơ đồ trình tự UML',
      'Sơ đồ thực thể-mối quan hệ',
      ''
    ],
    answer: '1',
    explanation: 'Bảng quyết định ánh xạ các kết hợp điều kiện (độ tuổi, loại chính sách, mức độ rủi ro) tới kết quả (tỷ lệ phí bảo hiểm, phạm vi bảo hiểm) trong một mạng lưới có cấu trúc. Chúng vượt trội hơn văn bản đối với các bộ quy tắc phức tạp vì: (1) chúng hiển thị tất cả các kết hợp, (2) chúng tiết lộ các khoảng trống (các kết hợp bị thiếu), (3) chúng có thể kiểm tra trực tiếp và (4) cả nhóm kinh doanh và công nghệ đều có thể đọc chúng. Cây quyết định hoạt động tương tự nhưng hiển thị trực quan logic phân nhánh.',
  },
  'ba-doc-009': {
    question: 'Thiết kế chiến lược tài liệu cho nền tảng thương mại điện tử dựa trên vi dịch vụ được xây dựng bởi 3 nhóm Scrum. Bao gồm các loại tài liệu, quyền sở hữu, công cụ và quy trình bảo trì.',
    answer: 'Chiến lược tài liệu:\n\n1. Lớp Kiến trúc:\n- Bản ghi Quyết định Kiến trúc (ADR) - một bản ghi cho mỗi quyết định quan trọng',
    explanation: 'Microservices nhân lên nhu cầu về tài liệu vì mỗi dịch vụ có API, triển khai và bối cảnh kinh doanh riêng. Chiến lược phân lớp đảm bảo mỗi đối tượng (kiến trúc sư, nhà phát triển, BA, vận hành) tìm thấy những gì họ cần. Tự động tạo (Swagger, ADR trong Git) giúp tài liệu được đồng bộ hóa. Việc đưa việc xem xét tài liệu thành một phần của DoD sẽ ngăn ngừa nợ tài liệu tích lũy.',
  },
  'ba-doc-010': {
    question: 'Với tư cách là Trưởng nhóm BA, hãy thiết lập tiêu chuẩn tài liệu và khung quản trị cho nhóm BA gồm 8 nhà phân tích làm việc trên các dự án khác nhau. Bao gồm các mẫu, tiêu chí chất lượng, quy trình đánh giá và công cụ.',
    answer: 'Khung quản trị tài liệu:\n\n1. Thư viện mẫu:\n- Mẫu chuẩn: BRD',
    explanation: 'Nếu không có tiêu chuẩn tài liệu, 8 BA tạo ra 8 kiểu tài liệu khác nhau, khiến việc chuyển giao kiến ​​thức giữa các dự án trở nên khó khăn. Khung quản trị đảm bảo tính nhất quán (mẫu), chất lượng (quy trình đánh giá, danh sách kiểm tra) và cải tiến liên tục (kiểm toán, số liệu). Điều quan trọng là làm cho các tiêu chuẩn trở nên thiết thực - các quy trình quá cứng nhắc sẽ bị bỏ qua, vì vậy các mẫu phải hữu ích chứ không quan liêu.',
  },
  'ba-doc-011': {
    question: 'Một khách hàng yêu cầu một tài liệu SRS dài 200 trang trước khi bắt đầu bất kỳ quá trình phát triển nào, nhưng dự án đang tuân theo Agile. BA trưởng nhóm nên giải quyết tình huống này như thế nào?',
    options: [
      'Từ chối yêu cầu của khách hàng và giải thích rằng Agile có nghĩa là không có tài liệu',
      'Viết đầy đủ SRS 200 trang để làm hài lòng khách hàng',
      'sau đó bỏ qua nó trong quá trình phát triển',
      'Đàm phán thỏa hiệp: cung cấp kiến ​​trúc bao phủ "SRS-lite" nhẹ',
      'quy tắc kinh doanh quan trọng',
      'và NFR trả trước',
      'sau đó dần dần xây dựng chi tiết thông qua các câu chuyện của người dùng và tài liệu chạy nước rút',
      'cung cấp cập nhật tài liệu thường xuyên phù hợp với nhịp chạy nước rút',
      'Chuyển dự án sang Waterfall để phù hợp với khách hàng',
      ''
    ],
    answer: '2',
    explanation: 'Giải pháp cân bằng kỳ vọng của khách hàng với các nguyên tắc Agile. Tài liệu trả trước mang lại sự tin cậy mà khách hàng cần (kiến trúc, các quyết định quan trọng, NFR) mà không trở thành một đặc tả toàn diện sẽ lỗi thời trước khi bắt đầu phát triển. Việc xây dựng tiến bộ thông qua các tạo phẩm chạy nước rút giúp cập nhật tài liệu. Cập nhật thường xuyên cho khách hàng thấy rằng tài liệu sẽ phát triển cùng với sản phẩm.',
  },
  'ba-re-001': {
    question: 'Định nghĩa nào sau đây là định nghĩa TỐT NHẤT về "yêu cầu chức năng"?',
    options: [
      'Hạn chế về hiệu suất của hệ thống (ví dụ: thời gian phản hồi < 2 giây)',
      'Hành vi hoặc chức năng cụ thể mà hệ thống phải thực hiện (ví dụ: "hệ thống sẽ cho phép người dùng đặt lại mật khẩu")',
      'Mục tiêu kinh doanh mà các bên liên quan muốn đạt được',
      'Mô tả về phần cứng mà hệ thống chạy trên đó',
      ''
    ],
    answer: '1',
    explanation: 'Yêu cầu chức năng mô tả những gì hệ thống nên làm - hành vi, tính năng hoặc chức năng cụ thể. Các yêu cầu phi chức năng bao gồm “mức độ tốt” (hiệu suất, bảo mật, khả năng sử dụng). Mục tiêu kinh doanh là mục tiêu cấp cao hơn, không phải yêu cầu cấp hệ thống.',
  },
  'ba-re-002': {
    question: 'Yêu cầu phi chức năng (NFR) mô tả hệ thống làm NHỮNG GÌ, trong khi yêu cầu chức năng mô tả hệ thống thực hiện nó TỐT NHƯ THẾ NÀO.',
    answer: 'Sai',
    explanation: 'Ngược lại: các yêu cầu chức năng mô tả NHỮNG GÌ hệ thống làm (hành vi/tính năng), trong khi các yêu cầu phi chức năng mô tả TỐT NHƯ THẾ NÀO (hiệu suất, bảo mật, khả năng mở rộng, khả năng sử dụng). Các danh mục NFR phổ biến bao gồm hiệu suất, độ tin cậy, tính khả dụng và khả năng bảo trì.',
  },
  'ba-re-003': {
    question: 'Kỹ thuật khơi gợi nào liên quan đến việc quan sát người dùng cuối thực hiện các công việc hàng ngày trong môi trường làm việc của họ?',
    options: [
      'Động não',
      'Quan sát (Theo dõi công việc)',
      'nguyên mẫu',
      'Phân tích tài liệu',
      ''
    ],
    answer: '1',
    explanation: 'Việc quan sát (hoặc theo dõi công việc) cho phép BA biết cách người dùng thực sự làm việc - thường tiết lộ những nhu cầu chưa được nêu ra, cách giải quyết và những điểm khó khăn mà người dùng quên đề cập đến trong các cuộc phỏng vấn. Nó đặc biệt hữu ích khi người dùng không thể trình bày rõ ràng các quy trình của họ.',
  },
  'ba-re-004': {
    question: 'Từ viết tắt "MoSCoW" có nghĩa là gì trong mức độ ưu tiên của yêu cầu?',
    options: [
      'Bắt buộc',
      'Không bắt buộc',
      'Tiêu chuẩn',
      'Phê bình',
      'Không bắt buộc',
      'Danh sách yêu thích',
      'Phải có',
      'Nên có',
      'Có thể có',
      'Sẽ không có (lần này)',
      'Quan trọng nhất',
      'Một số tầm quan trọng',
      'Chung',
      'Thỉnh thoảng',
      'vô giá trị',
      'tối thiểu',
      'Tối ưu',
      'Có thể mở rộng',
      'Phê bình',
      'hoạt động',
      'Muốn',
      ''
    ],
    answer: '1',
    explanation: 'MoSCoW là một kỹ thuật ưu tiên: Phải có (quan trọng để phân phối), Nên có (quan trọng nhưng không quan trọng), Có thể có (có thì tốt), Sẽ không có (đồng ý loại trừ khỏi bản phát hành này). Chữ "o" được thêm vào để làm cho từ viết tắt có thể phát âm được.',
  },
  'ba-re-005': {
    question: 'Mục đích CHÍNH của Ma trận truy xuất nguồn gốc yêu cầu (RTM) là gì?',
    options: [
      'Để theo dõi ngân sách của từng yêu cầu',
      'Để ánh xạ từng yêu cầu tới nguồn của nó',
      'yếu tố thiết kế',
      'trường hợp thử nghiệm',
      'và trạng thái phân phối trong suốt vòng đời dự án',
      'Để ưu tiên các yêu cầu theo giá trị kinh doanh',
      'Chỉ ghi lại lịch sử thay đổi yêu cầu',
      ''
    ],
    answer: '1',
    explanation: 'RTM đảm bảo mọi yêu cầu đều được liên kết từ nguồn gốc (nhu cầu kinh doanh/các bên liên quan) thông qua thiết kế, triển khai và thử nghiệm. Nó giúp phát hiện các lỗ hổng (yêu cầu chưa được kiểm tra), mạ vàng (các tính năng không có yêu cầu) và hỗ trợ phân tích tác động khi có thay đổi.',
  },
  'ba-re-006': {
    question: 'Một bên liên quan nói: "Hệ thống phải thân thiện với người dùng." BA nên làm gì với yêu cầu này?',
    options: [
      'Chấp nhận nguyên trạng vì các bên liên quan biết rõ nhất',
      'Bỏ đi vì nó mang tính chủ quan và không thể thực hiện được',
      'Phân tách nó thành có thể đo lường được',
      'tiêu chí có thể kiểm tra (ví dụ: "hoàn thành nhiệm vụ trong vòng 3 lần nhấp chuột"',
      'tỷ lệ lỗi < 5%")',
      'Chuyển tiếp trực tiếp đến người thiết kế giao diện người dùng mà không cần sửa đổi',
      ''
    ],
    answer: '2',
    explanation: '"Thân thiện với người dùng" là mơ hồ và không thể đo lường được. Một BA tốt sẽ phân tách các yêu cầu mơ hồ thành các tiêu chí SMART: Cụ thể, Có thể đo lường được, Có thể đạt được, Có liên quan, Có thời hạn. Ví dụ: "90% người dùng mới hoàn tất đăng ký trong vòng 2 phút mà không cần hỗ trợ."',
  },
  'ba-re-007': {
    question: 'Kỹ thuật nào hiệu quả NHẤT khi các bên liên quan có các yêu cầu xung đột nhau?',
    options: [
      'Phân tích tài liệu',
      'Hội thảo hỗ trợ (phiên JAD)',
      'Khảo sát/Bảng câu hỏi',
      'nguyên mẫu',
      ''
    ],
    answer: '1',
    explanation: 'Một hội thảo được hỗ trợ (Phát triển ứng dụng chung - JAD) tập hợp các bên liên quan xung đột lại với nhau trong một phiên có cấu trúc với một người hỗ trợ trung lập. Điều này cho phép đàm phán, thỏa hiệp và xây dựng sự đồng thuận theo thời gian thực. Các cuộc khảo sát quá khách quan để giải quyết xung đột và việc phân tích tài liệu không giải quyết được xung đột.',
  },
  'ba-re-008': {
    question: 'Xác thực yêu cầu đảm bảo rằng các yêu cầu được triển khai chính xác trong hệ thống cuối cùng.',
    answer: 'Sai',
    explanation: 'XÁC NHẬN yêu cầu kiểm tra xem các yêu cầu có phản ánh chính xác nhu cầu của các bên liên quan hay không (chúng ta có đang xây dựng đúng thứ không?). XÁC MINH Yêu cầu kiểm tra xem hệ thống có thực hiện đúng các yêu cầu hay không (chúng ta xây dựng nó có đúng không?). Việc xác nhận diễn ra sớm hơn; xác minh xảy ra trong quá trình thử nghiệm.',
  },
  'ba-re-009': {
    question: 'Trong một hệ thống doanh nghiệp phức tạp, cách tiếp cận nào là TỐT NHẤT để quản lý các yêu cầu thường xuyên thay đổi?',
    options: [
      'Cố định tất cả các yêu cầu trước khi bắt đầu phát triển (Big Design Up Front)',
      'Sử dụng cách tiếp cận lặp đi lặp lại với sản phẩm tồn đọng',
      'sàng lọc liên tục',
      'và các vòng phản hồi ngắn',
      'Bỏ qua các yêu cầu chính thức và để nhà phát triển quyết định xây dựng nội dung gì',
      'Tạo một tài liệu SRS toàn diện ngay từ đầu và không bao giờ cập nhật nó',
      ''
    ],
    answer: '1',
    explanation: 'Các phương pháp lặp lại/Agile chấp nhận các yêu cầu phát triển. Một sản phẩm tồn đọng đang hoạt động với sự sàng lọc liên tục, đánh giá nước rút để lấy phản hồi của các bên liên quan và các chu kỳ ngắn cho phép nhóm thích ứng với những thay đổi. BDUF không thành công khi các yêu cầu không ổn định; bỏ qua các yêu cầu dẫn đến phạm vi sai lệch và sai lệch.',
  },
  'ba-re-010': {
    question: '“Yêu cầu mạ vàng” là gì và tại sao lại có vấn đề?',
    options: [
      'Thêm nhiều chi tiết hơn vào các yêu cầu so với yêu cầu của các bên liên quan - nó cải thiện chất lượng',
      'Triển khai các tính năng hoặc khả năng vượt quá những gì đã được chỉ định - nó làm tăng phạm vi',
      'trị giá',
      'và rủi ro không có giá trị kinh doanh được phê duyệt',
      'Ưu tiên tất cả các yêu cầu là "Phải có" - đảm bảo không bỏ sót điều gì',
      'Sử dụng các công cụ đắt tiền để quản lý yêu cầu - gây lãng phí ngân sách',
      ''
    ],
    answer: '1',
    explanation: 'Mạ vàng xảy ra khi các nhà phát triển hoặc BA thêm các tính năng, sự đánh bóng hoặc các khả năng mà các bên liên quan không yêu cầu. Mặc dù có mục đích tốt nhưng nó làm tăng phạm vi, trì hoãn việc phân phối, giới thiệu chức năng chưa được kiểm tra và tiêu tốn ngân sách cho công việc chưa được phê duyệt. RTM giúp phát hiện việc mạ vàng bằng cách tiết lộ các tính năng được triển khai mà không cần yêu cầu phù hợp.',
  },
  'ba-re-011': {
    question: 'Thiết kế chiến lược khơi gợi yêu cầu cho nền tảng thương mại điện tử mới nơi khách hàng chỉ có ý tưởng sơ bộ về những gì họ muốn. Bao gồm ít nhất 4 kỹ thuật, trình tự và lý do căn bản của chúng.',
    answer: 'Giai đoạn 1 - Khám phá: (1) Phỏng vấn các bên liên quan ở cấp độ C',
    explanation: 'Chiến lược đa kỹ thuật là điều cần thiết khi khách hàng có những ý tưởng mơ hồ. Bắt đầu bằng các cuộc phỏng vấn và phân tích tài liệu sẽ thiết lập bối cảnh. Hội thảo thúc đẩy sự sáng tạo và sự liên kết. Nguyên mẫu làm cho các khái niệm trừu tượng trở nên hữu hình để phản hồi. Khảo sát xác nhận các giả định ở quy mô lớn. Ánh xạ câu chuyện của người dùng cung cấp một lộ trình có cấu trúc từ yêu cầu đến triển khai.',
  },
  'ba-re-012': {
    question: 'Điều nào sau đây là rủi ro chính của việc CHỈ sử dụng các cuộc phỏng vấn làm kỹ thuật khơi gợi?',
    options: [
      'Các cuộc phỏng vấn quá tốn kém để thực hiện',
      'Các bên liên quan có thể không trình bày rõ kiến ​​thức ngầm',
      'dẫn đến yêu cầu không đầy đủ',
      'Các cuộc phỏng vấn luôn đưa ra những yêu cầu trái ngược nhau',
      'Các cuộc phỏng vấn không thể nắm bắt được các yêu cầu phi chức năng',
      ''
    ],
    answer: '1',
    explanation: 'Các cuộc phỏng vấn dựa vào việc các bên liên quan trình bày rõ ràng những gì họ biết - nhưng phần lớn kiến ​​thức là ẩn (chuyên môn vô thức). Người dùng có thể quên các trường hợp đặc biệt, thừa nhận kiến ​​thức phổ biến hoặc mô tả quy trình làm việc lý tưởng hóa. Việc bổ sung khả năng quan sát, tạo nguyên mẫu và phân tích tài liệu sẽ giúp lấp đầy những khoảng trống này.',
  },
  'ba-re-013': {
    question: 'Bạn là BA chính của chương trình chuyển đổi kỹ thuật số quy mô lớn với 5 luồng công việc. Thiết kế khung quản trị yêu cầu để đảm bảo tính nhất quán, khả năng truy nguyên và kiểm soát thay đổi trên tất cả các quy trình công việc.',
    answer: 'Các thành phần khung: (1) Kho lưu trữ yêu cầu trung tâm - một công cụ duy nhất (ví dụ: Jira',
    explanation: 'Ở quy mô chương trình, các BA công việc riêng lẻ có thể tuân theo các tiêu chuẩn và tạo ra các yêu cầu xung đột. Khung quản trị đảm bảo tính nhất quán (phân loại chung, mẫu), khả năng hiển thị (kho lưu trữ trung tâm, truy xuất nguồn gốc), kiểm soát (CCB, quy trình thay đổi) và chất lượng (điểm kiểm tra đánh giá). Nếu không có sự quản trị, khả năng tích hợp giữa các luồng công việc gần như sẽ không xảy ra.',
  },
  'ba-re-014': {
    question: 'Khi quản lý các yêu cầu cho một hệ thống phải tuân thủ nhiều tiêu chuẩn quy định (ví dụ: GDPR, PCI-DSS, HIPAA), thực hành kỹ thuật yêu cầu quan trọng NHẤT là gì?',
    options: [
      'Thuê một nhân viên tuân thủ chuyên trách để viết tất cả các yêu cầu',
      'Tạo ma trận truy xuất nguồn gốc tuân thủ để ánh xạ từng điều khoản quy định với các yêu cầu cụ thể',
      'quyết định thiết kế',
      'và bằng chứng xác minh',
      'Thêm tuyên bố từ chối trách nhiệm rằng hệ thống "nhằm mục đích tuân thủ"',
      'Triển khai tất cả các tính năng bảo mật có thể bất kể áp dụng quy định nào',
      ''
    ],
    answer: '1',
    explanation: 'Ma trận truy xuất nguồn gốc tuân thủ ánh xạ các điều khoản quy định cụ thể (ví dụ: GDPR Điều 17 "Quyền xóa") tới các yêu cầu bắt nguồn (ví dụ: "Hệ thống sẽ xóa vĩnh viễn dữ liệu người dùng trong vòng 30 ngày kể từ ngày yêu cầu"), các quyết định thiết kế, bằng chứng triển khai và các trường hợp thử nghiệm chứng minh sự tuân thủ. Điều này cung cấp bằng chứng có thể kiểm tra được và đảm bảo không bỏ sót điều khoản quy định nào.',
  },
  'ba-re-015': {
    question: 'BA phát hiện ra rằng 30% lỗi trong quá trình sản xuất bắt nguồn từ các yêu cầu mơ hồ hoặc thiếu sót. BA dẫn đầu nên đề xuất cải tiến mang tính hệ thống nào?',
    options: [
      'Thuê thêm người kiểm tra QA để phát hiện lỗi sớm hơn',
      'Thực hiện đánh giá yêu cầu chính thức với danh sách kiểm tra có cấu trúc',
      'chỉ số chất lượng yêu cầu',
      'và các vòng phản hồi phân tích nguyên nhân gốc rễ',
      'Giảm số lượng yêu cầu để giảm thiểu sai sót',
      'Chuyển từ Agile sang Waterfall để có nhiều thời gian đáp ứng yêu cầu hơn',
      ''
    ],
    answer: '1',
    explanation: 'Phân tích nguyên nhân gốc rễ cho thấy các vấn đề về chất lượng yêu cầu. Cải tiến có hệ thống bao gồm: (1) đánh giá ngang hàng có cấu trúc với danh sách kiểm tra (tính đầy đủ, nhất quán, khả năng kiểm tra, rõ ràng), (2) theo dõi số liệu (tỷ lệ rò rỉ lỗi, độ biến động của yêu cầu, phạm vi đánh giá) và (3) vòng phản hồi trong đó các lỗi sản xuất được truy ngược lại các yêu cầu và bài học kinh nghiệm được áp dụng. Đây là một cải tiến quy trình, không chỉ là thêm nhiều người hơn.',
  },
  'ba-re-016': {
    question: 'Khi một BA tạo "Thuật ngữ (Glossary)", lợi ích chính cho nhóm dự án là gì?',
    options: ['Làm tài liệu chuyên nghiệp hơn', 'Đảm bảo stakeholder và dự án hiểu chung thuật ngữ/jargon, giảm lỗi giao tiếp', 'Cung cấp danh sách tên và vai trò dev', 'Xác định ngân sách và timeline'],
    explanation: 'Thuật ngữ (hoặc từ điển dữ liệu) rất quan trọng để thống nhất giao tiếp. Các phòng ban khác nhau thường dùng cùng một từ với ý nghĩa khác nhau. Một bảng thuật ngữ chung giúp tránh hiểu sai yêu cầu.',
  },
  'ba-re-017': {
    question: 'Trong tài liệu Yêu cầu Kinh doanh (BRD), phần "Trạng thái Hiện tại" (As-Is) thường mô tả điều gì?',
    options: ['Kiến trúc kỹ thuật chi tiết của hệ thống mới', 'Các quy trình kinh doanh, nỗi đau và luồng công việc hiện có như chúng đang hoạt động hiện nay trước khi có bất kỳ thay đổi nào', 'Danh sách các tính năng mong muốn trong hai năm tới', 'Thông tin liên hệ của PM'],
    explanation: 'Tài liệu hóa trạng thái "As-Is" là quan trọng để xác định khoảng trống, tính toán ROI và đảm bảo giải pháp mới ("To-Be") thực sự giải quyết được vấn đề hiện tại.',
  },
  'ba-re-018': {
    question: 'Một yêu cầu ghi: "Hệ thống nên hỗ trợ một số lượng lớn người dùng đồng thời." Tiêu chí SMART nào bị vi phạm?',
    options: ['Cụ thể và Có thể đo lường (Specific & Measurable)', 'Khả thi (Achievable)', 'Liên quan (Relevant)', 'Giới hạn thời gian (Time-bound)'],
    explanation: '"Số lượng lớn" là chủ quan và không thể đo lường hoặc kiểm thử. Để SMART, nó nên được định lượng, ví dụ: "Hệ thống hỗ trợ tới 50.000 người dùng đồng thời với thời gian phản hồi dưới 1 giây."',
  },
  'ba-re-019': {
    question: 'Stakeholder nào thường chịu trách nhiệm "Phê duyệt cuối cùng" cho các Yêu cầu Kinh doanh?',
    options: ['Lead Developer', 'QA Lead', 'Nhà tài trợ doanh nghiệp (Business Sponsor) hoặc Product Owner', 'BA thực tập'],
    explanation: 'Nhà tài trợ hoặc PO có quyền hạn đồng ý rằng các yêu cầu đáp ứng nhu cầu kinh doanh và ngân sách dự án nên được sử dụng để triển khai chúng.',
  },
  'ba-re-020': {
    question: 'Khi thực hiện "Phân tích tác động" (Impact Analysis) cho một yêu cầu thay đổi lớn, BA chủ yếu tìm kiếm điều gì?',
    options: ['Những nhà phát triển nào sẽ được giao nhiệm vụ', 'Các hiệu ứng lan tỏa lên các yêu cầu hiện có, thiết kế, kiểm thử và quy trình kinh doanh nếu thay đổi được thực hiện', 'Liệu khách hàng có trả thêm tiền cho sự thay đổi hay không', 'Các lỗi chính tả trong biểu mẫu yêu cầu thay đổi'],
    explanation: 'Phân tích tác động xác định phạm vi của một thay đổi. Sử dụng Ma trận truy xuất nguồn gốc, BA có thể thấy phần nào của hệ thống bị ảnh hưởng, giúp các bên liên quan cân nhắc chi phí/lợi ích.',
  },
  'ba-re-021': {
    question: 'Đề xuất chiến lược khơi gợi yêu cầu từ một nhóm stakeholder phân tán về địa lý và chưa từng gặp nhau.',
    answer: 'Chiến lược:\n1. Khảo sát tiền kỳ: Gửi khảo sát để xác định các chủ đề chung và các vấn đề cần lưu ý.\n2. Workshop ảo: Sử dụng công cụ như Miro/FigJam để brainstorm và Mural để ánh xạ sự tương đồng.\n3. Kỹ thuật Delphi: Thực hiện các vòng khảo sát chuyên gia ẩn danh để đạt được sự đồng thuận.\n4. Review tài liệu: Sử dụng Google Docs/Confluence để nhận xét bất đối xứng.\n5. Prototype: Chia sẻ bản mockup tương tác qua Figma/Axure để trực quan hóa thảo luận.',
    explanation: 'Khơi gợi từ xa đòi hỏi sự kết hợp giữa các công cụ đồng bộ (workshop) và bất đồng bộ (khảo sát, review tài liệu) để tối đa hóa sự tham gia của các múi giờ khác nhau.',
  },
  'ba-re-022': {
    question: 'Kỹ thuật mô hình hóa nào hữu ích nhất để xác định phạm vi cấp cao và các tác nhân bên ngoài của hệ thống?',
    options: ['Sơ đồ Quan hệ Thực thể (ERD)', 'Sơ đồ ngữ cảnh (Context Diagram)', 'Sơ đồ tuần tự (Sequence Diagram)', 'Sơ đồ trạng thái (State Machine Diagram)'],
    explanation: 'Sơ đồ ngữ cảnh (DFD cấp 0) hiển thị toàn bộ hệ thống dưới dạng một quy trình duy nhất và các tương tác của nó với các thực thể bên ngoài, xác định ranh giới hệ thống một cách rõ ràng.',
  },
  'ba-re-023': {
    question: 'Trong quá trình chuyển đổi Agile, một Lead BA nhận thấy các yêu cầu đang được "bàn giao" cho nhóm dev mà không có sự tương tác. Khái niệm nào họ nên giới thiệu để khắc phục điều này?',
    options: ['Viết tài liệu dài hơn', 'Họp Three Amigos (BA, Dev, QA cộng tác)', 'Thêm nhiều quản lý để giám sát bàn giao', 'Giao tiếp nghiêm ngặt chỉ qua email'],
    explanation: '"Three Amigos" khuyến khích sự hiểu biết chung thông qua hội thoại. Bằng cách đưa Kinh doanh (BA), Dev và QA lại với nhau sớm, họ tìm thấy các trường hợp biên và làm rõ yêu cầu trước khi viết code.',
  },
  'ba-re-024': {
    question: 'Mục đích của "Yêu cầu chuyển đổi" (Transition Requirements) là gì?',
    options: ['Mô tả hệ thống sẽ trông như thế nào sau 5 năm', 'Xác định các khả năng tạm thời cần thiết để chuyển từ trạng thái hiện tại sang trạng thái mới (ví dụ: di chuyển dữ liệu, đào tạo)', 'Mô tả quá trình chuyển đổi giữa các màn hình', 'Tài liệu hóa khi một PM rời dự án'],
    explanation: 'Yêu cầu chuyển đổi mang tính tạm thời. Khi hệ thống mới đi vào hoạt động, chúng không còn cần thiết nữa. Ví dụ bao gồm ánh xạ dữ liệu để di chuyển hoặc hướng dẫn đào tạo.',
  },
  'ba-re-025': {
    question: 'Định nghĩa một "Khung chất lượng yêu cầu" cho một nhóm BA doanh nghiệp. Bạn sẽ theo dõi những số liệu nào?',
    answer: 'Khung chất lượng:\n1. Tính đầy đủ: % yêu cầu được truy xuất về nhu cầu kinh doanh.\n2. Tính kiểm chứng được: % yêu cầu có tiêu chí chấp nhận rõ ràng.\n3. Tính biến động: Tỷ lệ thay đổi yêu cầu sau khi chốt (sign-off).\n4. Rò rỉ lỗi: % lỗi production do yêu cầu kém.\n5. Sự hài lòng của stakeholder: Chỉ số NPS từ Dev và QA về độ rõ ràng của yêu cầu.',
    explanation: 'Lead BA tập trung vào chất lượng quy trình. Theo dõi các số liệu này cho phép nhóm xác định vòng đời yêu cầu đang thất bại ở đâu.',
  },
  'ba-rw-001': {
    question: 'Một khách hàng liên tục yêu cầu các tính năng mới nhỏ trong tuần cuối cùng của UAT. Hành động ngay lập tức thích hợp nhất của bạn là gì?',
    options: [
      'Chấp nhận mọi yêu cầu để giữ cho khách hàng hài lòng và yêu cầu các nhà phát triển làm việc thêm giờ.',
      'Từ chối mọi yêu cầu vì thời hạn đã đến gần.',
      'Ghi lại các yêu cầu dưới dạng Yêu cầu Thay đổi (CR)',
      'đánh giá tác động của chúng đối với dòng thời gian/chi phí',
      'và yêu cầu khách hàng ưu tiên chúng so với phạm vi phát hành hiện tại.',
      'Âm thầm đưa các tính năng vào cơ sở mã mà không cần thông báo cho Người quản lý dự án.'
    ],
    answer: '2',
    explanation: 'Phạm vi leo thang là một rủi ro lớn, đặc biệt là vào giai đoạn cuối của dự án. Là một BA, bạn không bao giờ nên chấp nhận một cách mù quáng hoặc từ chối một cách cứng nhắc các yêu cầu. Thay vào đó, hãy ghi lại chúng dưới dạng CR, phân tích tác động và trình bày những đánh đổi cho các bên liên quan để đưa ra quyết định sáng suốt.',
  },
  'ba-rw-002': {
    question: 'Trong cuộc họp lập kế hoạch chạy nước rút, nhà phát triển cho biết họ không thể triển khai tính năng như được mô tả trong Câu chuyện người dùng của bạn. Bạn nên trả lời thế nào?',
    options: [
      'Yêu cầu nhà phát triển tuân theo các yêu cầu chính xác như đã viết.',
      'Đồng ý ngay lập tức xóa tính năng này mà không cần hỏi Chủ sở hữu sản phẩm.',
      'Yêu cầu nhà phát triển giải thích giới hạn kỹ thuật',
      'thảo luận các giải pháp thay thế mà vẫn đáp ứng được mục tiêu kinh doanh',
      'và cập nhật Câu chuyện của người dùng cho phù hợp.',
      'Nâng cao "thái độ không tốt" của nhà phát triển đối với Người quản lý dự án.'
    ],
    answer: '2',
    explanation: 'BA đóng vai trò là cầu nối giữa kinh doanh và công nghệ. Nếu tồn tại các hạn chế về mặt kỹ thuật, bạn nên cộng tác với nhà phát triển để tìm giải pháp thay thế đáp ứng nhu cầu kinh doanh cốt lõi, thay vì buộc phải triển khai không thể thực hiện được hoặc loại bỏ hoàn toàn tính năng này.',
  },
  'ba-rw-003': {
    question: 'Bạn nhận được yêu cầu từ bộ phận tiếp thị: "Hệ thống phải hoạt động rất nhanh." Làm thế nào để bạn xử lý yêu cầu mơ hồ này?',
    options: [
      'Viết "Hệ thống phải cực nhanh" trong tài liệu SRS.',
      'Đặt các câu hỏi làm rõ để xác định các số liệu có thể đo lường được (ví dụ:',
      'Thời gian tải trang phải dưới 2 giây trong 10',
      '000 người dùng đồng thời").',
      'Bỏ qua yêu cầu vì nó không thể đạt được.',
      'Chỉ định nhóm UI để làm cho thiết kế trông nhanh chóng.'
    ],
    answer: '1',
    explanation: 'Các yêu cầu phi chức năng phải cụ thể, có thể đo lường được và có thể kiểm tra được. "Nhanh như chớp" là chủ quan. Việc chuyển đổi nó thành các số liệu có thể đo lường được (thời gian tải, người dùng đồng thời) đảm bảo nhóm phát triển và nhóm QA biết chính xác những gì cần nhắm mục tiêu.',
  },
  'ba-rw-004': {
    question: 'Một bên liên quan quan trọng thường xuyên bỏ lỡ các buổi thu thập yêu cầu, dẫn đến thiếu thông tin. Bạn nên làm gì?',
    options: [
      'Tiến hành mà không cần sự góp ý của họ và thừa nhận những gì họ muốn.',
      'Khiếu nại với người quản lý của họ ngay lập tức.',
      'Liên hệ trực tiếp để hiểu những hạn chế về lịch trình của họ',
      'đưa ra các đánh giá không đồng bộ 1-1 (như nhận xét về tài liệu được chia sẻ)',
      'và nhấn mạnh những rủi ro khi thiếu thông tin đầu vào.',
      'Hủy bỏ dự án cho đến khi họ tham dự.'
    ],
    answer: '2',
    explanation: 'Sự tham gia của các bên liên quan là chìa khóa. Nếu các cuộc họp đồng bộ không thành công, hãy tìm những cách khác để thu thập ý kiến ​​đóng góp của họ một cách không đồng bộ và giúp họ nhận thức được những rủi ro (sự chậm trễ, tính năng không chính xác) khi không tham gia.',
  },
  'ba-rw-005': {
    question: 'Đúng hay sai: Nếu nhà phát triển phát hiện ra rằng một yêu cầu có sai sót về mặt logic trong quá trình mã hóa, BA sẽ âm thầm sửa tài liệu để khớp với mã mới của nhà phát triển.',
    answer: 'Sai',
    explanation: 'SAI. BA phải phân tích phát hiện của nhà phát triển, xác nhận với các bên liên quan trong kinh doanh rằng thay đổi được đề xuất phù hợp với các quy tắc kinh doanh, cập nhật chính thức yêu cầu và thông báo cho tất cả các nhóm cần thiết (như QA). Những thay đổi im lặng gây ra sai lệch.',
  },
  'ba-rw-006': {
    question: 'Hai trưởng bộ phận hoàn toàn không đồng ý về quy tắc kinh doanh cốt lõi cho quy trình làm việc mới. Bộ A muốn phê duyệt nghiêm ngặt, Bộ B muốn phê duyệt tự động. Là BA, bạn giải quyết vấn đề này như thế nào?',
    options: [
      'Ở bên cạnh trưởng bộ phận có chức danh cao hơn.',
      'Triển khai chuyển đổi để hệ thống có thể thực hiện cả hai',
      'mà không hỏi họ.',
      'Tổ chức hội thảo với cả hai người đứng đầu',
      'vạch ra tác động của cả hai phương pháp đối với mục tiêu kinh doanh tổng thể',
      'và tạo điều kiện cho sự thỏa hiệp hoặc leo thang tới nhà tài trợ dự án.',
      'Đợi đến khi họ ngừng đánh nhau mới tiếp tục làm việc.'
    ],
    answer: '2',
    explanation: 'BA phải hỗ trợ giải quyết xung đột bằng cách tập trung vào các tiêu chí khách quan (chi phí, rủi ro, mục tiêu kinh doanh, tuân thủ) thay vì sở thích cá nhân. Nếu không thể đạt được sự đồng thuận, vấn đề cần được chính thức chuyển đến nhà tài trợ dự án có thẩm quyền ra quyết định.',
  },
  'ba-rw-007': {
    question: 'Nhóm phát triển cung cấp một tính năng, nhưng trong quá trình demo, khách hàng nói: "Cái này khớp với tài liệu, nhưng đó không phải là thứ tôi thực sự cần." Điều gì đã xảy ra và làm thế nào để bạn ngăn chặn nó vào lần tiếp theo?',
    options: [
      'Khách hàng chỉ là khó khăn. Từ chối thay đổi nó.',
      'Bạn không thể xác nhận chính xác các yêu cầu. Lần sau',
      'sử dụng các nguyên mẫu/khung lưới và các vòng phản hồi thường xuyên thay vì chỉ dựa vào các văn bản đăng xuất nặng nề.',
      'Các nhà phát triển đã mã hóa nó kém. Hãy bắt họ viết lại nó.',
      'Nhóm QA không thể kiểm tra tính năng này.'
    ],
    answer: '1',
    explanation: 'Khách hàng thường đồng ý với các tài liệu văn bản mà không hình dung đầy đủ về sản phẩm cuối cùng. Sử dụng các công cụ hỗ trợ trực quan (wireframe, nguyên mẫu) và thực hiện các vòng lặp demo thường xuyên (phương pháp tiếp cận Agile) đảm bảo phát hiện sớm những điểm không khớp giữa “những gì được viết” và “những gì cần thiết”.',
  },
  'ba-rw-008': {
    question: 'Bạn được giao cho một dự án thay thế hệ thống cũ. Không có tài liệu nào hiện có và các nhà phát triển ban đầu đã rời đi. Làm thế nào để bạn thu thập các yêu cầu?',
    options: [
      'Từ chối bắt đầu cho đến khi khách hàng viết hướng dẫn.',
      'Chỉ cần sao chép chính xác màn hình giao diện người dùng vào một khung mới.',
      'Tiến hành các phiên theo dõi với người dùng cuối',
      'thực hiện kỹ thuật đảo ngược trên hành vi cơ sở dữ liệu/mã',
      'và ghi lại quy trình "Như hiện tại" trước khi thiết kế "Tương lai".',
      'Yêu cầu các nhà phát triển mới đoán logic chỉ dựa trên mã nguồn cũ.'
    ],
    answer: '2',
    explanation: 'Kỹ thuật đảo ngược kết hợp với việc quan sát người dùng cuối là cách tiếp cận tiêu chuẩn cho các hệ thống cũ không có giấy tờ. Người dùng biết quy trình công việc và việc điều tra lược đồ cơ sở dữ liệu hoặc dấu vết dữ liệu sẽ giúp khám phá logic kinh doanh ẩn.',
  },
  'ba-rw-009': {
    question: 'Bạn nhận thấy yêu cầu do nhóm tuân thủ đưa ra xung đột trực tiếp với yêu cầu từ nhóm bán hàng (ví dụ: Bộ phận bán hàng muốn thanh toán bằng 1 lần nhấp chuột, Bộ phận tuân thủ yêu cầu xác thực 2 yếu tố). Bạn làm nghề gì?',
    options: [
      'Thực hiện những gì Bán hàng mong muốn vì chúng mang lại doanh thu.',
      'Thực hiện những gì Tuân thủ mong muốn vì nó an toàn hơn.',
      'Ghi lại xung đột',
      'tạo ma trận truy xuất nguồn gốc',
      'và sắp xếp một cuộc họp giữa bộ phận Tuân thủ và Bán hàng để thương lượng một giải pháp tuân thủ nhưng thân thiện với người dùng.',
      'Yêu cầu các nhà phát triển tự mình tìm ra giải pháp trung gian.'
    ],
    answer: '2',
    explanation: 'Các yêu cầu xung đột từ các lĩnh vực khác nhau phải được ghi lại và đàm phán rõ ràng. BA tạo điều kiện cho sự thỏa hiệp (ví dụ: xác thực dựa trên rủi ro trong đó 2FA chỉ được yêu cầu đối với giỏ hàng có giá trị cao) đáp ứng cả hai bộ phận.',
  },
  'ba-rw-010': {
    question: 'Đúng hay sai: BA phải luôn đóng vai trò là người đại diện cho Chủ sở hữu sản phẩm (PO), viết câu chuyện, chấp nhận chúng và quản lý tồn đọng một cách độc lập nếu PO quá bận.',
    answer: 'Sai',
    explanation: 'SAI. Trong khi BA hỗ trợ PO thì PO cuối cùng lại sở hữu tầm nhìn và mức độ ưu tiên của sản phẩm. Nếu PO hoàn toàn không có, đây là một rủi ro hệ thống cần được tăng cường, vì BA nắm toàn quyền PO mà không có ủy quyền kinh doanh có thể dẫn đến việc phát triển sản phẩm sai hướng.',
  },
  'ba-rw-011': {
    question: 'Trong UAT, người dùng báo cáo 50 "lỗi". Sau khi điều tra, bạn nhận ra 40 trong số đó thực sự là những yêu cầu mới (cải tiến) được ngụy trang dưới dạng lỗi. Làm thế nào để bạn xử lý vấn đề này một cách ngoại giao?',
    options: [
      'Từ chối mạnh mẽ 40 mặt hàng và nói với họ rằng họ đã ký SRS',
      'nên bây giờ họ không thể phàn nàn được.',
      'Sửa tất cả 40 mục một cách lặng lẽ để khách hàng chấp nhận hệ thống đúng thời hạn.',
      'Phân loại danh sách thành "Lỗi" (sẽ được sửa ngay) và "Yêu cầu thay đổi" (CR). Giải thích phạm vi cơ sở bằng bằng chứng',
      'và ước tính CR cho Giai đoạn 2 hoặc chu kỳ thanh toán riêng.',
      'Tạm dừng toàn bộ dự án cho đến khi khách hàng thanh toán thêm 40 hạng mục.'
    ],
    answer: '2',
    explanation: 'Phân loại là điều cần thiết trong UAT. Sử dụng đường cơ sở đã được phê duyệt (BRD/SRS) để phân biệt giữa các khiếm khuyết (không đáp ứng các yêu cầu đã thống nhất) và các cải tiến. Việc quản lý họ với tư cách là CR sẽ duy trì tiến trình dự án trong khi vẫn bảo vệ phạm vi và nguồn lực của nhà cung cấp mà không gây ra sự đối đầu nghiêm ngặt.',
  },
  'ba-rw-012': {
    question: 'Tổ chức của bạn đang chuyển đổi từ Waterfall sang Agile. Các bên liên quan trong kinh doanh vẫn yêu cầu "trả trước đầy đủ tài liệu yêu cầu chi tiết" trước khi bật đèn xanh cho các nhà phát triển. Bạn hướng dẫn họ như thế nào?',
    options: [
      'Hãy nhượng bộ và viết một bản SRS dài 200 trang vì doanh nghiệp là ông chủ.',
      'Từ chối viết bất kỳ tài liệu nào và nói với họ "Chúng tôi là Agile',
      'chúng tôi không làm tài liệu".',
      'Giải thích khái niệm Agile về xây dựng tiến bộ. Đề xuất viết tầm nhìn cấp cao và tồn đọng trước',
      'và nêu chi tiết các yêu cầu (Câu chuyện của người dùng) chỉ 1-2 lần chạy nước rút trước khi phát triển.',
      'Đợi Huấn luyện viên Agile nói chuyện với họ.'
    ],
    answer: '2',
    explanation: 'Quá trình chuyển đổi linh hoạt đòi hỏi phải huấn luyện các bên liên quan. Các BA phải thu hẹp khoảng cách tư duy này bằng cách chứng minh giá trị thông qua quá trình xây dựng tiến bộ—cung cấp đủ chi tiết đúng lúc, từ đó giảm lãng phí trong khi vẫn đảm bảo đủ sự chắc chắn cho việc lập kế hoạch kinh doanh.',
  },
  'ba-rw-013': {
    question: 'Bạn phát hiện ra rằng việc triển khai hệ thống mới sẽ khiến 30% công việc nhập dữ liệu thủ công của nhân viên vận hành trở nên dư thừa. Các nhân viên đã trở nên phản kháng và từ chối chia sẻ chi tiết quy trình với bạn. Chiến lược của bạn là gì?',
    options: [
      'Báo cáo họ với bộ phận nhân sự vì sự không phối hợp.',
      'Thiết kế hệ thống mà không cần thông tin đầu vào của họ bằng cách sử dụng dự đoán tốt nhất của bạn.',
      'Tập trung cuộc trò chuyện vào cách hệ thống sẽ loại bỏ công việc tẻ nhạt và cho phép họ nâng cao kỹ năng vào vai trò phân tích. Thu hút họ với tư cách là "Nhà vô địch quy trình" để mang lại cho họ cảm giác sở hữu.',
      'Hãy hủy tính năng tự động hóa để không ai bị mất việc.'
    ],
    answer: '2',
    explanation: 'Quản lý thay đổi và vượt qua sự phản kháng là những kỹ năng BA cấp cao quan trọng. Giải quyết nỗi sợ hãi tiềm ẩn bằng cách điều chỉnh lại sự thay đổi (từ mất việc làm đến phát triển công việc) và trao quyền cho những người dùng phản kháng vì các chuyên gia về chủ đề này thường phá vỡ các rào cản giao tiếp.',
  },
  'ba-rw-014': {
    question: 'Khách hàng muốn xây dựng "AI học máy để dự đoán hành vi mua hàng của người dùng',
    answer: 'Xử lý yêu cầu AI không thực tế:\n\n1. Kiểm tra tính khả thi & thực tế:\n- Thừa nhận tầm nhìn của họ nhưng giải thích một cách lịch sự các điều kiện tiên quyết cho ML (sạch',
    explanation: 'BA cấp cao không chỉ thu thập các yêu cầu; họ đóng vai trò là nhà tư vấn kinh doanh. Khi khách hàng đề xuất các giải pháp nặng về từ thông dụng, không thực tế, BA phải truy ngược lại vấn đề kinh doanh thực tế và đề xuất một lộ trình lặp đi lặp lại, thực tế, tôn trọng các ràng buộc (ngân sách, mức độ trưởng thành của dữ liệu).',
  },
  'ba-rw-015': {
    question: 'Công ty của bạn đã giành được một hợp đồng lớn của chính phủ doanh nghiệp. Bạn được phân công lãnh đạo một nhóm gồm 5 BA Junior/Mid. Các yêu cầu rất phức tạp, được quản lý chặt chẽ và dòng thời gian rất linh hoạt. Phác thảo Chiến lược BA của bạn trong 30 ngày đầu tiên.',
    answer: 'Chiến lược BA trong 30 ngày đầu tiên:\n\n1. Giới thiệu & Tiêu chuẩn hóa nhóm (Ngày 1-5):\n- Xác định mẫu cho BRD',
    explanation: 'BA lãnh đạo phải thiết lập các quy trình, quản lý chất lượng và điều chỉnh các nỗ lực của nhóm hướng tới mục tiêu lớn. Trọng tâm chuyển từ "viết yêu cầu" sang "thiết kế khung kỹ thuật yêu cầu".',
  },
  'ba-si-001': {
    question: 'API (Giao diện lập trình ứng dụng) theo thuật ngữ đơn giản là gì?',
    options: [
      'Một loại cơ sở dữ liệu lưu trữ thông tin người dùng',
      'Một bộ quy tắc và giao thức cho phép các hệ thống phần mềm khác nhau giao tiếp và trao đổi dữ liệu với nhau',
      'Ngôn ngữ lập trình dùng để xây dựng trang web',
      'Một cáp vật lý kết nối hai máy chủ',
      ''
    ],
    answer: '1',
    explanation: 'API giống như người phục vụ trong nhà hàng: bạn (khách hàng) nói với người phục vụ (API) những gì bạn muốn, người phục vụ nhận đơn đặt hàng của bạn đến nhà bếp (máy chủ) và mang thức ăn trở lại (phản hồi). API xác định cách các hệ thống giao tiếp với nhau - dữ liệu nào sẽ gửi, ở định dạng nào và những gì mong đợi nhận lại. BA cần hiểu API để xác định các yêu cầu tích hợp.',
  },
  'ba-si-002': {
    question: 'REST có nghĩa là gì trong bối cảnh API web?',
    options: [
      'Công nghệ truyền phát sự kiện theo thời gian thực',
      'Chuyển giao trạng thái đại diện - một phong cách kiến ​​trúc để thiết kế các ứng dụng nối mạng bằng các phương thức HTTP tiêu chuẩn',
      'Thực thi từ xa và kiểm tra máy chủ',
      'Công nghệ phần mềm doanh nghiệp đáng tin cậy',
      ''
    ],
    answer: '1',
    explanation: 'REST là một kiểu kiến ​​trúc (không phải giao thức) sử dụng các phương thức HTTP: GET (đọc), POST (tạo), PUT/PATCH (cập nhật), DELETE (xóa). API REST trao đổi dữ liệu ở định dạng JSON hoặc XML. API RESTful không có trạng thái (mỗi yêu cầu chứa tất cả thông tin cần thiết). BA nên hiểu REST khi viết yêu cầu tích hợp và thông số kỹ thuật API.',
  },
  'ba-si-003': {
    question: 'Trong tích hợp hệ thống, “thời gian thực” luôn có nghĩa là dữ liệu được truyền ngay lập tức mà không có độ trễ.',
    answer: 'Sai',
    explanation: '"Thời gian thực" trong ngữ cảnh tích hợp thường có nghĩa là "gần thời gian thực" — dữ liệu được truyền trong vòng vài giây đến vài phút chứ không phải ngay lập tức theo nghĩa đen. Độ trễ bằng 0 thực sự là không thể thực hiện được. Các loại tích hợp theo thời gian: Thời gian thực/đồng bộ (cần phản hồi ngay lập tức), Gần thời gian thực (vài giây đến vài phút qua hàng đợi tin nhắn), Hàng loạt (chuyển số lượng lớn định kỳ - hàng ngày, hàng giờ). BA phải xác định các yêu cầu về độ trễ cụ thể chứ không chỉ nói "thời gian thực".',
  },
  'ba-si-004': {
    question: 'Sự khác biệt giữa tích hợp đồng bộ và không đồng bộ là gì?',
    options: [
      'Đồng bộ nhanh hơn; không đồng bộ chậm hơn',
      'Đồng bộ: hệ thống gọi đợi phản hồi trước khi tiếp tục (mẫu yêu cầu-phản hồi); Không đồng bộ: hệ thống gọi gửi tin nhắn và tiếp tục mà không cần chờ đợi - phản hồi sẽ đến sau thông qua gọi lại',
      'webhook',
      'hoặc hàng đợi tin nhắn',
      'Đồng bộ dành cho API; không đồng bộ dành cho cơ sở dữ liệu',
      'Không có sự khác biệt thực tế',
      ''
    ],
    answer: '1',
    explanation: 'Đồng bộ (ví dụ: lệnh gọi API REST): Hệ thống A gọi Hệ thống B và chờ phản hồi - đơn giản nhưng tạo ra sự kết nối chặt chẽ. Không đồng bộ (ví dụ: hàng đợi tin nhắn): Hệ thống A gửi tin nhắn đến hàng đợi (Kafka, RabbitMQ) và tiếp tục - Hệ thống B xử lý tin nhắn đó khi sẵn sàng. Async phù hợp hơn cho: các tác vụ chạy dài, xử lý khối lượng lớn và tách rời hệ thống. BA phải chỉ định mẫu nào phù hợp với từng kịch bản tích hợp.',
  },
  'ba-si-005': {
    question: 'BA nên bao gồm những gì trong đặc tả yêu cầu tích hợp?',
    options: [
      'Chỉ tên của hai hệ thống được tích hợp',
      'Hệ thống nguồn và đích',
      'trường dữ liệu và ánh xạ',
      'định dạng dữ liệu (JSON/XML)',
      'giao thức (REST/SOAP)',
      'tần số/kích hoạt',
      'xử lý lỗi',
      'thử lại logic',
      'bảo mật (xác thực/ủy quyền)',
      'và SLA (độ trễ',
      'sẵn có)',
      'Chỉ URL API và yêu cầu mẫu',
      'Danh sách tất cả các API có sẵn trên internet',
      ''
    ],
    answer: '1',
    explanation: 'Thông số tích hợp hoàn chỉnh bao gồm: (1) Các hệ thống liên quan và chỉ đạo (nguồn → đích), (2) Ánh xạ dữ liệu (từng trường: trường nguồn → trường đích, chuyển đổi), (3) Chi tiết kỹ thuật (giao thức, định dạng, phương thức xác thực), (4) Trình kích hoạt/tần suất (theo hướng sự kiện, được lên lịch, theo yêu cầu), (5) Xử lý lỗi (điều gì xảy ra khi lỗi), (6) Bảo mật (khóa API, OAuth, chứng chỉ), (7) SLA (thời gian phản hồi, tính khả dụng, thông lượng), (8) Kiểm tra cách tiếp cận.',
  },
  'ba-si-006': {
    question: 'Webhook là gì và nó khác với bỏ phiếu như thế nào?',
    options: [
      'Webhooks và bỏ phiếu là như nhau',
      'Webhook là một cơ chế đẩy trong đó máy chủ tự động gửi dữ liệu đến máy khách khi có sự kiện xảy ra; Bỏ phiếu là một cơ chế kéo trong đó máy khách liên tục yêu cầu máy chủ cập nhật theo các khoảng thời gian',
      'Webhooks dành cho thời gian thực; bỏ phiếu là để xử lý hàng loạt',
      'Webhooks yêu cầu thiết lập thủ công; bỏ phiếu là tự động',
      ''
    ],
    answer: '1',
    explanation: 'Webhook (đẩy): "Gọi cho tôi khi có chuyện gì xảy ra" — máy chủ thông báo cho khách hàng bằng cách gửi HTTP POST tới URL đã đăng ký khi xảy ra sự kiện (ví dụ: thanh toán đã hoàn tất). Bỏ phiếu (kéo): "Tôi sẽ kiểm tra 5 phút một lần" — máy khách liên tục truy vấn máy chủ. Webhooks hiệu quả hơn (không lãng phí yêu cầu) nhưng yêu cầu máy khách lưu trữ điểm cuối. Các BA nên đề xuất webhooks khi có sẵn để tích hợp theo sự kiện.',
  },
  'ba-si-007': {
    question: 'Thiết kế kiến ​​trúc tích hợp cho nền tảng thương mại điện tử cần tích hợp với: Cổng thanh toán, Nhà cung cấp vận chuyển, Hệ thống kho hàng và Dịch vụ email. Chỉ định mẫu tích hợp, luồng dữ liệu và xử lý lỗi cho từng mẫu.',
    answer: 'Kiến trúc tích hợp:\n\n1. Cổng thanh toán (Stripe/PayPal):\n- Mẫu: API REST đồng bộ (luồng thanh toán yêu cầu phản hồi ngay lập tức)\n- Luồng: Thương mại điện tử → API thanh toán (POST /các khoản phí) → phản hồi (thành công/thất bại)\n- Xử lý lỗi: thử lại với thời gian chờ theo cấp số nhân (tối đa 3 lần thử)',
    explanation: 'Sự tích hợp khác nhau đòi hỏi các mẫu khác nhau dựa trên đặc điểm của chúng. Thanh toán cần đồng bộ (người dùng đang chờ), hàng tồn kho cần sự nhất quán cuối cùng (đánh đổi tốc độ và độ chính xác), email có thể gửi và quên (không bao giờ chặn luồng đơn hàng). Mẫu cầu dao ngăn chặn việc tích hợp thất bại làm toàn bộ hệ thống bị hỏng. BA phải chỉ định các mẫu và chiến lược xử lý lỗi này - không chỉ "hai hệ thống này nói chuyện với nhau".',
  },
  'ba-si-008': {
    question: 'Khi hai hệ thống có các mô hình dữ liệu khác nhau (ví dụ: Hệ thống A sử dụng "customer_name" làm một trường duy nhất, Hệ thống B sử dụng riêng "first_name" và "last_name"), thách thức tích hợp này được gọi là gì?',
    options: [
      'Mã hóa dữ liệu không khớp',
      'Trở kháng mô hình dữ liệu không khớp - được giải quyết thông qua các quy tắc chuyển đổi và ánh xạ dữ liệu được xác định trong các yêu cầu tích hợp',
      'Vấn đề về độ trễ mạng',
      'Xung đột phiên bản API',
      ''
    ],
    answer: '1',
    explanation: 'Trở kháng mô hình dữ liệu không khớp là một trong những thách thức tích hợp phổ biến nhất. BA phải xác định ánh xạ dữ liệu chi tiết: target_first_name = SPLIT(source_customer_name, " ")[0], target_last_name = SPLIT(source_customer_name, " ")[1:]. Các thông tin không khớp khác: các định dạng ngày khác nhau (US so với ISO), các đơn vị khác nhau (dặm so với km), hệ thống mã hóa khác nhau (mã quốc gia: US so với USA so với 840) và các loại dữ liệu khác nhau (chuỗi so với ID số nguyên).',
  },
  'ba-si-009': {
    question: 'Một doanh nghiệp lớn có hơn 15 hệ thống tích hợp điểm-điểm tạo ra một "kiến trúc spaghetti". Với tư cách là Trưởng nhóm BA, hãy đề xuất một chiến lược tích hợp để đơn giản hóa việc này và cách di chuyển từ trạng thái hiện tại.',
    answer: 'Chiến lược hiện đại hóa hội nhập:\n\n1. Đánh giá trạng thái hiện tại:\n- Lập bản đồ tất cả các tích hợp hiện có (nguồn',
    explanation: 'Tích hợp Spaghetti (điểm-điểm) có quy mô kém: 15 hệ thống = tối đa 210 kết nối. Mỗi hệ thống mới bổ sung thêm 15 kết nối mới. Kiến trúc hub-and-nan hoa giảm thiểu con số này xuống còn 15 kết nối (mỗi hệ thống có một kết nối tới hub). Mô hình Strangler Fig di chuyển tăng dần - không có "vụ nổ lớn" rủi ro - chạy song song giữa cũ và mới cho đến khi sự tin cậy được thiết lập.',
  },
  'ba-si-010': {
    question: 'Khi xác định các yêu cầu đối với việc tích hợp API của bên thứ ba, BA trưởng nhóm phải đảm bảo xem xét những vấn đề pháp lý/hợp đồng nào?',
    options: [
      'Chỉ cần xem xét tài liệu API',
      'Điều khoản dịch vụ của API',
      'Đảm bảo SLA (thời gian hoạt động',
      'độ trễ)',
      'quyền sở hữu dữ liệu',
      'thỏa thuận xử lý dữ liệu (DPA cho GDPR)',
      'giới hạn tỷ lệ',
      'mô hình định giá',
      'chính sách khấu hao',
      'và rủi ro khóa nhà cung cấp đều phải được đánh giá và ghi lại trong các yêu cầu tích hợp',
      'Chỉ kiểm tra xem API có hỗ trợ định dạng JSON không',
      'Chỉ cần xác minh khóa API hoạt động',
      ''
    ],
    answer: '1',
    explanation: 'API của bên thứ ba tạo ra sự phụ thuộc kinh doanh. BA khách hàng tiềm năng phải đánh giá: (1) SLA - nhà cung cấp đảm bảo thời gian hoạt động và thời gian phản hồi như thế nào? (2) Quyền sở hữu dữ liệu - ai sở hữu dữ liệu được xử lý thông qua API? (3) DPA/tuân thủ — nhà cung cấp có tuân thủ GDPR/PDPA đối với dữ liệu cá nhân không? (4) Giới hạn tỷ lệ - chúng ta có thể mở rộng quy mô sử dụng mà không cần đạt đến giới hạn không? (5) Định giá - định giá cho mỗi cuộc gọi có thể gây bất ngờ trên quy mô lớn, (6) Khấu hao - điều gì xảy ra khi nhà cung cấp không dùng phiên bản API nữa? (7) Khóa chặt - việc chuyển đổi nhà cung cấp khó đến mức nào? Những yếu tố này phải được ghi lại trong các yêu cầu.',
  },
  'ba-sm-001': {
    question: '"Các bên liên quan" trong bối cảnh của một dự án là gì?',
    options: [
      'Chỉ có nhà tài trợ dự án tài trợ cho dự án',
      'Bất kỳ cá nhân nào',
      'nhóm',
      'hoặc tổ chức có thể ảnh hưởng',
      'bị ảnh hưởng bởi',
      'hoặc nhận thấy mình bị ảnh hưởng bởi dự án',
      'Chỉ người dùng cuối của hệ thống',
      'Chỉ có thành viên nhóm phát triển',
      ''
    ],
    answer: '1',
    explanation: 'Các bên liên quan bao gồm bất kỳ ai quan tâm hoặc có tác động từ dự án: nhà tài trợ, người dùng cuối, nhà phát triển, cơ quan quản lý, khách hàng, ban quản lý, nhóm hỗ trợ, thậm chí cả đối thủ cạnh tranh. Việc xác định sớm TẤT CẢ các bên liên quan sẽ ngăn ngừa những bất ngờ sau này. Việc thiếu một bên liên quan chính có thể dẫn đến những thay đổi yêu cầu muộn hoặc sự phản đối của dự án.',
  },
  'ba-sm-002': {
    question: 'Lưới Quyền lực/Lợi ích được sử dụng để quản lý các bên liên quan là gì?',
    options: [
      'Phân công nhiệm vụ cho các thành viên trong nhóm dựa trên kỹ năng của họ',
      'Phân loại các bên liên quan theo cấp độ quyền hạn (quyền lực) và mức độ quan tâm (lợi ích) để xác định chiến lược gắn kết cho từng nhóm',
      'Tính toán ngân sách dự án dựa trên ý kiến ​​đóng góp của các bên liên quan',
      'Xếp hạng các bên liên quan theo mức lương của họ',
      ''
    ],
    answer: '1',
    explanation: 'Lưới Quyền lực/Lợi ích tạo ra 4 góc phần tư: Quyền lực cao + Lãi suất cao → Quản lý chặt chẽ (những người đóng vai trò chủ chốt), Quyền lực cao + Lãi suất thấp → Luôn hài lòng, Quyền lực thấp + Lãi suất cao → Luôn cập nhật thông tin, Quyền lực thấp + Lãi suất thấp → Giám sát. Điều này giúp BA phân bổ nỗ lực giao tiếp một cách hiệu quả - không phải tất cả các bên liên quan đều cần mức độ tham gia như nhau.',
  },
  'ba-sm-003': {
    question: 'Ma trận RACI cho thấy ai là người chịu trách nhiệm, chịu trách nhiệm, được tư vấn và được thông báo cho từng nhiệm vụ hoặc quyết định trong dự án.',
    answer: 'Đúng',
    explanation: 'RACI xác định các vai trò cho mỗi nhiệm vụ: Chịu trách nhiệm (thực hiện công việc), Chịu trách nhiệm (cuối cùng có thể trả lời - chỉ MỘT cho mỗi nhiệm vụ), Được tư vấn (cung cấp đầu vào - giao tiếp hai chiều), Được thông báo (được lưu giữ trong vòng lặp - giao tiếp một chiều). Ma trận RACI ngăn ngừa sự nhầm lẫn về việc ai làm gì và đảm bảo mọi nhiệm vụ đều có quyền sở hữu rõ ràng.',
  },
  'ba-sm-004': {
    question: 'Một bên liên quan chính (Phó chủ tịch bán hàng) phản đối hệ thống mới vì nó làm thay đổi quy trình làm việc của nhóm họ. Cách tiếp cận TỐT NHẤT là gì?',
    options: [
      'Bỏ qua sự phản đối của họ - dự án có sự tài trợ điều hành',
      'Báo cáo ngay cho nhà tài trợ dự án để bác bỏ VP',
      'Đồng cảm với những lo lắng của họ',
      'hiểu sự phản đối cụ thể của họ',
      'cho họ tham gia vào quá trình thiết kế',
      'và chứng minh hệ thống mới mang lại lợi ích như thế nào cho nhóm của họ',
      'Loại bỏ các tính năng ảnh hưởng đến đội ngũ Bán hàng',
      ''
    ],
    answer: '2',
    explanation: 'Sự phản kháng thường xuất phát từ nỗi sợ thay đổi, mất kiểm soát hoặc thiếu hiểu biết. BA nên: (1) lắng nghe và xác thực các mối quan ngại, (2) hiểu nguyên nhân cốt lõi (điều gì khiến họ lo lắng cụ thể?), (3) lôi kéo các bên liên quan vào thiết kế để họ có quyền sở hữu, (4) thể hiện những lợi ích cụ thể cho nhóm CỦA HỌ (không chỉ tổ chức), (5) cung cấp hỗ trợ đào tạo. Bỏ qua hoặc áp đảo sẽ tạo ra một kẻ thù mạnh mẽ.',
  },
  'ba-sm-005': {
    question: 'Kế hoạch truyền thông các bên liên quan là gì và nó nên bao gồm những gì?',
    options: [
      'Danh sách tất cả địa chỉ email của các bên liên quan',
      'Một kế hoạch xác định thông tin NHỮNG GÌ mỗi nhóm bên liên quan cần',
      'CÁCH (kênh)',
      'THƯỜNG XUYÊN (tần suất)',
      'và WHO cung cấp nó',
      'Lịch trình dự án được chia sẻ với tất cả các bên liên quan',
      'Biên bản ghi lại tất cả các cuộc họp được tổ chức với các bên liên quan',
      ''
    ],
    answer: '1',
    explanation: 'Kế hoạch truyền thông ánh xạ từng nhóm bên liên quan tới: Thông tin cần thiết (cập nhật trạng thái, quyết định, rủi ro), Kênh (email, cuộc họp, bảng thông tin, báo cáo), Tần suất (dự kiến ​​hàng ngày, báo cáo hàng tuần, chỉ đạo hàng tháng), Chủ sở hữu (người gửi nó) và Định dạng (slide deck, một trang, bảng thông tin). Điều này đảm bảo đúng người nhận được thông tin phù hợp vào đúng thời điểm — ngăn ngừa tình trạng quá tải thông tin và thiếu hụt thông tin.',
  },
  'ba-sm-006': {
    question: 'Hai bên liên quan có những yêu cầu trái ngược nhau: CFO muốn giảm thiểu chi phí trong khi CTO muốn sử dụng công nghệ tiên tiến (đắt tiền). BA nên xử lý việc này như thế nào?',
    options: [
      'Sát cánh cùng CFO vì ngân sách luôn là ưu tiên hàng đầu',
      'Sát cánh cùng CTO vì công nghệ tốt hơn đồng nghĩa với kết quả tốt hơn',
      'Tạo điều kiện cho cuộc thảo luận giữa các bên liên quan',
      'giúp họ hiểu những hạn chế của nhau',
      'khám phá các lựa chọn thay thế cân bằng giữa mục tiêu chi phí và công nghệ',
      'và nếu cần',
      'báo cáo lên nhà tài trợ dự án để có quyết định ưu tiên',
      'Ghi lại cả hai yêu cầu một cách riêng biệt và để các nhà phát triển quyết định',
      ''
    ],
    answer: '2',
    explanation: 'Các yêu cầu xung đột là phổ biến khi các bên liên quan có những ưu tiên khác nhau. BA đóng vai trò là người hỗ trợ trung lập: (1) đảm bảo mỗi bên hiểu quan điểm của bên kia, (2) khám phá các lựa chọn thay thế sáng tạo (ví dụ: áp dụng công nghệ theo từng giai đoạn, các lựa chọn thay thế nguồn mở), (3) sử dụng các tiêu chí khách quan (phân tích ROI, đánh giá rủi ro) để đánh giá các lựa chọn, (4) nếu không thể đạt được sự đồng thuận, hãy báo cáo với cơ quan quản trị hoặc nhà tài trợ để đưa ra quyết định ưu tiên.',
  },
  'ba-sm-007': {
    question: 'Thiết kế chiến lược gắn kết các bên liên quan để triển khai ERP trên toàn công ty, ảnh hưởng đến hơn 500 nhân viên ở 6 phòng ban. Bao gồm nhận dạng, phân tích, phương pháp tiếp cận tương tác và cách xử lý sự phản kháng.',
    answer: 'Chiến lược gắn kết các bên liên quan:\n\n1. Nhận dạng:\n- Hội thảo lập bản đồ các bên liên quan với các nhà tài trợ dự án\n- Thể loại: Nhà tài trợ điều hành',
    explanation: 'Việc triển khai ERP quy mô lớn thất bại chủ yếu do vấn đề con người chứ không phải công nghệ. Chiến lược tham gia có cấu trúc đảm bảo mọi nhóm bên liên quan đều được xác định, thái độ của họ được đánh giá và các phương pháp tham gia phù hợp được áp dụng. Mạng lưới những nhà tiên phong thay đổi tạo ra sự hỗ trợ ở cấp cơ sở, trong khi sự chỉ đạo điều hành mang lại sự liên kết từ trên xuống. Theo dõi tâm lý hàng tháng cho phép phát hiện sớm mức kháng cự.',
  },
  'ba-sm-008': {
    question: '"Sự nổi bật của các bên liên quan" (mô hình Mitchell, Agle & Wood) là gì và nó cải thiện như thế nào trên Lưới Quyền lực/Sở thích đơn giản?',
    options: [
      'Đây là phiên bản đơn giản hơn của Lưới Quyền lực/Sở thích',
      'Nó phân loại các bên liên quan theo ba thuộc tính - Quyền lực',
      'tính hợp pháp',
      'và Khẩn cấp - tạo ra 7 loại bên liên quan cung cấp phân tích nhiều sắc thái hơn 4 góc phần tư',
      'Nó đo lường tần suất các bên liên quan tham dự các cuộc họp',
      'Nó xếp hạng các bên liên quan theo thâm niên tổ chức của họ',
      ''
    ],
    answer: '1',
    explanation: 'Mô hình nổi bật sử dụng 3 khía cạnh: Quyền lực (khả năng gây ảnh hưởng), Tính hợp pháp (sự tham gia phù hợp của họ), Tính khẩn cấp (sự nhạy cảm về thời gian trong các tuyên bố của họ). Sự kết hợp tạo ra 7 loại: ví dụ: "Dứt khoát" (cả 3), "Thống trị" (quyền lực + chính đáng), "Nguy hiểm" (quyền lực + cấp bách, không chính đáng). Điều này giúp xác định các bên liên quan có thể bị các mô hình đơn giản hơn bỏ qua - ví dụ: các cơ quan quản lý có thể có tính hợp pháp và tính cấp bách cao nhưng quyền lực hàng ngày lại thấp.',
  },
  'ba-sm-009': {
    question: 'Với tư cách là BA trưởng cho một dự án đa quốc gia với các bên liên quan ở 3 múi giờ (Mỹ, Châu Âu, Việt Nam), hãy thiết kế phương pháp quản lý các bên liên quan để giải quyết những khác biệt về văn hóa, thách thức giao tiếp và ra quyết định giữa các nhóm phân tán.',
    answer: 'Quản lý các bên liên quan phân tán:\n\n1. Nhận thức về văn hóa:\n- Mỹ: giao tiếp trực tiếp',
    explanation: 'Các dự án đa quốc gia thất bại khi sự khác biệt về văn hóa bị bỏ qua. Giao tiếp trực tiếp có hiệu quả ở Mỹ nhưng có thể mang lại cảm giác hung hăng ở Việt Nam. Các phương pháp tiếp cận dựa trên sự đồng thuận có hiệu quả ở châu Âu nhưng lại gây cảm giác chậm chạp đối với các bên liên quan ở Hoa Kỳ. BA lãnh đạo phải điều chỉnh phong cách của họ theo từng nền văn hóa, tạo cơ sở hạ tầng cho sự cộng tác không đồng bộ và xây dựng các mối quan hệ vượt qua các múi giờ. "Quy tắc quyết định 48 giờ" ngăn chặn sự khác biệt về múi giờ khỏi các quyết định bị đình trệ.',
  },
  'ba-sm-010': {
    question: 'Một CEO mới gia nhập tổ chức khi đang trong giai đoạn dự án và đặt câu hỏi về toàn bộ hướng đi của dự án. Với tư cách là Lead BA, ưu tiên ĐẦU TIÊN của bạn là gì?',
    options: [
      'Tiếp tục với kế hoạch hiện tại - dự án đã được phê duyệt',
      'Dừng ngay mọi công việc cho đến khi CEO đưa ra hướng đi mới',
      'Yêu cầu một cuộc họp liên kết chiến lược với CEO để hiểu tầm nhìn của họ',
      'trình bày trường hợp kinh doanh của dự án và tiến độ hiện tại',
      'và đánh giá xem dự án có còn phù hợp với định hướng chiến lược mới hay không',
      'Từ bỏ dự án vì phạm vi sẽ thay đổi',
      ''
    ],
    answer: '2',
    explanation: 'Thay đổi CEO là một sự kiện quan trọng của các bên liên quan. Đề án kinh doanh của dự án có thể phù hợp hoặc không phù hợp với tầm nhìn của CEO mới. BA trưởng nhóm nên chủ động: (1) yêu cầu một cuộc họp (không chờ được triệu tập), (2) chuẩn bị một bản tóm tắt đề án kinh doanh ngắn gọn thể hiện giá trị đã phân phối và lên kế hoạch, (3) lắng nghe các ưu tiên của CEO mới, (4) đánh giá sự liên kết và những thiếu sót, (5) đề xuất điều chỉnh nếu cần. Điều này thể hiện giá trị BA và giúp dự án không bị hủy bỏ hoặc bị loại bỏ nếu không có phân tích thích hợp.',
  },
  'ba-sm-011': {
    question: 'Nếu bạn có một bên liên quan có "Quyền lực cao" nhưng "Sự quan tâm thấp", chiến lược tham gia được đề xuất là gì?',
    options: ['Quản lý chặt chẽ', 'Giữ cho thỏa mãn', 'Giám sát (nỗ lực tối thiểu)', 'Giữ cho có thông tin'],
    explanation: 'Các bên liên quan có quyền lực cao nhưng ít quan tâm là những người có ảnh hưởng nhưng không đầu tư cá nhân. Bạn phải giữ họ hài lòng (ví dụ: đảm bảo họ nhận được các báo cáo cần thiết) để họ không ngăn cản dự án.',
  },
  'ba-sm-012': {
    question: 'Trong một cuộc phỏng vấn khơi gợi, một bên liên quan trở nên thất vọng thấy rõ và ngừng tham gia. BA nên làm gì?',
    options: ['Tiếp tục các câu hỏi để tiết kiệm thời gian', 'Dừng cuộc phỏng vấn, thừa nhận sự thất vọng, lắng nghe mối quan tâm của họ và lên lịch lại nếu cần', 'Nói với họ rằng sự thiếu tham gia của họ sẽ được báo cáo cho sếp', 'Yêu cầu người bên cạnh trả lời thay'],
    explanation: 'Quản lý mối quan hệ là chìa khóa. Thất vọng thường có nghĩa là một nỗi đau hoặc nỗi sợ tiềm ẩn. Giải quyết cảm xúc xây dựng niềm tin và dẫn đến các yêu cầu tốt hơn về lâu dài.',
  },
  'ba-sm-013': {
    question: 'Đối tượng nào sau đây có khả năng nhất là một "Stakeholder bên ngoài"?',
    options: ['Quản lý dự án', 'Người phát triển phần mềm', 'Cơ quan quản lý chính phủ', 'CEO công ty'],
    explanation: 'Stakeholder bên ngoài nằm ngoài tổ chức thực hiện (ví dụ: cơ quan quản lý, nhà cung cấp, khách hàng, công chúng). Stakeholder nội bộ nằm bên trong (nhóm dự án, quản lý).',
  },
  'ba-sm-014': {
    question: 'Làm thế nào BA xác định được "Stakeholder bóng tối"?',
    options: ['Nhìn vào sơ đồ tổ chức', 'Xác định những người không chính thức tham gia dự án nhưng có ảnh hưởng gián tiếp hoặc bị tác động bởi các hiệu ứng hạ nguồn', 'Tìm kiếm những người làm ca đêm', 'Hỏi PM danh sách các tên bí mật'],
    explanation: 'Stakeholder bóng tối (hoặc stakeholder tiềm ẩn) có thể làm chệch hướng dự án muộn nếu bị phớt lờ. Tìm họ đòi hỏi sự kết nối sâu sắc và đặt câu hỏi "Ai khác sẽ sử dụng dữ liệu này?" hoặc "Ai khác đang nhận báo cáo này?".',
  },
  'ba-sm-015': {
    question: 'Thiết kế quy trình "Onboarding Stakeholder" cho một lãnh đạo chủ chốt mới tham gia một dự án đã hoàn thành 70%.',
    answer: 'Quy trình:\n1. Tóm tắt điều hành: Cung cấp bảng điều khiển 1 trang về mục tiêu, trạng thái và rủi ro.\n2. Gặp gỡ ban đầu: Buổi họp 30 phút để hiểu KPI và kỳ vọng cụ thể của họ.\n3. Demo: Cho họ xem bản prototype trực tiếp của những gì đã xây dựng.\n4. Minh bạch: Chia sẻ nhật ký quyết định để họ hiểu tại sao các lựa chọn trước đó được đưa ra.\n5. Lộ trình tương lai: Nhấn mạnh 30% còn lại và cách họ có thể ảnh hưởng đến nó.',
    explanation: 'Đưa một lãnh đạo mới bắt nhịp nhanh chóng giúp ngăn họ "mở lại" các quyết định đã chốt, điều này có thể gây ra khối lượng công việc làm lại đáng kể.',
  },
  'ba-sm-016': {
    question: 'Quản lý các bên liên quan chỉ diễn ra trong thời gian bắt đầu dự án.',
    answer: 'Sai',
    explanation: 'Quản lý các bên liên quan là một quá trình liên tục trong toàn bộ vòng đời dự án khi các bên liên quan mới đến, những người khác rời đi hoặc lợi ích của họ thay đổi.',
  },
  'ba-sm-017': {
    question: 'Một bên liên quan yêu cầu được "cc vào mọi email của nhà phát triển". BA nên xử lý việc này thế nào?',
    options: ['Đồng ý ngay lập tức để họ hài lòng', 'Giải thích rằng điều này dẫn đến quá tải thông tin và đề xuất bản tóm tắt "Developer Digest" hàng tuần hoặc một bảng dashboard trạng thái chung', 'Phớt lờ yêu cầu', 'Bắt đầu chuyển tiếp mọi email không qua lọc'],
    explanation: 'BA phải quản lý kỳ vọng và các kênh truyền thông. Quá tải thông tin nhiễu cũng tệ như thiếu hụt thông tin sự thật.',
  },
  'ba-sm-018': {
    question: 'Là Lead BA, bạn nhận thấy "Văn hóa Silo" nơi các phòng ban khác nhau từ chối chia sẻ thông tin. Bạn sử dụng chiến lược nào?',
    options: ['Buộc họ nói chuyện trong các cuộc họp bắt buộc', 'Tạo các workshop chức năng chéo và các mục tiêu "Value Stream" chung để liên kết lợi ích của họ', 'Viết yêu cầu cho từng silo riêng biệt', 'Báo cáo mọi người cho CEO'],
    explanation: 'Các Silo bị phá vỡ bằng cách liên kết mọi người xung quanh giá trị người dùng cuối thay vì nhiệm vụ cụ thể của bộ phận họ.',
  },
  'ba-sm-019': {
    question: '"Bản đồ Chính trị" (Political Mapping) trong phân tích stakeholder là gì?',
    options: ['Xem ai đã bầu cho chính trị gia nào', 'Phân tích các mối quan hệ chính thức và không chính thức, các liên minh và xung đột giữa các bên liên quan để hiểu cách các quyết định được đưa ra thực sự', 'Bản đồ quốc gia', 'Danh sách các văn phòng'],
    explanation: 'Hiểu được "chính trị công sở" cho phép BA điều hướng các cuộc thảo luận nhạy cảm và tìm thấy "người có ảnh hưởng" phù hợp để hỗ trợ một yêu cầu.',
  },
  'ba-sm-020': {
    question: 'Thiết kế một "Vòng lặp Phản hồi Stakeholder" hoạt động trong giai đoạn UAT (Kiểm thử chấp nhận người dùng).',
    answer: 'Thiết kế:\n1. Họp Triage: Sync hàng ngày 15 phút để phân loại phản hồi là Lỗi (Bug) hay Yêu cầu thay đổi (CR).\n2. Minh bạch: Cho phép các bên liên quan xem công cụ theo dõi lỗi.\n3. Khảo sát mức độ hài lòng: Khảo sát giữa UAT để nắm bắt sự thất vọng sớm.\n4. Buổi chốt (Closure): Buổi cuối cùng để xác nhận mọi phản hồi "Must Have" đã được giải quyết.',
    explanation: 'UAT là giai đoạn có rủi ro cao cho sự hài lòng của bên liên quan. Một vòng lặp chủ động ngăn chặn các "từ chối bất ngờ" vào cuối dự án.',
  },
  'ba-sql-001': {
    question: 'SQL có nghĩa là gì?',
    options: [
      'Logic truy vấn hệ thống',
      'Ngôn ngữ truy vấn có cấu trúc',
      'Ngôn ngữ câu hỏi chuẩn',
      'Danh sách truy vấn tuần tự',
      ''
    ],
    answer: '1',
    explanation: 'SQL (Ngôn ngữ truy vấn có cấu trúc) là ngôn ngữ tiêu chuẩn để quản lý và truy vấn cơ sở dữ liệu quan hệ. Nó được sử dụng để truy xuất dữ liệu (CHỌN), thao tác dữ liệu (CHÈN, CẬP NHẬT, XÓA) và định nghĩa dữ liệu (CREATE, ALTER, DROP). BA sử dụng SQL để phân tích dữ liệu, xác thực các yêu cầu và tạo báo cáo.',
  },
  'ba-sql-002': {
    question: 'Mệnh đề SQL nào được sử dụng để lọc các hàng được truy vấn trả về?',
    options: [
      'ĐẶT HÀNG BỞI',
      'NHÓM THEO',
      'Ở ĐÂU',
      'CÓ',
      ''
    ],
    answer: '2',
    explanation: 'WHERE lọc các hàng trước khi nhóm. Ví dụ: CHỌN * TỪ đơn hàng WHERE trạng thái = \'shipped\'. ORDER BY sắp xếp kết quả. GROUP BY nhóm các hàng để tổng hợp. HAVING lọc các nhóm sau GROUP BY. Thứ tự thực hiện là: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.',
  },
  'ba-sql-003': {
    question: 'Viết câu truy vấn SQL để tìm tất cả các khách hàng trong bảng “customer” ở “TPHCM” và đã hoạt động từ năm 2025.',
    answer: 'CHỌN *\nTỪ khách hàng\nWHERE city = \'Thành phố Hồ Chí Minh\'\n AND active_since >= \'2025-01-01\';',
    explanation: 'Truy vấn này sử dụng WHERE với AND để kết hợp hai điều kiện lọc. Việc so sánh ngày sử dụng >= để bao gồm tất cả các ngày từ ngày 1 tháng 1 năm 2025 trở đi. BA thường viết các truy vấn như vậy để xác thực các giả định dữ liệu, tạo phân khúc người dùng hoặc tạo báo cáo cho các bên liên quan.',
  },
  'ba-sql-004': {
    question: 'Sự khác biệt giữa INNER THAM GIA và TRÁI THAM GIA là gì?',
    options: [
      'Không có sự khác biệt - chúng trả về cùng một kết quả',
      'INNER THAM GIA chỉ trả về các hàng có kết quả khớp trong CẢ HAI bảng; LEFT THAM GIA trả về TẤT CẢ các hàng từ bảng bên trái và các hàng khớp từ bên phải (NULL khi không khớp)',
      'INNER THAM GIA nhanh hơn; LEFT THAM GIA chính xác hơn',
      'INNER THAM GIA hoạt động trên 2 bảng; LEFT THAM GIA hoạt động trên hơn 3 bảng',
      ''
    ],
    answer: '1',
    explanation: 'INNER THAM GIA: chỉ các hàng có điều kiện nối khớp trong cả hai bảng (giao lộ). THAM GIA TRÁI: tất cả các hàng từ bảng bên trái + các hàng khớp từ bảng bên phải; các giá trị bên phải chưa được so sánh là NULL. Ví dụ: LEFT JOIN hiển thị tất cả khách hàng ngay cả khi họ không có đơn hàng nào (cột đơn hàng = NULL), trong khi INNER JOIN sẽ loại trừ họ.',
  },
  'ba-sql-005': {
    question: 'Viết truy vấn SQL để tìm 5 sản phẩm hàng đầu theo tổng doanh thu (số lượng × giá) từ bảng "order_items", được nhóm theo tên sản phẩm.',
    answer: 'CHỌN tên_sản phẩm',
    explanation: 'Truy vấn này thể hiện: (1) hàm tổng hợp SUM() với biểu thức được tính toán, (2) GROUP BY để tổng hợp cho mỗi sản phẩm, (3) ĐẶT HÀNG THEO DESC cho mức cao nhất đầu tiên, (4) GIỚI HẠN 5 cho top 5. BA sử dụng loại truy vấn này để phân tích hiệu suất sản phẩm, báo cáo doanh thu và xác định các sản phẩm bán chạy nhất.',
  },
  'ba-sql-006': {
    question: 'Một BA cần phân tích xu hướng bán hàng hàng tháng. Những hàm SQL nào sẽ hữu ích NHẤT?',
    options: [
      'CHÈN và CẬP NHẬT',
      'Hàm NGÀY (TRÍCH XUẤT',
      'DATE_TRUNC) kết hợp với hàm GROUP BY và hàm tổng hợp (SUM',
      'ĐẾM',
      'AVG)',
      'TẠO BẢNG và THẢ BẢNG',
      'CẤP VÀ THU HỒI',
      ''
    ],
    answer: '1',
    explanation: "Phân tích xu hướng yêu cầu trích xuất các thành phần thời gian (tháng, năm) và tổng hợp số liệu theo từng thời kỳ. Ví dụ: CHỌN DATE_TRUNC('tháng', order_date), SUM(amount) FROM orders GROUP BY DATE_TRUNC('tháng', order_date).",
  },
  'ba-sql-007': {
    question: 'Viết truy vấn SQL để tìm những khách hàng thực hiện giao dịch mua hàng đầu tiên vào năm 2025 VÀ đã thực hiện ít nhất 3 đơn hàng kể từ đó. Sử dụng bảng "đơn hàng" (customer_id, order_date, Total_amount).',
    answer: 'CHỌN khách hàng_id',
    explanation: 'Truy vấn này sử dụng HAVING (không phải WHERE) vì chúng tôi lọc kết quả tổng hợp: MIN(order_date) cho ngày mua hàng đầu tiên và COUNT(*) cho số lượng đơn hàng. WHERE lọc các hàng trước khi nhóm; HAVING lọc các nhóm sau khi tổng hợp. Kiểu phân tích đoàn hệ này giúp BA xác định các phân khúc khách hàng mới có giá trị cho các chương trình tiếp thị hoặc chương trình khách hàng thân thiết được nhắm mục tiêu.',
  },
  'ba-sql-008': {
    question: 'Khi BA phát hiện ra rằng cùng một dữ liệu khách hàng tồn tại ở 3 hệ thống khác nhau với các giá trị xung đột nhau (địa chỉ, số điện thoại khác nhau), vấn đề về chất lượng dữ liệu là gì?',
    options: [
      'Vấn đề về tính đầy đủ của dữ liệu',
      'Vấn đề về tính nhất quán của dữ liệu - cùng một thực thể có các cách trình bày xung đột giữa các hệ thống',
      'cho thấy sự cần thiết của chiến lược quản lý dữ liệu tổng thể (MDM)',
      'Vấn đề về tính kịp thời của dữ liệu',
      'Vấn đề về tính hợp lệ của dữ liệu',
      ''
    ],
    answer: '1',
    explanation: 'Tính nhất quán của dữ liệu có nghĩa là cùng một thực thể dữ liệu có cùng giá trị trên tất cả các hệ thống. Sự không nhất quán thường xuất phát từ: không có nguồn thông tin chính xác duy nhất, nhập dữ liệu thủ công trong nhiều hệ thống hoặc thiếu đồng bộ hóa dữ liệu. Giải pháp là Quản lý dữ liệu tổng thể (MDM): thiết lập bản ghi vàng (nguồn có thẩm quyền) và đồng bộ hóa nó trên các hệ thống. Các khía cạnh chất lượng dữ liệu bao gồm: tính chính xác, tính đầy đủ, tính nhất quán, tính kịp thời, tính hợp lệ và tính duy nhất.',
  },
  'ba-sql-009': {
    question: 'Thiết kế cách tiếp cận dựa trên dữ liệu cho BA để hỗ trợ quyết định kinh doanh về việc có nên mở rộng sang thị trường mới hay không. Bao gồm những dữ liệu cần thu thập, phương pháp phân tích và cách trình bày các phát hiện.',
    answer: 'Phân tích mở rộng thị trường theo hướng dữ liệu:\n\n1. Thu thập dữ liệu:\n- Nội bộ: dữ liệu bán hàng theo khu vực',
    explanation: 'Việc ra quyết định dựa trên dữ liệu kết hợp phân tích nội bộ, thông tin thị trường bên ngoài và mô hình tài chính. Giá trị của BA là chuyển dữ liệu thô thành thông tin chuyên sâu có thể áp dụng được với các đề xuất rõ ràng. Việc trình bày các kịch bản (không chỉ một con số) mang lại cho các nhà điều hành sự tự tin để đưa ra những quyết định sáng suốt với mức độ rủi ro được hiểu rõ.',
  },
  'ba-sql-010': {
    question: 'Một công ty muốn triển khai kho dữ liệu cho hoạt động kinh doanh thông minh. Với tư cách là BA Lead, bạn nên ưu tiên những yêu cầu nào trong lần khám phá ban đầu?',
    options: [
      'Kiến trúc kỹ thuật và lựa chọn nhà cung cấp cơ sở dữ liệu',
      'Các câu hỏi kinh doanh mà kho dữ liệu phải trả lời (KPI',
      'báo cáo',
      'bảng điều khiển)',
      'nguồn dữ liệu',
      'yêu cầu về chất lượng dữ liệu',
      'nhu cầu truy cập/bảo mật',
      'và nghĩa vụ tuân thủ',
      'Bảng màu và bố cục của báo cáo bảng điều khiển',
      'Tài liệu đào tạo cho nhóm phát triển',
      ''
    ],
    answer: '1',
    explanation: 'Dự án kho dữ liệu phải được thúc đẩy bởi các câu hỏi kinh doanh chứ không phải công nghệ. BA Lead trước tiên cần hiểu: (1) Doanh nghiệp cần đưa ra những quyết định gì? (2) Những câu hỏi/KPI nào thúc đẩy những quyết định đó? (3) Cần có dữ liệu gì để trả lời chúng? (4) Dữ liệu đó đến từ đâu (hệ thống nguồn)? (5) Đường cơ sở chất lượng dữ liệu là gì? (6) Ai cần tiếp cận và ở cấp độ nào? Cách tiếp cận "dựa trên câu hỏi" này đảm bảo DW mang lại giá trị kinh doanh.',
  },
  'ba-uq-001': {
    question: 'UAT là viết tắt của từ gì và mục đích của nó là gì?',
    options: [
      'Kiểm tra chấp nhận của người dùng - thử nghiệm chính thức được thực hiện bởi người dùng cuối để xác minh hệ thống đáp ứng các yêu cầu kinh doanh và sẵn sàng triển khai sản xuất',
      'Kiểm tra tự động hợp nhất - chạy bộ kiểm tra tự động',
      'Kiểm tra xác thực người dùng - kiểm tra chức năng đăng nhập',
      'Kiểm thử ứng dụng toàn cầu - kiểm thử trên tất cả các nền tảng',
      ''
    ],
    answer: '0',
    explanation: 'UAT là giai đoạn thử nghiệm cuối cùng trong đó người dùng doanh nghiệp thực tế xác nhận rằng hệ thống đáp ứng các yêu cầu và quy trình kinh doanh của họ. Đây KHÔNG phải là thử nghiệm chức năng/kỹ thuật (được thực hiện bởi QA trước đó). UAT trả lời câu hỏi: “Hệ thống này có làm được những gì doanh nghiệp cần không?” UAT thành công dẫn đến việc phê duyệt chính thức và triển khai sản xuất.',
  },
  'ba-uq-002': {
    question: 'UAT nên được thực hiện bởi nhóm phát triển vì họ hiểu hệ thống nhất.',
    answer: 'Sai',
    explanation: 'UAT phải được thực hiện bởi người dùng doanh nghiệp/các bên liên quan - KHÔNG phải nhà phát triển hoặc QA. Mục đích là để xác nhận rằng hệ thống hoạt động trong bối cảnh kinh doanh thực tế với các tình huống thực tế. Các nhà phát triển có thể có sự hiểu biết thiên vị (họ xây dựng nó để phù hợp với cách giải thích của họ). Người dùng doanh nghiệp kiểm tra từ góc độ sử dụng thực tế hàng ngày, điều này thường tiết lộ các vấn đề mà nhà phát triển đã bỏ qua.',
  },
  'ba-uq-003': {
    question: '"Trường hợp thử nghiệm" trong bối cảnh UAT là gì?',
    options: [
      'Thư mục chứa file test',
      'Kịch bản từng bước với đầu vào cụ thể',
      'hành động',
      'và kết quả mong đợi nhằm xác minh một yêu cầu hoặc quy trình kinh doanh cụ thể',
      'Bản tóm tắt tất cả các lỗi được tìm thấy trong quá trình thử nghiệm',
      'Nhận xét về mã của nhà phát triển giải thích logic kiểm tra',
      ''
    ],
    answer: '1',
    explanation: 'Một trường hợp kiểm thử bao gồm: ID kiểm thử, Mô tả, Điều kiện tiên quyết, Các bước kiểm thử (hành động cụ thể), Dữ liệu kiểm thử (đầu vào cụ thể), Kết quả mong đợi (điều gì sẽ xảy ra) và Kết quả thực tế (điều thực sự đã xảy ra). Các trường hợp thử nghiệm được bắt nguồn từ các yêu cầu và tiêu chí chấp nhận. Mỗi trường hợp thử nghiệm phải xác minh một khía cạnh cụ thể của hệ thống.',
  },
  'ba-uq-004': {
    question: '"Mức độ nghiêm trọng của lỗi" so với "mức độ ưu tiên của lỗi" trong quản lý lỗi là gì?',
    options: [
      'Chúng giống nhau - cả hai đều đo lường mức độ nghiêm trọng của lỗi',
      'Mức độ nghiêm trọng đo lường tác động kỹ thuật của lỗi lên hệ thống; Mức độ ưu tiên xác định thứ tự sửa lỗi dựa trên mức độ khẩn cấp của công việc - lỗi ở mức độ nghiêm trọng thấp có thể có mức độ ưu tiên cao và ngược lại',
      'Mức độ nghiêm trọng do nhà phát triển ấn định; Ưu tiên được chỉ định bởi người thử nghiệm',
      'Mức độ nghiêm trọng chỉ áp dụng cho UAT; Ưu tiên áp dụng cho thử nghiệm phát triển',
      ''
    ],
    answer: '1',
    explanation: 'Ví dụ: Lỗi đánh máy trong logo công ty trên trang chủ = mức độ nghiêm trọng thấp (không ảnh hưởng đến chức năng) nhưng mức độ ưu tiên cao (tất cả người dùng đều có thể nhìn thấy, hình ảnh thương hiệu). Một sự cố hiếm gặp trong báo cáo quản trị được sử dụng hàng quý = mức độ nghiêm trọng cao (sự cố hệ thống) nhưng mức độ ưu tiên thấp hơn (hiếm khi được sử dụng, có giải pháp thay thế). BA giúp các bên liên quan hiểu được sự khác biệt này khi phân loại lỗi.',
  },
  'ba-uq-005': {
    question: 'Tiêu chí đầu vào điển hình để bắt đầu UAT là gì?',
    options: [
      'Tất cả các nhà phát triển đã hoàn thành mã hóa',
      'Kiểm tra hệ thống (SIT) đã hoàn tất với tất cả các lỗi nghiêm trọng/lớn đã được giải quyết',
      'một môi trường thử nghiệm ổn định có sẵn',
      'Các trường hợp kiểm thử UAT được chuẩn bị',
      'dữ liệu thử nghiệm được tải',
      'và người dùng doanh nghiệp đã được đào tạo về hệ thống',
      'Người quản lý dự án cho biết đã đến lúc bắt đầu UAT',
      'Chỉ cần chuẩn bị sẵn tài liệu kế hoạch kiểm tra UAT',
      ''
    ],
    answer: '1',
    explanation: 'Tiêu chí đầu vào ngăn chặn việc khởi động UAT sớm gây lãng phí thời gian của người dùng doanh nghiệp. Tiêu chí chính: (1) SIT hoàn chỉnh, không có lỗi mở nghiêm trọng/lớn, (2) môi trường thử nghiệm ổn định, giống như sản xuất, (3) các trường hợp thử nghiệm UAT được xem xét và phê duyệt, (4) dữ liệu thử nghiệm được chuẩn bị (thực tế, ẩn danh nếu cần), (5) quyền truy cập của người dùng được cung cấp, (6) người dùng doanh nghiệp được tóm tắt/đào tạo, (7) lịch trình UAT được truyền đạt. Bắt đầu UAT mà không có những thứ này sẽ dẫn đến sự thất vọng và kết quả không hợp lệ.',
  },
  'ba-uq-006': {
    question: 'Kiểm tra hồi quy là gì và khi nào cần thiết?',
    options: [
      'Chỉ thử nghiệm các tính năng mới',
      'Kiểm tra lại chức năng hiện có sau khi thay đổi mã để đảm bảo rằng các bản sửa lỗi hoặc tính năng mới không làm hỏng các tính năng hoạt động trước đó',
      'Kiểm tra hệ thống trong quá trình hồi quy của người dùng (quay lại cách làm việc cũ)',
      'Kiểm tra hiệu suất dưới tải nặng',
      ''
    ],
    answer: '1',
    explanation: 'Kiểm tra hồi quy bảo vệ chống lại các tác dụng phụ ngoài ý muốn. Khi một lỗi được sửa hoặc một tính năng mới được thêm vào, sự thay đổi đó có thể làm hỏng một số thứ khác. Kiểm tra hồi quy chạy lại các trường hợp kiểm thử hiện có để xác minh không có gì bị hỏng. Tự động hóa rất có giá trị cho thử nghiệm hồi quy vì các thử nghiệm tương tự được chạy lặp đi lặp lại. BA phải đảm bảo phạm vi kiểm tra hồi quy bao gồm các lĩnh vực liên quan đến thay đổi.',
  },
  'ba-uq-007': {
    question: 'Thiết kế kế hoạch UAT toàn diện cho hệ thống thanh toán thương mại điện tử mới. Bao gồm phạm vi, cách tiếp cận, kịch bản kiểm thử, tiêu chí thoát và quy trình quản lý lỗi.',
    answer: 'Kế hoạch UAT - Thanh toán thương mại điện tử:\n\n1. Phạm vi:\n- Trong phạm vi: xem xét giỏ hàng',
    explanation: 'Một kế hoạch UAT tốt đặt ra các ranh giới (phạm vi) rõ ràng, liên quan đến đúng người (người dùng doanh nghiệp, không phải CNTT), bao gồm các tình huống kinh doanh quan trọng (không chỉ là con đường hạnh phúc), xác định các tiêu chí thoát có thể đo lường được (không phải "UAT được thực hiện khi chúng tôi cảm thấy hài lòng") và có quy trình quản lý lỗi có cấu trúc. Tỷ lệ phân chia 30/70 giữa thử nghiệm theo kịch bản và thử nghiệm thăm dò cân bằng phạm vi bao phủ với việc phát hiện các vấn đề không mong muốn.',
  },
  'ba-uq-008': {
    question: 'Vai trò của BA trong việc đảm bảo "phạm vi yêu cầu" trong quá trình thử nghiệm là gì?',
    options: [
      'BA nên tự viết tất cả các kịch bản kiểm tra',
      'BA đảm bảo mọi yêu cầu đều có trường hợp thử nghiệm liên quan (truy xuất nguồn gốc)',
      'xem xét các trường hợp thử nghiệm về độ chính xác trong kinh doanh',
      'xác định những khoảng trống trong phạm vi kiểm tra',
      'và xác minh rằng tiêu chí chấp nhận có thể kiểm chứng được',
      'BA chỉ tham gia UAT',
      'không phải giai đoạn thử nghiệm sớm hơn',
      'Phạm vi yêu cầu hoàn toàn thuộc trách nhiệm của nhóm QA',
      ''
    ],
    answer: '1',
    explanation: 'Yêu cầu và thử nghiệm cầu nối của BA: (1) tạo/duy trì các yêu cầu liên kết Ma trận truy xuất nguồn gốc yêu cầu (RTM) → trường hợp thử nghiệm, (2) xem xét các trường hợp thử nghiệm QA về độ chính xác trong kinh doanh (QA có thể hiểu sai các yêu cầu), (3) xác định các khoảng trống trong phạm vi (yêu cầu chưa được kiểm tra hoặc tiêu chí chấp nhận), (4) đảm bảo các yêu cầu phi chức năng có phương pháp thử nghiệm, (5) tham gia phân loại lỗi để xác định xem lỗi là lỗi yêu cầu hay lỗi triển khai.',
  },
  'ba-uq-009': {
    question: 'Với tư cách là BA trưởng nhóm, hãy thiết kế một chiến lược đảm bảo chất lượng có sự tham gia của các BA trong toàn bộ SDLC (không chỉ UAT). Bao gồm các điểm kiểm tra BA ở từng giai đoạn, số liệu chất lượng và cách chuyển chất lượng sang trái.',
    answer: 'BA-Chiến lược chất lượng tích hợp:\n\n1. Giai đoạn Yêu cầu (Shift Left - Phòng ngừa):\n- Đánh giá ngang hàng các yêu cầu với danh sách kiểm tra (tính đầy đủ',
    explanation: 'Chuyển chất lượng sang trái có nghĩa là ngăn ngừa lỗi tại nguồn (yêu cầu) thay vì tìm ra chúng sau này (kiểm tra). Mỗi đô la chi cho chất lượng yêu cầu sẽ tiết kiệm được 10-100 đô la trong các giai đoạn sau (Định luật Boehm). BA được định vị duy nhất để nhúng chất lượng trong toàn bộ SDLC vì họ sở hữu các yêu cầu mà mọi thứ khác đều được xây dựng từ đó. Bảng điều khiển số liệu cung cấp khả năng hiển thị về nơi chất lượng bị hỏng.',
  },
  'ba-uq-010': {
    question: 'Các bên liên quan muốn bỏ qua UAT vì dự án bị chậm tiến độ. Với tư cách là Lead BA, đề xuất của bạn là gì?',
    options: [
      'Đồng ý bỏ qua UAT để đáp ứng deadline',
      'Đề xuất phương pháp tiếp cận UAT dựa trên rủi ro: ưu tiên các kịch bản kinh doanh quan trọng cho UAT cô đọng 3-5 ngày',
      'tài liệu chấp nhận rủi ro cho các trường hợp thử nghiệm bị trì hoãn',
      'và lên kế hoạch cho khoảng thời gian xác thực sau phát hành với khả năng khôi phục',
      'Yêu cầu UAT đầy đủ bất kể lịch trình - chất lượng không thể bị tổn hại',
      'Hãy để người quản lý dự án đưa ra quyết định này mà không cần đầu vào BA',
      ''
    ],
    answer: '1',
    explanation: 'Bỏ qua hoàn toàn UAT là vô trách nhiệm (vấn đề sản xuất tốn kém hơn so với việc trì hoãn ra mắt). Tuy nhiên, việc nhấn mạnh vào UAT đầy đủ khi lịch trình là quan trọng có thể không thực tế. Cách tiếp cận dựa trên rủi ro tập trung UAT vào các lộ trình quan trọng (tác động kinh doanh cao nhất), trì hoãn các kịch bản có rủi ro thấp hơn (với sự chấp nhận rủi ro được ghi lại) và cung cấp mạng lưới an toàn (kế hoạch khôi phục, giám sát sau phát hành). Điều này giúp cân bằng chất lượng với tính cấp bách trong kinh doanh - một kỹ năng quan trọng của Lead BA.',
  },
  'ba-us-001': {
    question: 'Định dạng chuẩn của câu chuyện của người dùng là gì?',
    options: [
      'Cho [bối cảnh'
    ],
    answer: '1',
    explanation: 'Định dạng câu chuyện tiêu chuẩn của người dùng là: "Là một [loại người dùng], tôi muốn [mục tiêu/mong muốn], để [lợi ích/lý do]." Định dạng này nắm bắt được AI cần tính năng này, NHỮNG GÌ họ cần và TẠI SAO. Định dạng Given-When-Then được sử dụng cho tiêu chí chấp nhận (BDD), chứ không phải bản thân câu chuyện.',
  },
  'ba-us-002': {
    question: 'Từ viết tắt ĐẦU TƯ có nghĩa là gì trong bối cảnh câu chuyện của người dùng?',
    options: [
      'Quan trọng',
      'Cần thiết',
      'Đã xác thực',
      'Ước lượng',
      'Phạm vi',
      'Đã thử nghiệm',
      'Độc lập',
      'Có thể thương lượng',
      'Có giá trị lớn',
      'Có thể ước tính',
      'Bé nhỏ',
      'Có thể kiểm tra được',
      'Lặp đi lặp lại',
      'Chật hẹp',
      'Đã xác minh',
      'Có hiệu quả',
      'Có cấu trúc',
      'Có thể theo dõi',
      'Đổi mới',
      'Đáng chú ý',
      'khả thi',
      'Có thể thực thi',
      'Ổn định',
      'Minh bạch',
      ''
    ],
    answer: '1',
    explanation: 'INVEST là một công cụ ghi nhớ cho chất lượng câu chuyện tốt của người dùng: Độc lập (không phụ thuộc), Có thể thương lượng (không phải hợp đồng), Có giá trị (mang lại giá trị kinh doanh), Ước tính (nhóm có thể xác định quy mô), Nhỏ (phù hợp với chạy nước rút), Có thể kiểm thử (tiêu chí chấp nhận rõ ràng). Những câu chuyện vi phạm ĐẦU TƯ sẽ khó lập kế hoạch và phân phối hơn.',
  },
  'ba-us-003': {
    question: 'Tiêu chí chấp nhận và câu chuyện của người dùng đều giống nhau - cả hai đều mô tả những gì người dùng muốn.',
    answer: 'Sai',
    explanation: 'Câu chuyện của người dùng mô tả CÁI GÌ và TẠI SAO ở cấp độ cao ("Là người dùng, tôi muốn đặt lại mật khẩu của mình để có thể lấy lại quyền truy cập"). Tiêu chí chấp nhận xác định các điều kiện cụ thể, có thể kiểm tra phải được đáp ứng để câu chuyện được coi là hoàn chỉnh (ví dụ: "Email đặt lại mật khẩu được gửi trong vòng 30 giây',
  },
  'ba-us-004': {
    question: 'Trong sơ đồ ca sử dụng, "tác nhân" đại diện cho điều gì?',
    options: [
      'Một module phần mềm bên trong hệ thống',
      'Một thực thể bên ngoài (người',
      'hệ thống',
      'hoặc thiết bị) tương tác với hệ thống',
      'Cơ sở dữ liệu lưu trữ dữ liệu người dùng',
      'Kịch bản thử nghiệm cho hệ thống',
      ''
    ],
    answer: '1',
    explanation: 'Tác nhân là bất kỳ thực thể nào bên ngoài hệ thống tương tác với nó. Đây có thể là người dùng con người (ví dụ: Khách hàng, Quản trị viên), hệ thống khác (ví dụ: Cổng thanh toán) hoặc thiết bị (ví dụ: cảm biến IoT). Các tác nhân được vẽ dưới dạng hình que bên ngoài ranh giới hệ thống trong sơ đồ ca sử dụng UML.',
  },
  'ba-us-005': {
    question: 'Sự khác biệt giữa Epic và User Story là gì?',
    options: [
      'Sử thi là dành cho lỗi; câu chuyện của người dùng là dành cho các tính năng',
      'Sử thi là một khối lượng lớn tác phẩm có thể được chia thành các câu chuyện nhỏ hơn của người dùng; nó quá lớn để hoàn thành trong một lần chạy nước rút',
      'Sử thi là một bản mô tả chi tiết; câu chuyện của người dùng là một bản tóm tắt',
      'Không có sự khác biệt - chúng là những thuật ngữ có thể hoán đổi cho nhau',
      ''
    ],
    answer: '1',
    explanation: 'Epic là một câu chuyện người dùng lớn, quá lớn cho một lần chạy nước rút và cần được phân tách. Hệ thống phân cấp: Chủ đề → Sử thi → Câu chuyện của người dùng → Nhiệm vụ. Ví dụ: Sử thi: "Hệ thống xác thực người dùng" → Câu chuyện: "Đăng nhập bằng email',
  },
  'ba-us-006': {
    question: 'Viết 3 tiêu chí chấp nhận ở định dạng Given-When-Then (Gherkin) cho câu chuyện của người dùng sau: "Là khách hàng, tôi muốn thêm các mặt hàng vào giỏ hàng của mình để có thể mua nhiều sản phẩm cùng một lúc."',
    answer: 'Vì tôi đang ở trang chi tiết sản phẩm và sản phẩm còn hàng',
    explanation: 'Given-When-Then (cú pháp Gherkin) cung cấp các tiêu chí chấp nhận có cấu trúc, có thể kiểm tra được. "Đã cho" đặt điều kiện tiên quyết, "Khi" mô tả hành động, "Sau đó" nêu kết quả mong đợi. Tiêu chí chấp nhận tốt bao gồm đường đi phù hợp, các trường hợp khó khăn (thêm trùng lặp) và các tình huống lỗi (hết hàng). Chúng phải cụ thể và có thể kiểm chứng được.',
  },
  'ba-us-007': {
    question: 'Bản đồ câu chuyện người dùng là gì và khi nào BA nên sử dụng nó?',
    options: [
      'Một kỹ thuật ánh xạ câu chuyện của người dùng vào các bảng cơ sở dữ liệu',
      'Bài tập trực quan sắp xếp các câu chuyện của người dùng dọc theo hành trình của người dùng theo chiều ngang (xương sống) và mức độ ưu tiên theo chiều dọc (bộ xương đi bộ)',
      'được sử dụng để lập kế hoạch phát hành và định nghĩa MVP',
      'Sơ đồ cho thấy cách các câu chuyện của người dùng diễn ra trong quy trình phát triển',
      'Một công cụ để ước tính điểm câu chuyện bằng cách lập kế hoạch chơi bài poker',
      ''
    ],
    answer: '1',
    explanation: 'Bản đồ câu chuyện người dùng (của Jeff Patton) tạo bản đồ 2D: trục hoành hiển thị các bước trong hành trình của người dùng (xương sống/hoạt động) và trục tung hiển thị các câu chuyện theo từng bước được sắp xếp theo mức độ ưu tiên. Một đường ngang cắt ngang để xác định MVP hoặc phạm vi phát hành. Nó cung cấp bối cảnh mà một hồ sơ tồn đọng phẳng thiếu - cho thấy các câu chuyện liên quan như thế nào đến trải nghiệm tổng thể của người dùng.',
  },
  'ba-us-008': {
    question: 'Trong mô hình hóa trường hợp sử dụng, sự khác biệt giữa các mối quan hệ <<include>> và <<extend>> là gì?',
    options: [
      '<<include>> có nghĩa là hành vi tùy chọn; <<extend>> có nghĩa là hành vi bắt buộc',
      '<<include>> có nghĩa là trường hợp sử dụng cơ sở LUÔN thực thi trường hợp sử dụng đi kèm; <<extend>> có nghĩa là trường hợp sử dụng mở rộng TÙY CHỌN thêm hành vi vào cơ sở trong các điều kiện nhất định',
      '<<include>> dành cho diễn viên; <<extend>> dành cho hệ thống',
      'Chúng giống hệt nhau; hoặc có thể được sử dụng thay thế cho nhau',
      ''
    ],
    answer: '1',
    explanation: '<<include>> = thành phần bắt buộc: trường hợp sử dụng cơ sở luôn gọi thành phần được bao gồm (ví dụ: "Đặt hàng" <<includes>> "Xác thực thanh toán"). <<extend>> = phần mở rộng tùy chọn: trường hợp sử dụng mở rộng chỉ thêm hành vi khi một điều kiện được đáp ứng (ví dụ: "Đặt hàng" được <<mở rộng bởi>> "Áp dụng phiếu giảm giá" nếu nhập mã phiếu giảm giá). Sự khác biệt này rất quan trọng để hiểu được tính đầy đủ của hành vi hệ thống.',
  },
  'ba-us-009': {
    question: 'BA nên xử lý một câu chuyện của người dùng vi phạm nguyên tắc "Độc lập" của ĐẦU TƯ (tức là nó có sự phụ thuộc mạnh mẽ vào các câu chuyện khác) như thế nào?',
    options: [
      'Xóa câu chuyện vì vi phạm ĐẦU TƯ',
      'Cắt lại các câu chuyện bằng cách sử dụng tính năng cắt dọc (các lát mỏng từ đầu đến cuối) để giảm thiểu sự phụ thuộc',
      'hoặc ghi lại rõ ràng sự phụ thuộc và sắp xếp chúng trong cùng một lần chạy nước rút',
      'Hợp nhất tất cả các câu chuyện phụ thuộc vào một câu chuyện lớn',
      'Chỉ định tất cả các câu chuyện phụ thuộc cho cùng một nhà phát triển',
      ''
    ],
    answer: '1',
    explanation: 'Cắt dọc tạo ra các câu chuyện mang lại giá trị từ đầu đến cuối thông qua tất cả các lớp (UI → API → DB) thay vì cắt ngang theo lớp. Ví dụ: thay vì "Xây dựng bảng người dùng" + "Xây dựng API người dùng" + "Xây dựng biểu mẫu người dùng',
  },
  'ba-us-010': {
    question: 'Bạn đang xây dựng một nền tảng thương mại điện tử. Phân tách "Quản lý đơn hàng" sử thi thành ít nhất 6 câu chuyện của người dùng với các tiêu chí chấp nhận được phác thảo. Hãy xem xét các tác nhân và trường hợp khác nhau.',
    answer: '1. “Là khách hàng',
    explanation: 'Phân tích sử thi tốt xem xét nhiều tác nhân (khách hàng, quản trị viên), toàn bộ vòng đời (tạo → xem → cập nhật → hủy → trả lại) và cả các trường hợp vui vẻ và khó khăn. Mỗi câu chuyện tuân theo định dạng câu chuyện của người dùng, có thể phân phối độc lập và có các tiêu chí chấp nhận có thể kiểm tra được. Việc phân tách này cho phép phân phối tăng dần — nhóm có thể gửi "đặt hàng" trước với tư cách là MVP.',
  },
  'ba-us-011': {
    question: 'Khái niệm "3C" trong câu chuyện của người dùng (của Ron Jeffries) là gì?',
    options: [
      'Tạo nên',
      'Mã số',
      'Đóng',
      'Thẻ (viết truyện)',
      'Hội thoại (thảo luận chi tiết)',
      'Xác nhận (tiêu chí chấp nhận)',
      'Khách hàng',
      'Bộ mã hóa',
      'Người kiểm tra',
      'Ý tưởng',
      'Bối cảnh',
      'Tiêu chuẩn',
      ''
    ],
    answer: '1',
    explanation: 'Ron Jeffries đã xác định 3 chữ C: Thẻ (câu chuyện được viết trên thẻ - ngắn gọn, lời nhắc), Hội thoại (đối thoại liên tục giữa BA, PO, nhà phát triển và người kiểm tra để xác định chi tiết) và Xác nhận (tiêu chí/kiểm tra chấp nhận xác nhận câu chuyện đã hoàn thành). Câu chuyện của người dùng KHÔNG phải là thông số kỹ thuật chi tiết — Thẻ là phần giữ chỗ cho Cuộc trò chuyện, được xác nhận bằng các thử nghiệm.',
  },
  'ba-us-012': {
    question: 'Với tư cách là BA lãnh đạo, hãy xác định tiêu chuẩn về chất lượng câu chuyện của người dùng trong tổ chức của bạn. Bao gồm danh sách kiểm tra Định nghĩa sẵn sàng (DoR), hướng dẫn viết câu chuyện và quy trình đánh giá để đảm bảo tính nhất quán giữa nhiều nhóm BA.',
    answer: 'Danh sách kiểm tra Định nghĩa về Sẵn sàng (DoR): (1) Câu chuyện theo định dạng "Như... Tôi muốn... Vậy thì..." với vai trò rõ ràng',
    explanation: 'Khung chất lượng câu chuyện được tiêu chuẩn hóa đảm bảo tính nhất quán giữa các nhóm BA, giảm việc làm lại trong quá trình chạy nước rút và cải thiện độ chính xác của ước tính. DoR hoạt động như một cổng chất lượng - những câu chuyện không đáp ứng được danh sách kiểm tra sẽ không sẵn sàng cho việc lập kế hoạch chạy nước rút. Đánh giá ngang hàng phát hiện các điểm mù và sự tham gia của QA đảm bảo khả năng kiểm tra. Quá trình này có quy mô khắp các tổ chức lớn với nhiều nhóm Scrum.',
  },
  'ba-us-013': {
    question: 'Khi nào BA nên khuyến nghị sử dụng các thông số kỹ thuật ca sử dụng chính thức (các trường hợp sử dụng được trang bị đầy đủ) thay vì các câu chuyện của người dùng?',
    options: [
      'Luôn luôn - các trường hợp sử dụng chi tiết hơn và do đó luôn tốt hơn',
      'Không bao giờ - câu chuyện của người dùng đã thay thế hoàn toàn các trường hợp sử dụng',
      'Đối với các hệ thống phức tạp có nhiều tác nhân và các luồng tương tác phức tạp (ví dụ:',
      'chăm sóc sức khỏe',
      'ngân hàng)',
      'nơi diễn ra từng bước chi tiết',
      'ngoại lệ',
      'và các điều kiện trước/sau cung cấp sự rõ ràng cần thiết mà chỉ riêng câu chuyện của người dùng không thể nắm bắt được',
      'Chỉ khi dự án sử dụng phương pháp Thác nước',
      ''
    ],
    answer: '2',
    explanation: 'Câu chuyện của người dùng hoạt động tốt trong Agile đối với hầu hết các tính năng vì chúng nhấn mạnh vào cuộc trò chuyện. Tuy nhiên, các lĩnh vực phức tạp (y tế, tài chính, quy định) thường cần các luồng tương tác chi tiết, từng bước với các điều kiện tiên quyết, hậu điều kiện, luồng ngoại lệ và quy tắc kinh doanh rõ ràng. Các trường hợp sử dụng được trang bị đầy đủ (theo Alistair Cockburn) mang lại sự nghiêm ngặt này. Sự lựa chọn phụ thuộc vào ngữ cảnh, không phụ thuộc vào phương pháp luận - ngay cả các nhóm Agile cũng có thể sử dụng các trường hợp sử dụng khi mức độ phức tạp đòi hỏi điều đó.',
  },
  'ba-us-014': {
    question: 'Khi viết user story, mục đích của mệnh đề "So that..." là gì?',
    options: [
      'Để mô tả việc thực hiện kỹ thuật',
      'Để xác định giá trị kinh doanh hoặc "lý do" đằng sau yêu cầu',
      'Để liệt kê các bên liên quan đã yêu cầu tính năng này',
      'Để đặt mức độ ưu tiên của câu chuyện'
    ],
    answer: '1',
    explanation: 'Phần "Vậy đó" giải thích động lực. Hiểu được TẠI SAO giúp nhóm phát triển đề xuất những “cách thức” tốt hơn và đảm bảo việc triển khai thực sự đạt được lợi ích mong muốn.',
  },
  'ba-us-015': {
    question: 'Tiêu chí "Invest" trong viết User Story là viết tắt của điều gì?',
    options: ['Independent, Negotiable, Valuable, Estimable, Small, Testable', 'Internal, New, Valid, Easy, Simple, True', 'Investment, Network, Value, Earn, Share, Trade', 'Không có ý nghĩa cụ thể'],
    explanation: 'INVEST là bộ tiêu chuẩn vàng cho chất lượng User Story. Ví dụ: "Small" đảm bảo story có thể hoàn thành trong 1 sprint; "Testable" đảm bảo có thể xác minh được kết quả.',
  },
  'ba-us-016': {
    question: 'Điều nào sau đây là ví dụ về luồng "Mở rộng" trong đặc tả trường hợp sử dụng?',
    options: [
      'Quá trình đăng nhập luôn yêu cầu mật khẩu',
      'Khách hàng tùy ý áp dụng mã giảm giá khi thanh toán',
      'Hệ thống tự động đăng xuất người dùng sau 30 phút',
      'Quá trình lưu file vào cơ sở dữ liệu'
    ],
    answer: '1',
    explanation: 'Mở rộng mối quan hệ thể hiện hành vi tùy chọn hoặc có điều kiện. Luồng cơ sở (thanh toán) hoàn tất nếu không có nó, nhưng có thể được mở rộng bằng luồng tùy chọn (mã giảm giá).',
  },
  'ba-us-017': {
    question: 'Khi nào một User Story được gọi là "Ready" (Sẵn sàng) cho phát triển?',
    options: ['Khi PM nói như vậy', 'Khi nó đáp ứng "Definition of Ready" (DoR): đã được tinh lọc, ước lượng, có AC rõ ràng và không có block về bên thứ ba', 'Khi dev bắt đầu viết code', 'Khi story đã được hoàn thành'],
    explanation: 'DoR đảm bảo nhóm có đủ thông tin để bắt đầu làm việc mà không gặp gián đoạn.',
  },
  'ba-us-018': {
    question: 'Sử dụng kỹ thuật "Hamburger Slicing", phân tích câu chuyện "Đăng ký người dùng" phức tạp cần hỗ trợ 5 quốc gia khác nhau và 3 nhà cung cấp danh tính khác nhau.',
    answer: 'Chiến lược cắt lát bánh mì kẹp thịt:\n1. Chọn "Lát mỏng": Chỉ hỗ trợ 1 quốc gia (ví dụ:',
    explanation: 'Việc cắt lát Hamburger trước tiên tập trung vào việc cung cấp một đường dẫn đầy đủ (từ trên xuống dưới), sau đó mở rộng theo chiều ngang để bao quát chiều rộng và độ phức tạp theo cách lặp đi lặp lại.',
  },
  'ba-us-019': {
    question: '"Spike" là loại User Story gì?',
    options: ['Một story cực kỳ quan trọng', 'Một nhiệm vụ nghiên cứu kỹ thuật hoặc thử nghiệm để giảm thiểu sự không chắc chắn trước khi bắt đầu thực triển khai tính năng thực sự', 'Lỗi nghiêm trọng trên production', 'Một công cụ đo lường tốc độ'],
    explanation: 'Spike giúp nhóm tìm hiểu thông tin cần thiết về một công nghệ hoặc giải pháp mới. Kết quả của spike thường là kiến thức hoặc một tài liệu hướng dẫn, không phải code production.',
  },
  'ba-us-020': {
    question: 'Ai là người viết User Story chủ yếu trong nhóm Scrum?',
    options: ['Chỉ có BA', 'Chỉ có Product Owner', 'Cả nhóm đều có thể viết, nhưng PO chịu trách nhiệm cuối cùng về nội dung và mức độ ưu tiên; BA thường hỗ trợ PO chi tiết hóa', 'Khách hàng tự viết'],
    explanation: 'Việc viết story là sự cộng tác của cả nhóm để đảm bảo sự hiểu biết chung.',
  },
  'ba-us-021': {
    question: 'Với tư cách là BA chính, bạn xử lý "Yêu cầu phi chức năng" (NFR) trong môi trường Câu chuyện của người dùng như thế nào?',
    options: [
      'Hãy bỏ qua chúng vì các câu chuyện đều nói về chức năng',
      'Đưa chúng vào làm Tiêu chí chấp nhận cho các câu chuyện có liên quan',
      'hoặc như một phần của "Định nghĩa Hoàn thành" cho toàn bộ dự án',
      'Viết chúng dưới dạng "Câu chuyện kỹ thuật" riêng biệt',
      'Đặt chúng vào một tài liệu riêng biệt mà không ai từng đọc'
    ],
    answer: '1',
    explanation: 'NFR (như hiệu suất hoặc bảo mật) phải là các ràng buộc đối với các câu chuyện cụ thể (thông qua AC) hoặc các tiêu chuẩn toàn cầu (thông qua DoD) để đảm bảo chúng được xác minh trong mỗi lần chạy nước rút.',
  },
  'ba-us-022': {
    question: 'Điều nào sau đây mô tả "Câu chuyện tiêu cực của người dùng"?',
    options: [
      'Câu chuyện về một người dùng không hài lòng',
      'Câu chuyện từ góc nhìn của kẻ tấn công hoặc người dùng mắc những lỗi phổ biến',
      'được sử dụng để xác định các yêu cầu bảo mật hoặc xử lý lỗi',
      'Một câu chuyện có tác động tiêu cực đến ngân sách',
      'Một câu chuyện đã bị xóa khỏi hồ sơ tồn đọng'
    ],
    answer: '1',
    explanation: 'Câu chuyện tiêu cực (hoặc Câu chuyện về kẻ lạm dụng) giúp các nhóm suy nghĩ về những điều KHÔNG NÊN xảy ra, dẫn đến các yêu cầu bảo mật và xác thực tốt hơn.',
  },
  'ba-us-023': {
    question: 'Làm thế nào để quản lý các "Yêu cầu phi chức năng" (NFR) trong tồn đọng Agile?',
    options: ['Bỏ qua chúng', 'Viết chúng thành các user story riêng biệt hoặc tích hợp vào "Definition of Done" của tất cả các story liên quan', 'Viết một tài liệu word riêng', 'Chỉ nói miệng với dev'],
    explanation: 'NFR như bảo mật, hiệu năng có thể được áp dụng dưới dạng ràng buộc cho mọi story (DoD) hoặc nếu nó là một công việc lớn cụ thể thì viết thành story riêng.',
  },
  'ba-wp-001': {
    question: 'Sự khác biệt giữa wireframe và nguyên mẫu là gì?',
    options: [
      'Chúng giống nhau',
      'Một khung dây là tĩnh',
      'bố cục có độ chính xác thấp hiển thị cấu trúc và vị trí nội dung; nguyên mẫu là một mô phỏng tương tác thể hiện các luồng và tương tác của người dùng',
      'Wireframe có tính tương tác; một nguyên mẫu là tĩnh',
      'Wireframe được thiết kế bởi các nhà phát triển; một nguyên mẫu được thiết kế bởi các nhà thiết kế',
      ''
    ],
    answer: '1',
    explanation: 'Wireframe là các bố cục khung - giống như bản thiết kế hiển thị vị trí của các phần tử (điều hướng, khu vực nội dung, nút) mà không có chi tiết thiết kế trực quan. Nguyên mẫu thêm tính tương tác: các nút có thể nhấp, chuyển trang, gửi biểu mẫu. Phổ độ trung thực: phác thảo → wireframe → mockup (thiết kế trực quan) → nguyên mẫu (tương tác). BA thường tạo wireframe có độ chính xác thấp/trung bình để xác thực các yêu cầu.',
  },
  'ba-wp-002': {
    question: 'Tại sao BA nên tạo wireframe trong giai đoạn yêu cầu?',
    options: [
      'Để thay thế công việc của người thiết kế giao diện người dùng',
      'Để truyền đạt trực quan các yêu cầu',
      'xác nhận sự hiểu biết với các bên liên quan',
      'xác định sớm các yêu cầu còn thiếu',
      'và giảm sự mơ hồ trong thông số kỹ thuật dựa trên văn bản',
      'Để xác định màu sắc và phông chữ chính xác cho sản phẩm cuối cùng',
      'Wireframes chỉ được tạo ra bởi các nhà thiết kế',
      'không phải BA',
      ''
    ],
    answer: '1',
    explanation: 'Wireframe giúp BA vì: (1) các bên liên quan hiểu hình ảnh tốt hơn thông số văn bản, (2) cách trình bày trực quan cho thấy những khoảng trống ("thông báo lỗi đi đâu?"), (3) tạo điều kiện cho các vòng phản hồi nhanh hơn, (4) giảm thông tin sai lệch giữa BA, thiết kế và phát triển. Wireframe BA có độ chính xác thấp - chúng truyền đạt cấu trúc và dòng chảy chứ không phải thiết kế cuối cùng.',
  },
  'ba-wp-003': {
    question: 'Wireframe có độ chính xác thấp phải bao gồm các yếu tố thiết kế trực quan chi tiết như màu sắc, hình ảnh và kiểu chữ chính xác.',
    answer: 'Sai',
    explanation: 'Các wireframe có độ trung thực thấp (lo-fi) cố tình tránh các chi tiết thiết kế trực quan. Họ sử dụng thang độ xám, hộp giữ chỗ cho hình ảnh và phông chữ chung. Điều này tập trung vào bố cục, cấu trúc và phân cấp thông tin - chứ không phải tính thẩm mỹ. Việc thêm thiết kế trực quan quá sớm (1) lãng phí thời gian nếu bố cục thay đổi, (2) khiến các bên liên quan mất tập trung vào các cuộc thảo luận về màu sắc/phông chữ thay vì phản hồi về chức năng.',
  },
  'ba-wp-004': {
    question: 'Sơ đồ "luồng người dùng" là gì và nó bổ sung cho wireframe như thế nào?',
    options: [
      'Luồng người dùng là một loại wireframe có nhiều chi tiết hơn',
      'Luồng người dùng ánh xạ đường dẫn từng bước mà người dùng thực hiện trong hệ thống để hoàn thành mục tiêu — nó hiển thị trình tự các màn hình',
      'quyết định',
      'và hành động',
      'trong khi wireframe hiển thị từng màn hình riêng lẻ trông như thế nào',
      'Luồng người dùng là sơ đồ cơ sở dữ liệu hiển thị chuyển động của dữ liệu',
      'Luồng người dùng là kế hoạch triển khai của nhà phát triển',
      ''
    ],
    answer: '1',
    explanation: 'Luồng người dùng hiển thị hành trình (màn hình A → quyết định → màn hình B hoặc C), trong khi wireframe hiển thị bố cục màn hình riêng lẻ. Chúng cùng nhau tạo thành một bức tranh hoàn chỉnh: luồng hiển thị ĐÂU người dùng đến và wireframe hiển thị NHỮNG GÌ họ nhìn thấy ở mỗi điểm dừng. Ví dụ: Luồng đăng nhập → Bảng điều khiển → Danh sách sản phẩm → Chi tiết sản phẩm → Giỏ hàng → Thanh toán → Xác nhận.',
  },
  'ba-wp-005': {
    question: 'Công cụ nào được các BA và nhà thiết kế sử dụng phổ biến nhất để tạo wireframing và tạo mẫu hợp tác?',
    options: [
      'Microsoft Excel',
      'Figma — một công cụ thiết kế dựa trên đám mây với khả năng cộng tác theo thời gian thực',
      'thư viện thành phần',
      'và các tính năng tạo mẫu',
      'sổ ghi chú',
      'Photoshop',
      ''
    ],
    answer: '1',
    explanation: 'Figma là tiêu chuẩn ngành cho wireframing và tạo mẫu vì: (1) cộng tác trong thời gian thực (như Google Docs dành cho thiết kế), (2) thư viện hệ thống thiết kế/thành phần để đảm bảo tính nhất quán, (3) tạo mẫu tích hợp sẵn (khung liên kết, thêm chuyển tiếp), (4) miễn phí cho các nhóm nhỏ, (5) chạy trong trình duyệt (không cần cài đặt). Các công cụ khác: Sketch (chỉ dành cho máy Mac), Adobe XD (đã ngừng sản xuất), Balsamiq (chỉ lo-fi), Axure (tạo mẫu nâng cao).',
  },
  'ba-wp-006': {
    question: '10 phương pháp chẩn đoán khả năng sử dụng của Nielsen chủ yếu được sử dụng để làm gì?',
    options: [
      'Đo tốc độ tải trang web',
      'Đánh giá khả năng sử dụng của giao diện người dùng bằng cách đánh giá nó dựa trên 10 nguyên tắc về khả năng sử dụng được công nhận (khả năng hiển thị trạng thái hệ thống',
      'ngăn ngừa lỗi',
      'tính nhất quán',
      'vân vân.)',
      'Đếm số lần nhấp chuột trong luồng người dùng',
      'Kiểm tra chất lượng mã trong các ứng dụng lối vào',
      ''
    ],
    answer: '1',
    explanation: '10 chẩn đoán của Jakob Nielsen là một khuôn khổ để đánh giá khả năng sử dụng UI: (1) Khả năng hiển thị trạng thái hệ thống, (2) Sự phù hợp giữa hệ thống và thế giới thực, (3) Kiểm soát người dùng và sự tự do, (4) Tính nhất quán và tiêu chuẩn, (5) Ngăn ngừa lỗi, (6) Nhận biết hơn là thu hồi, (7) Tính linh hoạt và hiệu quả, (8) Thiết kế thẩm mỹ và tối giản, (9) Giúp người dùng nhận ra/khắc phục sau lỗi, (10) Trợ giúp và tài liệu hóa. Các BA sử dụng chúng để xem xét wireframe trước khi chuyển giao.',
  },
  'ba-wp-007': {
    question: 'Thiết kế luồng người dùng và màn hình wireframe chính cho tính năng "Gửi tiền" của ứng dụng ngân hàng di động. Bao gồm đường dẫn hạnh phúc, xử lý lỗi và cân nhắc về bảo mật.',
    answer: 'Luồng người dùng:\n1. Trang tổng quan (CTA: nút "Gửi tiền")\n2. Màn hình lựa chọn người nhận (tìm kiếm liên hệ',
    explanation: 'Thiết kế này tuân theo các phương pháp hay nhất của UX: tiết lộ lũy tiến (một nhiệm vụ trên mỗi màn hình), phản hồi rõ ràng ở mỗi bước, ngăn ngừa lỗi (kiểm tra số dư, xác thực định dạng) và xây dựng lòng tin (minh bạch về phí, xem xét xác nhận). BA đảm bảo tất cả các yêu cầu chức năng được thể hiện một cách trực quan: quy tắc xác thực, bảo mật, trạng thái lỗi và các trường hợp khó khăn (không đủ tiền, lỗi mạng, vượt quá giới hạn hàng ngày).',
  },
  'ba-wp-008': {
    question: '"Kiến trúc thông tin" (IA) là gì và tại sao BA nên quan tâm đến nó?',
    options: [
      'IA là kiến ​​trúc máy chủ nơi lưu trữ thông tin',
      'IA là thiết kế cấu trúc của môi trường thông tin - tổ chức',
      'ghi nhãn',
      'và cấu trúc nội dung để người dùng có thể tìm và hiểu thông tin một cách dễ dàng. BA nên quan tâm vì IA ảnh hưởng trực tiếp đến cách ánh xạ yêu cầu tới điều hướng',
      'phân loại học',
      'và cấu trúc nội dung',
      'IA là tên gọi khác của thiết kế lược đồ cơ sở dữ liệu',
      'IA là một khung CSS cho bố cục đáp ứng',
      ''
    ],
    answer: '1',
    explanation: 'Kiến trúc thông tin xác định cách tổ chức, gắn nhãn và truy cập nội dung. Nó bao gồm: cấu trúc điều hướng (menu, đường dẫn), phân loại nội dung (danh mục, thẻ), chiến lược tìm kiếm và ghi nhãn (những thứ được gọi là gì). BA ảnh hưởng đến IA thông qua: mô hình hóa miền (mối quan hệ thực thể), nghiên cứu người dùng (cách người dùng nghĩ về nội dung) và bài tập sắp xếp thẻ (cho phép người dùng sắp xếp nội dung một cách tự nhiên).',
  },
  'ba-wp-009': {
    question: 'Với tư cách là BA trưởng nhóm, hãy xác định quy trình kết hợp xác thực UX vào vòng đời yêu cầu. Bao gồm thời điểm tạo wireframe, cách nhận phản hồi của người dùng và cách phản hồi thông tin chi tiết về wireframe cho các yêu cầu.',
    answer: 'Quy trình yêu cầu tích hợp UX:\n\n1. Giai đoạn Khám phá:\n- Nghiên cứu người dùng (phỏng vấn',
    explanation: 'Việc tích hợp xác thực UX vào các yêu cầu sẽ ngăn ngừa việc xây dựng sai. Việc thử nghiệm sớm với độ chính xác thấp sẽ rẻ (nguyên mẫu trên giấy); thiết kế lại muộn là tốn kém. Ngưỡng thử nghiệm 5 người dùng (theo Nielsen) nắm bắt được ~85% vấn đề về khả năng sử dụng. Liên kết wireframe với các câu chuyện đảm bảo nhà phát triển và QA có bối cảnh trực quan. Phản hồi liên tục sau khi phát hành sẽ đóng vòng lặp.',
  },
  'ba-wp-010': {
    question: 'Khi nào BA nên khuyên nên xây dựng nguyên mẫu tương tác có độ chính xác cao trước khi bắt đầu phát triển (bất chấp chi phí)?',
    options: [
      'Luôn luôn - nguyên mẫu phải được xây dựng cho mọi tính năng',
      'Không bao giờ - nguyên mẫu lãng phí thời gian mà lẽ ra có thể dùng để viết mã',
      'Khi dự án có độ không chắc chắn cao (sản phẩm mới',
      'tên miền xa lạ)',
      'chi phí xây dựng sai thứ là rất cao',
      'hoặc các bên liên quan gặp khó khăn trong việc hình dung chỉ từ các yêu cầu dựa trên văn bản',
      'Chỉ khi có người thiết kế',
      ''
    ],
    answer: '2',
    explanation: 'Nguyên mẫu có độ chính xác cao là một khoản đầu tư. Chúng có giá trị khi: (1) Sản phẩm mới và chưa có mô hình tinh thần hiện có, (2) Các bên liên quan không thể đồng ý về những gì họ muốn từ thông số kỹ thuật văn bản, (3) Chi phí phát triển rất cao (ứng dụng di động, hệ thống nhúng) — rẻ hơn khi lặp lại trên nguyên mẫu, (4) Phê duyệt theo quy định yêu cầu trình diễn giao diện người dùng trước khi xây dựng, (5) Khả năng sử dụng là điểm khác biệt chính. Đối với các tính năng hoặc công cụ nội bộ được hiểu rõ, độ trung thực thấp hơn là đủ.',
  },
}
