import { ClassUtility } from '../../index.js'

export const flexWrap: ClassUtility = {
  flex(value: string) {
    if (['wrap', 'wrap-reverse', 'nowrap'].includes(value)) {
      return {
        'flex-wrap': value,
      }
    }
  },
}
