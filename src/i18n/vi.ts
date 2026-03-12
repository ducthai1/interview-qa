export const vi = {
  /* ─── Role Selector ──────────────────────────────────────────────────────── */
  roleSelect: {
    title: 'Interview Hub',
    subtitle: 'Chọn vai trò để bắt đầu luyện tập',
    frontend: 'Frontend Developer',
    frontendDesc: 'React, TypeScript, CSS, JavaScript, thiết kế hệ thống và nhiều hơn.',
    ba: 'Business Analyst',
    baDesc: 'Yêu cầu, user story, quản lý stakeholder, Agile, tài liệu.',
    brse: 'Bridge SE (BrSE)',
    brseDesc: 'Tiếng Nhật kinh doanh, phát triển offshore, quản lý dự án.',
    start: 'Bắt đầu luyện tập',
    switchRole: 'Đổi vai trò',
  },

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
    brand: '{{role}} Interview Practice',
    topics: 'Chủ đề',
    practice: 'Luyện tập',
    review: 'Ôn tập',
    mockInterview: 'Phỏng vấn thử',
    challenge: 'Thử thách',
    stats: 'Thống kê',
    learningPath: 'Lộ trình',
    flashcards: 'Flashcard',
    achievements: 'Thành tựu',
    more: 'Thêm',
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
    title: {
      frontend: 'Frontend Interview Practice',
      ba: 'Business Analyst Interview Practice',
      brse: 'Bridge SE Interview Practice',
    },
    subtitle: {
      frontend: 'Hơn {{count}} câu hỏi phỏng vấn thực tế về React, TypeScript, CSS và hơn thế nữa. Không cần đăng nhập. Bắt đầu ngay.',
      ba: 'Hơn {{count}} câu hỏi phỏng vấn thực tế về Kỹ thuật yêu cầu, Agile, SQL và hơn thế nữa. Không cần đăng nhập. Bắt đầu ngay.',
      brse: 'Hơn {{count}} câu hỏi phỏng vấn thực tế về Quản lý, Dịch thuật, Văn hóa Nhật Bản và hơn thế nữa. Không cần đăng nhập. Bắt đầu ngay.',
    },
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
    filters: 'Bộ lọc',
    more: 'thêm',
    showLess: 'Thu gọn',
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
    tagline: 'Luyện Phỏng Vấn {{role}}',
    mockResult: 'Kết quả Phỏng vấn Thử',
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
    customShort: 'Tùy chỉnh',
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

  /* ─── Random Question ───────────────────────────────────────────────────── */
  random: {
    title: 'Nhảy đến câu hỏi ngẫu nhiên',
    button: 'Ngẫu nhiên',
  },

  /* ─── Confidence Rating ──────────────────────────────────────────────────── */
  confidence: {
    prompt: 'Bạn tự tin thế nào?',
    sure: 'Chắc chắn',
    maybe: 'Có thể',
    guessing: 'Đoán mò',
  },

  /* ─── Question Notes ─────────────────────────────────────────────────────── */
  notes: {
    title: 'Ghi chú',
    add: 'Thêm ghi chú',
    edit: 'Sửa ghi chú',
    save: 'Lưu',
    saved: 'Đã lưu!',
    placeholder: 'Ghi chú cá nhân, mẹo, nhắc nhở...',
  },

  /* ─── Achievements ───────────────────────────────────────────────────────── */
  achievements: {
    title: 'Thành tựu',
    progress: '{{unlocked}} / {{total}} đã mở khóa',
    unlocked: 'Mở khóa thành tựu!',
    firstAnswer: 'Bước đầu tiên',
    firstAnswerDesc: 'Trả lời câu hỏi đầu tiên',
    answer10: 'Khởi đầu',
    answer10Desc: 'Trả lời 10 câu hỏi',
    answer50: 'Học viên chăm chỉ',
    answer50Desc: 'Trả lời 50 câu hỏi',
    answer100: 'Bách phát',
    answer100Desc: 'Trả lời 100 câu hỏi',
    answer200: 'Bậc thầy kiến thức',
    answer200Desc: 'Trả lời 200 câu hỏi',
    accuracy80: 'Trí tuệ sắc bén',
    accuracy80Desc: '80%+ chính xác với 20+ câu hỏi',
    perfect10: 'Chuỗi hoàn hảo',
    perfect10Desc: '10 câu đúng liên tiếp',
    streak3: 'Đang cháy',
    streak3Desc: 'Streak 3 ngày liên tiếp',
    streak7: 'Chiến binh tuần',
    streak7Desc: 'Streak 7 ngày liên tiếp',
    streak30: 'Không thể ngăn cản',
    streak30Desc: 'Streak 30 ngày liên tiếp',
    topicComplete: 'Nhà thám hiểm',
    topicCompleteDesc: 'Trả lời 15% tổng số câu hỏi',
    bookmark10: 'Nhà sưu tầm',
    bookmark10Desc: 'Đánh dấu 10 câu hỏi',
    challengeComplete: 'Người thách đấu',
    challengeCompleteDesc: 'Hoàn thành thử thách có giờ',
    noteTaker: 'Người ghi chép',
    noteTakerDesc: 'Viết ghi chú cho 5 câu hỏi',
    nightOwl: 'Cú đêm',
    nightOwlDesc: 'Luyện tập từ 23h đến 5h sáng',
  },

  /* ─── Flashcard Mode ─────────────────────────────────────────────────────── */
  flashcard: {
    title: 'Ôn tập Flashcard',
    description: 'Thẻ hỏi đáp nhanh. Chạm để lật, đánh giá đúng/sai.',
    selectTopic: 'Chọn chủ đề',
    start: 'Bắt đầu Flashcard',
    tapToFlip: 'Chạm thẻ hoặc nhấn Space để lật',
    knewIt: 'Biết rồi',
    didntKnow: 'Chưa biết',
    complete: 'Hoàn thành bộ thẻ!',
  },

  /* ─── Keyboard Shortcuts ─────────────────────────────────────────────────── */
  keyboard: {
    hint: '← → điều hướng · Space hiện đáp án · B đánh dấu · 1-4 chọn phương án',
  },

  /* ─── Topics ─────────────────────────────────────────────────────────────── */
  topics: {
    // Frontend Topics
    'html': { label: 'HTML', desc: 'Thẻ HTML ngữ nghĩa, biểu mẫu, phương tiện, Web API, đánh dấu SEO' },
    'css': { label: 'CSS', desc: 'Flexbox, Grid, hoạt ảnh, thiết kế đáp ứng, bộ chọn' },
    'browser-dom': { label: 'Trình duyệt & DOM', desc: 'Ủy quyền sự kiện, quá trình kết xuất, Web API, bộ quan sát' },
    'coding-challenges': { label: 'Thử thách lập trình', desc: 'Debounce, throttle, Promise.all, sao chép sâu, curry' },
    'api-networking': { label: 'API & Mạng', desc: 'REST, GraphQL, CORS, bộ nhớ đệm HTTP, WebSocket, fetch' },
    'javascript-core': { label: 'JavaScript Cơ bản', desc: 'ES6+, async/await, closure, prototype, vòng lặp sự kiện' },
    'typescript': { label: 'TypeScript', desc: 'Generics, utility types, thu hẹp kiểu, khai báo' },
    'react-fundamentals': { label: 'React Cơ bản', desc: 'JSX, components, props, state, vòng đời' },
    'react-hooks': { label: 'React Hooks', desc: 'useState, useEffect, useRef, useMemo, custom hooks' },
    'react-advanced': { label: 'React Nâng cao', desc: 'memo, context, suspense, RSC, React Compiler' },
    'state-management': { label: 'Quản lý trạng thái', desc: 'Redux Toolkit, Zustand, Jotai, TanStack Query' },
    'nextjs-frameworks': { label: 'Next.js & Frameworks', desc: 'App Router, SSR, ISR, Server Actions' },
    'css-styling': { label: 'CSS & Tạo kiểu', desc: 'TailwindCSS, CSS Modules, hoạt ảnh, thiết kế đáp ứng' },
    'testing': { label: 'Kiểm thử', desc: 'Vitest, React Testing Library, Playwright, MSW' },
    'build-tools': { label: 'Công cụ Build', desc: 'Vite, Turbopack, đóng gói, rung cây (tree-shaking)' },
    'performance': { label: 'Hiệu suất', desc: 'Core Web Vitals, lazy loading, profiling' },
    'system-design-fe': { label: 'Thiết kế hệ thống FE', desc: 'Micro-frontends, monorepo, hệ thống thiết kế' },
    'ai-frontend': { label: 'AI & Frontend', desc: 'Vercel AI SDK, tích hợp LLM, giao diện người dùng luồng' },
    'accessibility': { label: 'Khả năng truy cập', desc: 'ARIA, trình đọc màn hình, điều hướng bằng bàn phím' },
    'security': { label: 'Bảo mật', desc: 'XSS, CSRF, CSP, mẫu xác thực, làm sạch dữ liệu' },
    'real-world': { label: 'Các tình huống thực tế', desc: 'Lỗi thực tế, phát triển tính năng, hợp tác nhóm, vấn đề triển khai' },

    // BA Topics
    'requirements-engineering': { label: 'Kỹ thuật yêu cầu', desc: 'Khơi gợi, phân tích, đặc tả, xác nhận, truy xuất nguồn gốc' },
    'user-story-use-case': { label: 'User Story & Use Case', desc: 'Viết user story, tiêu chí chấp nhận, sơ đồ use case' },
    'business-process-bpmn': { label: 'Quy trình nghiệp vụ (BPMN)', desc: 'Mô hình hóa quy trình, swimlane, phân tích as-is/to-be' },
    'stakeholder-management': { label: 'Quản lý các bên liên quan', desc: 'Nhận diện, ma trận quyền lực-lợi ích, kế hoạch giao tiếp' },
    'agile-scrum': { label: 'Agile & Scrum', desc: 'Lễ nghi, tạo tác (artifacts), vai trò, SAFe, Kanban' },
    'data-analysis-sql': { label: 'Phân tích dữ liệu & SQL', desc: 'Truy vấn SQL, báo cáo, ra quyết định dựa trên dữ liệu' },
    'wireframe-prototype': { label: 'Wireframe & Prototyping', desc: 'Mô phỏng UI, tư duy UX, Figma, luồng người dùng' },
    'documentation': { label: 'Tài liệu', desc: 'SRS, BRD, FRD, PRD, ma trận truy xuất nguồn gốc' },
    'domain-knowledge': { label: 'Kiến thức miền', desc: 'Fintech, e-commerce, chăm sóc sức khỏe, logistics, ERP' },
    'communication-negotiation': { label: 'Giao tiếp & Đàm phán', desc: 'Điều hành cuộc họp, thuyết trình, thuyết phục, giải quyết xung đột' },
    'uat-quality': { label: 'UAT & Chất lượng', desc: 'Lên kế hoạch kiểm thử, quản lý lỗi, nghiệm thu, hồi quy' },
    'system-integration': { label: 'API & Tích hợp hệ thống', desc: 'Cơ bản về REST, luồng dữ liệu, mẫu tích hợp, bên thứ ba' },

    // BrSE Topics
    'japanese-business-comm': { label: 'Tiếng Nhật Kinh doanh', desc: 'Kính ngữ, email, cuộc họp, gọi điện, 매너 비знес' },
    'technical-translation': { label: 'Dịch thuật Kỹ thuật', desc: 'Dịch các thuật ngữ kỹ thuật Nhật ⇔ Việt ⇔ Anh' },
    'offshore-process': { label: 'Quy trình Offshore', desc: 'Luồng phát triển offshore, giao tiếp, quản lý vấn đề' },
    'requirements-spec': { label: 'Yêu cầu & Đặc tả', desc: 'Đọc/viết yêu cầu, thiết kế cơ bản/chi tiết' },
    'brse-project-management': { label: 'Quản lý dự án', desc: 'WBS, tiến độ, quản lý tiến độ & tài nguyên' },
    'quality-management': { label: 'Quản lý chất lượng', desc: 'Lên kế hoạch kiểm thử, đánh giá, số liệu chất lượng, JSTQB' },
    'japanese-culture': { label: 'Văn hóa Kinh doanh Nhật Bản', desc: 'Ho-Ren-So, thương lượng ngầm, đọc không khí, trao đổi danh thiếp' },
    'estimation-planning': { label: 'Ước lượng & Lập kế hoạch', desc: 'Phương pháp FP, tính toán man-month, dự phòng rủi ro, cơ sở ước lượng' },
    'client-reporting': { label: 'Báo cáo Khách hàng', desc: 'Báo cáo tuần/tháng, báo cáo mức cảnh báo, báo cáo sự cố' },
    'team-management': { label: 'Quản lý nhóm', desc: 'Cố vấn, động viên, giải quyết xung đột' },
    'brse-system-architecture': { label: 'Cơ sở Kiến trúc Hệ thống', desc: 'Kiến trúc cơ bản, thiết kế DB, thiết kế API cơ bản' },
    'risk-management': { label: 'Quản lý Rủi ro', desc: 'Nhận diện rủi ro, giảm thiểu, kế hoạch dự phòng' },
  },
}
