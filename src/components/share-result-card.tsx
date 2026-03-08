import { forwardRef } from 'react'
import { Code2 } from 'lucide-react'

export interface TopicBreakdownItem {
  topic: string
  correct: number
  total: number
}

export interface ShareCardLabels {
  modeLabel: string
  accuracyLabel: string
  scoreLabel: string
  correctLabel: string
  topicBreakdownLabel: string
}

export interface ShareCardProps {
  score?: number
  accuracy: number
  totalAnswered: number
  correctCount: number
  topicBreakdown: TopicBreakdownItem[]
  mode: 'mock' | 'challenge' | 'stats'
  date: string
  labels?: ShareCardLabels
}

const MODE_LABELS: Record<ShareCardProps['mode'], string> = {
  mock: 'Mock Interview Result',
  challenge: 'Challenge Result',
  stats: 'My Progress',
}

/**
 * A 600×400px branded card designed for off-screen html2canvas capture.
 * Uses fixed dark gradient so it looks good on any social media background.
 * Must be rendered in the DOM (can be off-screen) before capture.
 */
export const ShareResultCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ score, accuracy, totalAnswered, correctCount, topicBreakdown, mode, date, labels }, ref) => {
    const modeLabel = labels?.modeLabel ?? MODE_LABELS[mode]
    const accuracyLabel = labels?.accuracyLabel ?? 'Accuracy'
    const scoreLabel = labels?.scoreLabel ?? 'Score'
    const correctLabel = labels?.correctLabel ?? 'Correct'
    const topicBreakdownLabel = labels?.topicBreakdownLabel ?? 'Topic Breakdown'
    const topTopics = topicBreakdown.slice(0, 5)

    return (
      <div
        ref={ref}
        style={{
          width: '600px',
          height: '400px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2744 100%)',
          padding: '40px',
          color: '#ffffff',
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative accent circle */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Brand header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#3b82f6',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Code2 style={{ width: '16px', height: '16px', color: '#ffffff' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '16px', color: '#ffffff', letterSpacing: '-0.3px' }}>
            FE Interview Hub
          </span>
        </div>

        {/* Mode label */}
        <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '18px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {modeLabel}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '32px', marginBottom: '22px', alignItems: 'flex-end' }}>
          {/* Accuracy — always shown */}
          <div>
            <div style={{ fontSize: '52px', fontWeight: 800, color: '#60a5fa', lineHeight: 1, letterSpacing: '-2px' }}>
              {accuracy}%
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {accuracyLabel}
            </div>
          </div>

          {/* Score — only for mock/challenge */}
          {score !== undefined && (
            <div>
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#34d399', lineHeight: 1, letterSpacing: '-1px' }}>
                {score.toLocaleString()}
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {scoreLabel}
              </div>
            </div>
          )}

          {/* Correct / Total */}
          <div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-1px' }}>
              {correctCount}
              <span style={{ fontSize: '20px', color: '#64748b', fontWeight: 500 }}>/{totalAnswered}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {correctLabel}
            </div>
          </div>
        </div>

        {/* Topic breakdown bars */}
        {topTopics.length > 0 && (
          <div style={{ flex: 1, marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {topicBreakdownLabel}
            </div>
            {topTopics.map((item) => {
              const pct = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0
              return (
                <div key={item.topic} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#cbd5e1',
                      width: '110px',
                      flexShrink: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.topic}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '6px',
                      backgroundColor: '#1e3a5f',
                      borderRadius: '3px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${pct}%`,
                        backgroundColor: pct >= 70 ? '#34d399' : pct >= 40 ? '#60a5fa' : '#f87171',
                        borderRadius: '3px',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '11px', color: '#94a3b8', width: '32px', textAlign: 'right', flexShrink: 0 }}>
                    {pct}%
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span style={{ fontSize: '11px', color: '#475569' }}>{date}</span>
          <span style={{ fontSize: '11px', color: '#3b82f6', fontWeight: 600 }}>fe-interview-hub.app</span>
        </div>
      </div>
    )
  },
)

ShareResultCard.displayName = 'ShareResultCard'
