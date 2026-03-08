import { useState } from 'react'
import type { HeatCell } from '../../utils/analytics'

interface Props {
  cells: HeatCell[]
  answersOnDayLabel: (count: number, date: string) => string
  activeDaysLabel: (count: number) => string
}

const LEVEL_COLORS = [
  'var(--heatmap-0, #e5e7eb)',
  'var(--heatmap-1, #bbf7d0)',
  'var(--heatmap-2, #4ade80)',
  'var(--heatmap-3, #16a34a)',
  'var(--heatmap-4, #14532d)',
] as const

function getDayOfWeek(dateStr: string): number {
  return new Date(dateStr).getDay() // 0=Sun
}

export function ActivityHeatmap({ cells, answersOnDayLabel, activeDaysLabel }: Props) {
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null)

  const activeDays = cells.filter((c) => c.count > 0).length

  // Group cells into columns of 7 (weeks), starting from Sunday
  // Pad the start so first cell aligns to its day-of-week
  const firstDow = getDayOfWeek(cells[0]?.date ?? '')
  const paddedCells: (HeatCell | null)[] = [
    ...Array(firstDow).fill(null),
    ...cells,
  ]
  const cols: (HeatCell | null)[][] = []
  for (let i = 0; i < paddedCells.length; i += 7) {
    cols.push(paddedCells.slice(i, i + 7))
  }

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="relative">
      <div className="flex gap-2">
        {/* Day-of-week labels */}
        <div className="flex flex-col gap-[3px] pt-0" style={{ width: 24 }}>
          {dayLabels.map((d, i) => (
            <div
              key={d}
              className="flex h-3 items-center text-[9px] text-[var(--color-text-secondary)]"
              style={{ opacity: i % 2 === 0 ? 1 : 0 }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div
          className="flex gap-[3px] overflow-x-auto pb-1"
          style={{ scrollbarWidth: 'thin' }}
        >
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[3px]">
              {col.map((cell, ri) =>
                cell === null ? (
                  <div key={`empty-${ri}`} className="h-3 w-3 rounded-sm opacity-0" />
                ) : (
                  <div
                    key={cell.date}
                    className="h-3 w-3 cursor-default rounded-sm transition-opacity hover:opacity-75"
                    style={{
                      backgroundColor: LEVEL_COLORS[cell.level],
                    }}
                    onMouseEnter={(e) => {
                      const rect = (e.target as HTMLElement).getBoundingClientRect()
                      setTooltip({ date: cell.date, count: cell.count, x: rect.left, y: rect.top })
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    aria-label={answersOnDayLabel(cell.count, cell.date)}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-1 text-[10px] text-[var(--color-text-secondary)]">
        <span>Less</span>
        {([0, 1, 2, 3, 4] as const).map((lv) => (
          <div
            key={lv}
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: LEVEL_COLORS[lv] }}
          />
        ))}
        <span>More</span>
        <span className="ml-4">{activeDaysLabel(activeDays)}</span>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card)] px-2 py-1 text-xs text-[var(--color-text)] shadow-lg"
          style={{ left: tooltip.x + 18, top: tooltip.y - 8 }}
        >
          {answersOnDayLabel(tooltip.count, tooltip.date)}
        </div>
      )}
    </div>
  )
}
