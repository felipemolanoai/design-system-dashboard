import clsx from 'clsx'
import { Cell } from '../Cell'
import styles from './Column.module.css'

export interface ColumnDataCell {
  value?: string | number
  bgColor?: string
}

export interface ColumnProps {
  /** Header label shown in the first (md) cell */
  header?: string
  /** Data rows — each becomes a sm Cell */
  cells: ColumnDataCell[]
  /** When true: left-aligned label column with no flex-grow */
  isLabelColumn?: boolean
  className?: string
}

export function Column({ header, cells, isLabelColumn = false, className }: ColumnProps) {
  return (
    <div className={clsx(styles.column, isLabelColumn && styles['column--label'], className)}>
      {/* Header cell — always md height */}
      <Cell size="md" bold label={isLabelColumn}>
        {header}
      </Cell>

      {/* Data cells — sm height */}
      {cells.map((cell, i) => (
        <Cell
          key={i}
          size="sm"
          bgColor={cell.bgColor}
          label={isLabelColumn}
        >
          {cell.value}
        </Cell>
      ))}
    </div>
  )
}
