import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, Column, StatItem } from 'juntos-ds';
import styles from './ActividadesPDVPage.module.css';
// ── Shared tab config ────────────────────────────────────────
const TABS = [
    'Dashboard',
    'Perfil del Cliente',
    'Canal RTM',
    'Tamaño RTM',
    'Potencial RTM',
    'Perfil Territorial',
    'Actividades PDV',
    'Autonomía Digital',
];
const ACTIVIDADES_PDV_TAB_INDEX = 6;
// ── Heatmap data ──────────────────────────────────────────────
const C = 'var(--chart-series-10)'; // cyan
const Y = 'var(--chart-series-3)'; // yellow
const HEATMAP_ROWS = [
    'Exhibición', 'Degustación', 'Activación', 'Impulso Venta', 'Negociación', 'Muestreo',
];
const HEATMAP_COLS = [
    { header: 'HM', cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
    { header: 'OP', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
    { header: 'HMC', cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: Y }] },
    { header: 'AUTO', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
    { header: 'MAY', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
    { header: 'ESTR', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
];
const HEATMAP_LEGEND = [
    { label: '< 35', color: 'var(--neutral-surface-container-low)' },
    { label: '35–54', color: 'var(--chart-series-13)' },
    { label: '55–69', color: 'var(--chart-series-3)' },
    { label: '70–84', color: 'var(--chart-series-10)' },
    { label: '85+', color: 'var(--chart-series-10)' },
];
// ── Actividades (shared x-axis) ───────────────────────────────
const ACTIVIDADES = [
    { label: 'Exhibición', cobertura: 82, meta: 90, promedio: 74 },
    { label: 'Degustación', cobertura: 65, meta: 80, promedio: 58 },
    { label: 'Activación', cobertura: 71, meta: 85, promedio: 63 },
    { label: 'Impulso Venta', cobertura: 58, meta: 75, promedio: 51 },
    { label: 'Negociación', cobertura: 44, meta: 70, promedio: 39 },
    { label: 'Muestreo', cobertura: 37, meta: 65, promedio: 31 },
];
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Page ─────────────────────────────────────────────────────
export function ActividadesPDVPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === ACTIVIDADES_PDV_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 0)
                            navigate('/');
                        else if (i === 1)
                            navigate('/perfil-cliente');
                        else if (i === 2)
                            navigate('/canal-rtm');
                        else if (i === 3)
                            navigate('/tamano-rtm');
                        else if (i === 4)
                            navigate('/potencial-rtm');
                        else if (i === 5)
                            navigate('/perfil-territorial');
                        else if (i === 7)
                            navigate('/autonomia-digital');
                    } }, tab))) }), _jsxs("div", { className: styles.pageContent, children: [_jsx("h1", { className: styles.pageTitle, children: "Actividades PDV" }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Cobertura \u2014 Actividad \u00D7 Canal" }), _jsxs("div", { className: styles.heatmapWrap, children: [_jsxs("div", { className: styles.heatmapGrid, children: [_jsx(Column, { isLabelColumn: true, header: "", cells: HEATMAP_ROWS.map((label) => ({ value: label })) }), HEATMAP_COLS.map((col) => (_jsx(Column, { header: col.header, cells: col.cells.map((c) => ({ value: c.v, bgColor: c.bg })) }, col.header)))] }), _jsxs("div", { className: styles.heatmapLegend, children: [_jsx("span", { className: styles.heatmapLegendTitle, children: "Cobertura %" }), HEATMAP_LEGEND.map((item) => (_jsxs("span", { className: styles.heatmapLegendItem, children: [_jsx("span", { className: styles.heatmapLegendDot, style: { backgroundColor: item.color } }), _jsx("span", { className: styles.heatmapLegendLabel, children: item.label })] }, item.label)))] }), _jsxs("div", { className: styles.heatmapStats, children: [_jsx(StatItem, { label: "Actividad L\u00EDder", value: "Exhibici\u00F3n" }), _jsx(StatItem, { label: "Canal m\u00E1s activo", value: "Estrat\u00E9gico", valueColor: "var(--chart-series-10)" }), _jsx(StatItem, { label: "Promedio Cobertura", value: "65.4%", valueColor: "var(--chart-warning)" })] })] })] }), _jsxs("div", { className: styles.bottomRow, children: [_jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Promedio por Actividad vs Meta" }), _jsxs("div", { className: styles.barChartWrap, children: [_jsx("div", { className: styles.barsArea, children: ACTIVIDADES.map((a) => (_jsx("div", { className: styles.barGroup, children: _jsxs("div", { className: styles.bars, children: [_jsx("div", { className: styles.barCobertura, style: { height: `${a.cobertura}%` }, "aria-label": `${a.label} Cobertura: ${a.cobertura}%` }), _jsx("div", { className: styles.barMeta, style: { height: `${a.meta}%` }, "aria-label": `${a.label} Meta: ${a.meta}%` })] }) }, a.label))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: ACTIVIDADES.map((a) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: a.label })] }, a.label))) })] }), _jsxs("div", { className: styles.legend, children: [_jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.dotCobertura}` }), _jsx("span", { className: styles.legendLabel, children: "Cobertura Promo" })] }), _jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.dotMeta}` }), _jsx("span", { className: styles.legendLabel, children: "Meta" })] })] })] })] }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Cobertura Promedio por Canal" }), _jsxs("div", { className: styles.barChartWrap, children: [_jsx("div", { className: styles.barsArea, children: ACTIVIDADES.map((a) => (_jsx("div", { className: styles.barGroup, children: _jsx("div", { className: styles.bars, children: _jsx("div", { className: styles.barPromedio, style: { height: `${a.promedio}%` }, "aria-label": `${a.label} Promedio: ${a.promedio}%` }) }) }, a.label))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: ACTIVIDADES.map((a) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: a.label })] }, a.label))) })] }), _jsx("div", { className: styles.legend, children: _jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.dotPromedio}` }), _jsx("span", { className: styles.legendLabel, children: "Cobertura Promedio" })] }) })] })] })] })] })] }));
}
