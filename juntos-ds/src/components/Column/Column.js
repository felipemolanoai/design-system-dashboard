import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { Cell } from '../Cell';
import styles from './Column.module.css';
export function Column({ header, cells, isLabelColumn = false, className }) {
    return (_jsxs("div", { className: clsx(styles.column, isLabelColumn && styles['column--label'], className), children: [_jsx(Cell, { size: "md", bold: true, label: isLabelColumn, children: header }), cells.map((cell, i) => (_jsx(Cell, { size: "sm", bgColor: cell.bgColor, label: isLabelColumn, children: cell.value }, i)))] }));
}
