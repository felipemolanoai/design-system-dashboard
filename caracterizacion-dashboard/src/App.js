import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { HomePage } from './pages/HomePage';
import { AutonomiaDigitalPage } from './pages/AutonomiaDigitalPage';
import { PerfilClientePage } from './pages/PerfilClientePage';
import { CanalRTMPage } from './pages/CanalRTMPage';
import { TamanoRTMPage } from './pages/TamanoRTMPage';
import { PotencialRTMPage } from './pages/PotencialRTMPage';
import { PerfilTerritorialPage } from './pages/PerfilTerritorialPage';
import { ActividadesPDVPage } from './pages/ActividadesPDVPage';
export default function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(DashboardLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/perfil-cliente", element: _jsx(PerfilClientePage, {}) }), _jsx(Route, { path: "/canal-rtm", element: _jsx(CanalRTMPage, {}) }), _jsx(Route, { path: "/tamano-rtm", element: _jsx(TamanoRTMPage, {}) }), _jsx(Route, { path: "/potencial-rtm", element: _jsx(PotencialRTMPage, {}) }), _jsx(Route, { path: "/perfil-territorial", element: _jsx(PerfilTerritorialPage, {}) }), _jsx(Route, { path: "/actividades-pdv", element: _jsx(ActividadesPDVPage, {}) }), _jsx(Route, { path: "/autonomia-digital", element: _jsx(AutonomiaDigitalPage, {}) })] }) }));
}
