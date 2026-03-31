import clsx from 'clsx'
import styles from './ChartAxisValues.module.css'

export interface ChartAxisValuesProps {
  /** Tick labels to display along the axis */
  labels: string[]
  /** Axis orientation */
  orientation?: 'vertical' | 'horizontal'
  className?: string
  'aria-label'?: string
  'data-testid'?: string
}

export function ChartAxisValues({
  labels,
  orientation = 'vertical',
  className,
  'aria-label': ariaLabel,
  'data-testid': testId,
}: ChartAxisValuesProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={clsx(styles.rootV, className)}
        role="presentation"
        aria-label={ariaLabel}
        data-testid={testId}
      >
        <div className={styles.ticksV}>
          {labels.map((label, i) => (
            <div key={i} className={styles.tickV}>
              <span className={styles.tickLabel}>{label}</span>
              <div className={styles.tickMarkH} />
            </div>
          ))}
        </div>
        <div className={styles.lineV} />
      </div>
    )
  }

  return (
    <div
      className={clsx(styles.rootH, className)}
      role="presentation"
      aria-label={ariaLabel}
      data-testid={testId}
    >
      <div className={styles.lineHWrap}>
        <div className={styles.lineH} />
        <div className={styles.lineHExtension} />
      </div>
      <div className={styles.ticksH}>
        {labels.map((label, i) => (
          <div key={i} className={styles.tickH}>
            <div className={styles.tickMarkV} />
            <span className={styles.tickLabelH}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
