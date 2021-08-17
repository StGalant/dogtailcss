import { Theme } from '../../theme/index.js'

export const gap = {
  gap(value: string, theme: Theme) {
    let space = theme.spacing[value]

    if (space) {
      return {
        gap: space,
      }
    }

    if (/^\d+px$/.test(value)) {
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

    if (/^\d+px$/.test(value)) {
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

    if (/^\d+px$/.test(value)) {
      return {
        'row-gap': value,
      }
    }
  },
}
