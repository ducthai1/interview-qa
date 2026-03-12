import type { QuestionTranslationMap } from '../types'

export const baVi: QuestionTranslationMap = {
  // Domain Knowledge
  'ba-dk-001': {
    question: 'Tại sao kiến thức nghiệp vụ (domain knowledge) lại quan trọng đối với một Business Analyst?',
    options: [
      'BA cần kiến thức nghiệp vụ để viết code cho hệ thống',
      'Kiến thức nghiệp vụ giúp BA hiểu bối cảnh kinh doanh, nói cùng ngôn ngữ với stakeholder, đặt câu hỏi tốt hơn và xác định các lỗ hổng mà người không có chuyên môn sẽ bỏ lỡ',
      'Kiến thức nghiệp vụ chỉ quan trọng đối với BA cấp cao',
      'Kiến thức nghiệp vụ thay thế cho các kỹ thuật thu thập yêu cầu',
    ],
    explanation: 'Một BA có kiến thức nghiệp vụ có thể: (1) hiểu các thuật ngữ và khái niệm chuyên ngành mà không cần giải thích liên tục, (2) xác định các yêu cầu ngầm định mà stakeholder cho là hiển nhiên, (3) dự đoán các nhu cầu về quy định và tuân thủ, (4) thách thức các yêu cầu phi thực tế dựa trên kinh nghiệm thực tế, (5) xây dựng uy tín với các bên liên quan. Kiến thức nghiệp vụ là đòn bẩy cho tất cả các kỹ năng BA khác.',
  },
  'ba-dk-002': {
    question: 'Trong thương mại điện tử, "SKU" viết tắt của từ gì?',
    options: [
      'Standard Knowledge Unit',
      'Stock Keeping Unit — mã định danh duy nhất cho từng sản phẩm và biến thể riêng biệt',
      'Sales Key Update',
      'System Knowledge Utility',
    ],
    explanation: 'SKU (Stock Keeping Unit) định danh duy nhất cho từng biến thể sản phẩm trong quản lý kho. Ví dụ: "Áo thun xanh size M" có SKU khác với "Áo thun xanh size L". BA làm về thương mại điện tử phải hiểu SKU để quản lý kho, xử lý đơn hàng và báo cáo.',
  },
  'ba-dk-003': {
    question: 'Trong các ứng dụng fintech, KYC (Know Your Customer) là một quy trình tùy chọn mà công ty có thể bỏ qua để cải thiện trải nghiệm người dùng.',
    answer: 'Sai',
    explanation: 'KYC (Know Your Customer) là yêu cầu quy định bắt buộc đối với các tổ chức tài chính ở hầu hết các quốc gia. Nó bao gồm xác minh danh tính khách hàng, đánh giá rủi ro và giám sát giao dịch để ngăn chặn rửa tiền (AML), gian lận và tài trợ khủng bố. Bỏ qua KYC có thể dẫn đến hậu quả pháp lý nghiêm trọng, phạt tiền và thu hồi giấy phép. BA phải thiết kế hệ thống cân bằng giữa tuân thủ KYC và trải nghiệm người dùng.',
  },
  'ba-dk-004': {
    question: 'Trong CNTT y tế, thuật ngữ "HL7" đề cập đến điều gì?',
    options: [
      'Một ngôn ngữ lập trình cho các thiết bị y tế',
      'Health Level Seven — một bộ tiêu chuẩn quốc tế để trao đổi, tích hợp, chia sẻ và truy xuất thông tin sức khỏe điện tử',
      'Một loại cơ sở dữ liệu bệnh viện',
      'Một hệ thống phân loại chẩn đoán y khoa',
    ],
    explanation: 'HL7 (Health Level Seven International) định nghĩa các tiêu chuẩn trao đổi dữ liệu y tế. HL7 v2 sử dụng các thông điệp phân cách bằng dấu gạch đứng (phổ biến nhất). HL7 FHIR là tiêu chuẩn hiện đại dựa trên REST. BA trong ngành y tế phải hiểu HL7 để xác định yêu cầu tích hợp giữa các hệ thống lâm sàng (EHR, phòng xét nghiệm, nhà thuốc, thanh toán).',
  },
  'ba-dk-005': {
    question: 'Hệ thống ERP là gì và nó thường bao gồm những lĩnh vực kinh doanh nào?',
    options: [
      'ERP (Error Recovery Protocol) là một hệ thống phục hồi sau thảm họa',
      'ERP (Enterprise Resource Planning) là hệ thống quản lý doanh nghiệp hợp nhất bao gồm tài chính, nhân sự, mua sắm, kho bãi, sản xuất, bán hàng và CRM trên một nền tảng duy nhất',
      'ERP là một phương pháp quản lý dự án như Scrum',
      'ERP là một loại cơ sở dữ liệu được các doanh nghiệp sử dụng',
    ],
    explanation: 'Hệ thống ERP (như SAP, Oracle, Microsoft Dynamics) tích hợp các quy trình kinh doanh cốt lõi. Các module chính: Tài chính, Nhân sự, Chuỗi cung ứng, Sản xuất, Bán hàng & CRM. BA làm dự án ERP phải hiểu sự phụ thuộc chéo giữa các module — thay đổi ở một module sẽ ảnh hưởng đến các module khác.',
  },
  'ba-dk-006': {
    question: 'Trong logistics, "last-mile delivery" (giao hàng chặng cuối) đề cập đến điều gì?',
    options: [
      'Bước đầu tiên của quy trình giao hàng từ kho đến trung tâm phân phối',
      'Chặng cuối cùng của quá trình giao hàng từ kho phân phối đến tận tay khách hàng — thường là phần tốn kém và phức tạp nhất trong chuỗi cung ứng',
      'Quy trình trả lại sản phẩm cho nhà sản xuất',
      'Vận chuyển đường dài giữa các quốc gia',
    ],
    explanation: 'Giao hàng chặng cuối là bước cuối cùng (và thường tốn kém nhất): từ kho hàng địa phương đến cửa nhà khách hàng. Nó chiếm khoảng 53% tổng chi phí vận chuyển do: các đơn hàng lẻ tẻ, tắc đường đô thị, giao hàng không thành công và khung giờ của khách hàng. BA trong ngành logistics tập trung tối ưu hóa điều này thông qua tối ưu hóa lộ trình, khung giờ giao hàng, theo dõi thời gian thực và các điểm nhận hàng thay thế.',
  },
  'ba-dk-007': {
    question: 'Thiết kế các yêu cầu chức năng chính cho một ứng dụng "ví điện tử" fintech. Bao gồm các tính năng cốt lõi, yêu cầu quy định và cân nhắc bảo mật.',
    answer: 'Ví điện tử — Các yêu cầu chức năng chính:\n\n1. Quản lý tài khoản:\n- Đăng ký người dùng với xác minh KYC (tải ID, chụp selfie, bằng chứng địa chỉ)\n- Phân tầng tài khoản dựa trên mức độ xác minh (Tầng 1: hạn chế, Tầng 2: đầy đủ)\n- Quản lý hồ sơ, liên kết tài khoản ngân hàng/thẻ\n\n2. Các nghiệp vụ tiền tệ:\n- Nạp tiền: chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, nạp tiền mặt tại các điểm đối tác\n- Chuyển tiền: chuyển tiền P2P (qua số điện thoại/email), thanh toán mã QR\n- Thanh toán hóa đơn: tiện ích, viễn thông, bảo hiểm, phí chính phủ\n- Rút tiền: về tài khoản ngân hàng đã liên kết, tại ATM qua rút tiền không cần thẻ\n\n3. Quản lý giao dịch:\n- Lịch sử giao dịch với các bộ lọc (ngày, loại, số tiền, trạng thái)\n- Biên lai giao dịch (có thể tải xuống, chia sẻ)\n- Lập lịch thanh toán định kỳ\n- Hạn mức giao dịch (hàng ngày/hàng tháng) theo tầng\n\n4. Yêu cầu quy định:\n- Tuân thủ KYC/AML (xác minh danh tính, giám sát giao dịch)\n- Báo cáo giao dịch đáng ngờ (STR) cho cơ quan tài chính\n- Lưu trữ dữ liệu theo yêu cầu quy định (thường là 5-7 năm)\n- Tuân thủ giấy phép tiền điện tử\n- Bảo vệ người tiêu dùng: giải quyết tranh chấp, chính sách hoàn tiền\n\n5. Bảo mật:\n- Xác thực đa yếu tố (sinh trắc học + PIN)\n- Liên kết thiết bị và quản lý thiết bị tin cậy\n- Ký giao dịch cho các giao dịch giá trị cao\n- Phát hiện gian lận thời gian thực (kiểm tra tần suất, bất thường vị trí, dấu vân tay thiết bị)\n- Token hóa thẻ (không lưu trữ dữ liệu thẻ thô)',
    explanation: 'BA trong lĩnh vực Fintech phải cân bằng giữa trải nghiệm người dùng với các yêu cầu quy định chặt chẽ. Tuân thủ KYC/AML là bắt buộc nhưng phải được thiết kế để giảm thiểu ma sát (ví dụ: xác minh theo tầng). Các tính năng bảo mật phải mạnh mẽ nhưng không làm cho ứng dụng không thể sử dụng được. Hiểu biết về bối cảnh quy định là điều cần thiết cho công việc BA nghiệp vụ fintech.',
  },
  'ba-dk-008': {
    question: 'Khi làm việc trong dự án e-commerce, "tỷ lệ bỏ giỏ hàng" (cart abandonment rate) đo lường điều gì và tại sao nó lại quan trọng đối với BA?',
    options: [
      'Tỷ lệ xe đẩy bị hỏng trong các cửa hàng vật lý',
      'Tỷ lệ phần trăm người dùng thêm mặt hàng vào giỏ nhưng rời đi mà không hoàn tất thanh toán — nó tiết lộ các điểm ma sát trong UX và cung cấp thông tin cho việc tối ưu hóa thanh toán',
      'Tỷ lệ các sản phẩm bị xóa khỏi danh mục',
      'Tốc độ tải trang giỏ hàng',
    ],
    explanation: 'Tỷ lệ bỏ giỏ hàng (toàn cầu ~70%) đo lường doanh thu bị mất. Các nguyên nhân phổ biến mà BA nên giải quyết: chi phí vận chuyển bất ngờ, yêu cầu tạo tài khoản, quy trình thanh toán phức tạp, lo ngại về bảo mật và hạn chế phương thức thanh toán. BA có thể xác định các yêu cầu thử nghiệm A/B để tối ưu hóa chuyển đổi thanh toán.',
  },

  // User Story & Use Case
  'ba-us-001': {
    question: 'Cấu trúc tiêu chuẩn của một User Story là gì?',
    options: [
      'Là [một người dùng], tôi muốn [thực hiện hành động] để [nhận giá trị]',
      'Hệ thống sẽ cho phép người dùng [thực hiện hành động]',
      '[Hành động] được thực hiện bởi [người dùng]',
      'Khi [điều kiện], thì [kết quả]',
    ],
    explanation: 'Cấu trúc "As a [role], I want [action], so that [value]" giúp BA tập trung vào người dùng và lợi ích kinh doanh hơn là các chi tiết kỹ thuật.',
  },
  'ba-us-002': {
    question: 'Tiêu chuẩn INVEST trong User Story là viết tắt của những từ nào?',
    options: [
      'Independent, Negotiable, Valuable, Estimable, Small, Testable',
      'Important, Necessary, Valuable, Effective, Smart, Targeted',
      'Independent, New, Valid, Easy, Simple, Total',
      'Integration, Network, Value, Entry, System, Task',
    ],
    explanation: 'INVEST là một checklist để đánh giá chất lượng của User Story. Story tốt phải độc lập, có thể thương lượng, mang lại giá trị, có thể ước lượng, đủ nhỏ và có thể kiểm thử.',
  },

  // Business Process (BPMN)
  'ba-bp-001': {
    question: 'Trong BPMN, "Pool" và "Lane" khác nhau như thế nào?',
    options: [
      'Pool đại diện cho một người, Lane đại diện cho một phòng ban',
      'Pool đại diện cho một tổ chức/tiến trình chính, Lane đại diện cho các vai trò/phòng ban khác nhau trong Pool đó',
      'Pool là nơi lưu trữ dữ liệu, Lane là đường dẫn dữ liệu',
      'Không có sự khác biệt, chúng có thể dùng thay thế nhau',
    ],
    explanation: 'Pool thường đại diện cho một thực thể hoặc tổ chức (ví dụ: Khách hàng, Ngân hàng). Lane (làn bơi) phân chia các vai trò hoặc bộ phận bên trong thực thể đó để làm rõ ai thực hiện nhiệm vụ nào.',
  },

  // Stakeholder Management
  'ba-sm-001': {
    question: 'Ma trận Quyền hạn - Lợi ích (Power-Interest Matrix) giúp BA điều gì?',
    options: [
      'Xác định xem ai là sếp của ai',
      'Phân loại các bên liên quan để đưa ra chiến lược giao tiếp phù hợp',
      'Tính toán lương cho các bên liên quan',
      'Quyết định ai sẽ bị đuổi khỏi dự án',
    ],
    explanation: 'Ma trận này giúp BA biết ai cần được "Quản lý chặt chẽ" (Quyền cao, Lợi ích cao), ai cần "Giữ cho hài lòng" (Quyền cao, Lợi ích thấp), hay ai chỉ cần "Giám sát" hoặc "Cung cấp thông tin".',
  },

  // Data Analysis & SQL
  'ba-da-001': {
    question: 'Trong SQL, lệnh GROUP BY thường được sử dụng cùng với cái gì?',
    options: [
      'Các hàm tổng hợp (Aggregate functions) như SUM, AVG, COUNT',
      'Lệnh INSERT',
      'Phát biểu CREATE TABLE',
      'Chỉ dành cho các cột chứa văn bản',
    ],
    explanation: 'GROUP BY được dùng để nhóm các hàng có cùng giá trị trong các cột được chỉ định, thường là để thực hiện tính toán trên từng nhóm đó bằng các hàm tổng hợp.',
  },

  // Wireframe & Prototyping
  'ba-wp-001': {
    question: 'Mục đích chính của Wireframe là gì?',
    options: [
      'Để cho khách hàng thấy màu sắc và hình ảnh cuối cùng của ứng dụng',
      'Để mô tả cấu trúc, bố cục và các chức năng chính của giao diện mà không tập trung vào chi tiết thẩm mỹ',
      'Để viết code cho giao diện',
      'Để kiểm tra hiệu năng của hệ thống',
    ],
    explanation: 'Wireframe là "bản vẽ xương cá" của giao diện, giúp các bên liên quan thống nhất về cấu trúc và dòng chảy của ứng dụng trước khi chuyển sang giai đoạn thiết kế đồ họa chi tiết.',
  },

  // Communication & Negotiation
  'ba-cn-001': {
    question: 'Khi một Stakeholder yêu cầu một tính năng mới vào cuối dự án (Scope Creep), BA nên làm gì đầu tiên?',
    options: [
      'Đồng ý ngay lập tức để giữ quan hệ tốt',
      'Từ chối ngay lập tức vì đã hết thời gian',
      'Phân tích tác động của yêu cầu đó đối với thời gian, chi phí và nguồn lực của dự án',
      'Yêu cầu Stakeholder tự đi nói chuyện với đội code',
    ],
    explanation: 'Đánh giá tác động (Impact Analysis) là bước quan trọng nhất. BA cần cung cấp dữ liệu về việc tính năng mới sẽ ảnh hưởng thế nào đến tiến độ dự án để các bên liên quan có thể đưa ra quyết định sáng suốt.',
  },

  // UAT & Quality
  'ba-uat-001': {
    question: 'Khác biệt chính giữa System Testing và User Acceptance Testing (UAT) là gì?',
    options: [
      'System Testing do QC thực hiện để kiểm tra kỹ thuật; UAT do người dùng cuối thực hiện để kiểm tra mức độ đáp ứng nhu cầu nghiệp vụ',
      'System Testing kiểm tra mã nguồn; UAT kiểm tra giao diện',
      'UAT luôn tốn nhiều thời gian hơn System Testing',
      'Không có sự khác biệt',
    ],
    explanation: 'System Testing tập trung vào việc hệ thống có chạy đúng theo thiết kế không. UAT tập trung vào việc hệ thống có giải quyết được vấn đề thực tế của người dùng và sẵn sàng để sử dụng (Go-live) hay không.',
  },

  // System Integration
  'ba-si-001': {
    question: 'Tại sao BA cần hiểu về API khi làm dự án tích hợp hệ thống?',
    options: [
      'Để tự viết code tích hợp',
      'Để hiểu luồng dữ liệu, các điểm chạm giữa các hệ thống và xác định các yêu cầu về dữ liệu trao đổi',
      'Để sửa lỗi server',
      'API không liên quan gì đến công việc của BA',
    ],
    explanation: 'Mặc dù không cần viết code, BA cần hiểu API để biết thông tin nào được truyền đi, thông tin nào nhận về, và các ràng buộc nghiệp vụ giữa các hệ thống được kết nối.',
  },

  // Requirements Engineering
  'ba-re-001': {
    question: 'Sự khác biệt chính giữa Business Requirements (Yêu cầu kinh doanh) và Functional Requirements (Yêu cầu chức năng) là gì?',
    options: [
      'Không có sự khác biệt; chúng là những thuật ngữ có thể thay thế cho nhau',
      'Yêu cầu kinh doanh mô tả TẠI SAO dự án được thực hiện (mục tiêu cấp cao), trong khi yêu cầu chức năng mô tả HỆ THỐNG NÊN LÀM GÌ để đạt được mục tiêu đó',
      'Yêu cầu kinh doanh được viết bởi lập trình viên, yêu cầu chức năng được viết bởi khách hàng',
      'Yêu cầu chức năng quan trọng hơn yêu cầu kinh doanh',
    ],
    explanation: 'Yêu cầu kinh doanh (BR) là mục tiêu cấp cao của tổ chức (ví dụ: "Giảm 20% thời gian xử lý đơn hàng"). Yêu cầu chức năng (FR) là các hành vi cụ thể của phần mềm (ví dụ: "Hệ thống sẽ tự động gửi email xác nhận khi đơn hàng được đặt"). Yêu cầu chức năng phục vụ cho việc hiện thực hóa yêu cầu kinh doanh.',
  },
  'ba-re-002': {
    question: 'Kỹ thuật "MoSCoW" được dùng để làm gì trong quản lý yêu cầu?',
    options: [
      'Để dịch yêu cầu sang các ngôn ngữ khác nhau',
      'Để ưu tiên các yêu cầu thành: Must have (Phải có), Should have (Nên có), Could have (Có thể có), và Won\'t have (Không có lần này)',
      'Để đo lường hiệu suất của nhóm phát triển',
      'Để thiết kế giao diện người dùng',
    ],
    explanation: 'MoSCoW là kỹ thuật ưu tiên phổ biến. Must have: Bắt buộc để sản phẩm hoạt động. Should have: Quan trọng nhưng có thể trì hoãn. Could have: Các tính năng mong muốn thêm vào nếu có tài nguyên. Won\'t have: Không thực hiện trong phiên bản/giai đoạn hiện tại. Điều này giúp quản lý kỳ vọng của stakeholder và phạm vi dự án.',
  },

  // Agile & Scrum
  'ba-as-001': {
    question: 'Trong mô hình Scrum, ai là người chịu trách nhiệm tối đa hóa giá trị của sản phẩm?',
    options: [
      'Scrum Master',
      'Product Owner (PO)',
      'Nhóm phát triển (Development Team)',
      'Project Manager',
    ],
    explanation: 'Product Owner chịu trách nhiệm quản lý Product Backlog và đảm bảo nhóm làm việc trên những mục mang lại giá trị cao nhất cho khách hàng và doanh nghiệp.',
  },
  'ba-as-002': {
    question: 'Sự khác biệt giữa "Product Backlog" và "Sprint Backlog" là gì?',
    options: [
      'Product Backlog dành cho PO, Sprint Backlog dành cho Scrum Master',
      'Product Backlog là danh sách ưu tiên tất cả các tính năng của sản phẩm; Sprint Backlog là tập hợp các mục được chọn từ Product Backlog để hoàn thành trong một Sprint cụ thể',
      'Không có sự khác biệt',
      'Sprint Backlog chứa các yêu cầu từ khách hàng, Product Backlog chứa các lỗi cần sửa',
    ],
    explanation: 'Product Backlog là danh sách tổng thể và liên tục thay đổi. Sprint Backlog là kế hoạch chi tiết cho một Sprint duy nhất.',
  },

  // Documentation
  'ba-doc-001': {
    question: 'Tài liệu BRD (Business Requirements Document) thường bao gồm những gì?',
    options: [
      'Code snippet và sơ đồ database',
      'Bối cảnh dự án, mục tiêu kinh doanh, phạm vi, các bên liên quan, và các yêu cầu kinh doanh cấp cao',
      'Chỉ danh sách các lỗi cần sửa',
      'Kế hoạch marketing sản phẩm',
    ],
    explanation: 'BRD tập trung vào "Cái gì" và "Tại sao" từ góc độ doanh nghiệp, giúp định hướng cho các tài liệu chi tiết sau này như SRS.',
  },
  'ba-doc-002': {
    question: 'Sơ đồ Use Case dùng để mô tả điều gì?',
    options: [
      'Cấu trúc bên trong của code',
      'Sự tương tác giữa các tác nhân (Actor) và hệ thống để đạt được một mục tiêu cụ thể',
      'Lịch trình dự án',
      'Thiết kế database',
    ],
    explanation: 'Sơ đồ Use Case giúp xác định phạm vi hệ thống và các chức năng chính mà người dùng hoặc hệ thống khác cần tương tác.',
  },
}
