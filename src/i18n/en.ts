export const en = {
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
    brand: 'FE Interview Hub',
    topics: 'Topics',
    practice: 'Practice',
    review: 'Review',
    mockInterview: 'Mock Interview',
    challenge: 'Challenge',
    stats: 'Stats',
    learningPath: 'Paths',
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
    title: 'Frontend Interview Practice',
    subtitle: '{{count}}+ real interview questions covering React, TypeScript, CSS, and more. No login required. Start practicing now.',
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
    tagline: 'Frontend Interview Practice',
    mockResult: 'Mock Interview Result',
    challengeResult: 'Challenge Result',
    statsResult: 'My Progress',
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
}
