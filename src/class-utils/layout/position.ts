import { ClassUtility, ClassUtilResult } from '../index.js'

export const position: ClassUtility = {
  static(value: string): ClassUtilResult | void {
    if (value) return
    return {
      position: 'static',
    }
  },
  fixed(value: string): ClassUtilResult | void {
    if (value) return
    return {
      position: 'fixed',
    }
  },
  absolute(value: string): ClassUtilResult | void {
    if (value) return
    return {
      position: 'absolute',
    }
  },
  relative(value: string): ClassUtilResult | void {
    if (value) return
    return {
      position: 'relative',
    }
  },
  sticky(value: string): ClassUtilResult | void {
    if (value) return
    return {
      position: 'sticky',
    }
  },
}
