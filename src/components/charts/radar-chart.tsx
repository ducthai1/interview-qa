import {
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { TopicAccuracy } from '../../utils/analytics'

interface Props {
  data: TopicAccuracy[]
  noDataLabel: string
  accuracyLabel?: string
}

export function TopicRadarChart({ data, noDataLabel, accuracyLabel = 'Accuracy' }: Props) {
  if (data.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center text-sm text-[var(--color-text-secondary)]">
        {noDataLabel}
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReRadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
        <PolarGrid stroke="var(--color-border)" />
        <PolarAngleAxis
          dataKey="topic"
          tick={{ fill: 'var(--color-text-secondary)', fontSize: 10 }}
        />
        <Radar
          dataKey="accuracy"
          fill="var(--color-primary)"
          fillOpacity={0.25}
          stroke="var(--color-primary)"
          strokeWidth={2}
        />
        <Tooltip
          formatter={(value: number) => [`${value}%`, accuracyLabel]}
          contentStyle={{
            backgroundColor: 'var(--color-bg-card)',
            borderColor: 'var(--color-border)',
            borderRadius: 8,
            fontSize: 12,
            color: 'var(--color-text)',
          }}
        />
      </ReRadarChart>
    </ResponsiveContainer>
  )
}
