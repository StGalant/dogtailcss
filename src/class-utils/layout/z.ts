import { ClassUtility, ClassUtilResult } from '../index.js'

export const z: ClassUtility = {
  z(value: string): ClassUtilResult | void {
    if (parseInt(value) || value === 'auto') {
      return {
        'z-index': value,
      }
    }
  },
  '-z'(value: string): ClassUtilResult | void {
    if (parseInt(value)) {
      return {
        'z-index': '-' + value,
      }
    }
  },
}
