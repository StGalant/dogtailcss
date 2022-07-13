import { ClassUtility } from '../../index.js'

function _overflow(value: string, suffix: string = '') {
  if (['auto', 'hidden', 'visible', 'scroll'].includes(value)) {
    return {
      ['overflow' + suffix]: value,
    }
  }
}

export const overflow: ClassUtility = {
  overflow(value: string) {
    return _overflow(value)
  },
  'overflow-x'(value: string) {
    return _overflow(value, '-x')
  },
  'overflow-y'(value: string) {
    return _overflow(value, '-y')
  },
}
