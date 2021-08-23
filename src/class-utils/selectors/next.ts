import { SELECTOR, ClassUtility, ClassUtilResult } from '../index.js'

export const nextSelector: ClassUtility = {
  next(value: string): ClassUtilResult {
    return {
      [SELECTOR]: {
        place: 'after',
        text: `+ ${value || '*'}`,
      },
    }
  },
}
