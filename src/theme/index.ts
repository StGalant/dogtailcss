import { colors, ThemeColors } from './colors.js'
import { cssColors, ThemeCssColors } from './cssColors.js'
import { pseudoClasses, ThemePseudoclassess } from './pseudoClasses.js'
import { screens, ThemeScreens } from './screens.js'
import { spacing, ThemeSpacing } from './spacing.js'
import {
  fontSize,
  ThemeFontSize,
  fontWeight,
  ThemeFontWeight,
} from './typography.js'

export interface Theme {
  colors: ThemeColors
  cssColors: ThemeCssColors
  screens: ThemeScreens
  spacing: ThemeSpacing
  pseudoClasses: ThemePseudoclassess
  fontSize: ThemeFontSize
  fontWeight: ThemeFontWeight
  varPrefix: string
  varColorPrefix: string
  useVarOpacity: boolean
}

export let theme: Theme = {
  colors,
  cssColors,
  screens,
  spacing,
  pseudoClasses,
  fontSize,
  fontWeight,
  varPrefix: 't',
  varColorPrefix: 't-color',
  useVarOpacity: false,
}
