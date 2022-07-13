import { Theme } from '../../theme/index.js'

export const fontWeight = {
  font(value: string, theme: Theme) {
    if (!value) return
    let w = theme.fontWeight[value]
    if (w) {
      return {
        'font-weight': w,
      }
    }

    if (/^\d+$/.test(value)) {
      return {
        'font-weight': value,
      }
    }
  },
}
