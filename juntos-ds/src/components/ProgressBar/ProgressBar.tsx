import React from 'react'
import clsx from 'clsx'
import styles from './ProgressBar.module.css'

export interface ProgressBarProps {
  /** Current progress value, 0–100 */
  value: number
  /** Controls the height of the bar */
  size?: 'sm' | 'md'
  /** Accessible label for screen readers */
  'aria-label'?: string
  /** Adds an extra CSS class for layout overrides in the consumer app */
  className?: string
  /** Adds a test ID for automated testing */
  'data-testid'?: string
}

export function ProgressBar({
  value,
  size = 'md',
  'aria-label': ariaLabel = 'Progress',
  className,
  'data-testid': testId,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div
      className={clsx(styles.track, styles[size], className)}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      <div
        className={styles.fill}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  )
}
