import { ClassUtility, ClassUtilResult } from '../index.js'

export const position: ClassUtility = {
  static(): ClassUtilResult {
    return {
      position: 'static',
    }
  },
  fixed(): ClassUtilResult {
    return {
      position: 'fixed',
    }
  },
  absolute(): ClassUtilResult {
    return {
      position: 'absolute',
    }
  },
  relative(): ClassUtilResult {
    return {
      position: 'relative',
    }
  },
  sticky(): ClassUtilResult {
    return {
      position: 'sticky',
    }
  },
}
