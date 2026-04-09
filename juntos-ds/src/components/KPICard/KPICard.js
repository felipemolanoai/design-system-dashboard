import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './KPICard.module.css';
export function KPICard({ label, value, icon, className }) {
    return (_jsx("div", { className: clsx(styles.card, className), children: _jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.textGroup, children: [_jsx("span", { className: styles.label, children: label }), _jsx("span", { className: styles.value, children: value })] }), icon && (_jsx("div", { className: styles.iconBox, "aria-hidden": "true", children: icon }))] }) }));
}
