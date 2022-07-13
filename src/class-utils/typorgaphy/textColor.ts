import { Theme } from '../../theme/index.js'
import { ClassUtility } from '../index.js'
import { getColor } from '../colorHelpers.js'

export const textColor: ClassUtility = {
  text(value: string, theme: Theme): any {
    if (!value) return
    let color = getColor(value, theme, 'text')
    if (!color) return

    return {
      color,
    }
  },
  'text-opacity'(value: string, theme: Theme) {
    if (!value) return
    if (/^\d+$/.test(value)) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      let opacity = parseInt(value, 10) / 100
      return {
        [`${prefix}-text-opacity`]: `${opacity}`,
      }
    }
  },
}
