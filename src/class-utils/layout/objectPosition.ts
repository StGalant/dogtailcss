import { ClassUtility, ClassUtilResult } from '../index.js'

export const objectPosition: ClassUtility = {
  'object-bottom'(): ClassUtilResult {
    return {
      'object-position': 'bottom',
    }
  },
  'object-center'(): ClassUtilResult {
    return {
      'object-position': 'center',
    }
  },
  'object-left'(): ClassUtilResult {
    return {
      'object-position': 'left',
    }
  },
  'object-left-bottom'(): ClassUtilResult {
    return {
      'object-position': 'left bottom',
    }
  },
  'object-left-top'(): ClassUtilResult {
    return {
      'object-position': 'left top',
    }
  },
  'object-right'(): ClassUtilResult {
    return {
      'object-position': 'right',
    }
  },
  'object-right-bottom'(): ClassUtilResult {
    return {
      'object-position': 'right bottom',
    }
  },
  'object-right-top'(): ClassUtilResult {
    return {
      'object-position': 'right top',
    }
  },
  'object-top'(): ClassUtilResult {
    return {
      'object-position': 'top',
    }
  },
}
