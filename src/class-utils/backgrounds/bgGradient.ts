import { Theme } from '../../theme/index.js'

export const bgGradient = {
  'bg-none'(value: string) {
    if (value) return
    return {
      'background-image': 'none',
    }
  },

  'bg-gradient-to'(value: string, theme: Theme) {
    if (!value) return
    let dir
    if (value === 't') dir = 'top'
    if (value === 'b') dir = 'bottom'
    if (value === 'r') dir = 'right'
    if (value === 'l') dir = 'left'
    if (value === 'tr') dir = 'top right'
    if (value === 'tl') dir = 'top left'
    if (value === 'br') dir = 'bottom right'
    if (value === 'bl') dir = 'bottom left'

    if (!dir) return

    let prefix = '--' + (theme.varPrefix || '')
    prefix = prefix == '--' ? '-' : prefix
    return {
      'background-image': `linear-gradient(to ${dir}, var(${prefix}-gradient-stops))`,
    }
  },

  from(value: string) {},

  via(value: string) {},

  to(value: string) {},
}
