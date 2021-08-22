import { withSelector } from '../utilHelpers.js'

export const notLastChild = {
  nlch(value: string): any {
    if (value) return
    return withSelector({}, '> * + *')
  },
  divide(value: string): any {
    return notLastChild.nlch(value)
  },
  space(value: string): any {
    return notLastChild.nlch(value)
  },
  'not-last-child'(value: string): any {
    return notLastChild.nlch(value)
  },
}
