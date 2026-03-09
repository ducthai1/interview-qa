import type { AchievementDef, UserProgress } from '../types'

/* All achievement definitions — check functions are pure */
export const ACHIEVEMENTS: AchievementDef[] = [
  /* ─── Answer milestones ──────────────────────────────────────── */
  {
    id: 'first-answer',
    icon: '🎯',
    labelKey: 'achievements.firstAnswer',
    descriptionKey: 'achievements.firstAnswerDesc',
    check: (p) => Object.keys(p.answered).length >= 1,
  },
  {
    id: 'answer-10',
    icon: '📝',
    labelKey: 'achievements.answer10',
    descriptionKey: 'achievements.answer10Desc',
    check: (p) => Object.keys(p.answered).length >= 10,
  },
  {
    id: 'answer-50',
    icon: '💪',
    labelKey: 'achievements.answer50',
    descriptionKey: 'achievements.answer50Desc',
    check: (p) => Object.keys(p.answered).length >= 50,
  },
  {
    id: 'answer-100',
    icon: '🏆',
    labelKey: 'achievements.answer100',
    descriptionKey: 'achievements.answer100Desc',
    check: (p) => Object.keys(p.answered).length >= 100,
  },
  {
    id: 'answer-200',
    icon: '👑',
    labelKey: 'achievements.answer200',
    descriptionKey: 'achievements.answer200Desc',
    check: (p) => Object.keys(p.answered).length >= 200,
  },

  /* ─── Accuracy ───────────────────────────────────────────────── */
  {
    id: 'accuracy-80',
    icon: '🎖️',
    labelKey: 'achievements.accuracy80',
    descriptionKey: 'achievements.accuracy80Desc',
    check: (p) => {
      const entries = Object.values(p.answered)
      if (entries.length < 20) return false
      const correct = entries.filter((e) => e.correct).length
      return correct / entries.length >= 0.8
    },
  },
  {
    id: 'perfect-10',
    icon: '💯',
    labelKey: 'achievements.perfect10',
    descriptionKey: 'achievements.perfect10Desc',
    check: (p) => {
      const entries = Object.values(p.answered)
      if (entries.length < 10) return false
      // Check last 10 answers (by timestamp) are all correct
      const sorted = [...entries].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10)
      return sorted.every((e) => e.correct)
    },
  },

  /* ─── Streak ─────────────────────────────────────────────────── */
  {
    id: 'streak-3',
    icon: '🔥',
    labelKey: 'achievements.streak3',
    descriptionKey: 'achievements.streak3Desc',
    check: (p) => (p.streak?.current ?? 0) >= 3,
  },
  {
    id: 'streak-7',
    icon: '🔥',
    labelKey: 'achievements.streak7',
    descriptionKey: 'achievements.streak7Desc',
    check: (p) => (p.streak?.current ?? 0) >= 7,
  },
  {
    id: 'streak-30',
    icon: '🌟',
    labelKey: 'achievements.streak30',
    descriptionKey: 'achievements.streak30Desc',
    check: (p) => (p.streak?.longest ?? 0) >= 30,
  },

  /* ─── Topic mastery ──────────────────────────────────────────── */
  {
    id: 'topic-complete',
    icon: '✅',
    labelKey: 'achievements.topicComplete',
    descriptionKey: 'achievements.topicCompleteDesc',
    check: (p, totalQ) => {
      // At least answered 80% of total questions in any topic (approximation)
      return totalQ > 0 && Object.keys(p.answered).length >= Math.floor(totalQ * 0.15)
    },
  },

  /* ─── Bookmarks ──────────────────────────────────────────────── */
  {
    id: 'bookmark-10',
    icon: '📌',
    labelKey: 'achievements.bookmark10',
    descriptionKey: 'achievements.bookmark10Desc',
    check: (p) => p.bookmarked.length >= 10,
  },

  /* ─── Challenge ──────────────────────────────────────────────── */
  {
    id: 'challenge-complete',
    icon: '⚡',
    labelKey: 'achievements.challengeComplete',
    descriptionKey: 'achievements.challengeCompleteDesc',
    check: (p) => Object.keys(p.challengeBests ?? {}).length >= 1,
  },

  /* ─── Notes ──────────────────────────────────────────────────── */
  {
    id: 'note-taker',
    icon: '📓',
    labelKey: 'achievements.noteTaker',
    descriptionKey: 'achievements.noteTakerDesc',
    check: (p) => Object.keys(p.notes ?? {}).length >= 5,
  },

  /* ─── Night owl — answered question between 11pm-5am ─────────── */
  {
    id: 'night-owl',
    icon: '🦉',
    labelKey: 'achievements.nightOwl',
    descriptionKey: 'achievements.nightOwlDesc',
    check: (p) => {
      return Object.values(p.answered).some((e) => {
        const hour = new Date(e.timestamp).getHours()
        return hour >= 23 || hour < 5
      })
    },
  },
]

/* Check which achievements are newly unlocked */
export function checkNewAchievements(
  progress: UserProgress,
  totalQuestions: number,
): string[] {
  const existing = progress.achievements ?? {}
  const newlyUnlocked: string[] = []

  for (const achievement of ACHIEVEMENTS) {
    if (existing[achievement.id]) continue
    if (achievement.check(progress, totalQuestions)) {
      newlyUnlocked.push(achievement.id)
    }
  }

  return newlyUnlocked
}
