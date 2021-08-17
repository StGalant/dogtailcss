import { Theme } from '../../theme/index.js'
import { ClassUtility } from '../index.js'
import { hexColor, rgbColor, themeColor, varColor } from '../colorHelpers.js'

export const textColor: ClassUtility = {
  text(value: string, theme: Theme): any {
    if (!value) return
    let color =
      themeColor(value, theme, 'text') ||
      hexColor(value) ||
      rgbColor(value) ||
      varColor(value, theme)
    if (!color) return

    // tilewind-like opacity
    if (typeof color === 'object') {
      return {
        [color.opacity]: '1',
        color: color.color,
      }
    }
    return {
      color,
    }
  },
  'text-opacity'(value: string, theme: Theme) {
    if (!value) return
    if (value.match(/^\d+$/)) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      let opacity = parseInt(value, 10) / 100
      return {
        [`${prefix}-text-opacity`]: opacity,
      }
    }
  },
}
