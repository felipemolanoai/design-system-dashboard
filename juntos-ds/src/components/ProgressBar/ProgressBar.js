import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './ProgressBar.module.css';
export function ProgressBar({ value, size = 'md', 'aria-label': ariaLabel = 'Progress', className, 'data-testid': testId, }) {
    const clampedValue = Math.min(100, Math.max(0, value));
    return (_jsx("div", { className: clsx(styles.track, styles[size], className), role: "progressbar", "aria-valuenow": clampedValue, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": ariaLabel, "data-testid": testId, children: _jsx("div", { className: styles.fill, style: { width: `${clampedValue}%` } }) }));
}
