import { Theme } from '../../theme/index.js'

export const lineHeight = {
  font(value: string, theme: Theme) {
    if (!value) return
    let h = theme.lineHeight[value]
    if (h) {
      return {
        'line-height': h,
      }
    }

    if (/^-?\d*.?\d+(em|rem|px|ch)?$/.test(value)) {
      return {
        'line-height': value,
      }
    }
  },
}
