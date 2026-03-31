import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tab, TabBar, InputSearch, InputSelect, ProgressBar } from 'juntos-ds'
import styles from './PerfilClientePage.module.css'

// ── Icons ────────────────────────────────────────────────────────
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
]

const PERFIL_TAB_INDEX = 1

// ── Static data ──────────────────────────────────────────────────
const CANAL_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'home-market', label: 'Home Market' },
  { value: 'on-premise', label: 'On Premise' },
  { value: 'autoservicios', label: 'Autoservicios' },
  { value: 'mayoristas', label: 'Mayoristas' },
  { value: 'estrategico', label: 'Estratégico' },
]

const NIVEL_OPTIONS = [
  { value: 'todos',   label: 'Todos'   },
  { value: 'laton',   label: 'Latón'   },
  { value: 'cobre',   label: 'Cobre'   },
  { value: 'bronce',  label: 'Bronce'  },
  { value: 'plata',   label: 'Plata'   },
  { value: 'oro',     label: 'Oro'     },
  { value: 'platino', label: 'Platino' },
]

const CLASIFICACIONES = ['Todos', 'A', 'B', 'C', 'D']

const CLIENTS = [
  { initials: 'TL', name: 'Tienda La Esperanza',        id: '157895', city: 'Mexico DF',   clasif: 'A', nivel: 'plata',   canal: 'home-market',   color: 'var(--chart-series-1)'         },
  { initials: 'AE', name: 'Abarrotes El Sol',            id: '157896', city: 'Mexico DF',   clasif: 'B', nivel: 'bronce',  canal: 'on-premise',    color: 'var(--chart-series-3)'         },
  { initials: 'BL', name: 'Bodega La Unica',             id: '157897', city: 'Monterrey',   clasif: 'C', nivel: 'cobre',   canal: 'autoservicios', color: 'var(--action-info-surface)'    },
  { initials: 'SN', name: 'Supermercado Nuevo Amanecer', id: '157898', city: 'Guadalajara', clasif: 'D', nivel: 'oro',     canal: 'mayoristas',    color: 'var(--chart-series-10)'        },
  { initials: 'TM', name: 'Tienda Mi Vecino',            id: '157899', city: 'Mexico DF',   clasif: 'A', nivel: 'laton',   canal: 'estrategico',   color: 'var(--action-primary-surface)' },
  { initials: 'MM', name: 'Mini Market La Esquina',      id: '157900', city: 'Monterrey',   clasif: 'B', nivel: 'platino', canal: 'home-market',   color: 'var(--chart-series-12)'        },
]

const ACTIVIDADES = [
  { label: 'Estratégico',   value: 89 },
  { label: 'Home Market',   value: 72 },
  { label: 'Autoservicios', value: 65 },
  { label: 'HM Compl.',     value: 58 },
  { label: 'On Premise',    value: 42 },
  { label: 'Mayoristas',    value: 28 },
]

// ── SectionCard ──────────────────────────────────────────────────
interface SectionCardProps {
  number: string
  title: string
  children: React.ReactNode
}

function SectionCard({ number, title, children }: SectionCardProps) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>{number}</span>
        <span className={styles.sectionTitle}>{title}</span>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  )
}

// ── ProgressRow ──────────────────────────────────────────────────
interface ProgressRowProps {
  label: string
  value: number
}

function ProgressRow({ label, value }: ProgressRowProps) {
  return (
    <div className={styles.progressRow}>
      <span className={styles.progressLabel}>{label}</span>
      <div className={styles.progressBarWrap}>
        <ProgressBar value={value} size="sm" aria-label={label} />
      </div>
      <span className={styles.progressValue}>{value}%</span>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export function PerfilClientePage() {
  const navigate = useNavigate()
  const [search, setSearch]               = useState('')
  const [canal, setCanal]                 = useState('todos')
  const [nivel, setNivel]                 = useState('todos')
  const [clasif, setClasif]               = useState('Todos')
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

  // ── Filtering ────────────────────────────────────────────────
  const filteredClients = CLIENTS.filter((client) => {
    const matchesSearch =
      search.trim() === '' ||
      client.name.toLowerCase().includes(search.trim().toLowerCase())
    const matchesClasif = clasif === 'Todos' || client.clasif === clasif
    const matchesNivel  = nivel  === 'todos'  || client.nivel  === nivel
    const matchesCanal  = canal  === 'todos'  || client.canal  === canal
    return matchesSearch && matchesClasif && matchesNivel && matchesCanal
  })

  const selectedClient = CLIENTS.find((c) => c.id === selectedClientId) ?? null

  const nivelLabel = (value: string) =>
    NIVEL_OPTIONS.find((o) => o.value === value)?.label ?? value

  return (
    <div className={styles.page}>

      {/* ── Tab navigation ── */}
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === PERFIL_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => {
              if (i === 2) navigate('/canal-rtm')
              else if (i === 3) navigate('/tamano-rtm')
              else if (i === 4) navigate('/potencial-rtm')
              else if (i === 5) navigate('/perfil-territorial')
              else if (i === 6) navigate('/actividades-pdv')
              else if (i === 7) navigate('/autonomia-digital')
              else if (i !== PERFIL_TAB_INDEX) navigate('/')
            }}
          />
        ))}
      </TabBar>

      {/* ── Page content container ── */}
      <div className={styles.pageContent}>

        {/* ── Two-column layout ── */}
        <div className={styles.layout}>

          {/* ── Left sidebar ── */}
          <aside className={styles.sidebar}>
            <h1 className={styles.sidebarTitle}>Perfil del Cliente</h1>

            <InputSearch
              value={search}
              onChange={setSearch}
              onClear={() => setSearch('')}
              placeholder="Buscar por Nombre, ID, Ciu..."
            />

            {/* Filters card */}
            <div className={styles.filtersCard}>
              <InputSelect
                label="Canal"
                value={canal}
                options={CANAL_OPTIONS}
                onChange={setCanal}
              />

              <div className={styles.clasifSection}>
                <span className={styles.filterLabel}>Clasificación</span>
                <TabBar>
                  {CLASIFICACIONES.map((c) => (
                    <Tab
                      key={c}
                      label={c}
                      active={clasif === c}
                      onClick={() => setClasif(c)}
                    />
                  ))}
                </TabBar>
              </div>

              <InputSelect
                label="Nivel"
                value={nivel}
                options={NIVEL_OPTIONS}
                onChange={setNivel}
              />
            </div>

            {/* Results list */}
            <span className={styles.resultsLabel}>
              Resultados{filteredClients.length > 0 ? ` (${filteredClients.length})` : ''}
            </span>

            <div className={styles.clientList}>
              {filteredClients.length === 0 ? (
                <span className={styles.noResults}>Sin resultados</span>
              ) : (
                filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className={`${styles.clientRow} ${selectedClientId === client.id ? styles.clientRowActive : ''}`}
                    onClick={() => setSelectedClientId(client.id)}
                  >
                    <div
                      className={styles.clientAvatar}
                      style={{ backgroundColor: client.color }}
                    >
                      {client.initials}
                    </div>
                    <div className={styles.clientInfo}>
                      <span className={styles.clientName}>{client.name}</span>
                      <span className={styles.clientMeta}>ID {client.id} · {client.city}</span>
                    </div>
                    <div className={styles.clientClassif}>
                      <span className={styles.clasifLetter}>{client.clasif}</span>
                      <span className={styles.clientNivel}>{nivelLabel(client.nivel)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </aside>

          {/* ── Right detail panel ── */}
          <div className={styles.detail}>

            {selectedClient === null ? (

              /* ── Empty state ── */
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className={styles.emptyTitle}>Selecciona un cliente</span>
                <span className={styles.emptySubtitle}>Elige un cliente de la lista para ver su perfil completo</span>
              </div>

            ) : (
              <>
                {/* Client header card */}
                <div className={styles.clientCard}>
                  <div
                    className={styles.clientCardAvatar}
                    style={{ backgroundColor: selectedClient.color }}
                  >
                    {selectedClient.initials}
                  </div>
                  <div className={styles.clientCardInfo}>
                    <span className={styles.clientCardName}>{selectedClient.name}</span>
                    <div className={styles.clientCardMeta}>
                      <span>ID {selectedClient.id}</span>
                      <span>Maria Garcia</span>
                      <span>{selectedClient.city}</span>
                      <span>2026-01-25</span>
                    </div>
                  </div>
                  <div className={styles.clientCardRight}>
                    <span className={styles.clasifLetterLg}>{selectedClient.clasif}</span>
                    <span className={styles.clientNivelLg}>{nivelLabel(selectedClient.nivel)}</span>
                  </div>
                </div>

                {/* Score Global RTM */}
                <div className={styles.scoreCard}>
                  <span className={styles.scoreLabel}>Score Global RTM</span>
                  <div className={styles.scoreBarWrap}>
                    <ProgressBar value={72} size="md" aria-label="Score Global RTM" />
                  </div>
                  <span className={styles.scoreValue}>72/100</span>
                </div>

                {/* Section cards 2×3 grid */}
                <div className={styles.sectionGrid}>

                  {/* 01 Canal RTM */}
                  <SectionCard number="01" title="Canal RTM">
                    <span className={styles.sectionValueLg}>Home Market</span>
                    <span className={styles.sectionSubtext}>
                      Subcanal: <strong>HM</strong>
                    </span>
                  </SectionCard>

                  {/* 02 Tamaño RTM */}
                  <SectionCard number="02" title="Tamaño RTM">
                    <span className={styles.sectionValueLg}>{nivelLabel(selectedClient.nivel)}</span>
                    <span className={styles.sectionSubtext}>Umbral de Tamaño RTM</span>
                  </SectionCard>

                  {/* 03 Potencial RTM */}
                  <SectionCard number="03" title="Potencial RTM">
                    <span className={styles.sectionValueLg}>+15,000 usd</span>
                    <span className={styles.sectionSubtext}>Incremento Total Proyectado vs Top 10</span>
                  </SectionCard>

                  {/* 04 Perfil Territorial */}
                  <SectionCard number="04" title="Perfil Territorial">
                    <div className={styles.territorialRow}>
                      <div className={styles.territorialItem}>
                        <span className={styles.sectionSubtext}>Distancia</span>
                        <span className={styles.territorialValue}>5km - 10km</span>
                      </div>
                      <div className={styles.territorialDivider} />
                      <div className={styles.territorialItem}>
                        <span className={styles.sectionSubtext}>Region</span>
                        <span className={styles.territorialValue}>Norte</span>
                      </div>
                    </div>
                    <ProgressRow label="Densidad Zona" value={72} />
                  </SectionCard>

                  {/* 05 Autonomía Digital */}
                  <SectionCard number="05" title="Autonomía Digital">
                    <span className={styles.sectionValueXl}>72%</span>
                    <ProgressRow label="Densidad Zona" value={72} />
                  </SectionCard>

                  {/* 06 Actividades PDV */}
                  <SectionCard number="06" title="Actividades PDV">
                    <div className={styles.actividadesWrap}>
                      {ACTIVIDADES.map((act) => (
                        <ProgressRow key={act.label} label={act.label} value={act.value} />
                      ))}
                    </div>
                  </SectionCard>

                </div>
              </>
            )}
          </div>

        </div>

      </div>{/* end pageContent */}

    </div>
  )
}
