import { Theme } from '../../theme/index.js'
import { ClassUtility } from '../index.js'
import { getColor } from '../colorHelpers.js'

export const bgColor: ClassUtility = {
  bg(value: string, theme: Theme): any {
    if (!value) return
    let color = getColor(value, theme, 'bg')
    if (!color) return

    return {
      'background-color': color,
    }
  },
  'bg-opacity'(value: string, theme: Theme) {
    if (!value) return
    if (/^\d+$/.test(value)) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      let opacity = parseInt(value, 10) / 100
      return {
        [`${prefix}-bg-opacity`]: `${opacity}`,
      }
    }
  },
}
