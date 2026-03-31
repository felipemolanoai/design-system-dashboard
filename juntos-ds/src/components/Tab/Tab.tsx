import React from 'react'
import clsx from 'clsx'
import styles from './Tab.module.css'

export interface TabProps {
  /** Label text of the tab */
  label: string
  /** Whether this tab is currently active */
  active?: boolean
  /** Icon rendered before the label */
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Tab({ label, active = false, icon, onClick, className }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={clsx(styles.tab, active && styles.active, className)}
      onClick={onClick}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  )
}
