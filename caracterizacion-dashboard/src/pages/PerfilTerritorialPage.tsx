import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, ProgressBar } from 'juntos-ds'
import styles from './PerfilTerritorialPage.module.css'

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
]

const PERFIL_TERRITORIAL_TAB_INDEX = 5

// ── Distance range data (shared by bar chart + table) ────────
const DISTANCIAS = [
  {
    rango: '0 – 5 km',   clientes: '3.450', barPct: 61,
    densidad: 57,  canal: 'Home Market',  canalColor: 'var(--chart-series-10)',
    cobertura: '72%', oportunidad: 'Baja',
  },
  {
    rango: '5 – 15 km',  clientes: '5.670', barPct: 100,
    densidad: 95,  canal: 'On Premise',   canalColor: 'var(--chart-series-13)',
    cobertura: '68%', oportunidad: 'Media',
  },
  {
    rango: '15 – 30 km', clientes: '3.890', barPct: 69,
    densidad: 65,  canal: 'Home Market',  canalColor: 'var(--chart-series-10)',
    cobertura: '54%', oportunidad: 'Media',
  },
  {
    rango: '30 – 50 km', clientes: '1.580', barPct: 28,
    densidad: 26,  canal: 'Mayoristas',   canalColor: 'var(--chart-negative)',
    cobertura: '41%', oportunidad: 'Alta',
  },
  {
    rango: '+50 km',     clientes: '330',   barPct: 6,
    densidad: 5,   canal: 'Estratégico',  canalColor: 'var(--action-info-surface)',
    cobertura: '28%', oportunidad: 'Alta',
  },
]

const OPORTUNIDAD_COLOR: Record<string, string> = {
  Baja:  'var(--neutral-on-surface-low)',
  Media: 'var(--chart-warning)',
  Alta:  'var(--chart-positive)',
}

// ── Métricas por Region data ──────────────────────────────────
const REGIONES = [
  { zona: 'Norte',  clientes: '4.820', densidad: 78, cobertura: 65, digital: 54 },
  { zona: 'Centro', clientes: '6.340', densidad: 85, cobertura: 72, digital: 61 },
  { zona: 'Sur',    clientes: '3.190', densidad: 62, cobertura: 58, digital: 43 },
  { zona: 'Este',   clientes: '2.870', densidad: 55, cobertura: 49, digital: 38 },
  { zona: 'Oeste',  clientes: '1.680', densidad: 48, cobertura: 41, digital: 29 },
]

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <polygon
      points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// ── Page ─────────────────────────────────────────────────────
export function PerfilTerritorialPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === PERFIL_TERRITORIAL_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 0) navigate('/')
              else if (i === 1) navigate('/perfil-cliente')
              else if (i === 2) navigate('/canal-rtm')
              else if (i === 3) navigate('/tamano-rtm')
              else if (i === 4) navigate('/potencial-rtm')
              else if (i === 6) navigate('/actividades-pdv')
              else if (i === 7) navigate('/autonomia-digital')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

        {/* ── Page title ── */}
        <h1 className={styles.pageTitle}>Perfil Territorial</h1>

        {/* ── Top row: two sections side by side ── */}
        <div className={styles.topRow}>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Métricas por Region</h2>

            <div className={styles.regionList}>
              {REGIONES.map((r) => (
                <div key={r.zona} className={styles.regionRow}>

                  {/* Left: zone name + client count */}
                  <div className={styles.regionLeft}>
                    <span className={styles.regionName}>{r.zona}</span>
                    <span className={styles.regionClientes}>{r.clientes} Clientes</span>
                  </div>

                  {/* Divider */}
                  <div className={styles.regionDivider} />

                  {/* Right: 3 metric rows */}
                  <div className={styles.regionMetrics}>
                    {[
                      { label: 'Densidad',  value: r.densidad  },
                      { label: 'Cobertura', value: r.cobertura },
                      { label: 'Digital',   value: r.digital   },
                    ].map((metric) => (
                      <div key={metric.label} className={styles.metricRow}>
                        <span className={styles.metricLabel}>{metric.label}</span>
                        <div className={styles.metricBar}>
                          <ProgressBar value={metric.value} size="sm" aria-label={`${r.zona} ${metric.label}`} />
                        </div>
                        <span className={styles.metricPct}>{metric.value}%</span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Clientes por Rango de Distancia al CD</h2>

            <div className={styles.barChartWrap}>
              {/* Bars */}
              <div className={styles.barsArea}>
                {DISTANCIAS.map((d) => (
                  <div key={d.rango} className={styles.barCol}>
                    <div
                      className={styles.bar}
                      style={{ height: `${d.barPct}%` }}
                      aria-label={`${d.rango}: ${d.clientes}`}
                    />
                  </div>
                ))}
              </div>

              {/* X-axis */}
              <div className={styles.xAxis}>
                <div className={styles.xAxisLine} />
                <div className={styles.xAxisLabels}>
                  {DISTANCIAS.map((d) => (
                    <div key={d.rango} className={styles.xAxisTick}>
                      <div className={styles.tickMark} />
                      <span className={styles.tickLabel}>{d.rango}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom section: full width ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tabla de Distancias y Cobertura</h2>

          <div className={styles.distTable}>
            {/* Header */}
            <div className={styles.distHeader}>
              <div className={styles.colRango}>Rango de Distancia</div>
              <div className={styles.colClientes}>Clientes</div>
              <div className={styles.colDensidad}>Densidad</div>
              <div className={styles.colCanal}>Canal Predominante</div>
              <div className={styles.colCobertura}>Cobertura</div>
              <div className={styles.colOportunidad}>Oportunidad</div>
            </div>

            {/* Rows */}
            {DISTANCIAS.map((d) => (
              <div key={d.rango} className={styles.distRow}>
                <div className={styles.colRango}>{d.rango}</div>
                <div className={styles.colClientes}>{d.clientes}</div>
                <div className={styles.colDensidad}>
                  <div className={styles.densBar}>
                    <ProgressBar value={d.densidad} size="sm" aria-label={`Densidad ${d.rango}`} />
                  </div>
                  <span className={styles.densPct}>{d.densidad}%</span>
                </div>
                <div className={styles.colCanal}>
                  <span className={styles.canalDot} style={{ backgroundColor: d.canalColor }} />
                  <span>{d.canal}</span>
                </div>
                <div className={styles.colCobertura}>{d.cobertura}</div>
                <div className={styles.colOportunidad}>
                  <span
                    className={styles.oportunidadBadge}
                    style={{ color: OPORTUNIDAD_COLOR[d.oportunidad] }}
                  >
                    {d.oportunidad}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
