import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Button.module.css';
// Named export — never default export in this design system
export function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children, className, 'data-testid': testId, }) {
    return (_jsx("button", { 
        // clsx joins class names together, ignoring any falsy values
        className: clsx(styles.button, styles[variant], styles[size], className), disabled: disabled, onClick: onClick, "data-testid": testId, "aria-disabled": disabled, type: "button", children: children }));
}
