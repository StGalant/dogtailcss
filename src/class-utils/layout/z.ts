import { ClassUtility, ClassUtilResult } from '../index.js'

export const z: ClassUtility = {
  z(value: string): ClassUtilResult | void {
    if (/^(-?\d+|auto)$/.test(value)) {
      return {
        'z-index': value,
      }
    }
  },
  '-z'(value: string): ClassUtilResult | void {
    if (/^\d+$/.test(value)) {
      return {
        'z-index': '-' + value,
      }
    }
  },
}
