import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Tab.module.css';
export function Tab({ label, active = false, icon, onClick, className }) {
    return (_jsxs("button", { type: "button", role: "tab", "aria-selected": active, className: clsx(styles.tab, active && styles.active, className), onClick: onClick, children: [icon && _jsx("span", { className: styles.icon, "aria-hidden": "true", children: icon }), _jsx("span", { className: styles.label, children: label })] }));
}
