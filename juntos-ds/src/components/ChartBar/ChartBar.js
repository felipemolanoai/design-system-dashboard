import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './ChartBar.module.css';
/** Default colors matched to Figma chart-data-series-1/2/3 */
const SERIES_COLORS = [
    'var(--chart-series-1)',
    'var(--chart-series-2)',
    'var(--chart-series-3)',
];
export function ChartBar({ value, series = [{}], orientation = 'vertical', negative = false, className, 'aria-label': ariaLabel, 'data-testid': testId, }) {
    const clamped = Math.min(100, Math.max(0, value));
    const isVertical = orientation === 'vertical';
    /**
     * Build segment divs. For vertical bars the array is reversed so
     * series[0] renders at the bottom (primary / most-prominent position).
     * For horizontal bars the array stays in order so series[0] is at the left.
     */
    // For vertical: reverse so series[0] renders at the bottom (most prominent position).
    // For horizontal: keep natural order so series[0] is at the left.
    const orderedSeries = isVertical ? [...series].reverse() : series;
    // originalIndex maps each rendered segment back to its position in the original series array
    // so the default color assignment is stable regardless of reversal.
    const renderSegments = () => orderedSeries.map((s, renderIdx) => {
        const originalIdx = isVertical ? series.length - 1 - renderIdx : renderIdx;
        const color = s.color ?? SERIES_COLORS[originalIdx] ?? SERIES_COLORS[0];
        const hasSeparator = renderIdx > 0;
        return (_jsx("div", { className: clsx(styles.segment, {
                [styles.separatorTop]: isVertical && hasSeparator,
                [styles.separatorLeft]: !isVertical && hasSeparator,
            }), style: { backgroundColor: color } }, renderIdx));
    });
    // ── Vertical positive: fills from bottom ──────────────────────
    if (isVertical && !negative) {
        return (_jsx("div", { className: clsx(styles.rootV, className), role: "img", "aria-label": ariaLabel, "data-testid": testId, children: _jsx("div", { className: styles.fillV, style: { height: `${clamped}%` }, children: renderSegments() }) }));
    }
    // ── Vertical negative: fills downward from the center line ────
    if (isVertical && negative) {
        return (_jsx("div", { className: clsx(styles.rootV, className), role: "img", "aria-label": ariaLabel, "data-testid": testId, children: _jsx("div", { className: styles.negZoneV, children: _jsx("div", { className: styles.fillVNeg, style: { height: `${clamped}%` }, children: renderSegments() }) }) }));
    }
    // ── Horizontal positive: fills from left ──────────────────────
    if (!isVertical && !negative) {
        return (_jsx("div", { className: clsx(styles.rootH, className), role: "img", "aria-label": ariaLabel, "data-testid": testId, children: _jsx("div", { className: styles.fillH, style: { width: `${clamped}%` }, children: renderSegments() }) }));
    }
    // ── Horizontal negative: fills rightward from center line ─────
    return (_jsx("div", { className: clsx(styles.rootH, className), role: "img", "aria-label": ariaLabel, "data-testid": testId, children: _jsx("div", { className: styles.negZoneH, children: _jsx("div", { className: styles.fillH, style: { width: `${clamped}%` }, children: renderSegments() }) }) }));
}
