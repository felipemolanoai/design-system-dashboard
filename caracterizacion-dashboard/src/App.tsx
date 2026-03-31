import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout'
import { HomePage } from './pages/HomePage'
import { AutonomiaDigitalPage } from './pages/AutonomiaDigitalPage'
import { PerfilClientePage } from './pages/PerfilClientePage'
import { CanalRTMPage } from './pages/CanalRTMPage'
import { TamanoRTMPage } from './pages/TamanoRTMPage'
import { PotencialRTMPage } from './pages/PotencialRTMPage'
import { PerfilTerritorialPage } from './pages/PerfilTerritorialPage'
import { ActividadesPDVPage } from './pages/ActividadesPDVPage'

export default function App() {
  return (
    <Routes>
      {/* DashboardLayout wraps all routes — it renders the header + <Outlet /> */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil-cliente" element={<PerfilClientePage />} />
        <Route path="/canal-rtm" element={<CanalRTMPage />} />
        <Route path="/tamano-rtm" element={<TamanoRTMPage />} />
        <Route path="/potencial-rtm" element={<PotencialRTMPage />} />
        <Route path="/perfil-territorial" element={<PerfilTerritorialPage />} />
        <Route path="/actividades-pdv" element={<ActividadesPDVPage />} />
        <Route path="/autonomia-digital" element={<AutonomiaDigitalPage />} />
      </Route>
    </Routes>
  )
}
