export const vi = {
  /* ─── Common ───────────────────────────────────────────────────────────────── */
  common: {
    loading: 'Đang tải câu hỏi...',
    questions: 'câu hỏi',
    correct: 'đúng',
    answered: 'Đã trả lời',
    accuracy: 'Độ chính xác',
    done: 'hoàn thành',
    showAnswer: 'Xem đáp án',
    submit: 'Gửi',
    previous: 'Trước',
    next: 'Tiếp',
    finish: 'Hoàn thành',
    tryAgain: 'Thử lại',
    clearFilters: 'Xóa bộ lọc',
    loadMore: 'Xem thêm',
    noResults: 'Không tìm thấy câu hỏi phù hợp.',
    answer: 'Đáp án',
    explanation: 'Giải thích',
    reference: 'Tham khảo',
    yourApproach: 'Cách tiếp cận của bạn',
    yourSolution: 'Giải pháp của bạn',
    yourFix: 'Cách sửa của bạn',
    empty: '(trống)',
  },

  /* ─── Header / Nav ────────────────────────────────────────────────────────── */
  nav: {
    brand: 'FE Interview Hub',
    topics: 'Chủ đề',
    practice: 'Luyện tập',
    mockInterview: 'Phỏng vấn thử',
    stats: 'Thống kê',
    switchTheme: 'Chuyển sang chế độ {{mode}}',
  },

  /* ─── Home Page ────────────────────────────────────────────────────────────── */
  home: {
    title: 'Luyện Phỏng Vấn Frontend',
    subtitle: '{{count}}+ câu hỏi phỏng vấn thực tế về React, TypeScript, CSS và nhiều hơn nữa. Không cần đăng nhập. Bắt đầu ngay.',
    totalQuestions: 'Tổng câu hỏi',
    chooseATopic: 'Chọn chủ đề',
  },

  /* ─── Filter Bar ───────────────────────────────────────────────────────────── */
  filter: {
    searchPlaceholder: 'Tìm kiếm câu hỏi...',
    topics: 'Chủ đề',
    difficulty: 'Độ khó',
    questionType: 'Loại câu hỏi',
    junior: 'Junior',
    mid: 'Mid',
    senior: 'Senior',
    lead: 'Lead',
    mcq: 'Trắc nghiệm',
    codeOutput: 'Dự đoán output',
    trueFalse: 'Đúng/Sai',
    debug: 'Sửa lỗi',
    codeWrite: 'Viết code',
    systemDesign: 'Thiết kế hệ thống',
  },

  /* ─── Practice Page ────────────────────────────────────────────────────────── */
  practice: {
    title: 'Luyện tập',
    showing: 'Hiển thị {{shown}} / {{total}} câu hỏi',
  },

  /* ─── Pagination ─────────────────────────────────────────────────────────── */
  pagination: {
    first: 'Trang đầu',
    previous: 'Trang trước',
    next: 'Trang sau',
    last: 'Trang cuối',
  },

  /* ─── Mock Interview ───────────────────────────────────────────────────────── */
  mock: {
    title: 'Phỏng vấn thử',
    description: '{{count}} câu hỏi ngẫu nhiên, {{minutes}} phút. Thử thách bản thân như buổi phỏng vấn thật!',
    start: 'Bắt đầu phỏng vấn',
    complete: 'Phỏng vấn hoàn tất!',
    wrong: 'Sai',
    questionProgress: 'Câu {{current}} / {{total}}',
  },

  /* ─── Stats Page ───────────────────────────────────────────────────────────── */
  stats: {
    title: 'Thống kê của bạn',
    byTopic: 'Theo chủ đề',
    bookmarked: 'Đã đánh dấu',
    bookmarkedCount: '{{count}} câu hỏi đã đánh dấu',
    resetAll: 'Xóa toàn bộ tiến trình',
  },

  /* ─── Question Card ────────────────────────────────────────────────────────── */
  question: {
    multipleChoice: 'Trắc nghiệm',
    codeOutput: 'Dự đoán Output',
    trueFalse: 'Đúng / Sai',
    debug: 'Sửa lỗi',
    codeWrite: 'Viết Code',
    systemDesign: 'Thiết kế hệ thống',
    solutionCode: 'Code đã sửa',
    resultCorrect: 'Chính xác!',
    resultIncorrect: 'Chưa đúng — xem đáp án bên dưới.',
    selfRatePrompt: 'Bạn tự đánh giá thế nào?',
    selfRateCorrect: 'Tôi làm đúng',
    selfRateIncorrect: 'Tôi cần xem lại',
    addBookmark: 'Đánh dấu',
    removeBookmark: 'Bỏ đánh dấu',
    retry: 'Làm lại',
    attemptCount: 'Lần thử #{{count}}',
  },

  /* ─── Code Output Interaction ──────────────────────────────────────────────── */
  codeOutputInteraction: {
    placeholder: 'Nhập kết quả dự đoán...',
    submitAnswer: 'Gửi đáp án',
    skip: 'Bỏ qua — xem đáp án luôn',
    correct: 'Chính xác!',
    incorrect: 'Sai — đáp án đúng được hiển thị bên dưới.',
  },

  /* ─── Debug Interaction ────────────────────────────────────────────────────── */
  debugInteraction: {
    label: 'Sửa lỗi trong đoạn code dưới đây:',
    submitFix: 'Gửi bài sửa',
    showAnswer: 'Xem cách sửa đúng',
  },

  /* ─── Code Write Interaction ───────────────────────────────────────────────── */
  codeWriteInteraction: {
    label: 'Viết giải pháp của bạn:',
    placeholder: '// Viết code ở đây...',
    submitCompare: 'Gửi & So sánh',
    showModelAnswer: 'Xem đáp án mẫu',
  },

  /* ─── System Design Interaction ────────────────────────────────────────────── */
  systemDesignInteraction: {
    label: 'Mô tả cách tiếp cận thiết kế của bạn:',
    placeholder: 'Mô tả kiến trúc, thành phần chính, luồng dữ liệu, đánh đổi...',
    submitCompare: 'Gửi & So sánh',
    showModelAnswer: 'Xem đáp án mẫu',
  },
}
