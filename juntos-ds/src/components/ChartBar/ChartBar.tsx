import React from 'react'
import clsx from 'clsx'
import styles from './ChartBar.module.css'

export interface ChartBarSeries {
  /** CSS color value, e.g. 'var(--chart-series-2)'. Defaults to nth chart-series token. */
  color?: string
}

export interface ChartBarProps {
  /** Total fill percentage 0–100 */
  value: number
  /**
   * Series data for stacked bars. Each entry is one stacked segment.
   * All segments share the fill area equally.
   * Defaults to a single series (chart-series-1).
   */
  series?: ChartBarSeries[]
  /** Bar orientation */
  orientation?: 'vertical' | 'horizontal'
  /**
   * When true the bar grows from the opposite baseline:
   * vertical → downward from center line; horizontal → rightward from center line.
   */
  negative?: boolean
  /** Adds an extra CSS class — use this to set width/height on the root element */
  className?: string
  /** Accessible label for screen readers */
  'aria-label'?: string
  /** Adds a test ID for automated testing */
  'data-testid'?: string
}

/** Default colors matched to Figma chart-data-series-1/2/3 */
const SERIES_COLORS = [
  'var(--chart-series-1)',
  'var(--chart-series-2)',
  'var(--chart-series-3)',
]

export function ChartBar({
  value,
  series = [{}],
  orientation = 'vertical',
  negative = false,
  className,
  'aria-label': ariaLabel,
  'data-testid': testId,
}: ChartBarProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const isVertical = orientation === 'vertical'

  /**
   * Build segment divs. For vertical bars the array is reversed so
   * series[0] renders at the bottom (primary / most-prominent position).
   * For horizontal bars the array stays in order so series[0] is at the left.
   */
  // For vertical: reverse so series[0] renders at the bottom (most prominent position).
  // For horizontal: keep natural order so series[0] is at the left.
  const orderedSeries = isVertical ? [...series].reverse() : series

  // originalIndex maps each rendered segment back to its position in the original series array
  // so the default color assignment is stable regardless of reversal.
  const renderSegments = () =>
    orderedSeries.map((s, renderIdx) => {
      const originalIdx = isVertical ? series.length - 1 - renderIdx : renderIdx
      const color = s.color ?? SERIES_COLORS[originalIdx] ?? SERIES_COLORS[0]
      const hasSeparator = renderIdx > 0
      return (
        <div
          key={renderIdx}
          className={clsx(styles.segment, {
            [styles.separatorTop]:  isVertical  && hasSeparator,
            [styles.separatorLeft]: !isVertical && hasSeparator,
          })}
          style={{ backgroundColor: color }}
        />
      )
    })

  // ── Vertical positive: fills from bottom ──────────────────────
  if (isVertical && !negative) {
    return (
      <div
        className={clsx(styles.rootV, className)}
        role="img"
        aria-label={ariaLabel}
        data-testid={testId}
      >
        <div className={styles.fillV} style={{ height: `${clamped}%` }}>
          {renderSegments()}
        </div>
      </div>
    )
  }

  // ── Vertical negative: fills downward from the center line ────
  if (isVertical && negative) {
    return (
      <div
        className={clsx(styles.rootV, className)}
        role="img"
        aria-label={ariaLabel}
        data-testid={testId}
      >
        <div className={styles.negZoneV}>
          <div className={styles.fillVNeg} style={{ height: `${clamped}%` }}>
            {renderSegments()}
          </div>
        </div>
      </div>
    )
  }

  // ── Horizontal positive: fills from left ──────────────────────
  if (!isVertical && !negative) {
    return (
      <div
        className={clsx(styles.rootH, className)}
        role="img"
        aria-label={ariaLabel}
        data-testid={testId}
      >
        <div className={styles.fillH} style={{ width: `${clamped}%` }}>
          {renderSegments()}
        </div>
      </div>
    )
  }

  // ── Horizontal negative: fills rightward from center line ─────
  return (
    <div
      className={clsx(styles.rootH, className)}
      role="img"
      aria-label={ariaLabel}
      data-testid={testId}
    >
      <div className={styles.negZoneH}>
        <div className={styles.fillH} style={{ width: `${clamped}%` }}>
          {renderSegments()}
        </div>
      </div>
    </div>
  )
}
