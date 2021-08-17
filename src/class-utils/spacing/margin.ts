import { Theme } from '../../theme/index.js'
import { getSpacing } from '../index.js'

export const margin = {
  m(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        margin: space,
      }
    }
    if (/^-?[^-]+-(-?[^-]+-)?(-?[^-]+-)?-?[^-]+$/.test(value)) {
      let matches: string[] = value
        .matchAll(/^(-?[^-]+)-(-?[^-]+-)?(-?[^-]+-)?(-?[^-]+)$/g)
        .next()
        .value.slice(1)

      let spaces = matches
        .filter((v: string) => !!v)
        .map((v) => getSpacing(v.replace(/-$/, ''), theme))
      if (!spaces.includes('')) {
        return {
          margin: spaces.join(' '),
        }
      }
    }
  },
  mx(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-left': space,
        'margin-right': space,
      }
    }
    if (/^-?[^-]+--?[^-]+$/.test(value)) {
      let matches = value.matchAll(/^(-?[^-]+)-(-?[^-]+)$/g).next().value
      let left = getSpacing(matches[1], theme)
      if (!left) return
      let right = getSpacing(matches[2], theme)
      if (!right) return
      return {
        'margin-left': left,
        'margin-right': right,
      }
    }
  },
  my(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-top': space,
        'margin-bottom': space,
      }
    }
    if (/^-?[^-]+--?[^-]+$/.test(value)) {
      let matches = value.matchAll(/^(-?[^-]+)-(-?[^-]+)$/g).next().value
      let top = getSpacing(matches[1], theme)
      if (!top) return
      let bottom = getSpacing(matches[2], theme)
      if (!bottom) return
      return {
        'margin-top': top,
        'margin-bottom': bottom,
      }
    }
  },
  ml(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-left': space,
      }
    }
  },
  mr(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-right': space,
      }
    }
  },
  mt(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-top': space,
      }
    }
  },
  mb(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'margin-bottom': space,
      }
    }
  },
}
