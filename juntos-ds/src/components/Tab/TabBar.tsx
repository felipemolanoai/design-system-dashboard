import React from 'react'
import clsx from 'clsx'
import styles from './TabBar.module.css'

export interface TabBarProps {
  children: React.ReactNode
  className?: string
}

export function TabBar({ children, className }: TabBarProps) {
  return (
    <div role="tablist" className={clsx(styles.tabBar, className)}>
      {children}
    </div>
  )
}
