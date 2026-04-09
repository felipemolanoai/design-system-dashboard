import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar } from 'juntos-ds';
import styles from './PotencialRTMPage.module.css';
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
const POTENCIAL_RTM_TAB_INDEX = 4;
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Section 1: Combinaciones Subcanal por Nivel ───────────────
const COMBINACIONES = [
    { canal: 'Home Market', tamano: 'Latón', region: 'Norte', clientes: '1.560', pct: '10.5%', ticket: '3.200' },
    { canal: 'Home Market', tamano: 'Cobre', region: 'Centro', clientes: '890', pct: '6.0%', ticket: '2.800' },
    { canal: 'On Premise', tamano: 'Plata', region: 'Sur', clientes: '680', pct: '4.6%', ticket: '4.100' },
    { canal: 'On Premise', tamano: 'Oro', region: 'Norte', clientes: '420', pct: '2.8%', ticket: '5.600' },
    { canal: 'HM Compl.', tamano: 'Bronce', region: 'Centro', clientes: '1.230', pct: '8.3%', ticket: '2.100' },
    { canal: 'Autoservicios', tamano: 'Latón', region: 'Sur', clientes: '980', pct: '6.6%', ticket: '3.800' },
    { canal: 'Mayoristas', tamano: 'Cobre', region: 'Norte', clientes: '760', pct: '5.1%', ticket: '2.400' },
    { canal: 'Estratégico', tamano: 'Platino', region: 'Centro', clientes: '310', pct: '2.1%', ticket: '7.200' },
];
// ── Section 2: Ventas Actuales vs Ventas futuras por Canal ────
// Each group: [actuales, potencial, top10] as % of max scale
const VENTAS_GROUPS = [
    { label: 'Home Market', actuales: 75, potencial: 88, top10: 95 },
    { label: 'On Premise', actuales: 60, potencial: 72, top10: 85 },
    { label: 'HM Compl.', actuales: 55, potencial: 68, top10: 80 },
    { label: 'Autoservicios', actuales: 48, potencial: 62, top10: 78 },
    { label: 'Mayoristas', actuales: 40, potencial: 55, top10: 70 },
    { label: 'Estratégico', actuales: 35, potencial: 50, top10: 65 },
];
// ── Page ─────────────────────────────────────────────────────
export function PotencialRTMPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === POTENCIAL_RTM_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 0)
                            navigate('/');
                        else if (i === 1)
                            navigate('/perfil-cliente');
                        else if (i === 2)
                            navigate('/canal-rtm');
                        else if (i === 3)
                            navigate('/tamano-rtm');
                        else if (i === 5)
                            navigate('/perfil-territorial');
                        else if (i === 6)
                            navigate('/actividades-pdv');
                        else if (i === 7)
                            navigate('/autonomia-digital');
                    } }, tab))) }), _jsxs("div", { className: styles.pageContent, children: [_jsx("h1", { className: styles.pageTitle, children: "Potencial RTM" }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Combinaciones Subcanal por Nivel" }), _jsxs("div", { className: styles.combiTable, children: [_jsxs("div", { className: styles.tableHeader, children: [_jsx("div", { className: styles.colCanal, children: "Canal" }), _jsx("div", { className: styles.colTamano, children: "Tama\u00F1o" }), _jsx("div", { className: styles.colRegion, children: "Region" }), _jsx("div", { className: styles.colNum, children: "Clientes" }), _jsx("div", { className: styles.colNum, children: "Porcentaje" }), _jsx("div", { className: styles.colNum, children: "Ticket Promedio" })] }), COMBINACIONES.map((row, i) => (_jsxs("div", { className: styles.tableRow, children: [_jsx("div", { className: styles.colCanal, children: row.canal }), _jsx("div", { className: styles.colTamano, children: row.tamano }), _jsx("div", { className: styles.colRegion, children: row.region }), _jsx("div", { className: styles.colNum, children: row.clientes }), _jsx("div", { className: styles.colNum, children: row.pct }), _jsx("div", { className: styles.colNum, children: row.ticket })] }, i)))] })] }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Ventas Actuales vs Ventas futuras por Canal" }), _jsxs("div", { className: styles.barChartWrap, children: [_jsx("div", { className: styles.barsArea, children: VENTAS_GROUPS.map((group) => (_jsx("div", { className: styles.barGroup, children: _jsxs("div", { className: styles.bars, children: [_jsx("div", { className: styles.barActuales, style: { height: `${group.actuales}%` }, "aria-label": `${group.label} Ventas Actuales` }), _jsx("div", { className: styles.barPotencial, style: { height: `${group.potencial}%` }, "aria-label": `${group.label} Potencial` }), _jsx("div", { className: styles.barTop10, style: { height: `${group.top10}%` }, "aria-label": `${group.label} Top 10%` })] }) }, group.label))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: VENTAS_GROUPS.map((group) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: group.label })] }, group.label))) })] }), _jsxs("div", { className: styles.legend, children: [_jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.legendDotActuales}` }), _jsx("span", { className: styles.legendLabel, children: "Ventas Actuales" })] }), _jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.legendDotPotencial}` }), _jsx("span", { className: styles.legendLabel, children: "Potencial" })] }), _jsxs("div", { className: styles.legendItem, children: [_jsx("span", { className: `${styles.legendDot} ${styles.legendDotTop10}` }), _jsx("span", { className: styles.legendLabel, children: "Top 10%" })] })] })] })] })] })] }));
}
