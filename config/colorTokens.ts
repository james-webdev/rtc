export const colorTokens = {
  background: 'background',
  foreground: 'foreground',
  white: 'white',
  black: 'black',
  transparent: 'transparent',
  divider: 'divider',
  focus: 'focus',
  'content-1': 'content1',
  'content-2': 'content2',
  'content-3': 'content3',
  'content-4': 'content4',
  

  // Default Colors
  'default-50': 'default-50',
  'default-100': 'default-100',
  'default-200': 'default-200',
  'default-300': 'default-300',
  'default-400': 'default-400',
  'default-500': 'default-500',
  'default-600': 'default-600',
  'default-700': 'default-700',
  'default-800': 'default-800',
  'default-900': 'default-900',

  // Primary Colors
  'primary-50': 'primary-50',
  'primary-100': 'primary-100',
  'primary-200': 'primary-200',
  'primary-300': 'primary-300',
  'primary-400': 'primary-400',
  'primary-500': 'primary-500',
  'primary-600': 'primary-600',
  'primary-700': 'primary-700',
  'primary-800': 'primary-800',
  'primary-900': 'primary-900',

  // Secondary Colors
  'secondary-50': 'secondary-50',
  'secondary-100': 'secondary-100',
  'secondary-200': 'secondary-200',
  'secondary-300': 'secondary-300',
  'secondary-400': 'secondary-400',
  'secondary-500': 'secondary-500',
  'secondary-600': 'secondary-600',
  'secondary-700': 'secondary-700',
  'secondary-800': 'secondary-800',
  'secondary-900': 'secondary-900',


  // Success Colors
  'success-50': 'success-50',
  'success-100': 'success-100',
  'success-200': 'success-200',
  'success-300': 'success-300',
  'success-400': 'success-400',
  'success-500': 'success-500',
  'success-600': 'success-600',
  'success-700': 'success-700',
  'success-800': 'success-800',
  'success-900': 'success-900',

  // Warning Colors
  'warning-50': 'warning-50',
  'warning-100': 'warning-100',
  'warning-200': 'warning-200',
  'warning-300': 'warning-300',
  'warning-400': 'warning-400',
  'warning-500': 'warning-500',
  'warning-600': 'warning-600',
  'warning-700': 'warning-700',
  'warning-800': 'warning-800',
  'warning-900': 'warning-900',

  // Danger Colors
  'danger-50': 'danger-50',
  'danger-100': 'danger-100',
  'danger-200': 'danger-200',
  'danger-300': 'danger-300',
  'danger-400': 'danger-400',
  'danger-500': 'danger-500',
  'danger-600': 'danger-600',
  'danger-700': 'danger-700',
  'danger-800': 'danger-800',
  'danger-900': 'danger-900',
} as const

export type ColorToken = keyof typeof colorTokens
