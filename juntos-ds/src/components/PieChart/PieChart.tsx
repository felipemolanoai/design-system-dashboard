import { useState } from 'react'
import clsx from 'clsx'
import styles from './PieChart.module.css'

// ── Default color palette (chart-series tokens, ordered for visual contrast) ──
const DEFAULT_COLORS = [
  'var(--chart-series-10)',
  'var(--chart-series-13)',
  'var(--chart-series-3)',
  'var(--chart-series-7)',
  'var(--chart-series-5)',
  'var(--chart-series-4)',
  'var(--chart-series-1)',
  'var(--chart-series-6)',
  'var(--chart-series-12)',
  'var(--chart-series-15)',
  'var(--chart-series-2)',
  'var(--chart-series-9)',
  'var(--chart-series-11)',
  'var(--chart-series-14)',
  'var(--chart-series-8)',
]

// ── SVG helpers ───────────────────────────────────────────────────────────────

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function buildSlicePath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
): string {
  // Cap at 359.999° so a single 100% slice doesn't collapse to a zero-length arc
  const sweep = Math.min(endAngle - startAngle, 359.999)
  const end = startAngle + sweep
  const large = sweep > 180 ? 1 : 0

  const os = polarToCartesian(cx, cy, outerR, startAngle)
  const oe = polarToCartesian(cx, cy, outerR, end)
  const ie = polarToCartesian(cx, cy, innerR, end)
  const is_ = polarToCartesian(cx, cy, innerR, startAngle)

  return [
    `M ${os.x} ${os.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${oe.x} ${oe.y}`,
    `L ${ie.x} ${ie.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${is_.x} ${is_.y}`,
    'Z',
  ].join(' ')
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface PieSlice {
  /** Display label for this slice */
  label: string
  /** Numeric value — percentages are derived from the total */
  value: number
  /** Formatted display string for the value shown in the center (e.g. "4.560") */
  displayValue?: string
  /** Optional CSS color override; defaults to chart-series tokens */
  color?: string
}

export interface PieChartProps {
  /** Slice data — number of slices matches the array length */
  data: PieSlice[]
  /**
   * Index of the slice shown in the center when nothing is hovered.
   * When omitted the center shows `subtitle` / `centerText` instead.
   */
  defaultIndex?: number
  /** Static text shown in the center idle state (no hover, no defaultIndex) */
  subtitle?: string
  /** Optional secondary static line shown below subtitle in idle state */
  centerText?: string
  /** Chart diameter in px. Default: 240 */
  size?: number
  className?: string
  'aria-label'?: string
  'data-testid'?: string
}

// ── Component ─────────────────────────────────────────────────────────────────

export function PieChart({
  data,
  defaultIndex,
  subtitle,
  centerText,
  size = 240,
  className,
  'aria-label': ariaLabel,
  'data-testid': testId,
}: PieChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const total = data.reduce((sum, d) => sum + d.value, 0)

  const cx = size / 2
  const cy = size / 2
  // Leave a small ring so the scale-up hover doesn't clip
  const outerR = size / 2 - 6
  const innerR = outerR * 0.56

  // Pre-compute slice geometry
  let cursor = 0
  const slices = data.map((item, i) => {
    const pct = total > 0 ? item.value / total : 0
    const startAngle = cursor
    cursor += pct * 360
    return {
      ...item,
      pct,
      startAngle,
      endAngle: cursor,
      color: item.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
    }
  })

  // Active slice: hovered takes priority, then defaultIndex, then nothing
  const activeIndex = hoveredIndex ?? defaultIndex ?? null
  const activeSlice = activeIndex !== null ? slices[activeIndex] : null
  const displayPct = activeSlice !== null ? Math.round(activeSlice.pct * 100) : null

  // Center text area fits the inscribed square of the inner circle
  const centerSize = Math.floor(innerR * Math.SQRT2)

  return (
    <div
      className={clsx(styles.root, className)}
      style={{ width: size, height: size }}
      data-testid={testId}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={ariaLabel}
        className={styles.svg}
      >
        {slices.map((slice, i) => (
          <path
            key={i}
            d={buildSlicePath(cx, cy, outerR, innerR, slice.startAngle, slice.endAngle)}
            fill={slice.color}
            stroke="var(--neutral-surface-bg)"
            strokeWidth={2}
            className={clsx(
              styles.slice,
              hoveredIndex !== null && hoveredIndex !== i && styles.sliceDimmed,
              (hoveredIndex === i || (hoveredIndex === null && defaultIndex === i)) && styles.sliceActive,
            )}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`${slice.label}: ${Math.round(slice.pct * 100)}%`}
          />
        ))}
      </svg>

      {/* ── Center overlay ── */}
      <div
        className={styles.center}
        style={{ width: centerSize, height: centerSize }}
      >
        {activeSlice !== null ? (
          <>
            <span className={styles.percentage}>{displayPct}%</span>
            <span className={styles.sliceLabel}>{activeSlice.label}</span>
            {(activeSlice.displayValue !== undefined) && (
              <span className={styles.sliceValue}>
                {activeSlice.displayValue}
              </span>
            )}
          </>
        ) : (
          <>
            {subtitle && <span className={styles.subtitleIdle}>{subtitle}</span>}
            {centerText && <span className={styles.centerTextIdle}>{centerText}</span>}
          </>
        )}
      </div>
    </div>
  )
}
