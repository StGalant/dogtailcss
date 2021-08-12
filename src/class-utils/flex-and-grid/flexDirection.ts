import { ClassUtility } from '../../index.js'

export const flexDirection: ClassUtility = {
  flex(value: string) {
    if (['row', 'row-reverse', 'column', 'column-reverse'].includes(value)) {
      return {
        'flex-direction': value,
      }
    }
  },
}
