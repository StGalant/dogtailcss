import { Theme } from '../../theme/index.js'
import { getSpacing } from '../spacingHelpers.js'

export const height = {
  h(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        height: value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        height: space,
      }
    }
  },
  'min-h'(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        'min-height': value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'min-height': space,
      }
    }
  },
  'max-h'(value: string, theme: Theme) {
    if (!value) return
    if (value === 'min' || value === 'max') {
      return {
        'max-height': value + 'content',
      }
    }
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'max-height': space,
      }
    }
  },
}
