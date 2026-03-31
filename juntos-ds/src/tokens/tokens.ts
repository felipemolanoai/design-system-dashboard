// Token names as typed string constants.
// Use these when you need to reference a CSS custom property name in JavaScript
// (e.g., to assert a computed style in a test, or to build dynamic styles).
//
// These are NOT values — just the CSS variable names.
// Actual values live in primitive.css → semantic.css.
//
// NAMING: matches the Figma collection structure.
//   Figma: "Semantic Color Tokens" / Juntos App
//   Figma: "Semantic Typography Tokens"
//   Figma: "Semantic Spacing Tokens"

export const tokens = {

  // ---- Figma: Neutral Colors ----
  neutral: {
    surfaceBg:             '--neutral-surface-bg',             // Neutral Colors/surface-background
    surfaceContainerHigh:  '--neutral-surface-container-high', // Neutral Colors/surface-container-priority-high
    surfaceContainerLow:   '--neutral-surface-container-low',  // Neutral Colors/surface-container-priority-low
    surfaceContainerFg:    '--neutral-surface-container-fg',   // Neutral Colors/surface-container-foreground
    onSurfaceHighest:      '--neutral-on-surface-highest',     // Neutral Colors/on-surface-contrast-highest
    onSurfaceHigh:         '--neutral-on-surface-high',        // Neutral Colors/on-surface-contrast-high
    onSurfaceMedium:       '--neutral-on-surface-medium',      // Neutral Colors/on-surface-contrast-medium
    onSurfaceLow:          '--neutral-on-surface-low',         // Neutral Colors/on-surface-contrast-low
    onSurfaceLowest:       '--neutral-on-surface-lowest',      // Neutral Colors/on-surface-contrast-lowest
  },

  // ---- Figma: Interaction Colors ----
  action: {
    // Primary
    primarySurface:        '--action-primary-surface',         // #ff3b52
    primarySurfaceHover:   '--action-primary-surface-hover',   // #e31f42
    primarySurfacePressed: '--action-primary-surface-pressed', // #bd021c
    primaryOnSurface:      '--action-primary-on-surface',      // #fcfcfc

    // Secondary
    secondarySurface:            '--action-secondary-surface',
    secondarySurfaceHover:       '--action-secondary-surface-hover',
    secondarySurfacePressed:     '--action-secondary-surface-pressed',
    secondaryOnSurfaceLow:       '--action-secondary-on-surface-low',
    secondaryOnSurfaceHigh:      '--action-secondary-on-surface-high',
    secondaryOnSurfaceHighest:   '--action-secondary-on-surface-highest',

    // Accent
    accentSurface:         '--action-accent-surface',
    accentSurfaceHover:    '--action-accent-surface-hover',
    accentSurfacePressed:  '--action-accent-surface-pressed',
    accentOnSurface:       '--action-accent-on-surface',

    // Error
    errorSurface:           '--action-error-surface',
    errorOnSurface:         '--action-error-on-surface',
    errorSurfaceInverted:   '--action-error-surface-inverted',
    errorOnSurfaceInverted: '--action-error-on-surface-inverted',

    // Success
    successSurface:           '--action-success-surface',
    successOnSurface:         '--action-success-on-surface',
    successSurfaceInverted:   '--action-success-surface-inverted',
    successOnSurfaceInverted: '--action-success-on-surface-inverted',

    // Warning
    warningSurface:           '--action-warning-surface',
    warningOnSurface:         '--action-warning-on-surface',
    warningSurfaceInverted:   '--action-warning-surface-inverted',
    warningOnSurfaceInverted: '--action-warning-on-surface-inverted',

    // Info
    infoSurface:           '--action-info-surface',
    infoOnSurface:         '--action-info-on-surface',
    infoSurfaceInverted:   '--action-info-surface-inverted',
    infoOnSurfaceInverted: '--action-info-on-surface-inverted',

    // Disabled
    disabledSurface:            '--action-disabled-surface',
    disabledOnSurface:          '--action-disabled-on-surface',
    disabledSurfaceInverted:    '--action-disabled-surface-inverted',
    disabledOnSurfaceInverted:  '--action-disabled-on-surface-inverted',

    // Promo
    promoSurface:           '--action-promo-surface',
    promoOnSurface:         '--action-promo-on-surface',
    promoSurfaceInverted:   '--action-promo-surface-inverted',
    promoOnSurfaceInverted: '--action-promo-on-surface-inverted',

    // Premia primary
    premiaSurface:         '--action-premia-surface',
    premiaSurfaceHover:    '--action-premia-surface-hover',
    premiaSurfacePressed:  '--action-premia-surface-pressed',
    premiaOnSurface:       '--action-premia-on-surface',

    // Premia secondary
    premiaSecondarySurface:           '--action-premia-secondary-surface',
    premiaSecondarySurfaceHover:      '--action-premia-secondary-surface-hover',
    premiaSecondarySurfacePressed:    '--action-premia-secondary-surface-pressed',
    premiaSecondaryOnSurfaceLow:      '--action-premia-secondary-on-surface-low',
    premiaSecondaryOnSurfaceHigh:     '--action-premia-secondary-on-surface-high',
    premiaSecondaryOnSurfaceHighest:  '--action-premia-secondary-on-surface-highest',
  },

  // ---- Figma: Status Colors ----
  status: {
    neutral:   '--status-neutral',    // Color/neutral-300 — #acacac
    progress:  '--status-progress',   // Color/orange-300  — #ffa766
    completed: '--status-completed',  // Color/green-100   — #00a226
    attention: '--status-attention',  // Color/mustard-200 — #ffc01a
    critical:  '--status-critical',   // Color/red-300     — #ff3b52
  },

  // ---- Figma: Chart Colors / Semantic ----
  chart: {
    positive:  '--chart-positive',   // Color/green-200   — #63d749
    negative:  '--chart-negative',   // Color/red-200     — #e31f42
    warning:   '--chart-warning',    // Color/mustard-200 — #ffc01a
    neutral:   '--chart-neutral',    // Color/neutral-300 — #acacac
    series1:   '--chart-series-1',
    series2:   '--chart-series-2',
    series3:   '--chart-series-3',
    series4:   '--chart-series-4',
    series5:   '--chart-series-5',
    series6:   '--chart-series-6',
    series7:   '--chart-series-7',
    series8:   '--chart-series-8',
    series9:   '--chart-series-9',
    series10:  '--chart-series-10',
    series11:  '--chart-series-11',
    series12:  '--chart-series-12',
    series13:  '--chart-series-13',
    series14:  '--chart-series-14',
    series15:  '--chart-series-15',
  },

  // ---- Figma: Channel Colors ----
  channel: {
    surfaceAdvisor:        '--channel-surface-advisor',
    surfaceJuntos:         '--channel-surface-juntos',
    surfaceWhatsapp:       '--channel-surface-whatsapp',
    surfaceCallcenter:     '--channel-surface-callcenter',
    surfaceSales:          '--channel-surface-sales',
    onSurfaceAdvisor:      '--channel-on-surface-advisor',
    onSurfaceJuntos:       '--channel-on-surface-juntos',
    onSurfaceWhatsapp:     '--channel-on-surface-whatsapp',
    onSurfaceCallcenter:   '--channel-on-surface-callcenter',
    onSurfaceSales:        '--channel-on-surface-sales',
  },

  // ---- Figma: Semantic Typography Tokens ----
  font: {
    familyMain:         '--font-family-main',           // Inter

    // Heading sizes (responsive — values differ per breakpoint)
    sizeHeadingHero:    '--font-size-heading-hero',     // Mobile: 48px
    sizeHeadingLarge:   '--font-size-heading-large',    // Mobile: 40px
    sizeHeadingMedium:  '--font-size-heading-medium',   // Mobile: 32px
    sizeHeadingSmall:   '--font-size-heading-small',    // Mobile: 24px

    // Body & caption sizes (same across breakpoints)
    sizeBodyLarge:      '--font-size-body-large',       // 20px
    sizeBodyMedium:     '--font-size-body-medium',      // 16px
    sizeBodySmall:      '--font-size-body-small',       // 12px
    sizeCaptionLarge:   '--font-size-caption-large',    // 10px
    sizeCaptionSmall:   '--font-size-caption-small',    //  8px

    // Weights
    weightBold:         '--font-weight-bold',           // 700
    weightSemibold:     '--font-weight-semibold',       // 600
    weightMedium:       '--font-weight-medium',         // 500
    weightRegular:      '--font-weight-regular',        // 400
    weightLight:        '--font-weight-light',          // 300

    // Line heights (responsive for heading/condensed/short/long)
    lineHeightNavigation: '--line-height-navigation',   // 1
    lineHeightHeading:    '--line-height-heading',      // Mobile: 1.125
    lineHeightCondensed:  '--line-height-condensed',    // Mobile: 1.25
    lineHeightShort:      '--line-height-short',        // Mobile: 1.33
    lineHeightLong:       '--line-height-long',         // Mobile: 1.5
  },

  // ---- Figma: Semantic Spacing Tokens ----
  spacing: {
    '3xs': '--spacing-3xs',  //  4px
    '2xs': '--spacing-2xs',  //  8px
    xs:    '--spacing-xs',   // 12px
    s:     '--spacing-s',    // 16px
    m:     '--spacing-m',    // 24px
    l:     '--spacing-l',    // 32px
    xl:    '--spacing-xl',   // 40px
    '2xl': '--spacing-2xl',  // 48px
    '3xl': '--spacing-3xl',  // 56px
    '4xl': '--spacing-4xl',  // 64px
  },

  // ---- Component tokens (used by component CSS Modules) ----
  component: {
    colorBgPage:                   '--color-bg-page',
    colorBgSurface:                '--color-bg-surface',
    colorTextDefault:              '--color-text-default',
    colorTextHeading:              '--color-text-heading',
    colorTextMuted:                '--color-text-muted',
    colorTextInverse:              '--color-text-inverse',
    colorBorderSubtle:             '--color-border-subtle',
    colorBorderDefault:            '--color-border-default',
    colorFocusRing:                '--color-focus-ring',
    colorButtonPrimaryBg:          '--color-button-primary-bg',
    colorButtonPrimaryBgHover:     '--color-button-primary-bg-hover',
    colorButtonPrimaryBgActive:    '--color-button-primary-bg-active',
    colorButtonPrimaryText:        '--color-button-primary-text',
    colorButtonSecondaryBg:        '--color-button-secondary-bg',
    colorButtonSecondaryBgHover:   '--color-button-secondary-bg-hover',
    colorButtonSecondaryBgActive:  '--color-button-secondary-bg-active',
    colorButtonSecondaryText:      '--color-button-secondary-text',
    colorButtonSecondaryBorder:    '--color-button-secondary-border',
    colorButtonDisabledBg:         '--color-button-disabled-bg',
    colorButtonDisabledText:       '--color-button-disabled-text',
    radiusButton:                  '--radius-button',
    radiusCard:                    '--radius-card',
    borderWidthDefault:            '--border-width-default',
    borderWidthFocus:              '--border-width-focus',
    durationFast:                  '--duration-fast',
    durationNormal:                '--duration-normal',
    durationSlow:                  '--duration-slow',
    easingDefault:                 '--easing-default',
  },

} as const
