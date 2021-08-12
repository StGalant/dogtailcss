import { ClassUtility, ClassUtilResult } from '../index.js'

export const z: ClassUtility = {
  z(value: string): ClassUtilResult | void {
    if (value.match(/^\d+$/) || value === 'auto') {
      return {
        'z-index': value,
      }
    }
  },
  '-z'(value: string): ClassUtilResult | void {
    if (value.match(/^\d+$/)) {
      return {
        'z-index': '-' + value,
      }
    }
  },
}
