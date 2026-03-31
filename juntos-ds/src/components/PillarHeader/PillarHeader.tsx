import React from 'react'
import clsx from 'clsx'
import styles from './PillarHeader.module.css'

export interface PillarHeaderProps {
  /** Two-digit pilar number, e.g. "01" */
  number: string
  /** Small label above the title, e.g. "Pilar 1" */
  pilarLabel: string
  /** Main title, e.g. "Canal RTM" */
  title: string
  /** Badge element (e.g. <Badge>6 CANALES</Badge>) */
  badge?: React.ReactNode
  className?: string
}

export function PillarHeader({
  number,
  pilarLabel,
  title,
  badge,
  className,
}: PillarHeaderProps) {
  return (
    <div className={clsx(styles.header, className)}>
      <div className={styles.leading}>
        <span className={styles.number}>{number}</span>
        <div className={styles.titleGroup}>
          <span className={styles.pilarLabel}>{pilarLabel}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
      {badge && <div className={styles.badgeSlot}>{badge}</div>}
    </div>
  )
}
