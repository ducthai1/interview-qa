import type { QuestionTranslationMap } from '../types'

export const brseEn: QuestionTranslationMap = {
  // Team Management
  'brse-tm-001': {
    question: 'What is the most important thing to maintain the motivation of an offshore development team?',
    options: [
      'Continuing to increase salaries',
      'Setting clear goals, fair evaluation, providing growth opportunities, and recognition of the team\'s achievements — intrinsic motivation is more important than just money',
      'Making them work overtime every day',
      'Leaving individuals to do everything freely',
    ],
    explanation: 'Herzberg\'s Motivation-Hygiene Theory: hygiene factors (salary, environment) only prevent dissatisfaction, but motivators (growth, recognition, sense of achievement, responsibility) actually increase performance. As a BrSE: (1) clarify project goals and roles, (2) provide skill-up opportunities, (3) give specific feedback for good work, (4) share positive comments from clients.',
  },
  'brse-tm-002': {
    question: 'BrSEs have a role in supporting the career growth of team members, not just project management.',
    answer: 'True',
    explanation: 'BrSEs are responsible for members\' career growth: (1) technical skill improvement plans, (2) support for Japanese language ability, (3) sharing domain knowledge, (4) gradually assigning more responsible tasks, (5) career consultation in 1on1 meetings. Member growth directly leads to improved team quality and talent retention.',
  },
  'brse-tm-003': {
    question: 'What is the most important thing in onboarding new members?',
    options: [
      'Assigning important tasks from day one',
      'Step-by-step startup with development environment setup, coding rule explanation, project overview briefing, and mentor assignment',
      'Onboarding is not particularly necessary — they should learn by themselves',
      'Just handing over training materials',
    ],
    explanation: 'Onboarding checklist: (1) dev environment (source code, tools, access), (2) project overview (purpose, architecture, team), (3) coding rules and review standards, (4) mentor/buddy assignment, (5) tasks for the first 2 weeks (starting from small bugs or simple features). Good onboarding leads to early productivity gains.',
  },

  // Estimation & Planning
  'brse-est-001': {
    question: 'What is a "Man-month"?',
    options: [
      'The number of people born in a month',
      'A unit of effort for one person working full-time for one month (about 20 business days) — For example, "3 man-months" is one person for 3 months, or 3 people for 1 month',
      'The amount of project budget',
      'The number of test executions',
    ],
    explanation: 'Man-month is the most common unit of effort in the Japanese IT industry. 1 man-month ≈ 20 man-days ≈ 160 man-hours. BrSEs calculate estimates in man-months and submit them to clients. Note: 3 man-months of work for 3 people in 1 month is theoretically possible, but in reality, it often takes 1.2–1.5 times due to communication loss.',
  },
  'brse-est-002': {
    question: 'In estimation, it is sufficient to estimate only the development effort. Management effort and buffer are not necessary.',
    answer: 'False',
    explanation: 'Items that should be included in the estimation: (1) Development effort (design + coding + unit test), (2) Management effort (BrSE effort, progress management, report creation), (3) Test effort (integration test, system test), (4) Buffer (risk response, 10–20% of the total), (5) Environment setup effort, (6) Document creation effort. Estimating only the development effort is a cause of loss-making projects.',
  },
}
