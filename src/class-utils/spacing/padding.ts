import { Theme } from '../../theme/index.js'
import { getSpacing } from '../index.js'

export const padding = {
  p(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        padding: space,
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
          padding: spaces.join(' '),
        }
      }
    }
  },
  px(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-left': space,
        'padding-right': space,
      }
    }
    if (/^-?[^-]+--?[^-]+$/.test(value)) {
      let matches = value.matchAll(/^(-?[^-]+)-(-?[^-]+)$/g).next().value
      let left = getSpacing(matches[1], theme)
      if (!left) return
      let right = getSpacing(matches[2], theme)
      if (!right) return
      return {
        'padding-left': left,
        'padding-right': right,
      }
    }
  },
  py(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-top': space,
        'padding-bottom': space,
      }
    }
    if (/^-?[^-]+--?[^-]+$/.test(value)) {
      let matches = value.matchAll(/^(-?[^-]+)-(-?[^-]+)$/g).next().value
      let top = getSpacing(matches[1], theme)
      if (!top) return
      let bottom = getSpacing(matches[2], theme)
      if (!bottom) return
      return {
        'padding-top': top,
        'padding-bottom': bottom,
      }
    }
  },
  pl(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-left': space,
      }
    }
  },
  pr(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-right': space,
      }
    }
  },
  pt(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-top': space,
      }
    }
  },
  pb(value: string, theme: Theme) {
    if (!value) return
    let space = getSpacing(value, theme)
    if (space) {
      return {
        'padding-bottom': space,
      }
    }
  },
}
