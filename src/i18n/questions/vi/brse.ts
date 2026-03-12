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
}
