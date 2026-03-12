import type { QuestionTranslationMap } from '../types'

export const brseVi: QuestionTranslationMap = {
  // Team Management
  'brse-tm-001': {
    question: 'Điều gì là quan trọng nhất để duy trì động lực cho nhóm phát triển offshore?',
    options: [
      'Tiếp tục tăng lương',
      'Thiết lập mục tiêu rõ ràng, đánh giá công bằng, cung cấp cơ hội phát triển và công nhận thành quả của nhóm — Động lực nội tại quan trọng hơn chỉ là tiền bạc',
      'Bắt làm thêm giờ mỗi ngày',
      'Để mặc cá nhân tự do làm mọi thứ',
    ],
    explanation: 'Thuyết động lực của Herzberg: Các yếu tố duy trì (lương, môi trường) chỉ ngăn chặn sự bất mãn, nhưng các yếu tố động lực (sự trưởng thành, sự công nhận, cảm giác thành tựu, trách nhiệm) mới thực sự nâng cao hiệu suất. BrSE nên: (1) làm rõ mục tiêu và vai trò, (2) cung cấp cơ hội nâng cao kỹ năng, (3) phản hồi cụ thể cho công việc tốt, (4) chia sẻ những lời khen ngợi từ khách hàng.',
  },
  'brse-tm-002': {
    question: 'BrSE không chỉ quản lý dự án mà còn có vai trò hỗ trợ sự phát triển sự nghiệp của các thành viên trong nhóm.',
    answer: 'Đúng',
    explanation: 'BrSE có trách nhiệm với sự phát triển của thành viên: (1) kế hoạch nâng cao kỹ năng kỹ thuật, (2) hỗ trợ nâng cao năng lực tiếng Nhật, (3) chia sẻ kiến thức nghiệp vụ, (4) giao các nhiệm vụ có trách nhiệm cao hơn một cách dần dần, (5) tư vấn nghề nghiệp qua các buổi 1on1. Sự phát triển của thành viên trực tiếp dẫn đến nâng cao chất lượng nhóm và giữ chân nhân tài.',
  },
  'brse-tm-003': {
    question: 'Điều quan trọng nhất trong việc onboarding thành viên mới là gì?',
    options: [
      'Giao nhiệm vụ quan trọng ngay từ ngày đầu tiên',
      'Thiết lập môi trường phát triển, giải thích quy định lập trình, tóm tắt dự án, chỉ định người hướng dẫn (mentor) để bắt đầu từng bước',
      'Không cần onboarding đặc biệt — để họ tự học',
      'Đưa tài liệu đào tạo là xong',
    ],
    explanation: 'Checklist onboarding: (1) môi trường phát triển (source code, công cụ, quyền truy cập), (2) tổng quan dự án (mục đích, kiến trúc, cấu trúc nhóm), (3) quy định lập trình và tiêu chuẩn review, (4) chỉ định mentor/buddy, (5) nhiệm vụ trong 2 tuần đầu (bắt đầu từ lỗi nhỏ hoặc tính năng đơn giản). Onboarding tốt giúp tăng năng suất sớm.',
  },

  // Estimation & Planning
  'brse-est-001': {
    question: '"Man-month" (người-tháng) là gì?',
    options: [
      'Số người sinh ra trong 1 tháng',
      'Đơn vị công sức của 1 người làm việc toàn thời gian trong 1 tháng (khoảng 20 ngày làm việc) — Ví dụ: "3 man-month" là 1 người làm trong 3 tháng, hoặc 3 người làm trong 1 tháng',
      'Số tiền ngân sách dự án',
      'Số lần chạy test',
    ],
    explanation: 'Man-month là đơn vị công sức phổ biến nhất trong ngành IT Nhật Bản. 1 man-month ≈ 20 man-days ≈ 160 man-hours (tính 8h/ngày). BrSE tính toán dự toán bằng man-month và trình cho khách hàng. Lưu ý: Công việc 3 man-month cho 3 người làm 1 tháng trên lý thuyết là có thể, nhưng thực tế thường mất 1.2-1.5 lần do hao hụt trong giao tiếp và phối hợp.',
  },
  'brse-est-002': {
    question: 'Trong dự toán, chỉ cần ước tính công sức phát triển là đủ. Không cần công sức quản lý hay buffer.',
    answer: 'Sai',
    explanation: 'Các hạng mục nên bao gồm trong dự toán: (1) Công sức phát triển (thiết kế + coding + unit test), (2) Công sức quản lý (công sức BrSE, quản lý tiến độ, lập báo cáo), (3) Công sức test (integration test, system test), (4) Buffer (đối phó rủi ro, 10-20% tổng thể), (5) Công sức thiết lập môi trường, (6) Công sức lập tài liệu. Chỉ dự toán phần phát triển là nguyên nhân dẫn đến các dự án thua lỗ.',
  },
  'brse-est-003': {
    question: '"Buffer" trong dự toán là gì?',
    options: [
      'Chi phí không cần thiết',
      'Công sức dự phòng thêm vào để đối phó với rủi ro hoặc vấn đề phát sinh không lường trước — thường chiếm 10-20% tổng công sức',
      'Tỷ lệ lợi nhuận',
      'Tiền làm thêm giờ',
    ],
    explanation: 'Buffer là bảo hiểm. Các loại rủi ro: (1) rủi ro thay đổi đặc tả (yêu cầu khách hàng thay đổi), (2) rủi ro kỹ thuật, (3) rủi ro nguồn lực (thành viên nghỉ việc/ốm), (4) rủi ro giao tiếp (làm lại do hiểu lầm). Offshore có xu hướng đảm bảo buffer nhiều hơn.',
  },

  // Japanese Business Comm
  'brse-jc-001': {
    question: 'Khi viết email cho khách hàng Nhật Bản để báo cáo về một lỗi nghiêm trọng, bạn nên bắt đầu như thế nào?',
    options: [
      'Vào thẳng vấn đề lỗi là gì',
      'Xin lỗi chân thành vì sự bất tiện gây ra trước khi giải thích chi tiết',
      'Đổ lỗi cho đội phát triển',
      'Nói rằng lỗi này không quan trọng',
    ],
    explanation: 'Trong văn hóa kinh doanh Nhật Bản, việc xin lỗi (O-wabii) vì đã gây ra phiền tóa cho khách hàng là bước đầu tiên cực kỳ quan trọng để duy trì mối quan hệ tin cậy, bất kể nguyên nhân kỹ thuật là gì.',
  },

  // Technical Translation
  'brse-tt-001': {
    question: 'Trong ngữ cảnh phát triển phần mềm, thuật ngữ "仕様書" (Shiyousho) thường được dịch là gì?',
    options: [
      'Bản hợp đồng',
      'Tài liệu đặc tả (Specification Document)',
      'Bản kế hoạch marketing',
      'Hướng dẫn sử dụng',
    ],
    explanation: 'Shiyousho là tài liệu cốt lõi trong phát triển phần mềm, bao gồm các đặc tả về yêu cầu, chức năng, hoặc thiết kế.',
  },

  // Offshore Process
  'brse-op-001': {
    question: 'Quy trình "Ho-Ren-So" trong làm việc với khách hàng Nhật bao gồm những gì?',
    options: [
      'Hokoku (Báo cáo), Renraku (Liên lạc), Sōdan (Thảo luận/Bàn bạc)',
      'Horu (Đào), Ren (Liên kết), Soru (Giải quyết)',
      'Hokoku (Báo cáo), Renraku (Liên lạc), Souji (Dọn dẹp)',
      'Không có quy trình nào như vậy',
    ],
    explanation: 'Ho-Ren-So là quy tắc giao tiếp cơ bản trong tổ chức Nhật Bản. Báo cáo tiến độ thường xuyên, liên lạc khi có sự cố và thảo luận khi gặp khó khăn giúp giảm thiểu rủi ro cho dự án offshore.',
  },

  // Quality Management
  'brse-qm-001': {
    question: 'Khi số lượng lỗi (bug) phát sinh trong dự án vượt quá mức cho phép trong kế hoạch chất lượng, BrSE nên làm gì?',
    options: [
      'Báo cáo với khách hàng rằng mọi thứ vẫn ổn',
      'Phân tích nguyên nhân gốc rễ (Root Cause Analysis), đưa ra đối sách khắc phục và phòng ngừa tái phát',
      'Yêu cầu đội code làm việc nhanh hơn',
      'Xóa bớt các bản ghi lỗi để đạt KPI',
    ],
    explanation: 'Khách hàng Nhật Bản rất coi trọng chất lượng. Khi có sự cố, BrSE cần minh bạch về dữ liệu, phân tích tại sao lỗi xảy ra (Why-Why analysis) và đưa ra các bước cụ thể để đảm bảo lỗi đó không lặp lại.',
  },

  // Japanese Culture
  'brse-cu-001': {
    question: '"Nemawashi" trong văn hóa công sở Nhật Bản có nghĩa là gì?',
    options: [
      'Việc trao đổi danh thiếp',
      'Quá trình chuẩn bị, thảo luận ngầm với các bên liên quan trước khi đưa ra quyết định chính thức trong cuộc họp',
      'Việc đi uống rượu sau giờ làm',
      'Việc dán nhãn sản phẩm',
    ],
    explanation: 'Nemawashi giúp tạo sự đồng thuận (consensus) từ trước. Khi vào cuộc họp chính thức, mọi người đã hiểu vấn đề và việc thông qua sẽ diễn ra suôn sẻ hơn. BrSE cần vận dụng kỹ năng này để thuyết phục khách hàng hoặc các Stakeholder.',
  },

  // Client Reporting
  'brse-cr-001': {
    question: 'Báo cáo định kỳ (báo cáo tuần, báo cáo tháng) cho khách hàng Nhật nên tập trung vào những gì?',
    options: [
      'Chỉ liệt kê những gì đã làm được',
      'Tiến độ, Chất lượng (số bug), Các vấn đề tồn đọng/Rủi ro và Đối sách giải quyết',
      'Kể về các hoạt động team building',
      'Chỉ gửi code link',
    ],
    explanation: 'Một báo cáo chuyên nghiệp cần có tính minh bạch: tiến độ (WBS), chất lượng (số lượng bug phát sinh/đã fix) và đặc biệt là liệt kê rõ các vấn đề (Issues) đang gặp phải cùng với phương án xử lý.',
  },

  // Risk Management
  'brse-rm-001': {
    question: 'Khi nhận thấy dự án có nguy cơ chậm tiến độ do thiếu hụt nhân sự, BrSE nên làm gì?',
    options: [
      'Âm thầm làm thêm giờ để bù đắp',
      'Nhận diện rủi ro sớm, báo cáo cho Project Manager và khách hàng cùng với các phương án giảm thiểu (Mitigation plan)',
      'Hy vọng khách hàng sẽ không nhận ra',
      'Đổ lỗi cho bộ phận tuyển dụng',
    ],
    explanation: 'Quản lý rủi ro (Risk Management) là kỹ năng cốt yếu. BrSE cần chủ động đưa ra các giải pháp như: điều chỉnh phạm vi (scope down), tăng cường nhân sự, hoặc ưu tiên các tính năng quan trọng nhất.',
  },

  // System Architecture Basics
  'brse-sa-001': {
    question: 'Mục đích chính của việc thiết kế API (API Design) là gì?',
    options: [
      'Để làm cho code đẹp hơn',
      'Để định nghĩa cách thức trao đổi dữ liệu giữa các thành phần của hệ thống hoặc giữa các hệ thống khác nhau một cách chuẩn hóa',
      'Để tăng tốc độ đánh máy',
      'Để thay thế hoàn toàn cơ sở dữ liệu',
    ],
    explanation: 'BrSE cần hiểu thiết kế API để trao đổi với đội phát triển và khách hàng về cách hệ thống tích hợp, các phương thức (GET, POST...), và cấu trúc dữ liệu trao đổi (JSON/XML).',
  },
}
