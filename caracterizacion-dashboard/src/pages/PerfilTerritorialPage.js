import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, ProgressBar } from 'juntos-ds';
import styles from './PerfilTerritorialPage.module.css';
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
const PERFIL_TERRITORIAL_TAB_INDEX = 5;
// ── Distance range data (shared by bar chart + table) ────────
const DISTANCIAS = [
    {
        rango: '0 – 5 km', clientes: '3.450', barPct: 61,
        densidad: 57, canal: 'Home Market', canalColor: 'var(--chart-series-10)',
        cobertura: '72%', oportunidad: 'Baja',
    },
    {
        rango: '5 – 15 km', clientes: '5.670', barPct: 100,
        densidad: 95, canal: 'On Premise', canalColor: 'var(--chart-series-13)',
        cobertura: '68%', oportunidad: 'Media',
    },
    {
        rango: '15 – 30 km', clientes: '3.890', barPct: 69,
        densidad: 65, canal: 'Home Market', canalColor: 'var(--chart-series-10)',
        cobertura: '54%', oportunidad: 'Media',
    },
    {
        rango: '30 – 50 km', clientes: '1.580', barPct: 28,
        densidad: 26, canal: 'Mayoristas', canalColor: 'var(--chart-negative)',
        cobertura: '41%', oportunidad: 'Alta',
    },
    {
        rango: '+50 km', clientes: '330', barPct: 6,
        densidad: 5, canal: 'Estratégico', canalColor: 'var(--action-info-surface)',
        cobertura: '28%', oportunidad: 'Alta',
    },
];
const OPORTUNIDAD_COLOR = {
    Baja: 'var(--neutral-on-surface-low)',
    Media: 'var(--chart-warning)',
    Alta: 'var(--chart-positive)',
};
// ── Métricas por Region data ──────────────────────────────────
const REGIONES = [
    { zona: 'Norte', clientes: '4.820', densidad: 78, cobertura: 65, digital: 54 },
    { zona: 'Centro', clientes: '6.340', densidad: 85, cobertura: 72, digital: 61 },
    { zona: 'Sur', clientes: '3.190', densidad: 62, cobertura: 58, digital: 43 },
    { zona: 'Este', clientes: '2.870', densidad: 55, cobertura: 49, digital: 38 },
    { zona: 'Oeste', clientes: '1.680', densidad: 48, cobertura: 41, digital: 29 },
];
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Page ─────────────────────────────────────────────────────
export function PerfilTerritorialPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === PERFIL_TERRITORIAL_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
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
                        else if (i === 6)
                            navigate('/actividades-pdv');
                        else if (i === 7)
                            navigate('/autonomia-digital');
                    } }, tab))) }), _jsxs("div", { className: styles.pageContent, children: [_jsx("h1", { className: styles.pageTitle, children: "Perfil Territorial" }), _jsxs("div", { className: styles.topRow, children: [_jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "M\u00E9tricas por Region" }), _jsx("div", { className: styles.regionList, children: REGIONES.map((r) => (_jsxs("div", { className: styles.regionRow, children: [_jsxs("div", { className: styles.regionLeft, children: [_jsx("span", { className: styles.regionName, children: r.zona }), _jsxs("span", { className: styles.regionClientes, children: [r.clientes, " Clientes"] })] }), _jsx("div", { className: styles.regionDivider }), _jsx("div", { className: styles.regionMetrics, children: [
                                                        { label: 'Densidad', value: r.densidad },
                                                        { label: 'Cobertura', value: r.cobertura },
                                                        { label: 'Digital', value: r.digital },
                                                    ].map((metric) => (_jsxs("div", { className: styles.metricRow, children: [_jsx("span", { className: styles.metricLabel, children: metric.label }), _jsx("div", { className: styles.metricBar, children: _jsx(ProgressBar, { value: metric.value, size: "sm", "aria-label": `${r.zona} ${metric.label}` }) }), _jsxs("span", { className: styles.metricPct, children: [metric.value, "%"] })] }, metric.label))) })] }, r.zona))) })] }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Clientes por Rango de Distancia al CD" }), _jsxs("div", { className: styles.barChartWrap, children: [_jsx("div", { className: styles.barsArea, children: DISTANCIAS.map((d) => (_jsx("div", { className: styles.barCol, children: _jsx("div", { className: styles.bar, style: { height: `${d.barPct}%` }, "aria-label": `${d.rango}: ${d.clientes}` }) }, d.rango))) }), _jsxs("div", { className: styles.xAxis, children: [_jsx("div", { className: styles.xAxisLine }), _jsx("div", { className: styles.xAxisLabels, children: DISTANCIAS.map((d) => (_jsxs("div", { className: styles.xAxisTick, children: [_jsx("div", { className: styles.tickMark }), _jsx("span", { className: styles.tickLabel, children: d.rango })] }, d.rango))) })] })] })] })] }), _jsxs("div", { className: styles.section, children: [_jsx("h2", { className: styles.sectionTitle, children: "Tabla de Distancias y Cobertura" }), _jsxs("div", { className: styles.distTable, children: [_jsxs("div", { className: styles.distHeader, children: [_jsx("div", { className: styles.colRango, children: "Rango de Distancia" }), _jsx("div", { className: styles.colClientes, children: "Clientes" }), _jsx("div", { className: styles.colDensidad, children: "Densidad" }), _jsx("div", { className: styles.colCanal, children: "Canal Predominante" }), _jsx("div", { className: styles.colCobertura, children: "Cobertura" }), _jsx("div", { className: styles.colOportunidad, children: "Oportunidad" })] }), DISTANCIAS.map((d) => (_jsxs("div", { className: styles.distRow, children: [_jsx("div", { className: styles.colRango, children: d.rango }), _jsx("div", { className: styles.colClientes, children: d.clientes }), _jsxs("div", { className: styles.colDensidad, children: [_jsx("div", { className: styles.densBar, children: _jsx(ProgressBar, { value: d.densidad, size: "sm", "aria-label": `Densidad ${d.rango}` }) }), _jsxs("span", { className: styles.densPct, children: [d.densidad, "%"] })] }), _jsxs("div", { className: styles.colCanal, children: [_jsx("span", { className: styles.canalDot, style: { backgroundColor: d.canalColor } }), _jsx("span", { children: d.canal })] }), _jsx("div", { className: styles.colCobertura, children: d.cobertura }), _jsx("div", { className: styles.colOportunidad, children: _jsx("span", { className: styles.oportunidadBadge, style: { color: OPORTUNIDAD_COLOR[d.oportunidad] }, children: d.oportunidad }) })] }, d.rango)))] })] })] })] }));
}
