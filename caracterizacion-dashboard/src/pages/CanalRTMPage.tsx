import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, ChartLegendRow, StatItem, ChartBar, ProgressBar, PieChart } from 'juntos-ds'
import type { PieSlice } from 'juntos-ds'
import styles from './CanalRTMPage.module.css'

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
const CANAL_RTM_TAB_INDEX = 2

// ── Data ───────────────────────────────────────────────────────────
const LEGEND = [
  { name: 'Home Market',       color: 'var(--chart-series-10)',    value: '4.560', pct: '30.6%' },
  { name: 'On Premise',        color: 'var(--chart-series-13)',    value: '3.120', pct: '20.9%' },
  { name: 'HM Complementario', color: 'var(--chart-positive)',     value: '2.340', pct: '15.7%' },
  { name: 'Autoservicios',     color: 'var(--chart-warning)',      value: '2.100', pct: '14.1%' },
  { name: 'Mayoristas',        color: 'var(--chart-negative)',     value: '1.890', pct: '12.7%' },
  { name: 'Estratégico',       color: 'var(--action-info-surface)', value: '890',  pct: '6.0%'  },
]

// Numeric values (same proportions as LEGEND percentages) for the pie chart
const PIE_DATA: PieSlice[] = [
  { label: 'Home Market',       value: 4560, displayValue: '4.560', color: 'var(--chart-series-10)'    },
  { label: 'On Premise',        value: 3120, displayValue: '3.120', color: 'var(--chart-series-13)'    },
  { label: 'HM Complementario', value: 2340, displayValue: '2.340', color: 'var(--chart-positive)'     },
  { label: 'Autoservicios',     value: 2100, displayValue: '2.100', color: 'var(--chart-warning)'      },
  { label: 'Mayoristas',        value: 1890, displayValue: '1.890', color: 'var(--chart-negative)'     },
  { label: 'Estratégico',       value:  890, displayValue: '890',   color: 'var(--action-info-surface)' },
]

// Quarterly bars: 7 periods, stacked 3 series, growing from Q1→Q7
const EVOLUTION_BARS: { value: number }[] = [
  { value: 10 }, { value: 25 }, { value: 50 },
  { value: 75 }, { value: 75 }, { value: 100 }, { value: 100 },
]
const X_LABELS = ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24']

// Metrics table rows
const METRICS = [
  { name: 'Home Market',       color: 'var(--chart-series-10)',    clientes: '4.560', activos: '3.980', autonomia: 87,  ticket: '3.980' },
  { name: 'On Premise',        color: 'var(--chart-series-13)',    clientes: '3.120', activos: '2.740', autonomia: 60,  ticket: '2.740' },
  { name: 'HM Complementario', color: 'var(--chart-positive)',     clientes: '2.340', activos: '2.010', autonomia: 44,  ticket: '2.010' },
  { name: 'Autoservicios',     color: 'var(--chart-warning)',      clientes: '2.100', activos: '1.950', autonomia: 43,  ticket: '1.950' },
  { name: 'Mayoristas',        color: 'var(--chart-negative)',     clientes: '1.890', activos: '1.620', autonomia: 36,  ticket: '1.620' },
  { name: 'Estratégico',       color: 'var(--action-info-surface)', clientes: '890', activos: '880',   autonomia: 19,  ticket: '880'   },
]


// ── Page ───────────────────────────────────────────────────────────
export function CanalRTMPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === CANAL_RTM_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 1) navigate('/perfil-cliente')
              else if (i === 3) navigate('/tamano-rtm')
              else if (i === 4) navigate('/potencial-rtm')
              else if (i === 5) navigate('/perfil-territorial')
              else if (i === 6) navigate('/actividades-pdv')
              else if (i === 7) navigate('/autonomia-digital')
              else if (i !== CANAL_RTM_TAB_INDEX) navigate('/')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

      <h1 className={styles.pageTitle}>Canal RTM</h1>

      {/* ── Top row: two charts ── */}
      <div className={styles.topRow}>

        {/* Distribución por Canal */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Distribución por Canal</h2>

          <div className={styles.donutSection}>
            <PieChart
              data={PIE_DATA}
              defaultIndex={0}
              size={200}
              aria-label="Distribución por Canal"
            />
            <div className={styles.legendList}>
              {LEGEND.map((item) => (
                <ChartLegendRow
                  key={item.name}
                  color={item.color}
                  name={item.name}
                  value={item.value}
                  percentage={item.pct}
                  highlighted={item.name === 'Home Market'}
                />
              ))}
            </div>
          </div>

          <div className={styles.statsRow}>
            <StatItem label="Total"                value="14.900"      valueColor="var(--chart-warning)"   />
            <StatItem label="Canal Líder"          value="Home Market"                                     />
            <StatItem label="Concentración Top 2"  value="51.5%"       valueColor="var(--chart-series-10)" />
          </div>
        </div>

        {/* Evolución Trimestral */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Evolución Trimestral</h2>

          <div className={styles.barChartWrap}>
            <div className={styles.barsRow}>
              {EVOLUTION_BARS.map((bar, i) => (
                <ChartBar
                  key={i}
                  value={bar.value}
                  orientation="vertical"
                  series={[{}, {}, {}]}
                  className={styles.barItem}
                  aria-label={`${X_LABELS[i]}: ${bar.value}%`}
                />
              ))}
            </div>

            {/* X-axis */}
            <div className={styles.xAxis}>
              <div className={styles.xAxisLine} />
              <div className={styles.xAxisLabels}>
                {X_LABELS.map((label, i) => (
                  <div key={i} className={styles.xAxisTick}>
                    <div className={styles.tickMark} />
                    <span className={styles.tickLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Métricas por Canal table ── */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Métricas por Canal</h2>

        <div className={styles.metricsTable}>
          {/* Header */}
          <div className={styles.tableHeader}>
            <div className={styles.colCanal}>Canal</div>
            <div className={styles.colNum}>Clientes</div>
            <div className={styles.colNum}>Activos</div>
            <div className={styles.colAutonomia}>Autonomía Digital</div>
            <div className={styles.colNum}>Ticket Promedio</div>
          </div>

          {/* Rows */}
          {METRICS.map((row) => (
            <div key={row.name} className={styles.tableRow}>
              <div className={styles.colCanal}>
                <span className={styles.canalDot} style={{ backgroundColor: row.color }} />
                <span className={styles.canalName}>{row.name}</span>
              </div>
              <div className={styles.colNum}>{row.clientes}</div>
              <div className={styles.colNum}>{row.activos}</div>
              <div className={styles.colAutonomia}>
                <div className={styles.autonomiaBar}>
                  <ProgressBar value={row.autonomia} size="sm" aria-label={`${row.name} autonomía digital`} />
                </div>
                <span className={styles.autonomiaValue}>{row.activos}</span>
              </div>
              <div className={styles.colNum}>{row.ticket}</div>
            </div>
          ))}
        </div>
      </div>

      </div>{/* end pageContent */}

    </div>
  )
}
