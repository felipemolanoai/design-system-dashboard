import React from 'react'
import clsx from 'clsx'
import styles from './Badge.module.css'

export interface BadgeProps {
  /** Text content of the badge */
  children: React.ReactNode
  /** Visual variant */
  variant?: 'primary'
  className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant], className)}>
      {children}
    </span>
  )
}
