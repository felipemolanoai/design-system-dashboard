import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './ChartAxisValues.module.css';
export function ChartAxisValues({ labels, orientation = 'vertical', className, 'aria-label': ariaLabel, 'data-testid': testId, }) {
    if (orientation === 'vertical') {
        return (_jsxs("div", { className: clsx(styles.rootV, className), role: "presentation", "aria-label": ariaLabel, "data-testid": testId, children: [_jsx("div", { className: styles.ticksV, children: labels.map((label, i) => (_jsxs("div", { className: styles.tickV, children: [_jsx("span", { className: styles.tickLabel, children: label }), _jsx("div", { className: styles.tickMarkH })] }, i))) }), _jsx("div", { className: styles.lineV })] }));
    }
    return (_jsxs("div", { className: clsx(styles.rootH, className), role: "presentation", "aria-label": ariaLabel, "data-testid": testId, children: [_jsxs("div", { className: styles.lineHWrap, children: [_jsx("div", { className: styles.lineH }), _jsx("div", { className: styles.lineHExtension })] }), _jsx("div", { className: styles.ticksH, children: labels.map((label, i) => (_jsxs("div", { className: styles.tickH, children: [_jsx("div", { className: styles.tickMarkV }), _jsx("span", { className: styles.tickLabelH, children: label })] }, i))) })] }));
}
