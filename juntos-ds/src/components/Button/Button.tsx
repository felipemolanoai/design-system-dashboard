import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

// Props interface — always at the top, always with JSDoc comments
export interface ButtonProps {
  /** Controls the visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Controls the size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** Disables the button and prevents interaction */
  disabled?: boolean
  /** Function called when the button is clicked */
  onClick?: () => void
  /** Content rendered inside the button */
  children: React.ReactNode
  /** Adds an extra CSS class for layout overrides in the consumer app */
  className?: string
  /** Adds a test ID for automated testing */
  'data-testid'?: string
}

// Named export — never default export in this design system
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className,
  'data-testid': testId,
}: ButtonProps) {
  return (
    <button
      // clsx joins class names together, ignoring any falsy values
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
      // aria-disabled mirrors the disabled state for screen readers
      aria-disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}
