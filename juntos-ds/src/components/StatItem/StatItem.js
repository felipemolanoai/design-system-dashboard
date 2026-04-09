import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './StatItem.module.css';
export function StatItem({ label, value, valueColor, className }) {
    return (_jsxs("div", { className: clsx(styles.stat, className), children: [_jsx("span", { className: styles.label, children: label }), _jsx("span", { className: styles.value, style: valueColor ? { color: valueColor } : undefined, children: value })] }));
}
