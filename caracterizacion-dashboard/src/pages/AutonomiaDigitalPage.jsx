import { useNavigate } from 'react-router-dom';
import { Tab, TabBar, ChartBar, ProgressBar, ChartLegendRow } from 'juntos-ds';
import styles from './AutonomiaDigitalPage.module.css';

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
);

const DigitalAutonomyData = [
  { month: 'Octubre', percentage: 45.2 },
  { month: 'Noviembre', percentage: 48.1 },
  { month: 'Diciembre', percentage: 50.8 },
  { month: 'Enero', percentage: 53.4 },
  { month: 'Febrero', percentage: 56.1 },
  { month: 'Marzo', percentage: 58.3 },
];

const DigitalVsTraditionalData = [
  { month: 'Octubre', digital: 10, traditional: 90 },
  { month: 'Noviembre', digital: 25, traditional: 75 },
  { month: 'Diciembre', digital: 50, traditional: 50 },
  { month: 'Enero', digital: 75, traditional: 25 },
  { month: 'Febrero', digital: 100, traditional: 0 },
  { month: 'Marzo', digital: 100, traditional: 0 },
  { month: 'Abril', digital: 100, traditional: 0 },
];

const ChannelData = [
  { channel: 'Home Market', value: 42, count: 6260 },
  { channel: 'On Premise', value: 21.5, count: 3200 },
  { channel: 'HM Complementario', value: 19.4, count: 2890 },
  { channel: 'Autoservicios', value: 9.7, count: 1450 },
  { channel: 'Mayoristas', value: 5.2, count: 780 },
  { channel: 'Estratégico', value: 2.1, count: 320 },
];

const ChannelColors = [
  'var(--chart-series-10)',
  'var(--chart-series-13)',
  'var(--chart-positive)',
  'var(--chart-warning)',
  'var(--chart-negative)',
  'var(--action-info-surface)',
];

export function AutonomiaDigitalPage() {
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    if (index === 0) navigate('/');
    else if (index === 1) navigate('/perfil-cliente');
    else if (index === 2) navigate('/canal-rtm');
    else if (index === 3) navigate('/tamano-rtm');
    else if (index === 4) navigate('/potencial-rtm');
    else if (index === 5) navigate('/perfil-territorial');
    else if (index === 6) navigate('/actividades-pdv');
  };

  return (
    <div className={styles.page}>
      <TabBar>
        {TABS.map((tab, i) => (
          <Tab
            key={tab}
            label={tab}
            active={i === AUTONOMIA_TAB_INDEX}
            icon={<LightningIcon />}
            onClick={() => handleTabClick(i)}
          />
        ))}
      </TabBar>

      <div className={styles.contentCard}>
        <h1 className={styles.heading}>Autonomía Digital</h1>

        <div className={styles.chartsSection}>
          {/* Evolution Chart */}
          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Evolución de Autonomía Digital — Últimos 6 Meses
            </h2>
            <div className={styles.barChartContainer}>
              {DigitalAutonomyData.map((item, idx) => (
                <div key={idx} className={styles.barGroup}>
                  <ChartBar
                    value={item.percentage}
                    series={[{ color: 'var(--chart-positive)' }]}
                    orientation="vertical"
                    className={styles.bar}
                    aria-label={`${item.percentage}% en ${item.month}`}
                  />
                  <span className={styles.barLabel}>
                    {item.percentage}% {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Digital vs Traditional Chart */}
          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Pedidos Digitales vs Tradicionales
            </h2>
            <div className={styles.barChartContainer}>
              {DigitalVsTraditionalData.map((item, idx) => (
                <div key={idx} className={styles.stackedBarGroup}>
                  <div className={styles.stackedBarContainer}>
                    <div
                      className={styles.stackedBar}
                      style={{
                        backgroundColor: 'var(--chart-series-2)',
                        height: '100%'
                      }}
                    >
                      <div
                        className={styles.stackedBarOverlay}
                        style={{
                          backgroundColor: 'var(--chart-series-1)',
                          height: `${item.digital}%`
                        }}
                      />
                    </div>
                  </div>
                  <span className={styles.barLabel}>{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distribution by Channel */}
        <div className={styles.distributionCard}>
          <h2 className={styles.chartTitle}>Distribución por Canal</h2>
          <div className={styles.progressRows}>
            {ChannelData.map((channel, idx) => (
              <div key={channel.channel} className={styles.progressRow}>
                <div className={styles.progressLabel}>
                  <div
                    className={styles.colorDot}
                    style={{ backgroundColor: ChannelColors[idx] }}
                  />
                  <span className={styles.channelName}>{channel.channel}</span>
                </div>
                <div
                  className={styles.progressBarWrapper}
                  style={{ '--color-progress-fill': ChannelColors[idx] }}
                >
                  <ProgressBar
                    value={channel.value}
                    size="md"
                    className={styles.progressBar}
                    aria-label={`${channel.value}% ${channel.channel}`}
                  />
                </div>
                <div className={styles.progressValue}>
                  <span className={styles.count}>{channel.count}</span>
                  <span className={styles.percentage}>{channel.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
