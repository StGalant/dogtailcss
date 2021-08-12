import { Theme } from '../../theme/index.js'
import { ClassUtility, ClassUtilResult } from '../index.js'

const specialSpacing = {
  auto: 'auto',
}

export const anchors: ClassUtility = {
  inset(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        top: space,
        right: space,
        bottom: space,
        left: space,
      }
    }
  },
  '-inset'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        top: '-' + space,
        right: '-' + space,
        bottom: '-' + space,
        left: '-' + space,
      }
    }
  },
  'inset-x'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        right: space,
        left: space,
      }
    }
  },
  '-inset-x'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        right: '-' + space,
        left: '-' + space,
      }
    }
  },
  'inset-y'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        top: space,
        bottom: space,
      }
    }
  },
  top(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        top: space,
      }
    }
  },
  '-top'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        top: '-' + space,
      }
    }
  },
  right(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        right: space,
      }
    }
  },
  '-right'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        right: '-' + space,
      }
    }
  },
  bottom(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        bottom: space,
      }
    }
  },
  '-bottom'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        bottom: '-' + space,
      }
    }
  },
  left(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        left: space,
      }
    }
  },
  '-left'(value: string, theme: Theme): ClassUtilResult | void {
    let space = theme.spacing[value]
    if (space) {
      return {
        left: '-' + space,
      }
    }
  },
}
