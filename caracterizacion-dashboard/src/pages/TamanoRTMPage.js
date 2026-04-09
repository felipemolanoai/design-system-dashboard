import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, ProgressBar } from 'juntos-ds';
import styles from './TamanoRTMPage.module.css';
// ── Icons ─────────────────────────────────────────────────────────
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Tab config ─────────────────────────────────────────────────────
const TABS = [
    'Dashboard', 'Perfil del Cliente', 'Canal RTM', 'Tamaño RTM',
    'Potencial RTM', 'Perfil Territorial', 'Actividades PDV', 'Autonomía Digital',
];
const TAMANO_RTM_TAB_INDEX = 3;
// ── Section 1 data ─────────────────────────────────────────────────
const DISTRIBUCION_TIERS = [
    { label: 'Latón', color: 'var(--chart-series-10)', value: 42, clientes: '6.260', pct: '42.0%' },
    { label: 'Cobre', color: 'var(--chart-series-13)', value: 21.5, clientes: '3.200', pct: '21.5%' },
    { label: 'Bronce', color: 'var(--chart-positive)', value: 19.4, clientes: '2.890', pct: '19.4%' },
    { label: 'Plata', color: 'var(--chart-warning)', value: 9.7, clientes: '1.450', pct: '9.7%' },
    { label: 'Oro', color: 'var(--chart-negative)', value: 5.2, clientes: '780', pct: '5.2%' },
    { label: 'Platino', color: 'var(--action-info-surface)', value: 2.1, clientes: '320', pct: '2.1%' },
];
// ── Section 2 data ─────────────────────────────────────────────────
const METRICAS_TIERS = [
    { label: 'Latón', color: 'var(--chart-series-10)', clientes: '6.260', porcentaje: '42%', ticket: '3.980' },
    { label: 'Cobre', color: 'var(--chart-series-13)', clientes: '3.200', porcentaje: '21.5%', ticket: '2.740' },
    { label: 'Bronce', color: 'var(--chart-positive)', clientes: '2.890', porcentaje: '19.4%', ticket: '2.010' },
    { label: 'Plata', color: 'var(--chart-warning)', clientes: '1.450', porcentaje: '9.7%', ticket: '1.950' },
    { label: 'Oro', color: 'var(--chart-negative)', clientes: '780', porcentaje: '5.2%', ticket: '1.620' },
    { label: 'Platino', color: 'var(--action-info-surface)', clientes: '320', porcentaje: '2.1%', ticket: '880' },
];
// ── Section 3 data ─────────────────────────────────────────────────
const MOBILITY_TIERS = [
    { label: 'Latón', ascended: 50, descended: 25 },
    { label: 'Cobre', ascended: 50, descended: 25 },
    { label: 'Bronce', ascended: 50, descended: 25 },
    { label: 'Plata', ascended: 50, descended: 25 },
    { label: 'Oro', ascended: 50, descended: 25 },
    { label: 'Platino', ascended: 50, descended: 25 },
];
// ── Page ───────────────────────────────────────────────────────────
export function TamanoRTMPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === TAMANO_RTM_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 1)
                            navigate('/perfil-cliente');
                        else if (i === 2)
                            navigate('/canal-rtm');
                        else if (i === 4)
                            navigate('/potencial-rtm');
                        else if (i === 5)
                            navigate('/perfil-territorial');
                        else if (i === 6)
                            navigate('/actividades-pdv');
                        else if (i === 7)
                            navigate('/autonomia-digital');
                        else if (i !== TAMANO_RTM_TAB_INDEX)
                            navigate('/');
                    } }, tab))) }), _jsxs("div", { className: styles.pageContent, children: [_jsx("h1", { className: styles.pageTitle, children: "Tama\u00F1o RTM" }), _jsxs("div", { className: styles.sectionsRow, children: [_jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "Distribuci\u00F3n por Canal" }), _jsx("div", { className: styles.distribList, children: DISTRIBUCION_TIERS.map((row) => (_jsxs("div", { className: styles.distribRow, children: [_jsxs("div", { className: styles.distribCanal, children: [_jsx("span", { className: styles.tierDot, style: { backgroundColor: row.color } }), _jsx("span", { className: styles.tierName, children: row.label })] }), _jsx("div", { className: styles.distribBar, children: _jsx(ProgressBar, { value: row.value, size: "sm", "aria-label": row.label }) }), _jsx("span", { className: styles.distribNum, children: row.clientes }), _jsx("span", { className: styles.distribPct, children: row.pct })] }, row.label))) })] }), _jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "M\u00E9tricas por Canal" }), _jsxs("div", { className: styles.metricsTable, children: [_jsxs("div", { className: styles.tableHeader, children: [_jsx("div", { className: styles.colCanal, children: "Canal" }), _jsx("div", { className: styles.colNum, children: "Clientes" }), _jsx("div", { className: styles.colNum, children: "Porcentaje" }), _jsx("div", { className: styles.colNum, children: "Ticket Promedio" })] }), METRICAS_TIERS.map((row) => (_jsxs("div", { className: styles.tableRow, children: [_jsxs("div", { className: styles.colCanal, children: [_jsx("span", { className: styles.tierDot, style: { backgroundColor: row.color } }), _jsx("span", { className: styles.tierName, children: row.label })] }), _jsx("div", { className: styles.colNum, children: row.clientes }), _jsx("div", { className: styles.colNum, children: row.porcentaje }), _jsx("div", { className: styles.colNum, children: row.ticket })] }, row.label)))] })] })] }), _jsxs("div", { className: styles.card, children: [_jsx("h2", { className: styles.cardTitle, children: "Movilidad entre Niveles - 2026" }), _jsx("div", { className: styles.barChart, children: MOBILITY_TIERS.map(({ label, ascended, descended }) => (_jsx("div", { className: styles.barGroup, children: _jsxs("div", { className: styles.bars, children: [_jsx("div", { className: styles.barWrap, children: _jsx("div", { className: styles.barNegative, style: { height: `${descended}%` }, "aria-label": `${label} descendieron: ${descended}%` }) }), _jsx("div", { className: styles.barWrap, children: _jsx("div", { className: styles.barPositive, style: { height: `${ascended}%` }, "aria-label": `${label} ascendieron: ${ascended}%` }) })] }) }, label))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: MOBILITY_TIERS.map(({ label }) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: label })] }, label))) })] }), _jsxs("div", { className: styles.legend, children: [_jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.legendDotPositive}` }), _jsx("span", { className: styles.legendLabel, children: "Clientes que ascendieron de Nivel" })] }), _jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.legendDotNegative}` }), _jsx("span", { className: styles.legendLabel, children: "Clientes que descendieron de Nivel" })] })] })] })] })] }));
}
