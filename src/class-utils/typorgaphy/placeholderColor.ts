import { ClassUtilResult, ClassUtility, PSEUDO } from '../index.js'
import { getColor } from '../colorHelpers.js'
import { Theme } from '../../theme/index.js'

export const placeholderColor: ClassUtility = {
  placeholder(value: string, theme: Theme): ClassUtilResult | void {
    if (!value) return
    let color = getColor(value, theme, 'placeholder')
    if (!color) return

    return {
      [PSEUDO]: '::placeholder',
      color,
    }
  },

  'placeholder-opacity'(value: string, theme: Theme): ClassUtilResult | void {
    if (!value) return
    if (/^\d+$/.test(value)) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      let opacity = parseInt(value, 10) / 100
      return {
        [`${prefix}-placeholder-opacity`]: `${opacity}`,
      }
    }
  },
}
