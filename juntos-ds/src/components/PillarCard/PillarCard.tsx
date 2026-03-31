import React from 'react'
import clsx from 'clsx'
import styles from './PillarCard.module.css'

export interface PillarCardProps {
  /** Header section (use PillarHeader component) */
  header: React.ReactNode
  /** Chart or data visualisation area */
  chart: React.ReactNode
  /** Stats row at the bottom (use StatItem components inside a fragment) */
  stats?: React.ReactNode
  className?: string
}

export function PillarCard({ header, chart, stats, className }: PillarCardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.header}>{header}</div>
      <div className={styles.chartArea}>{chart}</div>
      {stats && (
        <div className={styles.statsRow}>
          {stats}
        </div>
      )}
    </div>
  )
}
