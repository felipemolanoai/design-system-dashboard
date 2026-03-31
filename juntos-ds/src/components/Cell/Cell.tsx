import clsx from 'clsx'
import styles from './Cell.module.css'

export interface CellProps {
  children?: React.ReactNode
  /** Height variant: md = 40px (header row), sm = 32px (data row) */
  size?: 'sm' | 'md'
  /** Renders with header weight and medium color */
  bold?: boolean
  /** Left-aligns content — for label/row-header cells */
  label?: boolean
  /** CSS var() string for background, e.g. 'var(--chart-series-10)' */
  bgColor?: string
  onClick?: () => void
}

export function Cell({
  children,
  size = 'md',
  bold = false,
  label = false,
  bgColor,
  onClick,
}: CellProps) {
  const style: React.CSSProperties = {}

  if (bgColor) {
    style.backgroundColor = bgColor
    style.color = 'var(--color-cell-text-on-color)'
  }

  return (
    <div
      className={clsx(
        styles.cell,
        size === 'sm' ? styles['cell--sm'] : styles['cell--md'],
        bold && !bgColor && styles['cell--bold'],
        label && styles['cell--label'],
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
