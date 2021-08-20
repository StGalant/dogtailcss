import { Theme } from '../../theme/index.js'

export const letterSpacing = {
  tracking(value: string, theme: Theme) {
    if (!value) return

    let s = theme.letterSpacing[value]
    if (s) {
      return {
        'letter-spacing': s,
      }
    }

    if (/^-?\d*.?\d+(em|rem|px|ch)$/.test(value)) {
      return {
        'letter-spacing': value,
      }
    }
  },
}
