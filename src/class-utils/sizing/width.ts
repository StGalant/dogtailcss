import { Theme } from '../../theme/index.js'
import { getSpacing } from '../spacingHelpers.js'

export const width = {
  w(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        width: value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        width: space,
      }
    }
  },
  'min-w'(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        'min-width': value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'min-width': space,
      }
    }
  },
  'max-w'(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        'max-width': value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'max-width': space,
      }
    }
  },
}
