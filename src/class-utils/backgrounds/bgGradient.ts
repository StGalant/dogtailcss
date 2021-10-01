import { Theme } from '../../theme/index.js'
import { getColor, toRGBA } from '../colorHelpers.js'

let dir = {
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
  tr: 'top right',
  tl: 'top left',
  br: 'bottom right',
  bl: 'bottom left',
} as { [key: string]: string }

export const bgGradient = {
  'bg-none'(value: string) {
    if (value) return
    return {
      'background-image': 'none',
    }
  },

  'bg-gradient-to'(value: string, theme: Theme) {
    if (!value) return

    let d = dir[value]
    if (!d) return

    let prefix = '--' + (theme.varPrefix || '')
    prefix = prefix == '--' ? '-' : prefix
    return {
      'background-image': `linear-gradient(to ${d}, var(${prefix}-gradient-stops))`,
    }
  },

  from(value: string, theme: Theme) {
    if (!value) return
    let color = getColor(value, theme)
    if (!color) return

    let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'

    return {
      [`${prefix}-gradient-from`]: color,
      [`${prefix}-gradient-stops`]: `var(${prefix}-gradient-from), var(${prefix}-gradient-to, ${toRGBA(
        color,
        0
      )})`,
    }
  },

  to(value: string, theme: Theme) {
    if (!value) return
    let color = getColor(value, theme)
    if (!color) return

    let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'

    return {
      [`${prefix}-gradient-to`]: color,
    }
  },

  via(value: string, theme: Theme) {
    if (!value) return
    let color = getColor(value, theme)
    if (!color) return

    let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'

    return {
      [`${prefix}-gradient-stops`]: `var(${prefix}-gradient-from), ${color}, var(${prefix}-gradient-to, ${toRGBA(
        color,
        0
      )})`,
    }
  },
}
