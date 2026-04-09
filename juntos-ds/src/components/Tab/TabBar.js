import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './TabBar.module.css';
export function TabBar({ children, className }) {
    return (_jsx("div", { role: "tablist", className: clsx(styles.tabBar, className), children: children }));
}
