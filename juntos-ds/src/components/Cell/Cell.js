import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Cell.module.css';
export function Cell({ children, size = 'md', bold = false, label = false, bgColor, onClick, }) {
    const style = {};
    if (bgColor) {
        style.backgroundColor = bgColor;
        style.color = 'var(--color-cell-text-on-color)';
    }
    return (_jsx("div", { className: clsx(styles.cell, size === 'sm' ? styles['cell--sm'] : styles['cell--md'], bold && !bgColor && styles['cell--bold'], label && styles['cell--label']), style: style, onClick: onClick, children: children }));
}
