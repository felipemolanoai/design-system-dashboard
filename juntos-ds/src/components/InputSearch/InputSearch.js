import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './InputSearch.module.css';
// ---- Inline SVG icons ----
function SearchIcon() {
    return (_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [_jsx("circle", { cx: "11", cy: "11", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M15.75 15.75L20 20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function ClearIcon() {
    return (_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [_jsx("circle", { cx: "12", cy: "12", r: "8.25", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M9 9l6 6M15 9l-6 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function SpinnerIcon() {
    return (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", "aria-hidden": "true", className: styles.spinnerSvg, children: _jsx("circle", { cx: "9", cy: "9", r: "7.25", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "11 34", strokeLinecap: "round" }) }));
}
// ---- Component ----
export function InputSearch({ value, placeholder = 'Search…', disabled = false, loading = false, onChange, onClear, className, 'data-testid': testId, }) {
    return (_jsxs("div", { className: clsx(styles.wrapper, disabled && styles.disabled, loading && !disabled && styles.loading, className), "data-testid": testId, children: [_jsx("span", { className: styles.searchIcon, children: _jsx(SearchIcon, {}) }), _jsx("input", { className: styles.input, type: "search", value: value, placeholder: placeholder, disabled: disabled || loading, onChange: e => onChange?.(e.target.value), "aria-label": "Search" }), _jsxs("div", { className: styles.trailingArea, children: [!disabled && _jsx("span", { className: styles.divider, "aria-hidden": "true" }), loading && !disabled ? (_jsx("span", { className: styles.spinner, role: "status", "aria-label": "Loading", children: _jsx(SpinnerIcon, {}) })) : (_jsx("button", { type: "button", className: styles.clearBtn, onClick: onClear, disabled: disabled, "aria-label": "Clear search", tabIndex: disabled ? -1 : 0, children: _jsx(ClearIcon, {}) }))] })] }));
}
