import { ClassUtility, ClassUtilResult } from '../index.js'

export const floats: ClassUtility = {
  'float-left'(): ClassUtilResult {
    return {
      float: 'left',
    }
  },
  'float-right'(): ClassUtilResult {
    return {
      float: 'right',
    }
  },
  'float-none'(): ClassUtilResult {
    return {
      float: 'none',
    }
  },
  'clear-left'(): ClassUtilResult {
    return {
      clear: 'left',
    }
  },
  'clear-right'(): ClassUtilResult {
    return {
      clear: 'right',
    }
  },
  'clear-both'(): ClassUtilResult {
    return {
      clear: 'both',
    }
  },
  'clear-none'(): ClassUtilResult {
    return {
      clear: 'none',
    }
  },
}
