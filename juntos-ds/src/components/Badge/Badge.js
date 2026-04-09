import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Badge.module.css';
export function Badge({ children, variant = 'primary', className }) {
    return (_jsx("span", { className: clsx(styles.badge, styles[variant], className), children: children }));
}
