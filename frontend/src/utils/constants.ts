// Animation Constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  VERY_SLOW: 0.8,
}

export const EASING = {
  EASE_IN: [0.42, 0, 1, 1],
  EASE_OUT: [0, 0, 0.58, 1],
  EASE_IN_OUT: [0.42, 0, 0.58, 1],
  CUBIC_BEZIER: [0.25, 0.46, 0.45, 0.94],
}

export const SCROLL_REVEAL_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: 'easeOut',
    },
  },
}

export const STAGGER_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: SCROLL_REVEAL_VARIANTS,
}

// Color Constants
export const COLORS = {
  PRIMARY_LIGHT: '#3B82F6',
  PRIMARY_DARK: '#60A5FA',
  SECONDARY_LIGHT: '#10B981',
  SECONDARY_DARK: '#34D399',
  BG_LIGHT: '#FFFFFF',
  BG_DARK: '#0F172A',
  TEXT_LIGHT: '#1F2937',
  TEXT_DARK: '#F1F5F9',
}

// Viewport Constants
export const VIEWPORT = {
  ONCE: true,
  MARGIN: '-100px',
}

// Project Categories
export const PROJECT_CATEGORIES = ['all', 'frontend', 'backend', 'fullstack'] as const
export type ProjectCategory = typeof PROJECT_CATEGORIES[number]

// Skill Proficiency Levels
export const SKILL_LEVELS = {
  EXPERT: 90,
  ADVANCED: 80,
  INTERMEDIATE: 70,
  BEGINNER: 50,
} as const

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const

// Responsive Design
export const RESPONSIVE = {
  MOBILE: 'sm',
  TABLET: 'md',
  DESKTOP: 'lg',
} as const

// Social Links Configuration
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/garav4049',
  LINKEDIN: 'https://linkedin.com/in/garav4049',
  TWITTER: 'https://twitter.com/vgarg5960',
  EMAIL: 'mailto:gargv4049@gmail.com',
} as const
