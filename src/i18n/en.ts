export const en = {
  /* ─── Role Selector ──────────────────────────────────────────────────────── */
  roleSelect: {
    title: 'Interview Hub',
    subtitle: 'Choose your role to start practicing',
    frontend: 'Frontend Developer',
    frontendDesc: 'React, TypeScript, CSS, JavaScript, system design and more.',
    ba: 'Business Analyst',
    baDesc: 'Requirements, user stories, stakeholder management, Agile, documentation.',
    brse: 'Bridge SE (BrSE)',
    brseDesc: 'Japanese business communication, offshore development, project management.',
    start: 'Start practicing',
    switchRole: 'Switch Role',
  },

  /* ─── Common ───────────────────────────────────────────────────────────────── */
  common: {
    loading: 'Loading questions...',
    questions: 'questions',
    correct: 'correct',
    answered: 'Answered',
    accuracy: 'Accuracy',
    done: 'done',
    showAnswer: 'Show Answer',
    submit: 'Submit',
    previous: 'Previous',
    next: 'Next',
    finish: 'Finish',
    tryAgain: 'Try Again',
    clearFilters: 'Clear all filters',
    loadMore: 'Load More',
    noResults: 'No questions match your filters.',
    true: 'True',
    false: 'False',
    answer: 'Answer',
    explanation: 'Explanation',
    reference: 'Reference',
    yourApproach: 'Your approach',
    yourSolution: 'Your solution',
    yourFix: 'Your fix',
    empty: '(empty)',
  },

  /* ─── Header / Nav ────────────────────────────────────────────────────────── */
  nav: {
    brand: '{{role}} Interview Hub',
    topics: 'Topics',
    practice: 'Practice',
    review: 'Review',
    mockInterview: 'Mock Interview',
    challenge: 'Challenge',
    stats: 'Stats',
    learningPath: 'Paths',
    flashcards: 'Flashcards',
    achievements: 'Awards',
    more: 'More',
    switchTheme: 'Switch to {{mode}} mode',
  },

  /* ─── Challenge Page ───────────────────────────────────────────────────────── */
  challenge: {
    title: 'Timed Challenge',
    subtitle: 'Test under pressure. Accuracy + speed = higher score.',
    quick: 'Quick',
    standard: 'Standard',
    hard: 'Hard',
    questions: '{{count}} questions',
    minutes: '{{count}} min',
    bestScore: 'Best: {{score}}',
    noBest: 'No record yet',
    start: 'Start Challenge',
    timeLeft: 'Time left',
    timeUp: "Time's up!",
    score: 'Score',
    newBest: 'New Personal Best!',
    tryAgain: 'Try Again',
    backToMenu: 'Back to Menu',
    selectLevel: 'Your Level',
    selectLevelHint: 'We\'ll add a few harder questions to test your potential',
    questionOf: 'Question {{current}}/{{total}}',
    finishEarly: 'Finish early',
    timeUsed: 'Time used',
  },

  /* ─── Review Page ──────────────────────────────────────────────────────────── */
  review: {
    title: 'Smart Review',
    dueCount: '{{count}} questions due',
    noDue: 'No questions due for review!',
    noDueHint: 'Answer some questions first...',
    startReview: 'Start Review',
    progress: 'Reviewed {{current}} of {{total}}',
    complete: 'Review Complete!',
    summary: '{{correct}} correct, {{incorrect}} need more practice',
    boxLabel: 'Box {{box}}',
    boxStats: '{{count}} questions',
    nextReview: 'Next review in {{time}}',
  },

  /* ─── Home Page ────────────────────────────────────────────────────────────── */
  home: {
    title: {
      frontend: 'Frontend Interview Practice',
      ba: 'Business Analyst Interview Practice',
      brse: 'Bridge SE Interview Practice',
    },
    subtitle: {
      frontend: '{{count}}+ real interview questions covering React, TypeScript, CSS, and more. No login required. Start practicing now.',
      ba: '{{count}}+ real interview questions covering Requirements, Agile, SQL, and more. No login required. Start practicing now.',
      brse: '{{count}}+ real interview questions covering Management, Translation, Japanese culture, and more. No login required. Start practicing now.',
    },
    totalQuestions: 'Total Questions',
    chooseATopic: 'Choose a Topic',
  },

  /* ─── Filter Bar ───────────────────────────────────────────────────────────── */
  filter: {
    searchPlaceholder: 'Search questions...',
    topics: 'Topics',
    difficulty: 'Difficulty',
    questionType: 'Question Type',
    junior: 'Junior',
    mid: 'Mid',
    senior: 'Senior',
    lead: 'Lead',
    mcq: 'MCQ',
    codeOutput: 'Code Output',
    trueFalse: 'True/False',
    debug: 'Debug',
    codeWrite: 'Code Writing',
    systemDesign: 'System Design',
    filters: 'Filters',
    more: 'more',
    showLess: 'Show less',
  },

  /* ─── Practice Page ────────────────────────────────────────────────────────── */
  practice: {
    title: 'Practice Questions',
    showing: 'Showing {{shown}} of {{total}} questions',
    recommended: 'Recommended for You',
    recommendedHint: 'Based on your weak areas and learning progress',
  },

  /* ─── Next Steps (post-session guidance) ───────────────────────────────────── */
  nextSteps: {
    title: "What's Next?",
    weakTopics: 'Focus on weak areas',
    reviewDue: '{{count}} questions due for review',
    continuePath: 'Continue your learning path',
    practiceMore: 'Practice more questions',
  },

  /* ─── Pagination ─────────────────────────────────────────────────────────── */
  pagination: {
    first: 'First page',
    previous: 'Previous page',
    next: 'Next page',
    last: 'Last page',
  },

  /* ─── Mock Interview ───────────────────────────────────────────────────────── */
  mock: {
    title: 'Mock Interview',
    description: '{{count}} random questions, {{minutes}} minutes timer. Test yourself like a real interview!',
    start: 'Start Interview',
    complete: 'Interview Complete!',
    wrong: 'Wrong',
    questionProgress: 'Question {{current}} / {{total}}',
    selectLevel: 'Your Level',
    selectLevelHint: 'We\'ll add a few harder questions to test your potential',
  },

  /* ─── Stats Page ───────────────────────────────────────────────────────────── */
  stats: {
    title: 'Your Statistics',
    byTopic: 'By Topic',
    bookmarked: 'Bookmarked',
    bookmarkedCount: '{{count}} questions bookmarked',
    resetAll: 'Reset All Progress',
    radarTitle: 'Topic Strengths',
    trendTitle: 'Accuracy Trend (30 days)',
    heatmapTitle: 'Activity',
    weakAreas: 'Weak Areas — Focus Here',
    practiceNow: 'Practice Now',
    needsWork: 'Needs Work',
    improving: 'Improving',
    noData: 'Answer some questions to see your analytics!',
    activeDays: '{{count}} active days',
    answersOnDay: '{{count}} answers on {{date}}',
  },

  /* ─── Question Card ────────────────────────────────────────────────────────── */
  question: {
    multipleChoice: 'Multiple Choice',
    codeOutput: 'Code Output',
    trueFalse: 'True / False',
    debug: 'Debug',
    codeWrite: 'Code Writing',
    systemDesign: 'System Design',
    solutionCode: 'Corrected Code',
    resultCorrect: 'Correct!',
    resultIncorrect: 'Incorrect — see the correct answer below.',
    selfRatePrompt: 'How did you do?',
    selfRateCorrect: 'I got it right',
    selfRateIncorrect: 'I need to review',
    addBookmark: 'Add bookmark',
    removeBookmark: 'Remove bookmark',
    retry: 'Try Again',
    attemptCount: 'Attempt #{{count}}',
    showHint: 'Show Hint',
    hintNumber: 'Hint {{number}}',
    noMoreHints: 'No more hints',
    optionWrong: 'Why wrong',
    selfRateNailed: 'Nailed it',
    selfRatePartial: 'Partially correct',
    flagQuestion: 'Report unclear question',
    unflagQuestion: 'Remove flag',
  },

  /* ─── Code Output Interaction ──────────────────────────────────────────────── */
  codeOutputInteraction: {
    placeholder: 'Type the expected output...',
    submitAnswer: 'Submit Answer',
    skip: 'Skip — show answer directly',
    correct: 'Correct!',
    incorrect: 'Incorrect — the correct answer is shown below.',
  },

  /* ─── Debug Interaction ────────────────────────────────────────────────────── */
  debugInteraction: {
    label: 'Fix the bug in the code below:',
    submitFix: 'Submit Fix',
    showAnswer: 'Show correct fix',
  },

  /* ─── Code Write Interaction ───────────────────────────────────────────────── */
  codeWriteInteraction: {
    label: 'Write your solution:',
    placeholder: '// Write your code here...',
    submitCompare: 'Submit & Compare',
    showModelAnswer: 'Show model answer',
  },

  /* ─── System Design Interaction ────────────────────────────────────────────── */
  systemDesignInteraction: {
    label: 'Describe your design approach:',
    placeholder: 'Outline your architecture, key components, data flow, trade-offs...',
    submitCompare: 'Submit & Compare',
    showModelAnswer: 'Show model answer',
  },

  /* ─── Streak & Daily Goal ──────────────────────────────────────────────────── */
  streak: {
    current: '{{count}} day streak',
    longest: 'Longest: {{count}} days',
    dailyGoal: '{{done}} / {{goal}} today',
    goalReached: 'Daily goal reached!',
    setGoal: 'Set daily goal',
  },

  /* ─── Learning Paths ───────────────────────────────────────────────────────── */
  path: {
    title: 'Learning Paths',
    subtitle: 'Follow a structured path to master frontend development skills.',
    steps: '{{count}} topics',
    locked: 'Locked — complete {{topic}} first',
    unlocked: 'Available',
    completed: 'Completed',
    current: 'Current',
    completionRequired: '{{percent}}% required to unlock next',
    startPath: 'Start Path',
    continuePath: 'Continue',
    estimatedDays: '~{{days}} days remaining',
    noEstimate: 'Answer more questions to estimate',
  },

  /* ─── Share Results ─────────────────────────────────────────────────────────── */
  share: {
    button: 'Share Results',
    copy: 'Copy to clipboard',
    download: 'Download PNG',
    share: 'Share...',
    copied: 'Copied!',
    downloading: 'Downloading...',
    tagline: '{{role}} Interview Practice',
    mockResult: 'Mock Interview Result',
    challengeResult: 'Challenge Result',
    statsResult: 'My Progress',
  },

  /* ─── Bookmarks Page ───────────────────────────────────────────────────────── */
  bookmarks: {
    empty: 'No bookmarked questions yet. Bookmark questions during practice!',
    goToPractice: 'Go to Practice',
    showing: '{{start}}–{{end}} of {{total}} bookmarked',
  },

  /* ─── Related Questions ─────────────────────────────────────────────────────── */
  related: {
    title: 'Related Questions',
    hint: 'Similar concepts you might want to practice',
  },

  /* ─── Difficulty Suggestion ──────────────────────────────────────────────────── */
  difficulty: {
    suggestion: 'Based on your performance',
    tryHarder: "You're doing great on {{level}}! Try {{nextLevel}} questions.",
    reviewEasier: 'Consider reviewing {{prevLevel}} questions first.',
    dismiss: 'Dismiss',
  },

  /* ─── AI Feedback ───────────────────────────────────────────────────────────── */
  ai: {
    getReview: 'Get AI Review',
    reviewing: 'AI is reviewing...',
    score: 'Score: {{score}}/10',
    suggestions: 'Suggestions',
    noKey: 'Configure API key for AI feedback',
    limitReached: 'Daily limit reached ({{used}}/{{limit}})',
    settings: 'AI Settings',
    provider: 'AI Provider',
    apiKey: 'API Key',
    apiKeyHint: 'Stored locally, never sent to our server',
    dailyLimit: 'Daily Limit',
    usage: '{{used}} of {{limit}} used today',
    testConnection: 'Test Connection',
    testSuccess: 'Connection successful!',
    testFailed: 'Connection failed: {{error}}',
    save: 'Save Settings',
    none: 'None (disabled)',
    groqHint: 'Groq is completely free! 14,400 requests/day. Get key at console.groq.com',
    geminiHint: 'Gemini API is completely free! Get your key at aistudio.google.com',
    openaiHint: 'OpenAI requires a paid account.',
    anthropicHint: 'Anthropic requires a backend proxy and paid account.',
    groqKeyLink: '→ Get free API key at Groq Console',
    geminiKeyLink: '→ Get free API key at Google AI Studio',
    cancel: 'Cancel',
    freeTier: 'Free tier',
    paidApi: 'Paid API',
  },

  /* ─── Export/Import ──────────────────────────────────────────────────────── */
  backup: {
    export: 'Export Progress',
    import: 'Import Progress',
    exportHint: 'Download your progress as JSON file',
    importHint: 'Restore from a previously exported file',
    importSuccess: 'Progress restored successfully! Reloading...',
    importError: 'Invalid file. Please select a valid backup file.',
    confirmImport: 'This will replace your current progress. Continue?',
  },

  /* ─── Custom Session ─────────────────────────────────────────────────────── */
  session: {
    title: 'Custom Practice Session',
    customShort: 'Custom Session',
    subtitle: 'Create your own practice session with custom settings.',
    questionCount: 'Number of Questions',
    timeLimit: 'Time Limit (optional)',
    noTimeLimit: 'No time limit',
    minutesSuffix: '{{count}} min',
    mixTopics: 'Mix Topics',
    selectTopics: 'Select Topics',
    allTopics: 'All Topics',
    startSession: 'Start Session',
    sessionProgress: 'Question {{current}} / {{total}}',
    sessionComplete: 'Session Complete!',
    timeUp: "Time's up!",
    reviewWrong: 'Review Wrong Answers',
    wrongAnswers: '{{count}} wrong answers',
    noWrong: 'Perfect score!',
    backToSetup: 'New Session',
  },

  /* ─── Mistake Patterns ───────────────────────────────────────────────────── */
  patterns: {
    title: 'Mistake Patterns',
    subtitle: 'Your most common mistakes by concept',
    tag: '{{tag}}',
    wrongRate: '{{wrong}} wrong / {{total}} total',
    noData: 'Answer more questions to see patterns',
    topMistakes: 'Top mistakes',
  },

  /* ─── Pomodoro ───────────────────────────────────────────────────────────── */
  pomodoro: {
    title: 'Focus Mode',
    study: 'Study',
    break: 'Break',
    start: 'Start Focus',
    pause: 'Pause',
    resume: 'Resume',
    skip: 'Skip Break',
    sessionCount: 'Session {{current}}',
    studyTime: '{{minutes}} min study',
    breakTime: '{{minutes}} min break',
  },

  /* ─── Random Question ───────────────────────────────────────────────────── */
  random: {
    title: 'Jump to a random question',
    button: 'Random',
  },

  /* ─── Confidence Rating ──────────────────────────────────────────────────── */
  confidence: {
    prompt: 'How confident are you?',
    sure: 'Confident',
    maybe: 'Somewhat',
    guessing: 'Guessing',
  },

  /* ─── Question Notes ─────────────────────────────────────────────────────── */
  notes: {
    title: 'My Notes',
    add: 'Add note',
    edit: 'Edit note',
    save: 'Save',
    saved: 'Saved!',
    placeholder: 'Write your personal notes, tips, or reminders...',
  },

  /* ─── Achievements ───────────────────────────────────────────────────────── */
  achievements: {
    title: 'Achievements',
    progress: '{{unlocked}} / {{total}} unlocked',
    unlocked: 'Achievement Unlocked!',
    firstAnswer: 'First Step',
    firstAnswerDesc: 'Answer your first question',
    answer10: 'Getting Started',
    answer10Desc: 'Answer 10 questions',
    answer50: 'Dedicated Learner',
    answer50Desc: 'Answer 50 questions',
    answer100: 'Century',
    answer100Desc: 'Answer 100 questions',
    answer200: 'Knowledge Master',
    answer200Desc: 'Answer 200 questions',
    accuracy80: 'Sharp Mind',
    accuracy80Desc: '80%+ accuracy with 20+ questions',
    perfect10: 'Perfect Streak',
    perfect10Desc: '10 correct answers in a row',
    streak3: 'On Fire',
    streak3Desc: '3-day practice streak',
    streak7: 'Week Warrior',
    streak7Desc: '7-day practice streak',
    streak30: 'Unstoppable',
    streak30Desc: '30-day practice streak',
    topicComplete: 'Explorer',
    topicCompleteDesc: 'Answer 15% of all questions',
    bookmark10: 'Collector',
    bookmark10Desc: 'Bookmark 10 questions',
    challengeComplete: 'Challenger',
    challengeCompleteDesc: 'Complete a timed challenge',
    noteTaker: 'Note Taker',
    noteTakerDesc: 'Write notes on 5 questions',
    nightOwl: 'Night Owl',
    nightOwlDesc: 'Practice between 11 PM and 5 AM',
  },

  /* ─── Flashcard Mode ─────────────────────────────────────────────────────── */
  flashcard: {
    title: 'Flashcard Review',
    description: 'Quick-fire question and answer cards. Tap to flip, swipe to rate.',
    selectTopic: 'Select Topic',
    start: 'Start Flashcards',
    tapToFlip: 'Tap card or press Space to flip',
    knewIt: 'Knew it',
    didntKnow: "Didn't know",
    complete: 'Deck Complete!',
    keyboardHint: '← → navigate · Space flip · B bookmark',
  },

  /* ─── Keyboard Shortcuts ─────────────────────────────────────────────────── */
  keyboard: {
    hint: '← → navigate · Space show answer · B bookmark · 1-4 select option',
  },

  /* ─── Topics ─────────────────────────────────────────────────────────────── */
  topics: {
    // Frontend Topics
    'html': { label: 'HTML', desc: 'Semantic HTML, forms, media, Web APIs, SEO markup' },
    'css': { label: 'CSS', desc: 'Flexbox, Grid, animations, responsive design, selectors' },
    'browser-dom': { label: 'Browser & DOM', desc: 'Event delegation, rendering pipeline, Web APIs, observers' },
    'coding-challenges': { label: 'Coding Challenges', desc: 'Debounce, throttle, Promise.all, deep clone, curry' },
    'api-networking': { label: 'API & Networking', desc: 'REST, GraphQL, CORS, HTTP caching, WebSocket, fetch' },
    'javascript-core': { label: 'JavaScript Core', desc: 'ES6+, async/await, closures, prototype, event loop' },
    'typescript': { label: 'TypeScript', desc: 'Generics, utility types, type narrowing, declaration' },
    'react-fundamentals': { label: 'React Fundamentals', desc: 'JSX, components, props, state, lifecycle' },
    'react-hooks': { label: 'React Hooks', desc: 'useState, useEffect, useRef, useMemo, custom hooks' },
    'react-advanced': { label: 'React Advanced', desc: 'memo, context, suspense, RSC, React Compiler' },
    'state-management': { label: 'State Management', desc: 'Redux Toolkit, Zustand, Jotai, TanStack Query' },
    'nextjs-frameworks': { label: 'Next.js & Frameworks', desc: 'App Router, SSR, ISR, Server Actions' },
    'css-styling': { label: 'CSS & Styling', desc: 'TailwindCSS, CSS Modules, animations, responsive' },
    'testing': { label: 'Testing', desc: 'Vitest, React Testing Library, Playwright, MSW' },
    'build-tools': { label: 'Build Tools', desc: 'Vite, Turbopack, bundling, tree-shaking' },
    'performance': { label: 'Performance', desc: 'Core Web Vitals, lazy loading, profiling' },
    'system-design-fe': { label: 'System Design FE', desc: 'Micro-frontends, monorepo, design system' },
    'ai-frontend': { label: 'AI & Frontend', desc: 'Vercel AI SDK, LLM integration, streaming UI' },
    'accessibility': { label: 'Accessibility', desc: 'ARIA, screen readers, keyboard navigation' },
    'security': { label: 'Security', desc: 'XSS, CSRF, CSP, auth patterns, sanitization' },
    'real-world': { label: 'Real-World Scenarios', desc: 'Production bugs, feature development, team collaboration, deployment issues' },

    // BA Topics
    'requirements-engineering': { label: 'Requirements Engineering', desc: 'Elicitation, analysis, specification, validation, traceability' },
    'user-story-use-case': { label: 'User Story & Use Case', desc: 'Writing user stories, acceptance criteria, use case diagrams' },
    'business-process-bpmn': { label: 'Business Process (BPMN)', desc: 'Process modeling, swimlane, as-is/to-be analysis' },
    'stakeholder-management': { label: 'Stakeholder Management', desc: 'Identification, power-interest matrix, communication plan' },
    'agile-scrum': { label: 'Agile & Scrum', desc: 'Ceremonies, artifacts, roles, SAFe, Kanban' },
    'data-analysis-sql': { label: 'Data Analysis & SQL', desc: 'SQL queries, reporting, data-driven decision making' },
    'wireframe-prototype': { label: 'Wireframe & Prototyping', desc: 'UI mockups, UX thinking, Figma, user flow' },
    'documentation': { label: 'Documentation', desc: 'SRS, BRD, FRD, PRD, traceability matrix' },
    'domain-knowledge': { label: 'Domain Knowledge', desc: 'Fintech, e-commerce, healthcare, logistics, ERP' },
    'communication-negotiation': { label: 'Communication & Negotiation', desc: 'Meeting facilitation, presentation, persuasion, conflict' },
    'uat-quality': { label: 'UAT & Quality', desc: 'Test planning, defect management, sign-off, regression' },
    'system-integration': { label: 'API & System Integration', desc: 'REST basics, data flow, integration patterns, third-party' },

    // BrSE Topics
    'japanese-business-comm': { label: 'Japanese Business Comm', desc: 'Honorifics, emails, meetings, calls, business manners' },
    'technical-translation': { label: 'Technical Translation', desc: 'JP ⇔ VN ⇔ EN technical terms translation' },
    'offshore-process': { label: 'Offshore Process', desc: 'Offshore development flow, communication, issue management' },
    'requirements-spec': { label: 'Requirements & Specs', desc: 'Reading/writing requirements, basic/detailed designs' },
    'brse-project-management': { label: 'Project Management', desc: 'WBS, schedule, progress & resource management' },
    'quality-management': { label: 'Quality Management', desc: 'Test planning, review, quality metrics, JSTQB' },
    'japanese-culture': { label: 'Japanese Business Culture', desc: 'Ho-Ren-So, groundwork, reading the room, exchanging cards' },
    'estimation-planning': { label: 'Estimation & Planning', desc: 'FP method, man-month calculation, risk buffers, estimation basis' },
    'client-reporting': { label: 'Client Reporting', desc: 'Weekly/monthly reports, escalations, issue reporting' },
    'team-management': { label: 'Team Management', desc: 'Mentoring, motivation, conflict resolution' },
    'brse-system-architecture': { label: 'System Architecture Basics', desc: 'Basic architecture, DB design, API design basics' },
    'risk-management': { label: 'Risk Management', desc: 'Risk identification, mitigation, contingency plans' },
  },
}
