import { ClassUtility } from '../../index.js'

export const flex: ClassUtility = {
  'flex-1'(_value: string) {
    return {
      flex: '1 1 0%',
    }
  },
  'flex-auto'(_value: string) {
    return {
      flex: '1 1 auto',
    }
  },
  'flex-initial'(_value: string) {
    return {
      flex: '0 1 auto',
    }
  },
  'flex-none'(_value: string) {
    return {
      flex: 'none',
    }
  },
  flex(value: string) {
    if (value.match(/^\(\w+,\w+,\w+%?\)$/)) {
      return {
        flex: value.replaceAll(/[(,)]/g, ' '),
      }
    }
  },
}
