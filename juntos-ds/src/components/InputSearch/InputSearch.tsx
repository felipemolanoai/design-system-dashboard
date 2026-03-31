import React from 'react'
import clsx from 'clsx'
import styles from './InputSearch.module.css'

// ---- Inline SVG icons ----

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.75 15.75L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className={styles.spinnerSvg}>
      <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="11 34" strokeLinecap="round" />
    </svg>
  )
}

// ---- Props interface ----

export interface InputSearchProps {
  /** Current value of the input (controlled) */
  value?: string
  /** Placeholder text shown when the input is empty */
  placeholder?: string
  /** Disables the input and prevents interaction */
  disabled?: boolean
  /** Shows a loading spinner instead of the clear button */
  loading?: boolean
  /** Called with the new string value when the user types */
  onChange?: (value: string) => void
  /** Called when the user clicks the clear (×) button */
  onClear?: () => void
  /** Extra CSS class for layout overrides in the consumer app */
  className?: string
  /** Test ID for automated testing */
  'data-testid'?: string
}

// ---- Component ----

export function InputSearch({
  value,
  placeholder = 'Search…',
  disabled = false,
  loading = false,
  onChange,
  onClear,
  className,
  'data-testid': testId,
}: InputSearchProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        disabled && styles.disabled,
        loading && !disabled && styles.loading,
        className
      )}
      data-testid={testId}
    >
      {/* Left: search icon */}
      <span className={styles.searchIcon}>
        <SearchIcon />
      </span>

      {/* Text input */}
      <input
        className={styles.input}
        type="search"
        value={value}
        placeholder={placeholder}
        disabled={disabled || loading}
        onChange={e => onChange?.(e.target.value)}
        aria-label="Search"
      />

      {/* Right: trailing area */}
      <div className={styles.trailingArea}>
        {/* Divider — hidden in disabled state */}
        {!disabled && <span className={styles.divider} aria-hidden="true" />}

        {loading && !disabled ? (
          /* Spinner */
          <span className={styles.spinner} role="status" aria-label="Loading">
            <SpinnerIcon />
          </span>
        ) : (
          /* Clear button */
          <button
            type="button"
            className={styles.clearBtn}
            onClick={onClear}
            disabled={disabled}
            aria-label="Clear search"
            tabIndex={disabled ? -1 : 0}
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  )
}
