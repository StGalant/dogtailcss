import { ClassUtility, ClassUtilResult } from '../index.js'

export const objectFit: ClassUtility = {
  'object-contain'(): ClassUtilResult {
    return {
      'object-fit': 'contain',
    }
  },
  'object-cover'(): ClassUtilResult {
    return {
      'object-fit': 'cover',
    }
  },
  'object-fill'(): ClassUtilResult {
    return {
      'object-fit': 'fill',
    }
  },
  'object-none'(): ClassUtilResult {
    return {
      'object-fit': 'none',
    }
  },
  'object-scale-down'(): ClassUtilResult {
    return {
      'object-fit': 'scale-down',
    }
  },
}
