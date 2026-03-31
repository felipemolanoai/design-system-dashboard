import React from 'react'
import clsx from 'clsx'
import styles from './Navbar.module.css'

export interface NavbarTrailingIcon {
  /** Accessible label for the icon */
  label: string
  /** Icon element to render */
  icon: React.ReactNode
  onClick?: () => void
}

export interface NavbarProps {
  /** Label under the menu icon */
  menuLabel?: string
  /** User initials shown in the avatar */
  userInitials?: string
  /** Primary user name */
  userName?: string
  /** Secondary user line (e.g. address or role) */
  userSubtitle?: string
  /** Notification count for the avatar badge */
  avatarBadgeCount?: number
  /** Logo element rendered in the center */
  logo?: React.ReactNode
  /** Icons rendered in the trailing slot */
  trailingIcons?: NavbarTrailingIcon[]
  /** Text label above cart value */
  cartLabel?: string
  /** Cart value text */
  cartValue?: string
  /** Cart notification count */
  cartBadgeCount?: number
  /** Called when the menu icon is clicked */
  onMenuClick?: () => void
  /** Called when the avatar/user area is clicked */
  onAvatarClick?: () => void
  className?: string
}

export function Navbar({
  menuLabel = 'Menu',
  userInitials = 'UI',
  userName = "Client's name",
  userSubtitle = 'Dirección',
  avatarBadgeCount,
  logo,
  trailingIcons = [],
  cartLabel = 'Text',
  cartValue = 'Content',
  cartBadgeCount,
  onMenuClick,
  onAvatarClick,
  className,
}: NavbarProps) {
  return (
    <header className={clsx(styles.navbar, className)}>
      {/* Leading: menu */}
      <button
        type="button"
        className={styles.menuButton}
        onClick={onMenuClick}
        aria-label={menuLabel}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className={styles.menuLabel}>{menuLabel}</span>
      </button>

      {/* Avatar + user info */}
      <button
        type="button"
        className={styles.userArea}
        onClick={onAvatarClick}
        aria-label={`${userName}, ${userSubtitle}`}
      >
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>{userInitials}</div>
          {avatarBadgeCount !== undefined && (
            <span className={styles.avatarBadge} aria-label={`${avatarBadgeCount} notificaciones`}>
              {avatarBadgeCount > 99 ? '99+' : avatarBadgeCount}
            </span>
          )}
        </div>
        <div className={styles.userText}>
          <span className={styles.userName}>{userName}</span>
          <span className={styles.userSubtitle}>{userSubtitle}</span>
        </div>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* Center logo */}
      <div className={styles.logo}>{logo}</div>

      {/* Trailing icons */}
      <div className={styles.trailing}>
        {trailingIcons.map((item) => (
          <button
            key={item.label}
            type="button"
            className={styles.trailingIcon}
            onClick={item.onClick}
            aria-label={item.label}
          >
            {item.icon}
          </button>
        ))}

        {/* Cart */}
        <div className={styles.cartArea}>
          <div className={styles.cartText}>
            <span className={styles.cartLabel}>{cartLabel}</span>
            <span className={styles.cartValue}>{cartValue}</span>
          </div>
          <div className={styles.cartIconWrap}>
            <svg
              className={styles.cartIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {cartBadgeCount !== undefined && (
              <span className={styles.cartBadge} aria-label={`${cartBadgeCount} artículos`}>
                {cartBadgeCount > 99 ? '+99' : `+${cartBadgeCount}`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className={styles.border} aria-hidden="true" />
    </header>
  )
}
