import { ClassUtility, ClassUtilResult } from '../index.js'

export const isolation: ClassUtility = {
  isolate(): ClassUtilResult {
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
