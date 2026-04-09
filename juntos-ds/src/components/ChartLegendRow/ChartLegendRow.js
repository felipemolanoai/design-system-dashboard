import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './ChartLegendRow.module.css';
export function ChartLegendRow({ color, name, value, percentage, highlighted = false, className, }) {
    return (_jsxs("div", { className: clsx(styles.row, highlighted && styles.highlighted, className), children: [_jsx("span", { className: styles.dot, style: { backgroundColor: color }, "aria-hidden": "true" }), _jsx("span", { className: styles.name, children: name }), value !== undefined && (_jsx("span", { className: styles.value, children: value })), percentage !== undefined && (_jsx("span", { className: styles.percentage, children: percentage }))] }));
}
