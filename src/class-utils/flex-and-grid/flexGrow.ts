import { ClassUtility } from '../../index.js'

export const flexGrow: ClassUtility = {
  'flex-grow'(value: string) {
    if (!value) {
      return {
        'flex-grow': '1',
      }
    }

    if (/^\d+$/.test(value)) {
      return {
        'flex-grow': value,
      }
    }
  },
  'flex-shrink'(value: string) {
    if (!value) {
      return {
        'flex-shrink': '1',
      }
    }

    if (/^\d+$/.test(value)) {
      return {
        'flex-shrink': value,
      }
    }
  },
}
