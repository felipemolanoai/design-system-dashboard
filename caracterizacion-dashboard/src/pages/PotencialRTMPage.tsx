import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, ProgressBar } from 'juntos-ds'
import styles from './PotencialRTMPage.module.css'

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

const POTENCIAL_RTM_TAB_INDEX = 4

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

// ── Section 1: Combinaciones Subcanal por Nivel ───────────────
const COMBINACIONES = [
  { canal: 'Home Market',       tamano: 'Latón',   region: 'Norte',  clientes: '1.560', pct: '10.5%', ticket: '3.200' },
  { canal: 'Home Market',       tamano: 'Cobre',   region: 'Centro', clientes: '890',   pct: '6.0%',  ticket: '2.800' },
  { canal: 'On Premise',        tamano: 'Plata',   region: 'Sur',    clientes: '680',   pct: '4.6%',  ticket: '4.100' },
  { canal: 'On Premise',        tamano: 'Oro',     region: 'Norte',  clientes: '420',   pct: '2.8%',  ticket: '5.600' },
  { canal: 'HM Compl.',         tamano: 'Bronce',  region: 'Centro', clientes: '1.230', pct: '8.3%',  ticket: '2.100' },
  { canal: 'Autoservicios',     tamano: 'Latón',   region: 'Sur',    clientes: '980',   pct: '6.6%',  ticket: '3.800' },
  { canal: 'Mayoristas',        tamano: 'Cobre',   region: 'Norte',  clientes: '760',   pct: '5.1%',  ticket: '2.400' },
  { canal: 'Estratégico',       tamano: 'Platino', region: 'Centro', clientes: '310',   pct: '2.1%',  ticket: '7.200' },
]

// ── Section 2: Ventas Actuales vs Ventas futuras por Canal ────
// Each group: [actuales, potencial, top10] as % of max scale
const VENTAS_GROUPS = [
  { label: 'Home Market',       actuales: 75, potencial: 88, top10: 95 },
  { label: 'On Premise',        actuales: 60, potencial: 72, top10: 85 },
  { label: 'HM Compl.',         actuales: 55, potencial: 68, top10: 80 },
  { label: 'Autoservicios',     actuales: 48, potencial: 62, top10: 78 },
  { label: 'Mayoristas',        actuales: 40, potencial: 55, top10: 70 },
  { label: 'Estratégico',       actuales: 35, potencial: 50, top10: 65 },
]

// ── Page ─────────────────────────────────────────────────────
export function PotencialRTMPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === POTENCIAL_RTM_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 0) navigate('/')
              else if (i === 1) navigate('/perfil-cliente')
              else if (i === 2) navigate('/canal-rtm')
              else if (i === 3) navigate('/tamano-rtm')
              else if (i === 5) navigate('/perfil-territorial')
              else if (i === 6) navigate('/actividades-pdv')
              else if (i === 7) navigate('/autonomia-digital')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

        <h1 className={styles.pageTitle}>Potencial RTM</h1>

        {/* ── Section 1: Combinaciones Subcanal por Nivel ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Combinaciones Subcanal por Nivel</h2>

          <div className={styles.combiTable}>
            {/* Header */}
            <div className={styles.tableHeader}>
              <div className={styles.colCanal}>Canal</div>
              <div className={styles.colTamano}>Tamaño</div>
              <div className={styles.colRegion}>Region</div>
              <div className={styles.colNum}>Clientes</div>
              <div className={styles.colNum}>Porcentaje</div>
              <div className={styles.colNum}>Ticket Promedio</div>
            </div>

            {/* Rows */}
            {COMBINACIONES.map((row, i) => (
              <div key={i} className={styles.tableRow}>
                <div className={styles.colCanal}>{row.canal}</div>
                <div className={styles.colTamano}>{row.tamano}</div>
                <div className={styles.colRegion}>{row.region}</div>
                <div className={styles.colNum}>{row.clientes}</div>
                <div className={styles.colNum}>{row.pct}</div>
                <div className={styles.colNum}>{row.ticket}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: Ventas Actuales vs Ventas futuras por Canal ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Ventas Actuales vs Ventas futuras por Canal</h2>

          {/* Grouped bar chart */}
          <div className={styles.barChartWrap}>
            <div className={styles.barsArea}>
              {VENTAS_GROUPS.map((group) => (
                <div key={group.label} className={styles.barGroup}>
                  <div className={styles.bars}>
                    <div className={styles.barActuales}   style={{ height: `${group.actuales}%`  }} aria-label={`${group.label} Ventas Actuales`}  />
                    <div className={styles.barPotencial}  style={{ height: `${group.potencial}%` }} aria-label={`${group.label} Potencial`}        />
                    <div className={styles.barTop10}      style={{ height: `${group.top10}%`     }} aria-label={`${group.label} Top 10%`}           />
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis */}
            <div className={styles.xAxis}>
              <div className={styles.xAxisLine} />
              <div className={styles.xAxisLabels}>
                {VENTAS_GROUPS.map((group) => (
                  <div key={group.label} className={styles.xAxisTick}>
                    <div className={styles.tickMark} />
                    <span className={styles.tickLabel}>{group.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.legendDotActuales}`} />
                <span className={styles.legendLabel}>Ventas Actuales</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.legendDotPotencial}`} />
                <span className={styles.legendLabel}>Potencial</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.legendDotTop10}`} />
                <span className={styles.legendLabel}>Top 10%</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
