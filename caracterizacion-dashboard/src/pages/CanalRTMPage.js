import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, ChartLegendRow, StatItem, ChartBar, ProgressBar, PieChart } from 'juntos-ds';
import styles from './CanalRTMPage.module.css';
// ── Icons ─────────────────────────────────────────────────────────
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Tab config ─────────────────────────────────────────────────────
const TABS = [
    'Dashboard', 'Perfil del Cliente', 'Canal RTM', 'Tamaño RTM',
    'Potencial RTM', 'Perfil Territorial', 'Actividades PDV', 'Autonomía Digital',
];
const CANAL_RTM_TAB_INDEX = 2;
// ── Data ───────────────────────────────────────────────────────────
const LEGEND = [
    { name: 'Home Market', color: 'var(--chart-series-10)', value: '4.560', pct: '30.6%' },
    { name: 'On Premise', color: 'var(--chart-series-13)', value: '3.120', pct: '20.9%' },
    { name: 'HM Complementario', color: 'var(--chart-positive)', value: '2.340', pct: '15.7%' },
    { name: 'Autoservicios', color: 'var(--chart-warning)', value: '2.100', pct: '14.1%' },
    { name: 'Mayoristas', color: 'var(--chart-negative)', value: '1.890', pct: '12.7%' },
    { name: 'Estratégico', color: 'var(--action-info-surface)', value: '890', pct: '6.0%' },
];
// Numeric values (same proportions as LEGEND percentages) for the pie chart
const PIE_DATA = [
    { label: 'Home Market', value: 4560, displayValue: '4.560', color: 'var(--chart-series-10)' },
    { label: 'On Premise', value: 3120, displayValue: '3.120', color: 'var(--chart-series-13)' },
    { label: 'HM Complementario', value: 2340, displayValue: '2.340', color: 'var(--chart-positive)' },
    { label: 'Autoservicios', value: 2100, displayValue: '2.100', color: 'var(--chart-warning)' },
    { label: 'Mayoristas', value: 1890, displayValue: '1.890', color: 'var(--chart-negative)' },
    { label: 'Estratégico', value: 890, displayValue: '890', color: 'var(--action-info-surface)' },
];
// Quarterly bars: 7 periods, stacked 3 series, growing from Q1→Q7
const EVOLUTION_BARS = [
    { value: 10 }, { value: 25 }, { value: 50 },
    { value: 75 }, { value: 75 }, { value: 100 }, { value: 100 },
];
const X_LABELS = ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'];
// Metrics table rows
const METRICS = [
    { name: 'Home Market', color: 'var(--chart-series-10)', clientes: '4.560', activos: '3.980', autonomia: 87, ticket: '3.980' },
    { name: 'On Premise', color: 'var(--chart-series-13)', clientes: '3.120', activos: '2.740', autonomia: 60, ticket: '2.740' },
    { name: 'HM Complementario', color: 'var(--chart-positive)', clientes: '2.340', activos: '2.010', autonomia: 44, ticket: '2.010' },
    { name: 'Autoservicios', color: 'var(--chart-warning)', clientes: '2.100', activos: '1.950', autonomia: 43, ticket: '1.950' },
    { name: 'Mayoristas', color: 'var(--chart-negative)', clientes: '1.890', activos: '1.620', autonomia: 36, ticket: '1.620' },
    { name: 'Estratégico', color: 'var(--action-info-surface)', clientes: '890', activos: '880', autonomia: 19, ticket: '880' },
];
// ── Page ───────────────────────────────────────────────────────────
export function CanalRTMPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === CANAL_RTM_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 1)
                            navigate('/perfil-cliente');
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
                        else if (i !== CANAL_RTM_TAB_INDEX)
                            navigate('/');
                    } }, tab))) }), _jsxs("div", { className: styles.pageContent, children: [_jsx("h1", { className: styles.pageTitle, children: "Canal RTM" }), _jsxs("div", { className: styles.topRow, children: [_jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "Distribuci\u00F3n por Canal" }), _jsxs("div", { className: styles.donutSection, children: [_jsx(PieChart, { data: PIE_DATA, defaultIndex: 0, size: 200, "aria-label": "Distribuci\u00F3n por Canal" }), _jsx("div", { className: styles.legendList, children: LEGEND.map((item) => (_jsx(ChartLegendRow, { color: item.color, name: item.name, value: item.value, percentage: item.pct, highlighted: item.name === 'Home Market' }, item.name))) })] }), _jsxs("div", { className: styles.statsRow, children: [_jsx(StatItem, { label: "Total", value: "14.900", valueColor: "var(--chart-warning)" }), _jsx(StatItem, { label: "Canal L\u00EDder", value: "Home Market" }), _jsx(StatItem, { label: "Concentraci\u00F3n Top 2", value: "51.5%", valueColor: "var(--chart-series-10)" })] })] }), _jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "Evoluci\u00F3n Trimestral" }), _jsxs("div", { className: styles.barChartWrap, children: [_jsx("div", { className: styles.barsRow, children: EVOLUTION_BARS.map((bar, i) => (_jsx(ChartBar, { value: bar.value, orientation: "vertical", series: [{}, {}, {}], className: styles.barItem, "aria-label": `${X_LABELS[i]}: ${bar.value}%` }, i))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: X_LABELS.map((label, i) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: label })] }, i))) })] })] })] })] }), _jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "M\u00E9tricas por Canal" }), _jsxs("div", { className: styles.metricsTable, children: [_jsxs("div", { className: styles.tableHeader, children: [_jsx("div", { className: styles.colCanal, children: "Canal" }), _jsx("div", { className: styles.colNum, children: "Clientes" }), _jsx("div", { className: styles.colNum, children: "Activos" }), _jsx("div", { className: styles.colAutonomia, children: "Autonom\u00EDa Digital" }), _jsx("div", { className: styles.colNum, children: "Ticket Promedio" })] }), METRICS.map((row) => (_jsxs("div", { className: styles.tableRow, children: [_jsxs("div", { className: styles.colCanal, children: [_jsx("span", { className: styles.canalDot, style: { backgroundColor: row.color } }), _jsx("span", { className: styles.canalName, children: row.name })] }), _jsx("div", { className: styles.colNum, children: row.clientes }), _jsx("div", { className: styles.colNum, children: row.activos }), _jsxs("div", { className: styles.colAutonomia, children: [_jsx("div", { className: styles.autonomiaBar, children: _jsx(ProgressBar, { value: row.autonomia, size: "sm", "aria-label": `${row.name} autonomía digital` }) }), _jsx("span", { className: styles.autonomiaValue, children: row.activos })] }), _jsx("div", { className: styles.colNum, children: row.ticket })] }, row.name)))] })] })] })] }));
}
