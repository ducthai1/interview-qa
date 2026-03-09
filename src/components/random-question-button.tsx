import { Shuffle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Question } from '../types'

interface RandomQuestionButtonProps {
  questions: Question[]
}

/* Navigate to practice page with a random question's topic pre-selected */
export function RandomQuestionButton({ questions }: RandomQuestionButtonProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleRandom = () => {
    if (questions.length === 0) return
    const random = questions[Math.floor(Math.random() * questions.length)]
    navigate(`/practice?topic=${random.topic}#q-${random.id}`)
  }

  return (
    <button
      onClick={handleRandom}
      className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-2 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      title={t('random.title')}
    >
      <Shuffle className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{t('random.button')}</span>
    </button>
  )
}
