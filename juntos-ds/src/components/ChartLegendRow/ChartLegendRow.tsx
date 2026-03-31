import React from 'react'
import clsx from 'clsx'
import styles from './ChartLegendRow.module.css'

export interface ChartLegendRowProps {
  /** CSS color value for the dot indicator */
  color: string
  /** Name/label of the series */
  name: string
  /** Numeric value */
  value?: string | number
  /** Percentage value */
  percentage?: string
  /** Whether to highlight the row (e.g. active category) */
  highlighted?: boolean
  className?: string
}

export function ChartLegendRow({
  color,
  name,
  value,
  percentage,
  highlighted = false,
  className,
}: ChartLegendRowProps) {
  return (
    <div className={clsx(styles.row, highlighted && styles.highlighted, className)}>
      <span
        className={styles.dot}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className={styles.name}>{name}</span>
      {value !== undefined && (
        <span className={styles.value}>{value}</span>
      )}
      {percentage !== undefined && (
        <span className={styles.percentage}>{percentage}</span>
      )}
    </div>
  )
}
