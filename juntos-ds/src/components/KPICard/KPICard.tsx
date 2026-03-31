import React from 'react'
import clsx from 'clsx'
import styles from './KPICard.module.css'

export interface KPICardProps {
  /** Small label above the value */
  label: string
  /** Main numeric value */
  value: string | number
  /** Icon rendered inside the colored square */
  icon?: React.ReactNode
  className?: string
}

export function KPICard({ label, value, icon, className }: KPICardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
        {icon && (
          <div className={styles.iconBox} aria-hidden="true">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
