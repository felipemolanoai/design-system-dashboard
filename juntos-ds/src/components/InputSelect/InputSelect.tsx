import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './InputSelect.module.css'

// ---- Inline SVG icons ----

function ChevronDownIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronUpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ---- Types ----

export interface SelectOption {
  /** Unique value for this option */
  value: string
  /** Display label */
  label: string
  /** Optional icon rendered before the label */
  leadingIcon?: React.ReactNode
  /** Optional icon rendered after the label */
  trailingIcon?: React.ReactNode
}

export interface InputSelectProps {
  /** Label shown above the input */
  label?: string
  /** Placeholder shown when no option is selected */
  placeholder?: string
  /** Currently selected value (controlled) */
  value?: string
  /** List of selectable options */
  options: SelectOption[]
  /** Disables the select and prevents interaction */
  disabled?: boolean
  /** Visual size variant */
  size?: 'default' | 'medium' | 'small'
  /** Optional icon rendered inside the left side of the trigger */
  leadingIcon?: React.ReactNode
  /** Called with the option value when the user selects an item */
  onChange?: (value: string) => void
  /** Extra CSS class for layout overrides in the consumer app */
  className?: string
  /** Test ID for automated testing */
  'data-testid'?: string
}

// ---- Component ----

export function InputSelect({
  label,
  placeholder = 'Input Text',
  value,
  options,
  disabled = false,
  size = 'default',
  leadingIcon,
  onChange,
  className,
  'data-testid': testId,
}: InputSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(o => o.value === value)
  const displayText = selectedOption?.label ?? placeholder
  const isPlaceholder = !selectedOption

  const iconSize = size === 'small' ? 16 : 20

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function handleTriggerClick() {
    if (!disabled) setIsOpen(prev => !prev)
  }

  function handleOptionClick(optionValue: string) {
    onChange?.(optionValue)
    setIsOpen(false)
  }

  function handleKeyboardSelect(e: React.KeyboardEvent, optionValue: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOptionClick(optionValue)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.root, styles[size], className)}
      data-testid={testId}
    >
      {/* Label */}
      {label && (
        <span className={styles.label}>{label}</span>
      )}

      {/* Trigger button */}
      <button
        type="button"
        className={clsx(
          styles.trigger,
          isOpen && styles.open,
          disabled && styles.disabled,
        )}
        onClick={handleTriggerClick}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label ?? 'Select'}
      >
        {/* Leading icon */}
        {leadingIcon && (
          <span className={styles.leadingIcon}>{leadingIcon}</span>
        )}

        {/* Selected text / placeholder */}
        <span className={clsx(styles.triggerText, isPlaceholder && styles.placeholderText)}>
          {displayText}
        </span>

        {/* Chevron */}
        <span className={styles.chevron}>
          {isOpen
            ? <ChevronUpIcon size={iconSize} />
            : <ChevronDownIcon size={iconSize} />
          }
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          role="listbox"
          className={styles.dropdown}
          aria-label={label ?? 'Options'}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={clsx(
                styles.option,
                option.value === value && styles.optionSelected,
              )}
              onClick={() => handleOptionClick(option.value)}
              onKeyDown={e => handleKeyboardSelect(e, option.value)}
              tabIndex={0}
            >
              {option.leadingIcon && (
                <span className={styles.optionLeadingIcon}>{option.leadingIcon}</span>
              )}
              <span className={styles.optionLabel}>{option.label}</span>
              {option.trailingIcon && (
                <span className={styles.optionTrailingIcon}>{option.trailingIcon}</span>
              )}
              {index < options.length - 1 && (
                <span className={styles.optionDivider} aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
