import { ClassUtility } from '../../index.js'

export const decoration: ClassUtility = {
  decoration(value: string) {
    if (['slice', 'clone'].includes(value)) {
      return {
        'box-decoration-break': value,
      }
    }
  },
}
