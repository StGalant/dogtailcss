import { ClassUtility } from '../../index.js'

function _overscroll(value: string, suffix: string = '') {
  if (['auto', 'contain', 'none'].includes(value)) {
    return {
      ['overscroll-behavior' + suffix]: value,
    }
  }
}

export const overscroll: ClassUtility = {
  overscroll(value: string) {
    return _overscroll(value)
  },
  'overscroll-x'(value: string) {
    return _overscroll(value, '-x')
  },
  'overscroll-y'(value: string) {
    return _overscroll(value, '-y')
  },
}
