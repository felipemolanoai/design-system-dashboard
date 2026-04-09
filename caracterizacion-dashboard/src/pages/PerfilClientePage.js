import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, InputSearch, InputSelect, ProgressBar } from 'juntos-ds';
import styles from './PerfilClientePage.module.css';
// ── Icons ────────────────────────────────────────────────────────
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Tab config ───────────────────────────────────────────────────
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
const PERFIL_TAB_INDEX = 1;
// ── Static data ──────────────────────────────────────────────────
const CANAL_OPTIONS = [
    { value: 'todos', label: 'Todos' },
    { value: 'home-market', label: 'Home Market' },
    { value: 'on-premise', label: 'On Premise' },
    { value: 'autoservicios', label: 'Autoservicios' },
    { value: 'mayoristas', label: 'Mayoristas' },
    { value: 'estrategico', label: 'Estratégico' },
];
const NIVEL_OPTIONS = [
    { value: 'todos', label: 'Todos' },
    { value: 'laton', label: 'Latón' },
    { value: 'cobre', label: 'Cobre' },
    { value: 'bronce', label: 'Bronce' },
    { value: 'plata', label: 'Plata' },
    { value: 'oro', label: 'Oro' },
    { value: 'platino', label: 'Platino' },
];
const CLASIFICACIONES = ['Todos', 'A', 'B', 'C', 'D'];
const CLIENTS = [
    { initials: 'TL', name: 'Tienda La Esperanza', id: '157895', city: 'Mexico DF', clasif: 'A', nivel: 'plata', canal: 'home-market', color: 'var(--chart-series-1)' },
    { initials: 'AE', name: 'Abarrotes El Sol', id: '157896', city: 'Mexico DF', clasif: 'B', nivel: 'bronce', canal: 'on-premise', color: 'var(--chart-series-3)' },
    { initials: 'BL', name: 'Bodega La Unica', id: '157897', city: 'Monterrey', clasif: 'C', nivel: 'cobre', canal: 'autoservicios', color: 'var(--action-info-surface)' },
    { initials: 'SN', name: 'Supermercado Nuevo Amanecer', id: '157898', city: 'Guadalajara', clasif: 'D', nivel: 'oro', canal: 'mayoristas', color: 'var(--chart-series-10)' },
    { initials: 'TM', name: 'Tienda Mi Vecino', id: '157899', city: 'Mexico DF', clasif: 'A', nivel: 'laton', canal: 'estrategico', color: 'var(--action-primary-surface)' },
    { initials: 'MM', name: 'Mini Market La Esquina', id: '157900', city: 'Monterrey', clasif: 'B', nivel: 'platino', canal: 'home-market', color: 'var(--chart-series-12)' },
];
const ACTIVIDADES = [
    { label: 'Estratégico', value: 89 },
    { label: 'Home Market', value: 72 },
    { label: 'Autoservicios', value: 65 },
    { label: 'HM Compl.', value: 58 },
    { label: 'On Premise', value: 42 },
    { label: 'Mayoristas', value: 28 },
];
function SectionCard({ number, title, children }) {
    return (_jsxs("div", { className: styles.sectionCard, children: [_jsxs("div", { className: styles.sectionHeader, children: [_jsx("span", { className: styles.sectionNum, children: number }), _jsx("span", { className: styles.sectionTitle, children: title })] }), _jsx("div", { className: styles.sectionBody, children: children })] }));
}
function ProgressRow({ label, value }) {
    return (_jsxs("div", { className: styles.progressRow, children: [_jsx("span", { className: styles.progressLabel, children: label }), _jsx("div", { className: styles.progressBarWrap, children: _jsx(ProgressBar, { value: value, size: "sm", "aria-label": label }) }), _jsxs("span", { className: styles.progressValue, children: [value, "%"] })] }));
}
// ── Page ─────────────────────────────────────────────────────────
export function PerfilClientePage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [canal, setCanal] = useState('todos');
    const [nivel, setNivel] = useState('todos');
    const [clasif, setClasif] = useState('Todos');
    const [selectedClientId, setSelectedClientId] = useState(null);
    // ── Filtering ────────────────────────────────────────────────
    const filteredClients = CLIENTS.filter((client) => {
        const matchesSearch = search.trim() === '' ||
            client.name.toLowerCase().includes(search.trim().toLowerCase());
        const matchesClasif = clasif === 'Todos' || client.clasif === clasif;
        const matchesNivel = nivel === 'todos' || client.nivel === nivel;
        const matchesCanal = canal === 'todos' || client.canal === canal;
        return matchesSearch && matchesClasif && matchesNivel && matchesCanal;
    });
    const selectedClient = CLIENTS.find((c) => c.id === selectedClientId) ?? null;
    const nivelLabel = (value) => NIVEL_OPTIONS.find((o) => o.value === value)?.label ?? value;
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === PERFIL_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
                        if (i === 2)
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
                        else if (i !== PERFIL_TAB_INDEX)
                            navigate('/');
                    } }, tab))) }), _jsx("div", { className: styles.pageContent, children: _jsxs("div", { className: styles.layout, children: [_jsxs("aside", { className: styles.sidebar, children: [_jsx("h1", { className: styles.sidebarTitle, children: "Perfil del Cliente" }), _jsx(InputSearch, { value: search, onChange: setSearch, onClear: () => setSearch(''), placeholder: "Buscar por Nombre, ID, Ciu..." }), _jsxs("div", { className: styles.filtersCard, children: [_jsx(InputSelect, { label: "Canal", value: canal, options: CANAL_OPTIONS, onChange: setCanal }), _jsxs("div", { className: styles.clasifSection, children: [_jsx("span", { className: styles.filterLabel, children: "Clasificaci\u00F3n" }), _jsx(TabBar, { children: CLASIFICACIONES.map((c) => (_jsx(Tab, { label: c, active: clasif === c, onClick: () => setClasif(c) }, c))) })] }), _jsx(InputSelect, { label: "Nivel", value: nivel, options: NIVEL_OPTIONS, onChange: setNivel })] }), _jsxs("span", { className: styles.resultsLabel, children: ["Resultados", filteredClients.length > 0 ? ` (${filteredClients.length})` : ''] }), _jsx("div", { className: styles.clientList, children: filteredClients.length === 0 ? (_jsx("span", { className: styles.noResults, children: "Sin resultados" })) : (filteredClients.map((client) => (_jsxs("div", { className: `${styles.clientRow} ${selectedClientId === client.id ? styles.clientRowActive : ''}`, onClick: () => setSelectedClientId(client.id), children: [_jsx("div", { className: styles.clientAvatar, style: { backgroundColor: client.color }, children: client.initials }), _jsxs("div", { className: styles.clientInfo, children: [_jsx("span", { className: styles.clientName, children: client.name }), _jsxs("span", { className: styles.clientMeta, children: ["ID ", client.id, " \u00B7 ", client.city] })] }), _jsxs("div", { className: styles.clientClassif, children: [_jsx("span", { className: styles.clasifLetter, children: client.clasif }), _jsx("span", { className: styles.clientNivel, children: nivelLabel(client.nivel) })] })] }, client.id)))) })] }), _jsx("div", { className: styles.detail, children: selectedClient === null ? (
                            /* ── Empty state ── */
                            _jsxs("div", { className: styles.emptyState, children: [_jsx("div", { className: styles.emptyIcon, children: _jsxs("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", children: [_jsx("circle", { cx: "12", cy: "8", r: "4", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }) }), _jsx("span", { className: styles.emptyTitle, children: "Selecciona un cliente" }), _jsx("span", { className: styles.emptySubtitle, children: "Elige un cliente de la lista para ver su perfil completo" })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.clientCard, children: [_jsx("div", { className: styles.clientCardAvatar, style: { backgroundColor: selectedClient.color }, children: selectedClient.initials }), _jsxs("div", { className: styles.clientCardInfo, children: [_jsx("span", { className: styles.clientCardName, children: selectedClient.name }), _jsxs("div", { className: styles.clientCardMeta, children: [_jsxs("span", { children: ["ID ", selectedClient.id] }), _jsx("span", { children: "Maria Garcia" }), _jsx("span", { children: selectedClient.city }), _jsx("span", { children: "2026-01-25" })] })] }), _jsxs("div", { className: styles.clientCardRight, children: [_jsx("span", { className: styles.clasifLetterLg, children: selectedClient.clasif }), _jsx("span", { className: styles.clientNivelLg, children: nivelLabel(selectedClient.nivel) })] })] }), _jsxs("div", { className: styles.scoreCard, children: [_jsx("span", { className: styles.scoreLabel, children: "Score Global RTM" }), _jsx("div", { className: styles.scoreBarWrap, children: _jsx(ProgressBar, { value: 72, size: "md", "aria-label": "Score Global RTM" }) }), _jsx("span", { className: styles.scoreValue, children: "72/100" })] }), _jsxs("div", { className: styles.sectionGrid, children: [_jsxs(SectionCard, { number: "01", title: "Canal RTM", children: [_jsx("span", { className: styles.sectionValueLg, children: "Home Market" }), _jsxs("span", { className: styles.sectionSubtext, children: ["Subcanal: ", _jsx("strong", { children: "HM" })] })] }), _jsxs(SectionCard, { number: "02", title: "Tama\u00F1o RTM", children: [_jsx("span", { className: styles.sectionValueLg, children: nivelLabel(selectedClient.nivel) }), _jsx("span", { className: styles.sectionSubtext, children: "Umbral de Tama\u00F1o RTM" })] }), _jsxs(SectionCard, { number: "03", title: "Potencial RTM", children: [_jsx("span", { className: styles.sectionValueLg, children: "+15,000 usd" }), _jsx("span", { className: styles.sectionSubtext, children: "Incremento Total Proyectado vs Top 10" })] }), _jsxs(SectionCard, { number: "04", title: "Perfil Territorial", children: [_jsxs("div", { className: styles.territorialRow, children: [_jsxs("div", { className: styles.territorialItem, children: [_jsx("span", { className: styles.sectionSubtext, children: "Distancia" }), _jsx("span", { className: styles.territorialValue, children: "5km - 10km" })] }), _jsx("div", { className: styles.territorialDivider }), _jsxs("div", { className: styles.territorialItem, children: [_jsx("span", { className: styles.sectionSubtext, children: "Region" }), _jsx("span", { className: styles.territorialValue, children: "Norte" })] })] }), _jsx(ProgressRow, { label: "Densidad Zona", value: 72 })] }), _jsxs(SectionCard, { number: "05", title: "Autonom\u00EDa Digital", children: [_jsx("span", { className: styles.sectionValueXl, children: "72%" }), _jsx(ProgressRow, { label: "Densidad Zona", value: 72 })] }), _jsx(SectionCard, { number: "06", title: "Actividades PDV", children: _jsx("div", { className: styles.actividadesWrap, children: ACTIVIDADES.map((act) => (_jsx(ProgressRow, { label: act.label, value: act.value }, act.label))) }) })] })] })) })] }) })] }));
}
