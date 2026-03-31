import { Outlet } from 'react-router-dom'
import { Navbar } from 'juntos-ds'
import styles from './DashboardLayout.module.css'

const JuntosLogo = () => (
  <svg
    width="118"
    height="28"
    viewBox="0 0 118 28"
    fill="none"
    aria-label="Juntos+"
    role="img"
  >
    <text
      x="0"
      y="22"
      fontFamily="Inter, sans-serif"
      fontWeight="700"
      fontSize="24"
      fill="#ff3b52"
    >
      Juntos+
    </text>
  </svg>
)

export function DashboardLayout() {
  return (
    <div className={styles.layout}>
      <Navbar
        userInitials="UI"
        userName="Client's name"
        userSubtitle="Dirección"
        avatarBadgeCount={999}
        logo={<JuntosLogo />}
        cartLabel="Text"
        cartValue="Content"
        cartBadgeCount={99}
        trailingIcons={[
          {
            label: 'Atención al cliente',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
          {
            label: 'Envíos',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="2" />
                <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            ),
          },
          {
            label: 'Promociones',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polyline points="20 12 20 22 4 22 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="7" width="20" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="22" x2="12" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
        ]}
      />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
