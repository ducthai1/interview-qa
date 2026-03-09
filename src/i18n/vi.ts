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
    true: 'Đúng',
    false: 'Sai',
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
    review: 'Ôn tập',
    mockInterview: 'Phỏng vấn thử',
    challenge: 'Thử thách',
    stats: 'Thống kê',
    learningPath: 'Lộ trình',
    switchTheme: 'Chuyển sang chế độ {{mode}}',
  },

  /* ─── Challenge Page ───────────────────────────────────────────────────────── */
  challenge: {
    title: 'Thử thách có giờ',
    subtitle: 'Kiểm tra dưới áp lực. Độ chính xác + tốc độ = điểm cao hơn.',
    quick: 'Nhanh',
    standard: 'Tiêu chuẩn',
    hard: 'Khó',
    questions: '{{count}} câu',
    minutes: '{{count}} phút',
    bestScore: 'Kỷ lục: {{score}}',
    noBest: 'Chưa có kỷ lục',
    start: 'Bắt đầu',
    timeLeft: 'Thời gian còn',
    timeUp: 'Hết giờ!',
    score: 'Điểm',
    newBest: 'Kỷ lục mới!',
    tryAgain: 'Thử lại',
    backToMenu: 'Quay lại',
    selectLevel: 'Trình độ của bạn',
    selectLevelHint: 'Chúng tôi sẽ thêm vài câu khó hơn để đánh giá tiềm năng',
    questionOf: 'Câu {{current}}/{{total}}',
    finishEarly: 'Kết thúc sớm',
    timeUsed: 'Thời gian',
  },

  /* ─── Review Page ──────────────────────────────────────────────────────────── */
  review: {
    title: 'Ôn tập thông minh',
    dueCount: '{{count}} câu cần ôn',
    noDue: 'Không có câu nào cần ôn!',
    noDueHint: 'Hãy trả lời một số câu hỏi trước...',
    startReview: 'Bắt đầu ôn tập',
    progress: 'Đã ôn {{current}}/{{total}}',
    complete: 'Hoàn thành ôn tập!',
    summary: '{{correct}} đúng, {{incorrect}} cần luyện thêm',
    boxLabel: 'Hộp {{box}}',
    boxStats: '{{count}} câu',
    nextReview: 'Ôn lại sau {{time}}',
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
    recommended: 'Đề xuất cho bạn',
    recommendedHint: 'Dựa trên điểm yếu và tiến trình học tập',
  },

  /* ─── Next Steps (post-session guidance) ───────────────────────────────────── */
  nextSteps: {
    title: 'Bước tiếp theo?',
    weakTopics: 'Tập trung vào điểm yếu',
    reviewDue: '{{count}} câu cần ôn tập',
    continuePath: 'Tiếp tục lộ trình học',
    practiceMore: 'Luyện tập thêm',
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
    selectLevel: 'Trình độ của bạn',
    selectLevelHint: 'Chúng tôi sẽ thêm vài câu khó hơn để đánh giá tiềm năng',
  },

  /* ─── Stats Page ───────────────────────────────────────────────────────────── */
  stats: {
    title: 'Thống kê của bạn',
    byTopic: 'Theo chủ đề',
    bookmarked: 'Đã đánh dấu',
    bookmarkedCount: '{{count}} câu hỏi đã đánh dấu',
    resetAll: 'Xóa toàn bộ tiến trình',
    radarTitle: 'Điểm mạnh theo chủ đề',
    trendTitle: 'Xu hướng chính xác (30 ngày)',
    heatmapTitle: 'Hoạt động',
    weakAreas: 'Điểm yếu — Tập trung ở đây',
    practiceNow: 'Luyện ngay',
    needsWork: 'Cần cải thiện',
    improving: 'Đang tiến bộ',
    noData: 'Trả lời câu hỏi để xem thống kê!',
    activeDays: '{{count}} ngày hoạt động',
    answersOnDay: '{{count}} câu trả lời ngày {{date}}',
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
    showHint: 'Xem gợi ý',
    hintNumber: 'Gợi ý {{number}}',
    noMoreHints: 'Hết gợi ý',
    optionWrong: 'Tại sao sai',
    selfRateNailed: 'Hoàn toàn đúng',
    selfRatePartial: 'Đúng một phần',
    flagQuestion: 'Báo câu hỏi không rõ',
    unflagQuestion: 'Bỏ báo cáo',
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

  /* ─── Streak & Daily Goal ──────────────────────────────────────────────────── */
  streak: {
    current: '{{count}} ngày liên tiếp',
    longest: 'Kỷ lục: {{count}} ngày',
    dailyGoal: '{{done}} / {{goal}} hôm nay',
    goalReached: 'Đạt mục tiêu hôm nay!',
    setGoal: 'Đặt mục tiêu',
  },

  /* ─── Learning Paths ───────────────────────────────────────────────────────── */
  path: {
    title: 'Lộ trình học tập',
    subtitle: 'Theo lộ trình có cấu trúc để nắm vững kỹ năng phát triển frontend.',
    steps: '{{count}} chủ đề',
    locked: 'Đã khóa — hoàn thành {{topic}} trước',
    unlocked: 'Có thể học',
    completed: 'Hoàn thành',
    current: 'Đang học',
    completionRequired: 'Cần {{percent}}% để mở khóa tiếp',
    startPath: 'Bắt đầu lộ trình',
    continuePath: 'Tiếp tục',
    estimatedDays: '~{{days}} ngày còn lại',
    noEstimate: 'Trả lời thêm câu hỏi để ước tính',
  },

  /* ─── Share Results ─────────────────────────────────────────────────────────── */
  share: {
    button: 'Chia sẻ kết quả',
    copy: 'Sao chép',
    download: 'Tải PNG',
    share: 'Chia sẻ...',
    copied: 'Đã sao chép!',
    downloading: 'Đang tải...',
    tagline: 'Luyện Phỏng Vấn Frontend',
    mockResult: 'Kết quả phỏng vấn thử',
    challengeResult: 'Kết quả thử thách',
    statsResult: 'Tiến trình của tôi',
  },

  /* ─── Bookmarks Page ───────────────────────────────────────────────────────── */
  bookmarks: {
    empty: 'Chưa có câu hỏi nào được đánh dấu. Hãy đánh dấu khi luyện tập!',
    goToPractice: 'Đi luyện tập',
    showing: '{{start}}–{{end}} / {{total}} đã đánh dấu',
  },

  /* ─── Related Questions ─────────────────────────────────────────────────────── */
  related: {
    title: 'Câu hỏi liên quan',
    hint: 'Các khái niệm tương tự bạn có thể luyện tập',
  },

  /* ─── Difficulty Suggestion ──────────────────────────────────────────────────── */
  difficulty: {
    suggestion: 'Dựa trên kết quả của bạn',
    tryHarder: 'Bạn đang làm tốt ở {{level}}! Thử {{nextLevel}} nhé.',
    reviewEasier: 'Hãy ôn lại {{prevLevel}} trước.',
    dismiss: 'Bỏ qua',
  },

  /* ─── AI Feedback ───────────────────────────────────────────────────────────── */
  ai: {
    getReview: 'AI Đánh giá',
    reviewing: 'AI đang đánh giá...',
    score: 'Điểm: {{score}}/10',
    suggestions: 'Gợi ý cải thiện',
    noKey: 'Cấu hình API key để dùng AI',
    limitReached: 'Đã đạt giới hạn ngày ({{used}}/{{limit}})',
    settings: 'Cài đặt AI',
    provider: 'Nhà cung cấp AI',
    apiKey: 'API Key',
    apiKeyHint: 'Lưu cục bộ, không gửi lên server',
    dailyLimit: 'Giới hạn hàng ngày',
    usage: 'Đã dùng {{used}}/{{limit}} hôm nay',
    testConnection: 'Kiểm tra kết nối',
    testSuccess: 'Kết nối thành công!',
    testFailed: 'Kết nối thất bại: {{error}}',
    save: 'Lưu cài đặt',
    none: 'Không dùng',
    groqHint: 'Groq hoàn toàn miễn phí! 14,400 requests/ngày. Lấy key tại console.groq.com',
    geminiHint: 'Gemini API hoàn toàn miễn phí! Lấy key tại aistudio.google.com',
    openaiHint: 'OpenAI yêu cầu tài khoản trả phí.',
    anthropicHint: 'Anthropic yêu cầu backend proxy và tài khoản trả phí.',
    groqKeyLink: '→ Lấy API key miễn phí tại Groq Console',
    geminiKeyLink: '→ Lấy API key miễn phí tại Google AI Studio',
    cancel: 'Hủy',
    freeTier: 'Miễn phí',
    paidApi: 'Trả phí',
  },

  /* ─── Export/Import ──────────────────────────────────────────────────────── */
  backup: {
    export: 'Xuất tiến trình',
    import: 'Nhập tiến trình',
    exportHint: 'Tải xuống tiến trình dưới dạng file JSON',
    importHint: 'Khôi phục từ file đã xuất trước đó',
    importSuccess: 'Khôi phục thành công! Đang tải lại...',
    importError: 'File không hợp lệ. Vui lòng chọn file backup đúng.',
    confirmImport: 'Thao tác này sẽ thay thế tiến trình hiện tại. Tiếp tục?',
  },

  /* ─── Custom Session ─────────────────────────────────────────────────────── */
  session: {
    title: 'Phiên luyện tập tùy chỉnh',
    subtitle: 'Tạo phiên luyện tập riêng với cài đặt tùy chọn.',
    questionCount: 'Số lượng câu hỏi',
    timeLimit: 'Giới hạn thời gian (tùy chọn)',
    noTimeLimit: 'Không giới hạn',
    minutesSuffix: '{{count}} phút',
    mixTopics: 'Trộn chủ đề',
    selectTopics: 'Chọn chủ đề',
    allTopics: 'Tất cả chủ đề',
    startSession: 'Bắt đầu',
    sessionProgress: 'Câu {{current}} / {{total}}',
    sessionComplete: 'Hoàn thành phiên!',
    timeUp: 'Hết giờ!',
    reviewWrong: 'Xem lại câu sai',
    wrongAnswers: '{{count}} câu sai',
    noWrong: 'Điểm tuyệt đối!',
    backToSetup: 'Phiên mới',
  },

  /* ─── Mistake Patterns ───────────────────────────────────────────────────── */
  patterns: {
    title: 'Phân tích lỗi sai',
    subtitle: 'Các khái niệm bạn hay sai nhất',
    tag: '{{tag}}',
    wrongRate: '{{wrong}} sai / {{total}} tổng',
    noData: 'Trả lời thêm câu hỏi để xem phân tích',
    topMistakes: 'Lỗi phổ biến nhất',
  },

  /* ─── Pomodoro ───────────────────────────────────────────────────────────── */
  pomodoro: {
    title: 'Chế độ tập trung',
    study: 'Học',
    break: 'Nghỉ',
    start: 'Bắt đầu tập trung',
    pause: 'Tạm dừng',
    resume: 'Tiếp tục',
    skip: 'Bỏ qua nghỉ',
    sessionCount: 'Phiên {{current}}',
    studyTime: '{{minutes}} phút học',
    breakTime: '{{minutes}} phút nghỉ',
  },
}
