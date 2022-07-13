export interface ThemeFontSize {
  [key: string]: { value: string; lineHeight: string }
}

export const fontSize: ThemeFontSize = {
  xs: { value: '0.75rem', lineHeight: '1rem' },
  sm: { value: '0.875rem', lineHeight: '1.25rem' },
  base: { value: '1rem', lineHeight: '1.5rem' },
  lg: { value: '1.125rem', lineHeight: '1.75rem' },
  xl: { value: '1.25rem', lineHeight: '1.75rem' },
  '2xl': { value: '1.5rem', lineHeight: '2rem' },
  '3xl': { value: '1.875rem', lineHeight: '2.25rem' },
  '4xl': { value: '2.25rem', lineHeight: '2.5rem' },
  '5xl': { value: '3rem', lineHeight: '1' },
  '6xl': { value: '3.75rem', lineHeight: '1' },
  '7xl': { value: '4.5rem', lineHeight: '1' },
  '8xl': { value: '6rem', lineHeight: '1' },
  '9xl': { value: '8rem', lineHeight: '1' },
}

export interface ThemeFontWeight {
  [key: string]: string
}

export const fontWeight: ThemeFontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

export interface ThemeLetterSpacing {
  [key: string]: string
}

export const letterSpacing: ThemeLetterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

export interface ThemeLineHeight {
  [key: string]: string
}
export const lineHeight: ThemeLineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
}
