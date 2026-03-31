import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, Column, StatItem } from 'juntos-ds'
import styles from './ActividadesPDVPage.module.css'

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

const ACTIVIDADES_PDV_TAB_INDEX = 6

// ── Heatmap data ──────────────────────────────────────────────
const C = 'var(--chart-series-10)'  // cyan
const Y = 'var(--chart-series-3)'   // yellow

const HEATMAP_ROWS = [
  'Exhibición', 'Degustación', 'Activación', 'Impulso Venta', 'Negociación', 'Muestreo',
]

const HEATMAP_COLS = [
  { header: 'HM',   cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
  { header: 'OP',   cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
  { header: 'HMC',  cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: Y }] },
  { header: 'AUTO', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
  { header: 'MAY',  cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
  { header: 'ESTR', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
]

const HEATMAP_LEGEND = [
  { label: '< 35',  color: 'var(--neutral-surface-container-low)' },
  { label: '35–54', color: 'var(--chart-series-13)'               },
  { label: '55–69', color: 'var(--chart-series-3)'                },
  { label: '70–84', color: 'var(--chart-series-10)'               },
  { label: '85+',   color: 'var(--chart-series-10)'               },
]

// ── Actividades (shared x-axis) ───────────────────────────────
const ACTIVIDADES = [
  { label: 'Exhibición',    cobertura: 82, meta: 90, promedio: 74 },
  { label: 'Degustación',   cobertura: 65, meta: 80, promedio: 58 },
  { label: 'Activación',    cobertura: 71, meta: 85, promedio: 63 },
  { label: 'Impulso Venta', cobertura: 58, meta: 75, promedio: 51 },
  { label: 'Negociación',   cobertura: 44, meta: 70, promedio: 39 },
  { label: 'Muestreo',      cobertura: 37, meta: 65, promedio: 31 },
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
export function ActividadesPDVPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === ACTIVIDADES_PDV_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 0) navigate('/')
              else if (i === 1) navigate('/perfil-cliente')
              else if (i === 2) navigate('/canal-rtm')
              else if (i === 3) navigate('/tamano-rtm')
              else if (i === 4) navigate('/potencial-rtm')
              else if (i === 5) navigate('/perfil-territorial')
              else if (i === 7) navigate('/autonomia-digital')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

        {/* ── Page title ── */}
        <h1 className={styles.pageTitle}>Actividades PDV</h1>

        {/* ── Top section: Heatmap ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Cobertura — Actividad × Canal</h2>

          <div className={styles.heatmapWrap}>
            <div className={styles.heatmapGrid}>
              <Column
                isLabelColumn
                header=""
                cells={HEATMAP_ROWS.map((label) => ({ value: label }))}
              />
              {HEATMAP_COLS.map((col) => (
                <Column
                  key={col.header}
                  header={col.header}
                  cells={col.cells.map((c) => ({ value: c.v, bgColor: c.bg }))}
                />
              ))}
            </div>

            <div className={styles.heatmapLegend}>
              <span className={styles.heatmapLegendTitle}>Cobertura %</span>
              {HEATMAP_LEGEND.map((item) => (
                <span key={item.label} className={styles.heatmapLegendItem}>
                  <span className={styles.heatmapLegendDot} style={{ backgroundColor: item.color }} />
                  <span className={styles.heatmapLegendLabel}>{item.label}</span>
                </span>
              ))}
            </div>
            <div className={styles.heatmapStats}>
              <StatItem label="Actividad Líder"    value="Exhibición"  />
              <StatItem label="Canal más activo"   value="Estratégico" valueColor="var(--chart-series-10)" />
              <StatItem label="Promedio Cobertura" value="65.4%"       valueColor="var(--chart-warning)"   />
            </div>
          </div>
        </div>

        {/* ── Bottom row: two sections side by side ── */}
        <div className={styles.bottomRow}>

          {/* ── Promedio por Actividad vs Meta — 2 bars per group ── */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Promedio por Actividad vs Meta</h2>

            <div className={styles.barChartWrap}>
              <div className={styles.barsArea}>
                {ACTIVIDADES.map((a) => (
                  <div key={a.label} className={styles.barGroup}>
                    <div className={styles.bars}>
                      <div className={styles.barCobertura} style={{ height: `${a.cobertura}%` }} aria-label={`${a.label} Cobertura: ${a.cobertura}%`} />
                      <div className={styles.barMeta}      style={{ height: `${a.meta}%`      }} aria-label={`${a.label} Meta: ${a.meta}%`}           />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.xAxis}>
                <div className={styles.xAxisLine} />
                <div className={styles.xAxisLabels}>
                  {ACTIVIDADES.map((a) => (
                    <div key={a.label} className={styles.xAxisTick}>
                      <div className={styles.tickMark} />
                      <span className={styles.tickLabel}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotCobertura}`} />
                  <span className={styles.legendLabel}>Cobertura Promo</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotMeta}`} />
                  <span className={styles.legendLabel}>Meta</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Cobertura Promedio por Canal — 1 bar per group ── */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Cobertura Promedio por Canal</h2>

            <div className={styles.barChartWrap}>
              <div className={styles.barsArea}>
                {ACTIVIDADES.map((a) => (
                  <div key={a.label} className={styles.barGroup}>
                    <div className={styles.bars}>
                      <div className={styles.barPromedio} style={{ height: `${a.promedio}%` }} aria-label={`${a.label} Promedio: ${a.promedio}%`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.xAxis}>
                <div className={styles.xAxisLine} />
                <div className={styles.xAxisLabels}>
                  {ACTIVIDADES.map((a) => (
                    <div key={a.label} className={styles.xAxisTick}>
                      <div className={styles.tickMark} />
                      <span className={styles.tickLabel}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotPromedio}`} />
                  <span className={styles.legendLabel}>Cobertura Promedio</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
