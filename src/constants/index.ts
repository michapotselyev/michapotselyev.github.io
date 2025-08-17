// Navigation constants
export const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'education', label: 'Education', href: '#education' },
  // { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'extras', label: 'Additional', href: '#extras' }
] as const;

// Animation constants
export const ANIMATION_DELAYS = {
  TITLE: 200,
  SUBTITLE: 400,
  CONTENT: 600,
  CHIP: 100,
  CARD: 150
} as const;

// Slider constants
export const SLIDER_CONFIG = {
  AUTO_PLAY_INTERVAL: 5000,
  TRANSITION_DURATION: 500,
  TRANSITION_DELAY: 300
} as const;

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 960,
  DESKTOP: 1280
} as const;

// Social links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/michapotselyev',
  LINKEDIN: 'https://www.linkedin.com/in/mykhailo-potseluiev/',
  TELEGRAM: 'https://t.me/mykhailo_potseluiev'
} as const;

// Contact info
export const CONTACT_INFO = {
  EMAIL: 'hividermen@gmail.com',
  PHONE: '+380932365098',
  CITY: 'Kyiv, Ukraine'
} as const;
