import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Badge, Tab, TabBar, KPICard, PillarHeader, ChartLegendRow, StatItem, PillarCard, Column, PieChart, } from 'juntos-ds';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
// ── Icon helpers ────────────────────────────────────────────────
const InsightIcon = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", children: [_jsx("path", { d: "M9 18V5l12-2v13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("circle", { cx: "6", cy: "18", r: "3", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "18", cy: "16", r: "3", stroke: "currentColor", strokeWidth: "2" })] }));
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Tab labels ───────────────────────────────────────────────────
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
// ── Canal RTM pie data ────────────────────────────────────────────
const CANAL_PIE_DATA = [
    { label: 'Home Market', value: 4560, displayValue: '4.560', color: 'var(--chart-series-10)' },
    { label: 'On Premise', value: 3120, displayValue: '3.120', color: 'var(--chart-series-13)' },
    { label: 'HM Complementario', value: 2340, displayValue: '2.340', color: 'var(--chart-positive)' },
    { label: 'Autoservicios', value: 2100, displayValue: '2.100', color: 'var(--chart-warning)' },
    { label: 'Mayoristas', value: 1890, displayValue: '1.890', color: 'var(--chart-negative)' },
    { label: 'Estratégico', value: 890, displayValue: '890', color: 'var(--action-info-surface)' },
];
function HBarChartPlaceholder({ items }) {
    return (_jsx("div", { className: styles.hbarList, children: items.map((item) => (_jsxs("div", { className: styles.hbarRow, children: [_jsx("span", { className: styles.hbarLabel, children: item.label }), _jsx("div", { className: styles.hbarTrack, children: _jsx("div", { className: styles.hbarFill, style: { width: `${item.pct}%`, backgroundColor: item.color } }) }), _jsx("span", { className: styles.hbarValue, children: item.value })] }, item.label))) }));
}
// ── Potencial RTM bubble scatter chart ──────────────────────────
const CANAL_TABS_POTENCIAL = ['HM', 'OP', 'Auto', 'May', 'HMC', 'Estr'];
const SCATTER_POINTS = [
    { x: 30, y: 28, r: 22, canal: 'HM' },
    { x: 88, y: 63, r: 6, canal: 'HM' },
    { x: 50, y: 30, r: 15, canal: 'OP' },
    { x: 78, y: 57, r: 7, canal: 'OP' },
    { x: 50, y: 35, r: 12, canal: 'Auto' },
    { x: 57, y: 43, r: 9, canal: 'Auto' },
    { x: 56, y: 41, r: 9, canal: 'May' },
    { x: 91, y: 66, r: 5, canal: 'May' },
    { x: 75, y: 52, r: 13, canal: 'HMC' },
    { x: 86, y: 57, r: 7, canal: 'HMC' },
    { x: 82, y: 57, r: 7, canal: 'Estr' },
    { x: 94, y: 79, r: 5, canal: 'Estr' },
];
const CANAL_COLORS = {
    HM: 'var(--chart-negative)',
    OP: 'var(--chart-series-13)',
    Auto: 'var(--chart-positive)',
    May: 'var(--chart-warning)',
    HMC: 'var(--chart-series-10)',
    Estr: 'var(--chart-series-1)',
};
function PotencialChart() {
    const [activeCanal, setActiveCanal] = useState(null);
    const visiblePoints = activeCanal
        ? SCATTER_POINTS.filter(p => p.canal === activeCanal)
        : SCATTER_POINTS;
    const W = 280, H = 150;
    const PAD = { top: 10, right: 10, bottom: 28, left: 34 };
    const plotW = W - PAD.left - PAD.right;
    const plotH = H - PAD.top - PAD.bottom;
    const mx = (v) => PAD.left + (v / 100) * plotW;
    const my = (v) => PAD.top + (1 - v / 100) * plotH;
    const TICKS = [0, 25, 50, 75, 100];
    return (_jsxs("div", { className: styles.potencialWrap, children: [_jsx(TabBar, { children: CANAL_TABS_POTENCIAL.map(canal => (_jsx(Tab, { label: canal, active: activeCanal === canal, onClick: () => setActiveCanal(activeCanal === canal ? null : canal) }, canal))) }), _jsxs("svg", { viewBox: `0 0 ${W} ${H}`, className: styles.potencialSvg, "aria-label": "\u00CDndice Potencial vs % Realizaci\u00F3n", children: [TICKS.map(t => (_jsx("line", { x1: mx(0), y1: my(t), x2: mx(100), y2: my(t), stroke: "var(--neutral-surface-container-high)", strokeWidth: "0.5" }, `gy${t}`))), TICKS.map(t => (_jsx("line", { x1: mx(t), y1: my(100), x2: mx(t), y2: my(0), stroke: "var(--neutral-surface-container-high)", strokeWidth: "0.5" }, `gx${t}`))), _jsx("line", { x1: mx(0), y1: my(100), x2: mx(0), y2: my(0), stroke: "var(--neutral-surface-container-low)", strokeWidth: "1" }), _jsx("line", { x1: mx(0), y1: my(0), x2: mx(100), y2: my(0), stroke: "var(--neutral-surface-container-low)", strokeWidth: "1" }), _jsx("line", { x1: mx(0), y1: my(0), x2: mx(100), y2: my(100), stroke: "var(--neutral-on-surface-medium)", strokeWidth: "1", strokeDasharray: "4 3", opacity: "0.4" }), TICKS.map(t => (_jsx("text", { x: PAD.left - 4, y: my(t), textAnchor: "end", dominantBaseline: "middle", fontSize: "7.5", fill: "var(--neutral-on-surface-medium)", children: t }, `yl${t}`))), TICKS.map(t => (_jsx("text", { x: mx(t), y: PAD.top + plotH + 10, textAnchor: "middle", fontSize: "7.5", fill: "var(--neutral-on-surface-medium)", children: t }, `xl${t}`))), _jsx("text", { x: 7, y: PAD.top + plotH / 2, textAnchor: "middle", fontSize: "7.5", fill: "var(--neutral-on-surface-high)", transform: `rotate(-90, 7, ${PAD.top + plotH / 2})`, children: "% Realizaci\u00F3n" }), _jsx("text", { x: PAD.left + plotW / 2, y: H - 1, textAnchor: "middle", fontSize: "7.5", fill: "var(--neutral-on-surface-high)", children: "\u00CDndice Potencial" }), visiblePoints.map((p, i) => (_jsx("circle", { cx: mx(p.x), cy: my(p.y), r: p.r, fill: CANAL_COLORS[p.canal], opacity: "0.85" }, i)))] })] }));
}
// ── Heatmap ──────────────────────────────────────────────────────
// Colors match the Figma node-by-node: --chart-series-10 (cyan) | --chart-series-3 (yellow)
const C = 'var(--chart-series-10)'; // cyan
const Y = 'var(--chart-series-3)'; // yellow
const HEATMAP_LABELS = [
    'Exhibición',
    'Degustación',
    'Activación',
    'Impulso Venta',
    'Negociación',
    'Muestreo text',
];
// Explicit per-cell colors directly from Figma (node 122-1884)
const HEATMAP_DATA = [
    { header: 'HM', cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
    { header: 'OP', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
    { header: 'HMC', cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: Y }] },
    { header: 'AUTO', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
    { header: 'MAY', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
    { header: 'ESTR', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
];
// Legend entries — colored dot + label; tokens directly from Figma
const HEATMAP_LEGEND = [
    { label: '< 35', color: 'var(--neutral-surface-container-low)' },
    { label: '35–54', color: 'var(--chart-series-13)' },
    { label: '55–69', color: 'var(--chart-warning)' },
    { label: '70–84', color: 'var(--chart-series-10)' },
    { label: '85+', color: 'var(--chart-series-10)' },
];
function HeatmapChart() {
    return (_jsxs("div", { className: styles.heatmapWrap, children: [_jsxs("div", { className: styles.heatmapGrid, children: [_jsx(Column, { isLabelColumn: true, header: "", cells: HEATMAP_LABELS.map((label) => ({ value: label })) }), HEATMAP_DATA.map((col) => (_jsx(Column, { header: col.header, cells: col.cells.map((c) => ({ value: c.v, bgColor: c.bg })) }, col.header)))] }), _jsxs("div", { className: styles.heatmapLegend, children: [_jsx("span", { className: styles.heatmapLegendTitle, children: "Cobertura %" }), HEATMAP_LEGEND.map((item) => (_jsxs("span", { className: styles.heatmapLegendItem, children: [_jsx("span", { className: styles.heatmapLegendDot, style: { backgroundColor: item.color } }), _jsx("span", { className: styles.heatmapLegendLabel, children: item.label })] }, item.label)))] })] }));
}
// ── Gauge placeholder ────────────────────────────────────────────
function GaugePlaceholder() {
    return (_jsx("div", { className: styles.gaugeWrap, children: _jsx("div", { className: styles.gaugeRing, children: _jsxs("div", { className: styles.gaugeHole, children: [_jsx("span", { className: styles.gaugePct, children: "58.3%" }), _jsx("span", { className: styles.gaugeMeta, children: "META: 75%" }), _jsx("span", { className: styles.gaugeMeta, children: "NIVEL GENERAL" })] }) }) }));
}
// ── Page ─────────────────────────────────────────────────────────
export function HomePage() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === activeTab, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 1)
                            navigate('/perfil-cliente');
                        else if (i === 2)
                            navigate('/canal-rtm');
                        else if (i === 3)
                            navigate('/tamano-rtm');
                        else if (i === 4)
                            navigate('/potencial-rtm');
                        else if (i === 5)
                            navigate('/perfil-territorial');
                        else if (i === 6)
                            navigate('/actividades-pdv');
                        else if (i === 7)
                            navigate('/autonomia-digital');
                        else
                            setActiveTab(i);
                    } }, tab))) }), _jsx("div", { className: styles.kpiRow, children: [1, 2, 3, 4].map((n) => (_jsx(KPICard, { label: "KPI General #1", value: "123", icon: _jsx(InsightIcon, {}) }, n))) }), _jsxs("div", { className: styles.pillarGrid, children: [_jsx(PillarCard, { header: _jsx(PillarHeader, { number: "01", pilarLabel: "Pilar 1", title: "Canal RTM", badge: _jsx(Badge, { children: "6 Canales" }) }), chart: _jsxs("div", { className: styles.sideBySide, children: [_jsx(PieChart, { data: CANAL_PIE_DATA, defaultIndex: 0, size: 200, "aria-label": "Distribuci\u00F3n por Canal" }), _jsxs("div", { className: styles.legendList, children: [_jsx(ChartLegendRow, { color: "var(--chart-series-10)", name: "Home Market", value: "4.560", percentage: "30.6%", highlighted: true }), _jsx(ChartLegendRow, { color: "var(--chart-series-13)", name: "On Premise", value: "3.120", percentage: "20.9%" }), _jsx(ChartLegendRow, { color: "var(--chart-positive)", name: "HM Complementario", value: "2.340", percentage: "15.7%" }), _jsx(ChartLegendRow, { color: "var(--chart-warning)", name: "Autoservicios", value: "2.100", percentage: "14.1%" }), _jsx(ChartLegendRow, { color: "var(--chart-negative)", name: "Mayoristas", value: "1.890", percentage: "12.7%" }), _jsx(ChartLegendRow, { color: "var(--action-info-surface)", name: "Estrat\u00E9gico", value: "890", percentage: "6.0%" })] })] }), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Total", value: "14.900", valueColor: "var(--chart-warning)" }), _jsx(StatItem, { label: "Canal L\u00EDder", value: "Home Market" }), _jsx(StatItem, { label: "Concentraci\u00F3n Top 2", value: "51.5%", valueColor: "var(--chart-series-10)" })] }) }), _jsx(PillarCard, { header: _jsx(PillarHeader, { number: "02", pilarLabel: "Pilar 2", title: "Tama\u00F1o RTM", badge: _jsx(Badge, { children: "8 Niveles" }) }), chart: _jsx("div", { className: styles.chartArea, children: _jsx(HBarChartPlaceholder, { items: [
                                { label: 'Latón', pct: 100, color: 'var(--chart-series-10)', value: '6.260' },
                                { label: 'Cobre', pct: 51, color: 'var(--chart-negative)', value: '3.200' },
                                { label: 'Bronce', pct: 46, color: 'var(--chart-series-2)', value: '2.890' },
                                { label: 'Plata', pct: 23, color: 'var(--chart-neutral)', value: '1.450' },
                                { label: 'Oro', pct: 12, color: 'var(--chart-warning)', value: '780' },
                                { label: 'Platino', pct: 5, color: 'var(--neutral-on-surface-medium)', value: '320' },
                            ] }) }), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Base Lat\u00F3n+Cobre", value: "63.5%", valueColor: "var(--chart-series-10)" }), _jsx(StatItem, { label: "Premium Oro+Plati", value: "7.3%" }), _jsx(StatItem, { label: "Uplift Potencial", value: "+1.100", valueColor: "var(--action-success-surface)" })] }) }), _jsx(PillarCard, { header: _jsx(PillarHeader, { number: "03", pilarLabel: "Pilar 3", title: "Potencial RTM", badge: _jsx(Badge, { children: "Actual vs Potencial" }) }), chart: _jsx(PotencialChart, {}), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Gap Promedio", value: "\u221214.9 pts", valueColor: "var(--chart-negative)" }), _jsx(StatItem, { label: "Mayor Oportunidad", value: "Mayoristas" }), _jsx(StatItem, { label: "Outliers Tratados", value: "top 10%", valueColor: "var(--chart-series-10)" })] }) }), _jsx(PillarCard, { header: _jsx(PillarHeader, { number: "04", pilarLabel: "Pilar 4", title: "Perfil Territorial", badge: _jsx(Badge, { children: "Proximidad CD" }) }), chart: _jsx("div", { className: styles.chartArea, children: _jsx(HBarChartPlaceholder, { items: [
                                { label: '0 – 5 km', pct: 57, color: 'var(--chart-series-10)', value: '3.450' },
                                { label: '5 – 15 km', pct: 95, color: 'var(--chart-warning)', value: '5.670' },
                                { label: '15 – 30 km', pct: 65, color: 'var(--chart-series-13)', value: '3.890' },
                                { label: '30 – 50 km', pct: 26, color: 'var(--chart-negative)', value: '1.580' },
                                { label: '+50 km', pct: 5, color: 'var(--chart-neutral)', value: '330' },
                            ] }) }), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Zona Prioritaria", value: "5\u201315 km" }), _jsx(StatItem, { label: "Clientes Cercanos", value: "9.120" }), _jsx(StatItem, { label: "Radio Cr\u00EDtico", value: "\u2264 15 km", valueColor: "var(--chart-series-10)" })] }) }), _jsx(PillarCard, { header: _jsx(PillarHeader, { number: "05", pilarLabel: "Pilar 5", title: "Actividades PDV", badge: _jsx(Badge, { children: "Heatmap" }) }), chart: _jsx(HeatmapChart, {}), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Actividad L\u00EDder", value: "Exhibici\u00F3n" }), _jsx(StatItem, { label: "Canal M\u00E1s Activo", value: "Estrat\u00E9gico", valueColor: "var(--chart-series-10)" }), _jsx(StatItem, { label: "Promedio Cobertura", value: "65.4%", valueColor: "var(--chart-warning)" })] }) }), _jsx(PillarCard, { header: _jsx(PillarHeader, { number: "06", pilarLabel: "Pilar 6", title: "Autonom\u00EDa Digital", badge: _jsx(Badge, { children: "Pedidos Propios" }) }), chart: _jsx("div", { className: styles.chartArea, children: _jsxs("div", { className: styles.sideBySide, children: [_jsx(GaugePlaceholder, {}), _jsxs("div", { className: styles.legendList, children: [_jsx(ChartLegendRow, { color: "var(--action-info-surface)", name: "Estrat\u00E9gico", percentage: "89%" }), _jsx(ChartLegendRow, { color: "var(--chart-series-10)", name: "Home Market", percentage: "72%" }), _jsx(ChartLegendRow, { color: "var(--chart-warning)", name: "Autoservicios", percentage: "65%" }), _jsx(ChartLegendRow, { color: "var(--chart-positive)", name: "HM Comp.", percentage: "58%" }), _jsx(ChartLegendRow, { color: "var(--chart-series-13)", name: "On Premise", percentage: "42%" }), _jsx(ChartLegendRow, { color: "var(--chart-negative)", name: "Mayoristas", percentage: "28%" })] })] }) }), stats: _jsxs(_Fragment, { children: [_jsx(StatItem, { label: "Canal M\u00E1s Digital", value: "Estrat\u00E9gico" }), _jsx(StatItem, { label: "Gap vs Meta", value: "\u221216.7 pts", valueColor: "var(--chart-negative)" }), _jsx(StatItem, { label: "Crecimiento M/M", value: "+2.2 pts", valueColor: "var(--action-success-surface)" })] }) })] })] }));
}
