import { colors, ThemeColors } from './colors'
import { cssColors, ThemeCssColors } from './cssColors'
import { pseudoClasses, ThemePseudoclassess } from './pseudoClasses'
import { screens, ThemeScreens } from './screens'

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
