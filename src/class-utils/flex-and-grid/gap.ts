import { Theme } from '../../theme/index.js'

export const gap = {
  gap(value: string, theme: Theme) {
    let space = theme.spacing[value]

    if (space) {
      return {
        gap: space,
      }
    }

    if (value.match(/^\d+px$/)) {
      return {
        gap: value,
      }
    }
  },

  'gap-x'(value: string, theme: Theme) {
    let space = theme.spacing[value]
    if (space) {
      return {
        'column-gap': space,
      }
    }

    if (value.match(/^\d+px$/)) {
      return {
        'column-gap': value,
      }
    }
  },

  'gap-y'(value: string, theme: Theme) {
    let space = theme.spacing[value]
    if (space) {
      return {
        'row-gap': space,
      }
    }

    if (value.match(/^\d+px$/)) {
      return {
        'row-gap': value,
      }
    }
  },
}
