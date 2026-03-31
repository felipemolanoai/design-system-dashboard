import {
  Badge,
  Tab,
  TabBar,
  KPICard,
  PillarHeader,
  ChartLegendRow,
  StatItem,
  PillarCard,
  Column,
  Cell,
  PieChart,
} from 'juntos-ds'
import type { PieSlice } from 'juntos-ds'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HomePage.module.css'

// ── Icon helpers ────────────────────────────────────────────────
const InsightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

// ── Tab labels ───────────────────────────────────────────────────
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

// ── Canal RTM pie data ────────────────────────────────────────────
const CANAL_PIE_DATA: PieSlice[] = [
  { label: 'Home Market',       value: 4560, displayValue: '4.560', color: 'var(--chart-series-10)'     },
  { label: 'On Premise',        value: 3120, displayValue: '3.120', color: 'var(--chart-series-13)'     },
  { label: 'HM Complementario', value: 2340, displayValue: '2.340', color: 'var(--chart-positive)'      },
  { label: 'Autoservicios',     value: 2100, displayValue: '2.100', color: 'var(--chart-warning)'       },
  { label: 'Mayoristas',        value: 1890, displayValue: '1.890', color: 'var(--chart-negative)'      },
  { label: 'Estratégico',       value:  890, displayValue: '890',   color: 'var(--action-info-surface)' },
]

// ── Horizontal bar ───────────────────────────────────────────────
// `color` accepts CSS var() strings — resolved by the browser
interface HBarItem {
  label: string
  pct: number
  color: string   // e.g. 'var(--chart-series-10)'
  value: string
}

function HBarChartPlaceholder({ items }: { items: HBarItem[] }) {
  return (
    <div className={styles.hbarList}>
      {items.map((item) => (
        <div key={item.label} className={styles.hbarRow}>
          <span className={styles.hbarLabel}>{item.label}</span>
          <div className={styles.hbarTrack}>
            <div
              className={styles.hbarFill}
              style={{ width: `${item.pct}%`, backgroundColor: item.color }}
            />
          </div>
          <span className={styles.hbarValue}>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

// ── Potencial RTM bubble scatter chart ──────────────────────────
const CANAL_TABS_POTENCIAL = ['HM', 'OP', 'Auto', 'May', 'HMC', 'Estr'] as const
type CanalKey = typeof CANAL_TABS_POTENCIAL[number]

interface ScatterPoint { x: number; y: number; r: number; canal: CanalKey }

const SCATTER_POINTS: ScatterPoint[] = [
  { x: 30, y: 28, r: 22, canal: 'HM'   },
  { x: 88, y: 63, r:  6, canal: 'HM'   },
  { x: 50, y: 30, r: 15, canal: 'OP'   },
  { x: 78, y: 57, r:  7, canal: 'OP'   },
  { x: 50, y: 35, r: 12, canal: 'Auto' },
  { x: 57, y: 43, r:  9, canal: 'Auto' },
  { x: 56, y: 41, r:  9, canal: 'May'  },
  { x: 91, y: 66, r:  5, canal: 'May'  },
  { x: 75, y: 52, r: 13, canal: 'HMC'  },
  { x: 86, y: 57, r:  7, canal: 'HMC'  },
  { x: 82, y: 57, r:  7, canal: 'Estr' },
  { x: 94, y: 79, r:  5, canal: 'Estr' },
]

const CANAL_COLORS: Record<CanalKey, string> = {
  HM:   'var(--chart-negative)',
  OP:   'var(--chart-series-13)',
  Auto: 'var(--chart-positive)',
  May:  'var(--chart-warning)',
  HMC:  'var(--chart-series-10)',
  Estr: 'var(--chart-series-1)',
}

function PotencialChart() {
  const [activeCanal, setActiveCanal] = useState<CanalKey | null>(null)

  const visiblePoints = activeCanal
    ? SCATTER_POINTS.filter(p => p.canal === activeCanal)
    : SCATTER_POINTS

  const W = 280, H = 150
  const PAD = { top: 10, right: 10, bottom: 28, left: 34 }
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const mx = (v: number) => PAD.left + (v / 100) * plotW
  const my = (v: number) => PAD.top + (1 - v / 100) * plotH
  const TICKS = [0, 25, 50, 75, 100]

  return (
    <div className={styles.potencialWrap}>
      <TabBar>
        {CANAL_TABS_POTENCIAL.map(canal => (
          <Tab
            key={canal}
            label={canal}
            active={activeCanal === canal}
            onClick={() => setActiveCanal(activeCanal === canal ? null : canal)}
          />
        ))}
      </TabBar>

      <svg viewBox={`0 0 ${W} ${H}`} className={styles.potencialSvg}
        aria-label="Índice Potencial vs % Realización">
        {/* Grid lines */}
        {TICKS.map(t => (
          <line key={`gy${t}`} x1={mx(0)} y1={my(t)} x2={mx(100)} y2={my(t)}
            stroke="var(--neutral-surface-container-high)" strokeWidth="0.5" />
        ))}
        {TICKS.map(t => (
          <line key={`gx${t}`} x1={mx(t)} y1={my(100)} x2={mx(t)} y2={my(0)}
            stroke="var(--neutral-surface-container-high)" strokeWidth="0.5" />
        ))}
        {/* Axes */}
        <line x1={mx(0)} y1={my(100)} x2={mx(0)} y2={my(0)}
          stroke="var(--neutral-surface-container-low)" strokeWidth="1" />
        <line x1={mx(0)} y1={my(0)} x2={mx(100)} y2={my(0)}
          stroke="var(--neutral-surface-container-low)" strokeWidth="1" />
        {/* Dashed diagonal reference line */}
        <line x1={mx(0)} y1={my(0)} x2={mx(100)} y2={my(100)}
          stroke="var(--neutral-on-surface-medium)" strokeWidth="1"
          strokeDasharray="4 3" opacity="0.4" />
        {/* Y-axis labels */}
        {TICKS.map(t => (
          <text key={`yl${t}`} x={PAD.left - 4} y={my(t)}
            textAnchor="end" dominantBaseline="middle"
            fontSize="7.5" fill="var(--neutral-on-surface-medium)">{t}</text>
        ))}
        {/* X-axis labels */}
        {TICKS.map(t => (
          <text key={`xl${t}`} x={mx(t)} y={PAD.top + plotH + 10}
            textAnchor="middle" fontSize="7.5" fill="var(--neutral-on-surface-medium)">{t}</text>
        ))}
        {/* Y-axis title */}
        <text x={7} y={PAD.top + plotH / 2} textAnchor="middle"
          fontSize="7.5" fill="var(--neutral-on-surface-high)"
          transform={`rotate(-90, 7, ${PAD.top + plotH / 2})`}>
          % Realización
        </text>
        {/* X-axis title */}
        <text x={PAD.left + plotW / 2} y={H - 1}
          textAnchor="middle" fontSize="7.5" fill="var(--neutral-on-surface-high)">
          Índice Potencial
        </text>
        {/* Bubbles */}
        {visiblePoints.map((p, i) => (
          <circle key={i} cx={mx(p.x)} cy={my(p.y)} r={p.r}
            fill={CANAL_COLORS[p.canal]} opacity="0.85" />
        ))}
      </svg>
    </div>
  )
}

// ── Heatmap ──────────────────────────────────────────────────────
// Colors match the Figma node-by-node: --chart-series-10 (cyan) | --chart-series-3 (yellow)
const C = 'var(--chart-series-10)'   // cyan
const Y = 'var(--chart-series-3)'    // yellow

const HEATMAP_LABELS = [
  'Exhibición',
  'Degustación',
  'Activación',
  'Impulso Venta',
  'Negociación',
  'Muestreo text',
]

// Explicit per-cell colors directly from Figma (node 122-1884)
const HEATMAP_DATA = [
  { header: 'HM',   cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
  { header: 'OP',   cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
  { header: 'HMC',  cells: [{ v: 89, bg: C }, { v: 65, bg: Y }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: Y }] },
  { header: 'AUTO', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: Y }, { v: 70, bg: Y }] },
  { header: 'MAY',  cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: Y }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
  { header: 'ESTR', cells: [{ v: 89, bg: C }, { v: 65, bg: C }, { v: 78, bg: C }, { v: 82, bg: C }, { v: 45, bg: C }, { v: 70, bg: C }] },
]

// Legend entries — colored dot + label; tokens directly from Figma
const HEATMAP_LEGEND = [
  { label: '< 35',  color: 'var(--neutral-surface-container-low)' },
  { label: '35–54', color: 'var(--chart-series-13)' },
  { label: '55–69', color: 'var(--chart-warning)' },
  { label: '70–84', color: 'var(--chart-series-10)' },
  { label: '85+',   color: 'var(--chart-series-10)' },
]

function HeatmapChart() {
  return (
    <div className={styles.heatmapWrap}>
      <div className={styles.heatmapGrid}>
        {/* Label column — width auto-fits to longest label text */}
        <Column
          isLabelColumn
          header=""
          cells={HEATMAP_LABELS.map((label) => ({ value: label }))}
        />

        {/* Data columns — exact per-cell colors from Figma */}
        {HEATMAP_DATA.map((col) => (
          <Column
            key={col.header}
            header={col.header}
            cells={col.cells.map((c) => ({ value: c.v, bgColor: c.bg }))}
          />
        ))}
      </div>

      {/* Legend — dot + text per range, matching Figma layout */}
      <div className={styles.heatmapLegend}>
        <span className={styles.heatmapLegendTitle}>Cobertura %</span>
        {HEATMAP_LEGEND.map((item) => (
          <span key={item.label} className={styles.heatmapLegendItem}>
            <span
              className={styles.heatmapLegendDot}
              style={{ backgroundColor: item.color }}
            />
            <span className={styles.heatmapLegendLabel}>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Gauge placeholder ────────────────────────────────────────────
function GaugePlaceholder() {
  return (
    <div className={styles.gaugeWrap}>
      <div className={styles.gaugeRing}>
        <div className={styles.gaugeHole}>
          <span className={styles.gaugePct}>58.3%</span>
          <span className={styles.gaugeMeta}>META: 75%</span>
          <span className={styles.gaugeMeta}>NIVEL GENERAL</span>
        </div>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === activeTab}
            icon={<LightningIcon />}
            onClick={() => {
                if (i === 1) navigate('/perfil-cliente')
                else if (i === 2) navigate('/canal-rtm')
                else if (i === 3) navigate('/tamano-rtm')
                else if (i === 4) navigate('/potencial-rtm')
                else if (i === 5) navigate('/perfil-territorial')
                else if (i === 6) navigate('/actividades-pdv')
                else if (i === 7) navigate('/autonomia-digital')
                else setActiveTab(i)
              }}
          />
        ))}
      </TabBar>

      {/* ── KPI row ── */}
      <div className={styles.kpiRow}>
        {[1, 2, 3, 4].map((n) => (
          <KPICard
            key={n}
            label="KPI General #1"
            value="123"
            icon={<InsightIcon />}
          />
        ))}
      </div>

      {/* ── Pillar grid 2 × 3 ── */}
      <div className={styles.pillarGrid}>

        {/* 01 Canal RTM */}
        <PillarCard
          header={
            <PillarHeader
              number="01"
              pilarLabel="Pilar 1"
              title="Canal RTM"
              badge={<Badge>6 Canales</Badge>}
            />
          }
          chart={
            <div className={styles.sideBySide}>
              <PieChart
                data={CANAL_PIE_DATA}
                defaultIndex={0}
                size={200}
                aria-label="Distribución por Canal"
              />
              <div className={styles.legendList}>
                <ChartLegendRow color="var(--chart-series-10)" name="Home Market"      value="4.560" percentage="30.6%" highlighted />
                <ChartLegendRow color="var(--chart-series-13)" name="On Premise"       value="3.120" percentage="20.9%" />
                <ChartLegendRow color="var(--chart-positive)"  name="HM Complementario" value="2.340" percentage="15.7%" />
                <ChartLegendRow color="var(--chart-warning)"   name="Autoservicios"    value="2.100" percentage="14.1%" />
                <ChartLegendRow color="var(--chart-negative)"  name="Mayoristas"       value="1.890" percentage="12.7%" />
                <ChartLegendRow color="var(--action-info-surface)" name="Estratégico"  value="890"   percentage="6.0%" />
              </div>
            </div>
          }
          stats={
            <>
              <StatItem label="Total"               value="14.900" valueColor="var(--chart-warning)" />
              <StatItem label="Canal Líder"         value="Home Market" />
              <StatItem label="Concentración Top 2" value="51.5%" valueColor="var(--chart-series-10)" />
            </>
          }
        />

        {/* 02 Tamaño RTM */}
        <PillarCard
          header={
            <PillarHeader
              number="02"
              pilarLabel="Pilar 2"
              title="Tamaño RTM"
              badge={<Badge>8 Niveles</Badge>}
            />
          }
          chart={
            <HBarChartPlaceholder
              items={[
                { label: 'Latón',   pct: 100, color: 'var(--chart-series-10)', value: '6.260' },
                { label: 'Cobre',   pct: 51,  color: 'var(--chart-negative)',   value: '3.200' },
                { label: 'Bronce',  pct: 46,  color: 'var(--chart-series-2)',   value: '2.890' },
                { label: 'Plata',   pct: 23,  color: 'var(--chart-neutral)',    value: '1.450' },
                { label: 'Oro',     pct: 12,  color: 'var(--chart-warning)',    value: '780'   },
                { label: 'Platino', pct: 5,   color: 'var(--neutral-on-surface-medium)', value: '320' },
              ]}
            />
          }
          stats={
            <>
              <StatItem label="Base Latón+Cobre"  value="63.5%" valueColor="var(--chart-series-10)" />
              <StatItem label="Premium Oro+Plati" value="7.3%" />
              <StatItem label="Uplift Potencial"  value="+1.100" valueColor="var(--action-success-surface)" />
            </>
          }
        />

        {/* 03 Potencial RTM */}
        <PillarCard
          header={
            <PillarHeader
              number="03"
              pilarLabel="Pilar 3"
              title="Potencial RTM"
              badge={<Badge>Actual vs Potencial</Badge>}
            />
          }
          chart={<PotencialChart />}
          stats={
            <>
              <StatItem label="Gap Promedio"       value="−14.9 pts" valueColor="var(--chart-negative)" />
              <StatItem label="Mayor Oportunidad"  value="Mayoristas" />
              <StatItem label="Outliers Tratados"  value="top 10%" valueColor="var(--chart-series-10)" />
            </>
          }
        />

        {/* 04 Perfil Territorial */}
        <PillarCard
          header={
            <PillarHeader
              number="04"
              pilarLabel="Pilar 4"
              title="Perfil Territorial"
              badge={<Badge>Proximidad CD</Badge>}
            />
          }
          chart={
            <HBarChartPlaceholder
              items={[
                { label: '0 – 5 km',   pct: 57,  color: 'var(--chart-series-10)', value: '3.450' },
                { label: '5 – 15 km',  pct: 95,  color: 'var(--chart-warning)',    value: '5.670' },
                { label: '15 – 30 km', pct: 65,  color: 'var(--chart-series-13)', value: '3.890' },
                { label: '30 – 50 km', pct: 26,  color: 'var(--chart-negative)',   value: '1.580' },
                { label: '+50 km',     pct: 5,   color: 'var(--chart-neutral)',    value: '330'   },
              ]}
            />
          }
          stats={
            <>
              <StatItem label="Zona Prioritaria"  value="5–15 km" />
              <StatItem label="Clientes Cercanos" value="9.120" />
              <StatItem label="Radio Crítico"     value="≤ 15 km" valueColor="var(--chart-series-10)" />
            </>
          }
        />

        {/* 05 Actividades PDV */}
        <PillarCard
          header={
            <PillarHeader
              number="05"
              pilarLabel="Pilar 5"
              title="Actividades PDV"
              badge={<Badge>Heatmap</Badge>}
            />
          }
          chart={<HeatmapChart />}
          stats={
            <>
              <StatItem label="Actividad Líder"    value="Exhibición" />
              <StatItem label="Canal Más Activo"   value="Estratégico" valueColor="var(--chart-series-10)" />
              <StatItem label="Promedio Cobertura" value="65.4%" valueColor="var(--chart-warning)" />
            </>
          }
        />

        {/* 06 Autonomía Digital */}
        <PillarCard
          header={
            <PillarHeader
              number="06"
              pilarLabel="Pilar 6"
              title="Autonomía Digital"
              badge={<Badge>Pedidos Propios</Badge>}
            />
          }
          chart={
            <div className={styles.sideBySide}>
              <GaugePlaceholder />
              <div className={styles.legendList}>
                <ChartLegendRow color="var(--chart-series-15)"  name="Estratégico"   percentage="89%" />
                <ChartLegendRow color="var(--chart-series-14)"  name="Home Market"   percentage="72%" />
                <ChartLegendRow color="var(--chart-neutral)"    name="Autoservicios" percentage="65%" />
                <ChartLegendRow color="var(--neutral-on-surface-medium)" name="HM Comp." percentage="58%" />
                <ChartLegendRow color="var(--neutral-on-surface-low)"    name="On Premise" percentage="42%" />
                <ChartLegendRow color="var(--neutral-surface-container-high)" name="Mayoristas" percentage="28%" />
              </div>
            </div>
          }
          stats={
            <>
              <StatItem label="Canal Más Digital" value="Estratégico" />
              <StatItem label="Gap vs Meta"        value="−16.7 pts" valueColor="var(--chart-negative)" />
              <StatItem label="Crecimiento M/M"    value="+2.2 pts"  valueColor="var(--action-success-surface)" />
            </>
          }
        />

      </div>
    </div>
  )
}
