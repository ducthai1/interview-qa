import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from 'recharts'
import type { DailyPoint } from '../../utils/analytics'

interface Props {
  data: DailyPoint[]
  noDataLabel: string
  accuracyLabel?: string
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

export function AccuracyTrendChart({ data, noDataLabel, accuracyLabel = 'Accuracy' }: Props) {
  const hasData = data.some((d) => d.count > 0)

  if (!hasData) {
    return (
      <div className="flex h-[300px] items-center justify-center text-sm text-[var(--color-text-secondary)]">
        {noDataLabel}
      </div>
    )
  }

  // Only label dates with activity to reduce clutter
  const activeIndices = new Set(
    data.map((d, i) => (d.count > 0 ? i : -1)).filter((i) => i !== -1),
  )

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 16, bottom: 10, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis
          dataKey="date"
          tickFormatter={formatDate}
          tick={{ fill: 'var(--color-text-secondary)', fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          interval={Math.floor(data.length / 6)}
        />
        <YAxis
          domain={[0, 100]}
          tickFormatter={(v: number) => `${v}%`}
          tick={{ fill: 'var(--color-text-secondary)', fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <Tooltip
          formatter={(value: unknown) => [`${value}%`, accuracyLabel]}
          labelFormatter={(label: unknown) => formatDate(String(label))}
          contentStyle={{
            backgroundColor: 'var(--color-bg-card)',
            borderColor: 'var(--color-border)',
            borderRadius: 8,
            fontSize: 12,
            color: 'var(--color-text)',
          }}
        />
        <Line
          type="monotone"
          dataKey="accuracy"
          stroke="var(--color-primary)"
          strokeWidth={2}
          dot={(props) => {
            const { cx, cy, index } = props
            if (!activeIndices.has(index)) return <Dot key={`dot-${index}`} cx={cx} cy={cy} r={0} />
            return (
              <Dot
                key={`dot-${index}`}
                cx={cx}
                cy={cy}
                r={3}
                fill="var(--color-primary)"
                stroke="var(--color-bg-card)"
                strokeWidth={1}
              />
            )
          }}
          activeDot={{ r: 5, fill: 'var(--color-primary)' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
