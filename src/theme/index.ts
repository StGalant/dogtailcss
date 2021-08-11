import { colors, ThemeColors } from './colors.js'
import { cssColors, ThemeCssColors } from './cssColors.js'
import { pseudoClasses, ThemePseudoclassess } from './pseudoClasses.js'
import { screens, ThemeScreens } from './screens.js'

export interface Theme {
  colors: ThemeColors
  cssColors: ThemeCssColors
  screens: ThemeScreens
  pseudoClasses: ThemePseudoclassess
  varPrefix: string
  varColorPrefix: string
}

export let theme: Theme = {
  colors,
  cssColors,
  screens,
  pseudoClasses,
  varPrefix: 't',
  varColorPrefix: 't-color',
}
