import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Tab, TabBar } from 'juntos-ds';
import styles from './AutonomiaDigitalPage.module.css';
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
const AUTONOMIA_TAB_INDEX = 7;
const LightningIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) }));
// ── Page ─────────────────────────────────────────────────────
export function AutonomiaDigitalPage() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: styles.page, children: [_jsx(TabBar, { children: TABS.map((tab, i) => (_jsx(Tab, { label: tab, active: i === AUTONOMIA_TAB_INDEX, icon: _jsx(LightningIcon, {}), onClick: () => {
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
                        else if (i !== AUTONOMIA_TAB_INDEX)
                            navigate('/');
                    } }, tab))) }), _jsx("div", { className: styles.contentCard, children: _jsx("h1", { className: styles.heading, children: "Autonom\u00EDa Digital" }) })] }));
}
