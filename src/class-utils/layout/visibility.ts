import { ClassUtility, ClassUtilResult } from '../index.js'

export const visibility: ClassUtility = {
  visible(): ClassUtilResult {
    return {
      visibility: 'visible',
    }
  },
  invisible(): ClassUtilResult {
    return {
      visibility: 'hidden',
    }
  },
}
