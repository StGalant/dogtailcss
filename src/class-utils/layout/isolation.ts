import { ClassUtility, ClassUtilResult } from '../index.js'

export const isolation: ClassUtility = {
  isolate(value): ClassUtilResult | void {
    if (value) return
    return {
      isolation: 'isolate',
    }
  },
  'isolation-auto'(): ClassUtilResult {
    return {
      isolation: 'auto',
    }
  },
}
