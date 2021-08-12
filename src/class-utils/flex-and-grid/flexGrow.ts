import { ClassUtility } from '../../index.js'

export const flexGrow: ClassUtility = {
  'flex-grow'(value: string) {
    if (!value) {
      return {
        'flex-grow': 1,
      }
    }

    if (value.match(/^\d+$/)) {
      return {
        'flex-grow': value,
      }
    }
  },
  'flex-shrink'(value: string) {
    if (!value) {
      return {
        'flex-shrink': 1,
      }
    }

    if (value.match(/^\d+$/)) {
      return {
        'flex-shrink': value,
      }
    }
  },
}
