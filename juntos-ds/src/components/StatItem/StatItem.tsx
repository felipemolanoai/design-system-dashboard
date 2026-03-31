import React from 'react'
import clsx from 'clsx'
import styles from './StatItem.module.css'

export interface StatItemProps {
  /** Uppercase label */
  label: string
  /** Value displayed below the label */
  value: string | number
  /** Optional CSS color override for the value (use a design token var) */
  valueColor?: string
  className?: string
}

export function StatItem({ label, value, valueColor, className }: StatItemProps) {
  return (
    <div className={clsx(styles.stat, className)}>
      <span className={styles.label}>{label}</span>
      <span
        className={styles.value}
        style={valueColor ? { color: valueColor } : undefined}
      >
        {value}
      </span>
    </div>
  )
}
