import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './PillarHeader.module.css';
export function PillarHeader({ number, pilarLabel, title, badge, className, }) {
    return (_jsxs("div", { className: clsx(styles.header, className), children: [_jsxs("div", { className: styles.leading, children: [_jsx("span", { className: styles.number, children: number }), _jsxs("div", { className: styles.titleGroup, children: [_jsx("span", { className: styles.pilarLabel, children: pilarLabel }), _jsx("span", { className: styles.title, children: title })] })] }), badge && _jsx("div", { className: styles.badgeSlot, children: badge })] }));
}
