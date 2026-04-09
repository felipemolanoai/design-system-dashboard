import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './PillarCard.module.css';
export function PillarCard({ header, chart, stats, className }) {
    return (_jsxs("div", { className: clsx(styles.card, className), children: [_jsx("div", { className: styles.header, children: header }), _jsx("div", { className: styles.chartArea, children: chart }), stats && (_jsx("div", { className: styles.statsRow, children: stats }))] }));
}
