import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, ProgressBar } from 'juntos-ds'
import styles from './TamanoRTMPage.module.css'

// ── Icons ─────────────────────────────────────────────────────────
const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <polygon
      points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
)

// ── Tab config ─────────────────────────────────────────────────────
const TABS = [
  'Dashboard', 'Perfil del Cliente', 'Canal RTM', 'Tamaño RTM',
  'Potencial RTM', 'Perfil Territorial', 'Actividades PDV', 'Autonomía Digital',
]
const TAMANO_RTM_TAB_INDEX = 3

// ── Section 1 data ─────────────────────────────────────────────────
const DISTRIBUCION_TIERS = [
  { label: 'Latón',   color: 'var(--chart-series-10)',     value: 42,   clientes: '6.260', pct: '42.0%'  },
  { label: 'Cobre',   color: 'var(--chart-series-13)',     value: 21.5, clientes: '3.200', pct: '21.5%'  },
  { label: 'Bronce',  color: 'var(--chart-positive)',      value: 19.4, clientes: '2.890', pct: '19.4%'  },
  { label: 'Plata',   color: 'var(--chart-warning)',       value: 9.7,  clientes: '1.450', pct: '9.7%'   },
  { label: 'Oro',     color: 'var(--chart-negative)',      value: 5.2,  clientes: '780',   pct: '5.2%'   },
  { label: 'Platino', color: 'var(--action-info-surface)', value: 2.1,  clientes: '320',   pct: '2.1%'   },
]

// ── Section 2 data ─────────────────────────────────────────────────
const METRICAS_TIERS = [
  { label: 'Latón',   color: 'var(--chart-series-10)',    clientes: '6.260', porcentaje: '42%',   ticket: '3.980' },
  { label: 'Cobre',   color: 'var(--chart-series-13)',    clientes: '3.200', porcentaje: '21.5%', ticket: '2.740' },
  { label: 'Bronce',  color: 'var(--chart-positive)',     clientes: '2.890', porcentaje: '19.4%', ticket: '2.010' },
  { label: 'Plata',   color: 'var(--chart-warning)',      clientes: '1.450', porcentaje: '9.7%',  ticket: '1.950' },
  { label: 'Oro',     color: 'var(--chart-negative)',     clientes: '780',   porcentaje: '5.2%',  ticket: '1.620' },
  { label: 'Platino', color: 'var(--action-info-surface)', clientes: '320',  porcentaje: '2.1%',  ticket: '880'   },
]

// ── Section 3 data ─────────────────────────────────────────────────
const MOBILITY_TIERS = [
  { label: 'Latón',   ascended: 50, descended: 25 },
  { label: 'Cobre',   ascended: 50, descended: 25 },
  { label: 'Bronce',  ascended: 50, descended: 25 },
  { label: 'Plata',   ascended: 50, descended: 25 },
  { label: 'Oro',     ascended: 50, descended: 25 },
  { label: 'Platino', ascended: 50, descended: 25 },
]

// ── Page ───────────────────────────────────────────────────────────
export function TamanoRTMPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === TAMANO_RTM_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 1) navigate('/perfil-cliente')
              else if (i === 2) navigate('/canal-rtm')
              else if (i === 4) navigate('/potencial-rtm')
              else if (i === 5) navigate('/perfil-territorial')
              else if (i === 6) navigate('/actividades-pdv')
              else if (i === 7) navigate('/autonomia-digital')
              else if (i !== TAMANO_RTM_TAB_INDEX) navigate('/')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

      <h1 className={styles.pageTitle}>Tamaño RTM</h1>

      {/* ── Sections 1 & 2 side by side ── */}
      <div className={styles.sectionsRow}>

        {/* ── Section 1: Distribución por Canal ── */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Distribución por Canal</h2>

          <div className={styles.distribList}>
            {DISTRIBUCION_TIERS.map((row) => (
              <div key={row.label} className={styles.distribRow}>
                <div className={styles.distribCanal}>
                  <span className={styles.tierDot} style={{ backgroundColor: row.color }} />
                  <span className={styles.tierName}>{row.label}</span>
                </div>
                <div className={styles.distribBar}>
                  <ProgressBar value={row.value} size="sm" aria-label={row.label} />
                </div>
                <span className={styles.distribNum}>{row.clientes}</span>
                <span className={styles.distribPct}>{row.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: Métricas por Canal ── */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Métricas por Canal</h2>

        <div className={styles.metricsTable}>
          {/* Header */}
          <div className={styles.tableHeader}>
            <div className={styles.colCanal}>Canal</div>
            <div className={styles.colNum}>Clientes</div>
            <div className={styles.colNum}>Porcentaje</div>
            <div className={styles.colNum}>Ticket Promedio</div>
          </div>

          {/* Rows */}
          {METRICAS_TIERS.map((row) => (
            <div key={row.label} className={styles.tableRow}>
              <div className={styles.colCanal}>
                <span className={styles.tierDot} style={{ backgroundColor: row.color }} />
                <span className={styles.tierName}>{row.label}</span>
              </div>
              <div className={styles.colNum}>{row.clientes}</div>
              <div className={styles.colNum}>{row.porcentaje}</div>
              <div className={styles.colNum}>{row.ticket}</div>
            </div>
          ))}
        </div>
        </div>

      </div>{/* end sectionsRow */}

      {/* ── Section 3: Movilidad entre Niveles ── */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Movilidad entre Niveles - 2026</h2>

        {/* Bar chart */}
        <div className={styles.barChart}>
          {MOBILITY_TIERS.map(({ label, ascended, descended }) => (
            <div key={label} className={styles.barGroup}>
              <div className={styles.bars}>
                <div className={styles.barWrap}>
                  <div
                    className={styles.barNegative}
                    style={{ height: `${descended}%` }}
                    aria-label={`${label} descendieron: ${descended}%`}
                  />
                </div>
                <div className={styles.barWrap}>
                  <div
                    className={styles.barPositive}
                    style={{ height: `${ascended}%` }}
                    aria-label={`${label} ascendieron: ${ascended}%`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* X-axis */}
        <div className={styles.xAxis}>
          <div className={styles.xAxisLine} />
          <div className={styles.xAxisLabels}>
            {MOBILITY_TIERS.map(({ label }) => (
              <div key={label} className={styles.xAxisTick}>
                <div className={styles.tickMark} />
                <span className={styles.tickLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotPositive}`} />
            <span className={styles.legendLabel}>Clientes que ascendieron de Nivel</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotNegative}`} />
            <span className={styles.legendLabel}>Clientes que descendieron de Nivel</span>
          </div>
        </div>
      </div>

      </div>{/* end pageContent */}

    </div>
  )
}
