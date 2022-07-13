import { colors, ThemeColors } from './colors.js'
import { cssColors } from './cssColors.js'
import { pseudoClasses, ThemePseudoclassess } from './pseudoClasses.js'
import { screens, ThemeScreens } from './screens.js'
import { spacing, ThemeSpacing } from './spacing.js'
import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLetterSpacing,
  ThemeLineHeight,
} from './typography.js'

export interface Theme {
  colors: ThemeColors
  screens: ThemeScreens
  spacing: ThemeSpacing
  pseudoClasses: ThemePseudoclassess
  fontSize: ThemeFontSize
  fontWeight: ThemeFontWeight
  letterSpacing: ThemeLetterSpacing
  lineHeight: ThemeLineHeight
  varPrefix: string
  varColorPrefix: string
  useVarOpacity: boolean
}

export let theme: Theme = {
  colors: { ...cssColors, ...colors },
  screens,
  spacing,
  pseudoClasses,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  varPrefix: 't',
  varColorPrefix: 't-color',
  useVarOpacity: false,
}
